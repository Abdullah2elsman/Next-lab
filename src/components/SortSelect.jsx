export default function SortSelect({ value, onChange }) {
  return (
    <div className="w-full sm:w-56">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-full border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 cursor-pointer"
      >
        <option value="">Default order</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="price-desc">Price: High → Low</option>
        <option value="rating-desc">Rating: High → Low</option>
      </select>
    </div>
  );
}
