import Link from 'next/link';
import { FC } from 'react';

const Header: FC = () => {
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

      <nav className="flex gap-6 text-lg">
        <Link href="/buy" className="transition-colors duration-300 hover:text-primary">
          Beli
        </Link>

        <Link href="/sell" className="transition-colors duration-300 hover:text-primary">
          Jual
        </Link>
      </nav>

      <div className="flex gap-2 text-sm">
        <button className="border border-black rounded-full px-6 py-1 transition duration-300 hover:bg-primary hover:text-white hover:border-primary">
          Masuk
        </button>

        <button className="bg-black text-white rounded-full px-6 py-1 transition duration-300 hover:bg-primary hover:border-primary">
          Daftar
        </button>
      </div>
    </header>
  );
};

export default Header;
