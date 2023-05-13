'use client';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Session, SupabaseClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { Database } from '@/core/types/db';

export type SupabaseContext = {
  supabase: SupabaseClient<Database>;
  session: Session | null;
};

export type SupabaseProviderProps = PropsWithChildren;

const Context = createContext<SupabaseContext | undefined>(undefined);

export const SupabaseProvider: FC<SupabaseProviderProps> = ({ children }) => {
  const [supabase] = useState(() => createBrowserSupabaseClient<Database>());
  const [session, setSession] = useState<Session | null>(null);

  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
      router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  return <Context.Provider value={{ supabase, session }}>{children}</Context.Provider>;
};

export const useSupabase = () => {
  const context = useContext(Context);
  if (context === undefined)
    throw new Error('`useSupabase` must be used inside `SupabaseProvider`');

  return context;
};
