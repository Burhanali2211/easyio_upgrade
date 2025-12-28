-- Create website_settings table
CREATE TABLE IF NOT EXISTS website_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key VARCHAR(100) UNIQUE NOT NULL,
  setting_value TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_website_settings_key ON website_settings(setting_key);

-- Insert default settings
INSERT INTO website_settings (setting_key, setting_value) 
VALUES 
  ('logo_url', ''),
  ('logo_type', 'default'), -- 'default' or 'custom'
  ('hover_animation_enabled', 'false'),
  ('site_name', 'EASYIO'),
  ('site_tagline', 'Technologies')
ON CONFLICT (setting_key) DO NOTHING;

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-update updated_at
CREATE TRIGGER update_website_settings_updated_at
  BEFORE UPDATE ON website_settings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

