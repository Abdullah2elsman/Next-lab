import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_45px_-35px_rgba(15,23,42,0.35)] transition hover:-translate-y-0.5 hover:shadow-lg"
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
        <div className="flex items-center justify-between gap-3">
          {product.brand ? (
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-700">
              {product.brand}
            </span>
          ) : (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
              Shop
            </span>
          )}
          <span className="rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold text-amber-700">
            ★ {product.rating.toFixed(1)}
          </span>
        </div>

        <h3 className="text-sm font-semibold text-slate-900 line-clamp-2">
          {product.title}
        </h3>

        <div className="flex items-center justify-between gap-2 text-sm text-slate-700">
          <span className="text-base font-semibold text-slate-900">${product.price}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
            {product.category}
          </span>
        </div>
      </div>
    </Link>
  );
}
