import { NextRequest, NextResponse } from 'next/server';
import { Client } from 'pg';
import { revalidatePath, revalidateTag } from 'next/cache';
import { CACHE_TAGS } from '@/lib/cache/config';
import { unstable_cache } from 'next/cache';

// In-memory rate limiting to prevent excessive requests
const requestTimestamps: Map<string, number[]> = new Map();
const OPTIONS_REQUEST_TIMESTAMPS: Map<string, number[]> = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10; // Max 10 requests per minute per IP
const OPTIONS_RATE_LIMIT = 5; // Max 5 OPTIONS requests per minute per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = requestTimestamps.get(ip) || [];
  
  // Remove timestamps outside the window
  const validTimestamps = timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW);
  
  if (validTimestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false; // Rate limit exceeded
  }
  
  validTimestamps.push(now);
  requestTimestamps.set(ip, validTimestamps);
  
  return true; // Request allowed
}

function checkOptionsRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = OPTIONS_REQUEST_TIMESTAMPS.get(ip) || [];
  const validTimestamps = timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW);
  
  if (validTimestamps.length >= OPTIONS_RATE_LIMIT) {
    return false;
  }
  
  validTimestamps.push(now);
  OPTIONS_REQUEST_TIMESTAMPS.set(ip, validTimestamps);
  return true;
}

// Direct PostgreSQL connection using pooler (works for simple queries)
const getDbClient = async () => {
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    throw new Error('DATABASE_URL environment variable is not set');
  }

  // Use pooler connection as-is (no conversion needed - pooler works for simple queries)
  const client = new Client({
    connectionString: databaseUrl,
    ssl: {
      rejectUnauthorized: false // Required for Supabase
    },
  });

  try {
    await client.connect();
  } catch (connectError: unknown) {
    const error = connectError as Error;
    throw new Error(`Failed to connect to database: ${error.message}`);
  }
  
  return client;
};

