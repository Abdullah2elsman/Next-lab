import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetailPage({ product }) {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-slate-900">
            <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900">
                &larr; Back to products
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_50px_-35px_rgba(15,23,42,0.25)]">
                    <div className="relative aspect-[4/3] bg-slate-100">
                        <Image
                            src={product.thumbnail}
                            alt={product.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 640px"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                <div className="space-y-8 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
                    <div className="space-y-3">
                        <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-700">
                            {product.category}
                        </span>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">{product.title}</h1>
                        {product.brand && (
                            <p className="text-sm text-slate-500">
                                Brand: <span className="font-semibold text-slate-900">{product.brand}</span>
                            </p>
                        )}
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-3xl bg-slate-50 p-5">
                            <p className="text-sm text-slate-500 uppercase tracking-[0.24em]">Price</p>
                            <p className="mt-3 text-4xl font-bold text-slate-900">${product.price}</p>
                        </div>
                        <div className="rounded-3xl bg-slate-50 p-5">
                            <p className="text-sm text-slate-500 uppercase tracking-[0.24em]">Rating</p>
                            <p className="mt-3 text-3xl font-bold text-amber-600">★ {product.rating.toFixed(1)}</p>
                            <p className="mt-2 text-sm text-slate-500">Based on customer reviews</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-lg font-semibold text-slate-900">Description</h2>
                        <p className="text-sm leading-7 text-slate-600">{product.description}</p>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="rounded-3xl bg-slate-50 p-5">
                            <p className="text-sm text-slate-500">Stock</p>
                            <p className="mt-2 text-xl font-semibold text-slate-900">{product.stock} items</p>
                        </div>
                        <button className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/10 transition hover:bg-indigo-700">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const res = await fetch('https://dummyjson.com/products?limit=30&select=id');
    const data = await res.json();

    return {
        paths: data.products.map((product) => ({ params: { id: String(product.id) } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://dummyjson.com/products/${params.id}`);
    if (!res.ok) {
        return {
            notFound: true,
        };
    }

    const product = await res.json();

    return {
        props: {
            product,
        },
    };
}
