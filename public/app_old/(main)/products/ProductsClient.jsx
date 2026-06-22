'use client';

import FilterBar from '@/components/FilterBar';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';
import SortSelect from '@/components/SortSelect';
import { useDeferredValue, useMemo, useState, useTransition } from 'react';

export default function ProductsClient({ products }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [isPending, startTransition] = useTransition();

  // Simple useDeferredValue for filtering logic
  const deferredQuery = useDeferredValue(searchQuery);

  // Extract unique brands from products
  const brands = useMemo(() => {
    const brandSet = new Set();
    products.forEach((p) => {
      if (p.brand) brandSet.add(p.brand);
    });
    return Array.from(brandSet).sort();
  }, [products]);

  // Standard change handlers wrapping state changes in startTransition
  const handleBrandChange = (brand) => {
    startTransition(() => {
      setSelectedBrand(brand);
    });
  };

  const handleSortChange = (sort) => {
    startTransition(() => {
      setSortOption(sort);
    });
  };

  // Compute filtered and sorted products using deferred query
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search query matches title, category, or brand
    if (deferredQuery) {
      const q = deferredQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.brand && p.brand.toLowerCase().includes(q))
      );
    }

    // Brand filter
    if (selectedBrand) {
      result = result.filter((p) => p.brand === selectedBrand);
    }

    // Sort options
    if (sortOption === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating-desc') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [products, deferredQuery, selectedBrand, sortOption]);

  return (
    <div className="space-y-8">
      <div className="rounded-[32px] border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-200/40 backdrop-blur-sm">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">Search & filter</p>
            <p className="text-sm text-slate-500">Quickly narrow down products by name, brand, category, or price.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              isPending={isPending || deferredQuery !== searchQuery}
            />
            <FilterBar
              brands={brands}
              selectedBrand={selectedBrand}
              onBrandChange={handleBrandChange}
            />
            <SortSelect value={sortOption} onChange={handleSortChange} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 rounded-3xl border border-slate-200 bg-white/80 p-5 text-sm text-slate-600 shadow-sm shadow-slate-200/40">
        <span className="font-semibold text-slate-900">{filteredProducts.length}</span>
        <span>results from {products.length} total products</span>
      </div>

      <div className={isPending ? 'opacity-60 transition-opacity' : 'transition-opacity'}>
        {filteredProducts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
            <p className="text-sm text-slate-500">No products found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
