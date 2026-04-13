## Supabase Setup

1. Copy `.env.example` to `.env.local`.
2. Add your project URL and anon key.
3. In Supabase Dashboard, open SQL Editor and run:
   - `supabase/migrations/001_create_profiles.sql`
4. In Supabase Dashboard, disable email verification:
   - Authentication -> Providers -> Email -> turn off `Confirm email`

After this:
- Sign up inserts into `auth.users`.
- A trigger copies the user into `public.profiles`.
- Login checks credentials with Supabase Auth (`signInWithPassword`) and redirects immediately.
