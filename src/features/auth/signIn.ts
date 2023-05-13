import { Database } from '@/core/types/db';
import { SupabaseClient } from '@supabase/supabase-js';

export const signInWithGoogle = async (client: SupabaseClient<Database>) => {
  const { error } = await client.auth.signInWithOAuth({
    provider: 'google',
  });

  if (error !== null) throw error;
};
