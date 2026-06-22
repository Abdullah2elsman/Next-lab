import Image from 'next/image';
import Link from 'next/link';

async function getFeaturedProducts() {
  const res = await fetch('https://dummyjson.com/products?limit=8');
  const data = await res.json();
  return data.products;
}

export default async function HomePage() {
  const featured = await getFeaturedProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-900">
      <section className="overflow-hidden rounded-[36px] bg-gradient-to-br from-indigo-600 via-slate-700 to-slate-900 px-8 py-16 text-center text-white shadow-xl shadow-indigo-700/20 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-200">Modern shopping made simple</p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Discover curated products with confidence.
          </h1>
          <p className="mx-auto max-w-2xl text-base text-indigo-100 sm:text-lg">
            From smart filters to polished product pages, NextStore helps you browse faster and shop smarter.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <Link href="/products" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-100">
              Browse Products
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-14 space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Featured products</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Top picks for this season</h2>
          </div>
          <Link href="/products" className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700">
            View all products
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-sm font-semibold text-slate-900 line-clamp-2">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between gap-3 text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">${product.price}</span>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                    ★ {product.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
