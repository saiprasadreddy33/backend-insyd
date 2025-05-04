import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yxcttldbuxhvzlvbniiv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4Y3R0bGRidXhodnpsdmJuaWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzNTI1MTMsImV4cCI6MjA2MTkyODUxM30.hetQDbTuMn8fwP-J5P6FdFiLBx8qWakrED9W7vQljYQ';

if (!supabaseKey) {
  console.log(supabaseKey,process.env.SUPABASE_SERVICE_ROLE_KEY)
  throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY in environment');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
