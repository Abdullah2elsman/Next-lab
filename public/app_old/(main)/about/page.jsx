export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 bg-gray-50 text-gray-900">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About NextStore
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          A basic university lab project designed to demonstrate Next.js App Router routing, dynamic routes, SSG data fetching, and search/filtering state logic.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Lab Objectives</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
          <li><strong>Routing:</strong> Dynamic and nested routing using the App Router convention.</li>
          <li><strong>SSG:</strong> Static site generation at build time using `generateStaticParams()`.</li>
          <li><strong>Client State:</strong> Searching, filtering by brand, and sorting products on the client side.</li>
          <li><strong>Error Handling:</strong> Root error boundary and 404 handler integration.</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Technology Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
          <div className="p-3 bg-gray-100 rounded-lg text-gray-800">Next.js 16</div>
          <div className="p-3 bg-gray-100 rounded-lg text-gray-800">React 19</div>
          <div className="p-3 bg-gray-100 rounded-lg text-gray-800">Tailwind CSS v4</div>
          <div className="p-3 bg-gray-100 rounded-lg text-gray-800">DummyJSON API</div>
        </div>
      </div>
    </div>
  );
}
