import ProductsClient from '@/components/ProductsClient';

export default function ProductsPage({ products }) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-slate-50 text-slate-900">
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-slate-900">Product Catalog</h1>
                <p className="text-slate-500 text-sm mt-1">Explore our collection — search, filter, and sort to find what you need.</p>
            </div>

            <ProductsClient products={products} />
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://dummyjson.com/products?limit=30');
    const data = await res.json();

    return {
        props: {
            products: data.products,
        },
    };
}
