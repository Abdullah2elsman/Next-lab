export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 bg-slate-50 text-slate-900">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">About NextStore</h1>
                <p className="text-slate-600 max-w-xl mx-auto">
                    A basic university lab project designed to demonstrate Next.js page routing, dynamic routes, static generation, and client-side product filtering.
                </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
                <h2 className="text-xl font-bold text-slate-900">Lab Objectives</h2>
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-600">
                    <li><strong>Routing:</strong> Nested pages router and dynamic product routes.</li>
                    <li><strong>SSG:</strong> Static generation with `getStaticProps()` and `getStaticPaths()`.</li>
                    <li><strong>Client State:</strong> Searching, filtering by brand, and product sorting on the client side.</li>
                    <li><strong>Error Handling:</strong> Pages-based 404 routing and graceful fallback support.</li>
                </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
                <h2 className="text-xl font-bold text-slate-900">Technology Stack</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
                    <div className="rounded-2xl bg-slate-100 p-3 text-slate-800">Next.js 16</div>
                    <div className="rounded-2xl bg-slate-100 p-3 text-slate-800">React 19</div>
                    <div className="rounded-2xl bg-slate-100 p-3 text-slate-800">Tailwind CSS v4</div>
                    <div className="rounded-2xl bg-slate-100 p-3 text-slate-800">DummyJSON API</div>
                </div>
            </div>
        </div>
    );
}
