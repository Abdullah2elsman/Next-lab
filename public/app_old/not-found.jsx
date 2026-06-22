import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50 text-gray-900">
      <div className="max-w-md w-full text-center space-y-6 bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
        <div className="mx-auto w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full font-bold text-xl">
          ?
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-indigo-600 tracking-widest uppercase">
            Error 404
          </span>
          <h1 className="text-2xl font-bold text-gray-900">
            Page Not Found
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-block px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition text-sm"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
