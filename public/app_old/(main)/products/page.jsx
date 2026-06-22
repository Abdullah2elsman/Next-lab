import ProductsClient from './ProductsClient';

async function getAllProducts() {
  const res = await fetch('https://dummyjson.com/products?limit=30');
  const data = await res.json();
  return data.products;
}

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 text-gray-900">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Product Catalog
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Explore our collection — search, filter, and sort to find what you need.
        </p>
      </div>

      <ProductsClient products={products} />
    </div>
  );
}
