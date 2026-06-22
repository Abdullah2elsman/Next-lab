'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50 text-gray-900">
      <div className="max-w-md w-full text-center space-y-6 bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
        <div className="mx-auto w-12 h-12 bg-red-100 text-red-600 flex items-center justify-center rounded-full font-bold text-xl">
          !
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">
            Something went wrong!
          </h1>
          <p className="text-gray-600 text-sm">
            An unexpected application error has occurred.
          </p>
          {error?.message && (
            <div className="p-3 bg-gray-100 rounded-lg border border-gray-200 text-red-600 text-xs font-mono break-all max-h-24 overflow-y-auto">
              {error.message}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition cursor-pointer text-sm"
          >
            Try Again
          </button>
          
          <Link
            href="/"
            className="px-5 py-2.5 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium transition text-sm text-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
