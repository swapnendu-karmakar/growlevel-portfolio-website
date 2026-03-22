import { createClient } from '@supabase/supabase-js'

// Replace these with your actual Supabase project credentials
// You can find them at: https://supabase.com/dashboard → Project Settings → API
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://your-project-id.supabase.co'
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key-here'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

/**
 * SUPABASE SETUP GUIDE
 * =====================
 * 1. Create a project at https://supabase.com
 * 2. Run these SQL statements in the SQL editor:
 *
 * -- Contacts table
 * CREATE TABLE contacts (
 *   id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
 *   name text NOT NULL,
 *   email text NOT NULL,
 *   message text NOT NULL,
 *   created_at timestamptz DEFAULT now()
 * );
 *
 * -- Projects table
 * CREATE TABLE projects (
 *   id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
 *   title text NOT NULL,
 *   description text,
 *   link text,
 *   created_at timestamptz DEFAULT now()
 * );
 *
 * -- Testimonials table
 * CREATE TABLE testimonials (
 *   id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
 *   name text NOT NULL,
 *   role text,
 *   feedback text NOT NULL,
 *   created_at timestamptz DEFAULT now()
 * );
 *
 * 3. Enable Row Level Security (RLS) and add policies:
 *    - contacts: INSERT for anon
 *    - projects: SELECT for anon
 *    - testimonials: SELECT for anon
 *
 * 4. Create a .env file in the project root:
 *    VITE_SUPABASE_URL=https://your-project-id.supabase.co
 *    VITE_SUPABASE_ANON_KEY=your-anon-key
 */
