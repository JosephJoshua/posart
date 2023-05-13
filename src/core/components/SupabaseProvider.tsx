'use client';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Session, SupabaseClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Database } from '@/core/types/db';
import { Profile } from '../types/tables';

export type SupabaseContext = {
  supabase: SupabaseClient<Database>;
  session: Session | null;
  profile: Profile | null;
};

export type SupabaseProviderProps = PropsWithChildren;

const Context = createContext<SupabaseContext | undefined>(undefined);

export const SupabaseProvider: FC<SupabaseProviderProps> = ({ children }) => {
  const [supabase] = useState(() => createBrowserSupabaseClient<Database>());
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  const router = useRouter();

  const handleAuthStateChange = useCallback(
    async (sess: Session | null) => {
      setSession(sess);

      if (sess !== null) {
        const { data } = await supabase.from('profiles').select('*').eq('user_id', sess.user.id);

        if (data === null) return;
        setProfile(data[0]);
      }
    },
    [supabase],
  );

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => handleAuthStateChange(session));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_, session) => {
      await handleAuthStateChange(session);
      router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase, handleAuthStateChange]);

  return <Context.Provider value={{ supabase, session, profile }}>{children}</Context.Provider>;
};

export const useSupabase = () => {
  const context = useContext(Context);
  if (context === undefined)
    throw new Error('`useSupabase` must be used inside `SupabaseProvider`');

  return context;
};
