import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-200 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
          <div className="space-y-4">
            <Link href="/" className="inline-block text-2xl font-bold text-white">
              NextStore
            </Link>
            <p className="text-sm text-slate-400 max-w-sm">
              A modern shopping experience with clean product browsing and thoughtful interactions.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 mb-4">
              Explore
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/products" className="hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white transition">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 mb-4">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3 text-sm">
              <a href="#" className="rounded-full border border-slate-700 px-3 py-2 text-slate-300 transition hover:bg-slate-800 hover:text-white">
                Twitter
              </a>
              <a href="#" className="rounded-full border border-slate-700 px-3 py-2 text-slate-300 transition hover:bg-slate-800 hover:text-white">
                GitHub
              </a>
              <a href="#" className="rounded-full border border-slate-700 px-3 py-2 text-slate-300 transition hover:bg-slate-800 hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} NextStore. Crafted with clarity and speed.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
