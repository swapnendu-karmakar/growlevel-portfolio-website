-- ============================================
-- GrowLevel Digital — Supabase Database Setup
-- Run this in your Supabase SQL Editor
-- ============================================

-- 1. CONTACTS TABLE
-- Stores form submissions from the contact section
CREATE TABLE IF NOT EXISTS contacts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- 2. PROJECTS TABLE
-- Stores portfolio projects shown dynamically
CREATE TABLE IF NOT EXISTS projects (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text,
  link text,
  category text DEFAULT 'Project',
  created_at timestamptz DEFAULT now()
);

-- 3. TESTIMONIALS TABLE
-- Stores client testimonials (optional)
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  role text,
  feedback text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================

-- Enable RLS on all tables
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Contacts: anyone can INSERT (submit a form), no SELECT for public
CREATE POLICY "Allow public insert on contacts"
  ON contacts FOR INSERT
  TO anon
  WITH CHECK (true);

-- Projects: anyone can read (public portfolio)
CREATE POLICY "Allow public read on projects"
  ON projects FOR SELECT
  TO anon
  USING (true);

-- Testimonials: anyone can read
CREATE POLICY "Allow public read on testimonials"
  ON testimonials FOR SELECT
  TO anon
  USING (true);

-- ============================================
-- SAMPLE DATA (optional — delete in production)
-- ============================================

INSERT INTO projects (title, description, link, category) VALUES
  ('LaunchPad SaaS', 'Full-stack SaaS platform with subscription billing, user dashboards, and automated onboarding flows.', 'https://example.com', 'Web Dev'),
  ('RetailFlow Automation', 'End-to-end order management automation connecting Shopify, Notion, and email into a single pipeline.', 'https://example.com', 'Automation'),
  ('GreenScale CRM Setup', 'Custom HubSpot CRM configuration for a D2C brand — complete with pipelines, sequences, and reporting.', 'https://example.com', 'Systems'),
  ('Growify Landing Page', 'High-converting landing page for a coaching brand. 3× improvement in lead capture rate post-launch.', 'https://example.com', 'Growth'),
  ('TaskBridge App', 'Internal project management tool built for a 40-person remote team, integrated with Slack and Jira.', 'https://example.com', 'Web Dev'),
  ('AnalyticsPro Dashboard', 'Custom analytics dashboard aggregating data from GA4, Meta Ads, and Google Ads into one view.', 'https://example.com', 'Systems');

INSERT INTO testimonials (name, role, feedback) VALUES
  ('Arjun Mehta', 'Founder, LaunchPad SaaS', 'GrowLevel transformed our business. They didn''t just build our website — they built our entire growth infrastructure. Revenue jumped 2.4× in 3 months.'),
  ('Priya Sharma', 'CEO, RetailFlow', 'The automation they set up saved us 20+ hours per week. Our team now focuses on strategy instead of spreadsheets. Absolutely worth every rupee.'),
  ('Karan Patel', 'Marketing Head, GreenScale', 'Professional, fast, and genuinely invested in results. The CRM setup they built for us changed how our entire sales team operates.');
