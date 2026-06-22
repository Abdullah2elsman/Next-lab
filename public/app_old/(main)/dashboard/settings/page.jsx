export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Preferences</h2>
        <p className="text-gray-500 text-sm mt-1">Configure your application settings.</p>
      </div>

      <div className="space-y-4 max-w-xl">
        <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">Notifications</h3>
            <p className="text-gray-500 text-xs mt-0.5">Receive email notifications about orders.</p>
          </div>
          <input type="checkbox" defaultChecked={true} className="w-4 h-4 text-indigo-600 border-gray-300 rounded" />
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">Public Profile</h3>
            <p className="text-gray-500 text-xs mt-0.5">Make your profile visible to other users.</p>
          </div>
          <input type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded" />
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">Two-Factor Authentication</h3>
            <p className="text-gray-500 text-xs mt-0.5">Add an extra layer of security to your account.</p>
          </div>
          <input type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded" />
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200 max-w-xl">
        <h3 className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">Danger Zone</h3>
        <div className="p-4 rounded-lg bg-red-50 border border-red-200">
          <h4 className="text-red-800 font-semibold text-sm mb-1">Delete Account</h4>
          <p className="text-gray-500 text-xs mb-3">
            Permanently delete your account. This action is irreversible.
          </p>
          <button
            type="button"
            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
