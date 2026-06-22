export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Profile Settings</h2>
        <p className="text-gray-500 text-sm mt-1">Manage your personal information.</p>
      </div>

      <form className="space-y-4 max-w-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="first-name" className="block text-xs font-semibold text-gray-500 mb-1">First Name</label>
            <input
              type="text"
              id="first-name"
              defaultValue="John"
              className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-xs font-semibold text-gray-500 mb-1">Last Name</label>
            <input
              type="text"
              id="last-name"
              defaultValue="Smith"
              className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-gray-500 mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            defaultValue="john@example.com"
            className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-xs font-semibold text-gray-500 mb-1">Location</label>
          <input
            type="text"
            id="location"
            defaultValue="San Francisco, CA"
            className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-indigo-500"
          />
        </div>

        <button
          type="button"
          className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
