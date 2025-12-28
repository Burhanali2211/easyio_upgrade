/**
 * Script to create required Supabase Storage buckets
 * Run this using: node scripts/create-storage-buckets.js
 * 
 * Make sure you have SUPABASE_SERVICE_ROLE_KEY in your .env file
 */

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const buckets = [
  {
    name: 'admin-uploads',
    public: true,
    description: 'Storage for admin uploads including website settings logos'
  },
  {
    name: 'uploads',
    public: true,
    description: 'General uploads bucket'
  },
  {
    name: 'projects',
    public: true,
    description: 'Project images'
  },
  {
    name: 'team-members',
    public: true,
    description: 'Team member avatars'
  },
  {
    name: 'testimonials',
    public: true,
    description: 'Testimonial images'
  }
];

async function createBuckets() {
  console.log('🚀 Creating Supabase Storage buckets...\n');

  for (const bucket of buckets) {
    try {
      // Check if bucket exists
      const { data: existingBuckets, error: listError } = await supabase.storage.listBuckets();
      
      if (listError) {
        console.error(`❌ Error listing buckets: ${listError.message}`);
        continue;
      }

      const bucketExists = existingBuckets?.some(b => b.name === bucket.name);

      if (bucketExists) {
        console.log(`✅ Bucket "${bucket.name}" already exists`);
      } else {
        // Create bucket
        const { data, error } = await supabase.storage.createBucket(bucket.name, {
          public: bucket.public,
        });

        if (error) {
          console.error(`❌ Error creating bucket "${bucket.name}": ${error.message}`);
        } else {
          console.log(`✅ Created bucket "${bucket.name}" (public: ${bucket.public})`);
        }
      }
    } catch (error) {
      console.error(`❌ Unexpected error with bucket "${bucket.name}": ${error.message}`);
    }
  }

  console.log('\n✨ Bucket creation process completed!');
}

createBuckets()
  .then(() => {
    console.log('\n🎉 All done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Fatal error:', error);
    process.exit(1);
  });

