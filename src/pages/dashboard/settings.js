import DashboardLayout from '@/components/DashboardLayout';

export default function SettingsPage() {
    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div>
                    <h2 className="text-xl font-bold text-slate-900">Preferences</h2>
                    <p className="text-slate-500 text-sm mt-1">Configure your application settings.</p>
                </div>

                <div className="space-y-4 max-w-xl">
                    <div className="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 p-4">
                        <div>
                            <h3 className="font-semibold text-slate-900 text-sm">Notifications</h3>
                            <p className="text-slate-500 text-xs mt-0.5">Receive email notifications about orders.</p>
                        </div>
                        <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-slate-300 text-indigo-600" />
                    </div>

                    <div className="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 p-4">
                        <div>
                            <h3 className="font-semibold text-slate-900 text-sm">Public Profile</h3>
                            <p className="text-slate-500 text-xs mt-0.5">Make your profile visible to other users.</p>
                        </div>
                        <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-indigo-600" />
                    </div>

                    <div className="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 p-4">
                        <div>
                            <h3 className="font-semibold text-slate-900 text-sm">Two-Factor Authentication</h3>
                            <p className="text-slate-500 text-xs mt-0.5">Add an extra layer of security to your account.</p>
                        </div>
                        <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-indigo-600" />
                    </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-red-50 p-5">
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-red-600">Danger Zone</h3>
                    <div className="rounded-3xl border border-red-200 bg-white p-4">
                        <h4 className="text-red-800 font-semibold text-sm mb-1">Delete Account</h4>
                        <p className="text-slate-500 text-xs mb-3">Permanently delete your account. This action is irreversible.</p>
                        <button className="rounded-full bg-red-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-red-700">
                            Delete Account
                        </button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
