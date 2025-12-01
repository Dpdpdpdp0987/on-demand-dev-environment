#!/usr/bin/env python3
"""
Python Supabase Connectivity Test
This script verifies the connection to Supabase using Python.
"""

import os
import sys
from supabase import create_client, Client
from dotenv import load_dotenv

def test_supabase_connection():
    """Test Supabase connection and print status."""
    print("=" * 50)
    print("Python Supabase Connection Test")
    print("=" * 50)
    
    # Load environment variables
    load_dotenv()
    
    supabase_url = os.getenv("SUPABASE_URL")
    supabase_key = os.getenv("SUPABASE_KEY")
    
    if not supabase_url or not supabase_key:
        print("❌ ERROR: Missing environment variables")
        print("Please ensure SUPABASE_URL and SUPABASE_KEY are set in .env file")
        sys.exit(1)
    
    print(f"\n📡 Connecting to: {supabase_url}")
    
    try:
        # Create Supabase client
        supabase: Client = create_client(supabase_url, supabase_key)
        print("✅ Successfully created Supabase client")
        
        # Test a simple query (this will work even with an empty database)
        # We're just checking if we can communicate with Supabase
        print("\n🔍 Testing API connectivity...")
        
        # Try to access the auth endpoint as a connectivity test
        response = supabase.auth.get_session()
        print("✅ API is reachable and responding")
        
        print("\n" + "=" * 50)
        print("🎉 All tests passed! Supabase is ready to use.")
        print("=" * 50)
        
    except Exception as e:
        print(f"\n❌ Connection failed: {str(e)}")
        print("\nPlease check:")
        print("  1. Your internet connection")
        print("  2. The Supabase URL is correct")
        print("  3. The API key is valid")
        sys.exit(1)

if __name__ == "__main__":
    test_supabase_connection()
