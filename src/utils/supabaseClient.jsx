import { createClient } from '@supabase/supabase-js';
import { supabaseDataProvider } from 'ra-supabase';

/**
 * Initializes Supabase client and React-Admin data provider
 * Requires VITE_SUPABASE_URL and VITE_SUPABASE_API_KEY in .env
 */
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_API_KEY
);

export const supabaseClient = supabase;
export const dataProvider = supabaseDataProvider(supabase);