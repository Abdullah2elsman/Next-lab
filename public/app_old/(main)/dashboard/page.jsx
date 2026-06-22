export default function DashboardPage() {
  const stats = [
    { label: 'Total Revenue', value: '$45,231', change: '+12.5%' },
    { label: 'Active Users', value: '2,834', change: '+8.2%' },
    { label: 'Growth Rate', value: '23.1%', change: '+4.3%' },
    { label: 'Avg. Order', value: '$127', change: '+2.1%' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Overview</h2>
        <p className="text-gray-500 text-sm mt-1">Your key metrics at a glance.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(({ label, value, change }) => (
          <div
            key={label}
            className="p-4 rounded-lg bg-gray-50 border border-gray-200"
          >
            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span>{label}</span>
              <span className="font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                {change}
              </span>
            </div>
            <p className="text-xl font-extrabold text-gray-900">{value}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
        <h3 className="text-sm font-semibold text-gray-800 mb-3">Recent Activity</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div>• New order placed — #4829</div>
          <div>• User registration — john@example.com</div>
          <div>• Product review submitted — 5 stars</div>
          <div>• Inventory updated — 12 items restocked</div>
        </div>
      </div>
    </div>
  );
}
