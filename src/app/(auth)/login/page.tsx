'use client';

import { useSupabase } from '@/core/components/SupabaseProvider';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, FormEvent } from 'react';

const LoginPage: FC = () => {
  const { supabase, session } = useSupabase();
  const router = useRouter();

  if (session !== null) {
    router.replace('/');
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    /**
     * TODO: error handling
     */
    if (error !== null) {
      console.error(error);
    }
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <h1 className="text-3xl font-medium text-center">Posart</h1>
      <button className="mt-16 border border-primary px-4 py-2 rounded-lg flex items-center gap-4 transition duration-300 hover:bg-primary hover:text-white">
        <Image src="/google.svg" width="16" height="16" alt="" />
        Masuk dengan Google
      </button>
    </form>
  );
};

export default LoginPage;
