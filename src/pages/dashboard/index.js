import DashboardLayout from '@/components/DashboardLayout';

export default function DashboardPage() {
    const stats = [
        { label: 'Total Revenue', value: '$45,231', change: '+12.5%' },
        { label: 'Active Users', value: '2,834', change: '+8.2%' },
        { label: 'Growth Rate', value: '23.1%', change: '+4.3%' },
        { label: 'Avg. Order', value: '$127', change: '+2.1%' },
    ];

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div>
                    <h2 className="text-xl font-bold text-slate-900">Overview</h2>
                    <p className="text-slate-500 text-sm mt-1">Your key metrics at a glance.</p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                    {stats.map(({ label, value, change }) => (
                        <div key={label} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                            <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                                <span>{label}</span>
                                <span className="rounded-full bg-emerald-50 px-2 py-1 text-emerald-700 font-semibold">{change}</span>
                            </div>
                            <p className="text-xl font-extrabold text-slate-900">{value}</p>
                        </div>
                    ))}
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="mb-3 text-sm font-semibold text-slate-900">Recent Activity</h3>
                    <div className="space-y-2 text-sm text-slate-600">
                        <div>• New order placed — #4829</div>
                        <div>• User registration — john@example.com</div>
                        <div>• Product review submitted — 5 stars</div>
                        <div>• Inventory updated — 12 items restocked</div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
