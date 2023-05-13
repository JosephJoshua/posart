import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <main className="px-16 my-8">
      <h2 className="text-3xl pb-12">
        Karya seni lokal yang <span className="text-blue-400">b</span>
        <span className="text-blue-500">e</span>
        <span className="text-blue-600">r</span>
        <span className="text-blue-700">a</span>
        <span className="text-blue-800">g</span>
        <span className="text-blue-900">a</span>
        <span className="text-blue-950">m</span>
      </h2>

      <div className="flex justify-between">
        <span className="font-medium text-lg">10 karya:</span>

        <div className="flex items-center gap-4">
          <span>Urutkan:</span>
          <select className="outline-0 border-b border-b-gray-500 pb-1">
            <option>Terbaru</option>
            <option>Terlama</option>
            <option>Termurah</option>
            <option>Termahal</option>
          </select>
        </div>
      </div>

      <section className="mt-6 place-items-center grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 10 }, (_, idx) => (
          <Link href="/products/1" key={idx}>
            <article>
              <Image
                className="select-none w-full max-w-[300px] mb-2"
                src="/thumbnail.webp"
                alt=""
                width="350"
                height="400"
              />

              <h3 className="text-lg">Nice pot</h3>
              <div className="text-gray-500">Francisco Toledo</div>
              <div className="font-medium text-sm text-gray-500">Rp1.000.000,00</div>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default HomePage;
