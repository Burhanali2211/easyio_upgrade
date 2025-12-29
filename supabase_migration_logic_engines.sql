-- Enhanced logic_engines table migration
-- This migration adds additional fields to make engines more informative and engaging

-- First, check if table exists and create if it doesn't
CREATE TABLE IF NOT EXISTS logic_engines (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  icon_type VARCHAR(50) DEFAULT 'brain',
  category VARCHAR(100),
  features TEXT[], -- Array of feature strings
  priority INTEGER DEFAULT 0, -- Higher number = more featured (0 = normal, 1-3 = featured levels)
  use_case TEXT,
  complexity_level VARCHAR(20) DEFAULT 'medium', -- 'low', 'medium', 'high', 'enterprise'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add new columns if table already exists (safe migration)
DO $$ 
BEGIN
  -- Add category column if it doesn't exist
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name = 'logic_engines' AND column_name = 'category') THEN
    ALTER TABLE logic_engines ADD COLUMN category VARCHAR(100);
  END IF;

  -- Add features array column if it doesn't exist
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name = 'logic_engines' AND column_name = 'features') THEN
    ALTER TABLE logic_engines ADD COLUMN features TEXT[];
  END IF;

  -- Add priority column if it doesn't exist
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name = 'logic_engines' AND column_name = 'priority') THEN
    ALTER TABLE logic_engines ADD COLUMN priority INTEGER DEFAULT 0;
  END IF;

  -- Add use_case column if it doesn't exist
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name = 'logic_engines' AND column_name = 'use_case') THEN
    ALTER TABLE logic_engines ADD COLUMN use_case TEXT;
  END IF;

  -- Add complexity_level column if it doesn't exist
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name = 'logic_engines' AND column_name = 'complexity_level') THEN
    ALTER TABLE logic_engines ADD COLUMN complexity_level VARCHAR(20) DEFAULT 'medium';
  END IF;

  -- Add updated_at column if it doesn't exist
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name = 'logic_engines' AND column_name = 'updated_at') THEN
    ALTER TABLE logic_engines ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
  END IF;
END $$;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_logic_engines_category ON logic_engines(category);
CREATE INDEX IF NOT EXISTS idx_logic_engines_priority ON logic_engines(priority DESC);
CREATE INDEX IF NOT EXISTS idx_logic_engines_complexity ON logic_engines(complexity_level);
CREATE INDEX IF NOT EXISTS idx_logic_engines_created_at ON logic_engines(created_at DESC);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_logic_engines_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-update updated_at
DROP TRIGGER IF EXISTS update_logic_engines_updated_at ON logic_engines;
CREATE TRIGGER update_logic_engines_updated_at
  BEFORE UPDATE ON logic_engines
  FOR EACH ROW
  EXECUTE FUNCTION update_logic_engines_updated_at();

-- Enable RLS (Row Level Security)
ALTER TABLE logic_engines ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
DROP POLICY IF EXISTS "Public read access" ON logic_engines;
CREATE POLICY "Public read access" ON logic_engines
  FOR SELECT
  USING (true);

-- Create policies for authenticated users to insert/update/delete
-- Note: These policies work with Supabase. For direct PostgreSQL, you may need to adjust based on your auth setup.
-- For now, allowing all authenticated operations (adjust as needed for your security requirements)
DROP POLICY IF EXISTS "Authenticated users can insert" ON logic_engines;
CREATE POLICY "Authenticated users can insert" ON logic_engines
  FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Authenticated users can update" ON logic_engines;
CREATE POLICY "Authenticated users can update" ON logic_engines
  FOR UPDATE
  USING (true);

DROP POLICY IF EXISTS "Authenticated users can delete" ON logic_engines;
CREATE POLICY "Authenticated users can delete" ON logic_engines
  FOR DELETE
  USING (true);

