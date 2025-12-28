import { NextRequest, NextResponse } from 'next/server';
import { Client } from 'pg';

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

// GET - Fetch all website settings using direct SQL (bypasses PostgREST schema cache)
export async function GET() {
  let client: Client | null = null;
  
  try {
    client = await getDbClient();
    
    // Ensure table exists
    await ensureTableExists(client);
    
    // Direct SQL query - bypasses PostgREST schema cache completely
    const result = await client.query(
      'SELECT id, setting_key, setting_value, created_at, updated_at FROM public.website_settings ORDER BY setting_key'
    );

    return NextResponse.json({ 
      data: result.rows 
    });
  } catch (error: any) {
    console.error('Error fetching website settings:', error);
    return NextResponse.json(
      { 
        error: error.message || 'Internal server error',
        details: error.stack 
      },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.end();
    }
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
        { status: 400 }
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
        console.error(`Failed to save setting ${setting.setting_key}:`, error);
        results.push({ 
          setting_key: setting.setting_key, 
          success: false, 
          error: error.message 
        });
      }
    }

    const allSuccess = results.every(r => r.success);
    
    return NextResponse.json({
      success: allSuccess,
      results
    }, { status: allSuccess ? 200 : 207 });
  } catch (error: any) {
    console.error('Error in POST website settings:', error);
    return NextResponse.json(
      { 
        error: error.message || 'Internal server error',
        details: error.stack 
      },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.end();
    }
  }
}
