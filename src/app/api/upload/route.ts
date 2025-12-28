import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with service role key for admin operations
const getSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error('Missing Supabase configuration. Please check your environment variables.');
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
};

// Helper function to ensure bucket exists
async function ensureBucketExists(supabase: ReturnType<typeof createClient>, bucketName: string): Promise<boolean> {
  try {
    // Check if bucket exists
    const { data: buckets, error: listError } = await supabase.storage.listBuckets();
    
    if (listError) {
      console.error('Error listing buckets:', listError);
      return false;
    }

    const bucketExists = buckets?.some(b => b.name === bucketName);
    
    if (!bucketExists) {
      console.log(`Bucket "${bucketName}" does not exist. Creating...`);
      // Create bucket if it doesn't exist
      const { data, error } = await supabase.storage.createBucket(bucketName, {
        public: true,
        fileSizeLimit: 5242880, // 5MB
        allowedMimeTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml']
      });

      if (error) {
        console.error(`Error creating bucket "${bucketName}":`, error);
        return false;
      }
      
      console.log(`Bucket "${bucketName}" created successfully`);
    }
    
    return true;
  } catch (error) {
    console.error(`Unexpected error checking bucket "${bucketName}":`, error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get Supabase client
    const supabase = getSupabaseClient();
    
    // Parse form data
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const folder = formData.get('folder') as string || 'uploads';

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file exists and has content
    if (file.size === 0) {
      return NextResponse.json(
        { error: 'File is empty' },
        { status: 400 }
      );
    }

    // Validate file type - expanded to include SVG
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: `Invalid file type. Only images are allowed. Received: ${file.type}` },
        { status: 400 }
      );
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: `File size exceeds 5MB limit. File size: ${(file.size / 1024 / 1024).toFixed(2)}MB` },
        { status: 400 }
      );
    }

    // Determine bucket based on folder
    const bucketMap: Record<string, string> = {
      'uploads': 'uploads',
      'admin-uploads': 'admin-uploads',
      'projects': 'projects',
      'team-members': 'team-members',
      'testimonials': 'testimonials',
      'website-settings': 'admin-uploads',
    };
    
    const bucketName = bucketMap[folder] || 'uploads';
    
    // Ensure bucket exists before uploading
    const bucketExists = await ensureBucketExists(supabase as any, bucketName);
    if (!bucketExists) {
      return NextResponse.json(
        { error: `Failed to access or create bucket: ${bucketName}` },
        { status: 500 }
      );
    }
    
    // Generate unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 15);
    const fileExt = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const fileName = `${timestamp}-${randomString}.${fileExt}`;
    const filePath = fileName; // Store directly in bucket root

    // Convert File to ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    console.log(`Uploading file to bucket "${bucketName}" as "${filePath}"`);

    // Upload to Supabase Storage with retry logic
    let uploadData: any = null;
    let uploadError: any = null;
    let finalFileName = fileName;

    // Try upload with original filename
    const uploadResult = await supabase.storage
      .from(bucketName)
      .upload(filePath, buffer, {
        contentType: file.type,
        upsert: false,
        cacheControl: '3600',
      });

    uploadData = uploadResult.data;
    uploadError = uploadResult.error;

    // If file exists, retry with new filename
    if (uploadError && (uploadError.message?.includes('already exists') || uploadError.message?.includes('duplicate'))) {
      console.log('File already exists, generating new filename...');
      finalFileName = `${timestamp}-${randomString}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
      
      const retryResult = await supabase.storage
        .from(bucketName)
        .upload(finalFileName, buffer, {
          contentType: file.type,
          upsert: false,
          cacheControl: '3600',
        });
      
      uploadData = retryResult.data;
      uploadError = retryResult.error;
    }

    if (uploadError) {
      console.error('Supabase storage upload error:', {
        message: uploadError.message,
        statusCode: uploadError.statusCode,
        error: uploadError
      });
      
      return NextResponse.json(
        { 
          error: `Failed to upload file: ${uploadError.message}`,
          details: uploadError.statusCode ? `Status: ${uploadError.statusCode}` : undefined
        },
        { status: 500 }
      );
    }

    if (!uploadData) {
      return NextResponse.json(
        { error: 'Upload succeeded but no data returned' },
        { status: 500 }
      );
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from(bucketName)
      .getPublicUrl(uploadData.path || finalFileName);

    if (!urlData || !urlData.publicUrl) {
      return NextResponse.json(
        { error: 'Failed to get public URL for uploaded file' },
        { status: 500 }
      );
    }

    console.log(`File uploaded successfully: ${urlData.publicUrl}`);

    return NextResponse.json({
      success: true,
      url: urlData.publicUrl,
      path: uploadData.path || finalFileName,
    });
  } catch (error: any) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: error?.message || 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}

