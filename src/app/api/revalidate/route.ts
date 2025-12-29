import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';
import { CACHE_TAGS } from '@/lib/cache/config';

/**
 * Cache Revalidation API
 * Allows manual cache invalidation via API calls
 * 
 * POST /api/revalidate
 * Body: { type: 'tag' | 'path', value: string }
 * 
 * Example:
 * { type: 'tag', value: 'projects' }
 * { type: 'path', value: '/' }
 */
export async function POST(request: NextRequest) {
  try {
    // Check for authorization (add your secret token)
    const authHeader = request.headers.get('authorization');
    const secret = process.env.REVALIDATE_SECRET || 'your-secret-token';
    
    if (authHeader !== `Bearer ${secret}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { type, value } = body;

    if (!type || !value) {
      return NextResponse.json(
        { error: 'Missing type or value. Expected { type: "tag" | "path", value: string }' },
        { status: 400 }
      );
    }

    if (type === 'tag') {
      revalidateTag(value);
      return NextResponse.json({
        success: true,
        message: `Cache tag "${value}" invalidated`,
        type: 'tag',
        value,
      });
    } else if (type === 'path') {
      revalidatePath(value);
      return NextResponse.json({
        success: true,
        message: `Cache path "${value}" invalidated`,
        type: 'path',
        value,
      });
    } else {
      return NextResponse.json(
        { error: 'Invalid type. Must be "tag" or "path"' },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error.message 
      },
      { status: 500 }
    );
  }
}