// Ensure website_settings table exists, create if it doesn't
async function ensureTableExists(client: Client) {
  // Check if table exists
  const tableCheck = await client.query(`
    SELECT EXISTS (
      SELECT FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name = 'website_settings'
    ) as exists
  `);
  
  if (!tableCheck.rows[0]?.exists) {
    // Create table
    await client.query(`
      CREATE TABLE IF NOT EXISTS website_settings (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        setting_key VARCHAR(100) UNIQUE NOT NULL,
        setting_value TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `);
    
    // Create index
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_website_settings_key ON website_settings(setting_key)
    `);
    
    // Insert default settings
    await client.query(`
      INSERT INTO website_settings (setting_key, setting_value) 
      VALUES 
        ('logo_url', ''),
        ('logo_type', 'default'),
        ('hover_animation_enabled', 'false'),
        ('site_name', 'EASYIO'),
        ('site_tagline', 'Technologies')
      ON CONFLICT (setting_key) DO NOTHING
    `);
    
    // Create function to update updated_at timestamp
    await client.query(`
      CREATE OR REPLACE FUNCTION update_updated_at_column()
      RETURNS TRIGGER AS $$
      BEGIN
        NEW.updated_at = NOW();
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql
    `);
    
    // Create trigger
    await client.query(`
      DROP TRIGGER IF EXISTS update_website_settings_updated_at ON website_settings;
      CREATE TRIGGER update_website_settings_updated_at
        BEFORE UPDATE ON website_settings
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column()
    `);
  }
}

// CORS headers helper - only add if needed (for cross-origin)
const getCorsHeaders = (origin: string | null) => {
  // If same-origin or no origin, no CORS needed
  if (!origin || origin.includes('localhost') || origin.includes('127.0.0.1')) {
    return {};
  }
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
  };
};

// Handle CORS preflight requests - return immediately with aggressive caching
export async function OPTIONS(request: NextRequest) {
  // Rate limit OPTIONS requests to prevent spam
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
             request.headers.get('x-real-ip') || 
             'unknown';
  
  // Block excessive OPTIONS requests (even in dev)
  if (!checkOptionsRateLimit(ip)) {
    return new NextResponse(null, {
      status: 429,
      headers: {
        'Retry-After': '60',
        'Cache-Control': 'no-store',
      },
    });
  }
  
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Max-Age': '86400', // Cache for 24 hours
      'Cache-Control': 'public, max-age=86400, immutable',
      'Content-Length': '0',
    },
  });
}

// Cached fetch function with 5 minute revalidation
const getCachedSettings = unstable_cache(
  async () => {
    let client: Client | null = null;
    
    try {
      client = await getDbClient();
      
      // Ensure table exists
      await ensureTableExists(client);
      
      // Direct SQL query - bypasses PostgREST schema cache completely
      const result = await client.query(
        'SELECT id, setting_key, setting_value, created_at, updated_at FROM public.website_settings ORDER BY setting_key'
      );
      
      return result.rows;
    } finally {
      if (client) {
        await client.end();
      }
    }
  },
  ['system-settings'],
  {
    revalidate: 300, // 5 minutes
    tags: [CACHE_TAGS.WEBSITE_SETTINGS],
  }
);

// GET - Fetch all website settings using direct SQL (bypasses PostgREST schema cache)
export async function GET(request: NextRequest) {
  // Rate limiting - only in production or if explicitly enabled
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
             request.headers.get('x-real-ip') || 
             'unknown';
  
  // Check rate limit (only enforce in production to avoid blocking dev)
  if (process.env.NODE_ENV === 'production' && !checkRateLimit(ip)) {
    return NextResponse.json(
      { 
        error: 'Too many requests. Please try again later.',
        retryAfter: 60
      },
      { 
        status: 429,
        headers: {
          ...corsHeaders,
          'Retry-After': '60',
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      }
    );
  }
  
  try {
    const rows = await getCachedSettings();
    const origin = request.headers.get('origin');

    // Return with proper cache headers
    return NextResponse.json(
      { 
        data: rows,
        cached: true,
        timestamp: new Date().toISOString(),
      },
      {
        headers: {
          ...getCorsHeaders(origin),
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600, max-age=300',
          'CDN-Cache-Control': 'public, s-maxage=300',
          'Vercel-CDN-Cache-Control': 'public, s-maxage=300',
        },
      }
    );
  } catch (error: any) {
    // Only log actual errors, not every request
    if (process.env.NODE_ENV === 'production') {
      console.error('Error fetching system settings:', error.message);
    }
    return NextResponse.json(
      { 
        error: error.message || 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { 
        status: 500,
        headers: {
          ...getCorsHeaders(request.headers.get('origin')),
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      }
    );
  }
}

// POST - Upsert website settings using direct SQL (bypasses PostgREST schema cache)
export async function POST(request: NextRequest) {
  let client: Client | null = null;
  
  try {
    client = await getDbClient();
    
    // Ensure table exists before operations
    await ensureTableExists(client);
    
    const body = await request.json();
    
    if (!body.settings || !Array.isArray(body.settings)) {
      return NextResponse.json(
        { error: 'Invalid request. Expected { settings: [...] }' },
        { 
          status: 400,
          headers: getCorsHeaders(request.headers.get('origin')),
        }
      );
    }

    const results = [];
    
    // Use direct SQL UPSERT - bypasses PostgREST schema cache completely
    for (const setting of body.settings) {
      if (!setting.setting_key) {
        continue;
      }

      try {
        // Direct SQL INSERT ... ON CONFLICT
        const query = `
          INSERT INTO public.website_settings (setting_key, setting_value, updated_at)
          VALUES ($1, $2, NOW())
          ON CONFLICT (setting_key) 
          DO UPDATE SET 
            setting_value = EXCLUDED.setting_value,
            updated_at = NOW()
          RETURNING id, setting_key, setting_value, created_at, updated_at
        `;
        
        const result = await client.query(query, [
          setting.setting_key,
          setting.setting_value || ''
        ]);

        if (result.rows && result.rows.length > 0) {
          results.push({ 
            setting_key: setting.setting_key, 
            success: true, 
            data: result.rows[0]
          });
        } else {
          results.push({ 
            setting_key: setting.setting_key, 
            success: false, 
            error: 'No data returned'
          });
        }
      } catch (error: any) {
        // Silent error handling - only log in production for critical errors
        results.push({ 
          setting_key: setting.setting_key, 
          success: false, 
          error: error.message 
        });
      }
    }

    const allSuccess = results.every(r => r.success);
    
    // Invalidate cache after successful update
    if (allSuccess) {
      try {
        revalidateTag(CACHE_TAGS.WEBSITE_SETTINGS);
        revalidatePath('/');
        revalidatePath('/admin');
      } catch (cacheError) {
        // Silent cache invalidation error
      }
    }
    
    return NextResponse.json(
      {
        success: allSuccess,
        results,
        cacheInvalidated: allSuccess,
      },
      { 
        status: allSuccess ? 200 : 207,
        headers: {
          ...getCorsHeaders(request.headers.get('origin')),
          'Cache-Control': 'no-store, no-cache, must-revalidate',
          'Pragma': 'no-cache',
        },
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      { 
        error: error.message || 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { 
        status: 500,
        headers: getCorsHeaders(request.headers.get('origin')),
      }
    );
  } finally {
    if (client) {
      await client.end();
    }
  }
}

