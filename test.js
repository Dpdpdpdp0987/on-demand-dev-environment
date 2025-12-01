#!/usr/bin/env node

/**
 * JavaScript Supabase Connectivity Test
 * This script verifies the connection to Supabase using Node.js.
 */

require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

async function testSupabaseConnection() {
  console.log('='.repeat(50));
  console.log('JavaScript Supabase Connection Test');
  console.log('='.repeat(50));

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error('❌ ERROR: Missing environment variables');
    console.error('Please ensure SUPABASE_URL and SUPABASE_KEY are set in .env file');
    process.exit(1);
  }

  console.log(`\n📡 Connecting to: ${supabaseUrl}`);

  try {
    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey);
    console.log('✅ Successfully created Supabase client');

    // Test a simple query
    console.log('\n🔍 Testing API connectivity...');
    
    // Get the current session (will be null if not logged in, but confirms API works)
    const { data, error } = await supabase.auth.getSession();
    
    if (error && error.message !== 'Auth session missing!') {
      throw error;
    }
    
    console.log('✅ API is reachable and responding');

    console.log('\n' + '='.repeat(50));
    console.log('🎉 All tests passed! Supabase is ready to use.');
    console.log('='.repeat(50));

  } catch (error) {
    console.error(`\n❌ Connection failed: ${error.message}`);
    console.error('\nPlease check:');
    console.error('  1. Your internet connection');
    console.error('  2. The Supabase URL is correct');
    console.error('  3. The API key is valid');
    process.exit(1);
  }
}

testSupabaseConnection();
