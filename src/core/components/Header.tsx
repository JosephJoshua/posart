'use client';

import Link from 'next/link';
import { FC } from 'react';
import { useSupabase } from './SupabaseProvider';
import Image from 'next/image';

const Header: FC = () => {
  const { session, supabase, profile } = useSupabase();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="px-16 py-4 flex items-center gap-6 sticky">
      <h1 className="text-2xl">Posart</h1>

      <form className="flex-1">
        <input
          type="text"
          placeholder="Cari karya"
          className="w-full outline-0 border-b border-b-gray-300 py-1 transition duration-300 placeholder:transition placeholder:duration-300 placeholder:text-gray-400 hover:border-b-gray-900 hover:placeholder:text-gray-900 focus-visible:border-b-gray-900 focus-visible:placeholder:text-gray-900"
        />
      </form>

      <div className="flex gap-2 text-sm items-center">
        {session === null ? (
          <>
            <Link
              href="/login"
              className="border border-black rounded-full px-6 py-1 transition duration-300 hover:bg-primary hover:text-white hover:border-primary"
            >
              Masuk
            </Link>

            <Link
              href="/login"
              className="bg-black text-white rounded-full px-6 py-1 transition duration-300 hover:bg-primary hover:border-primary"
            >
              Daftar
            </Link>
          </>
        ) : (
          <>
            <button
              onClick={handleLogout}
              className="border border-black rounded-full px-6 h-8 transition duration-300 hover:bg-primary hover:text-white hover:border-primary"
            >
              Keluar
            </button>

            {profile?.avatar_url == null ? (
              <div className="w-12 h-12 rounded-full bg-gray-300"></div>
            ) : (
              <Image
                src={profile.avatar_url}
                alt=""
                className="w-12 h-12 rounded-full"
                width="48"
                height="48"
              />
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
