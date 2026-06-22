export default function SearchBar({ value, onChange, isPending }) {
  return (
    <div className="w-full max-w-md">
      <input
        type="text"
        placeholder="Search products, brands, or categories"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-full border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 ${isPending ? 'cursor-wait opacity-90' : ''
          }`}
      />
    </div>
  );
}
