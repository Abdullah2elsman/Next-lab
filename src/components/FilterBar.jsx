export default function FilterBar({ brands, selectedBrand, onBrandChange }) {
  return (
    <div className="w-full sm:w-56">
      <select
        value={selectedBrand}
        onChange={(e) => onBrandChange(e.target.value)}
        className="w-full appearance-none rounded-full border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 cursor-pointer"
      >
        <option value="">All Brands</option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
}
