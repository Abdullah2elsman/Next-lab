import DashboardLayout from '@/components/DashboardLayout';

export default function ProfilePage() {
    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div>
                    <h2 className="text-xl font-bold text-slate-900">Profile Settings</h2>
                    <p className="text-slate-500 text-sm mt-1">Manage your personal information.</p>
                </div>

                <form className="space-y-4 max-w-xl">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-xs font-semibold text-slate-500 mb-1">First Name</label>
                            <input
                                type="text"
                                id="first-name"
                                defaultValue="John"
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                            />
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-xs font-semibold text-slate-500 mb-1">Last Name</label>
                            <input
                                type="text"
                                id="last-name"
                                defaultValue="Smith"
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-slate-500 mb-1">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            defaultValue="john@example.com"
                            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        />
                    </div>

                    <div>
                        <label htmlFor="location" className="block text-xs font-semibold text-slate-500 mb-1">Location</label>
                        <input
                            type="text"
                            id="location"
                            defaultValue="San Francisco, CA"
                            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        />
                    </div>

                    <button
                        type="button"
                        className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/10 transition hover:bg-indigo-700"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </DashboardLayout>
    );
}
