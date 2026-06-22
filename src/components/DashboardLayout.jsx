'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';

const sidebarLinks = [
    { name: 'Overview', href: '/dashboard' },
    { name: 'Profile', href: '/dashboard/profile' },
    { name: 'Settings', href: '/dashboard/settings' },
];

export default function DashboardLayout({ children }) {
    const router = useRouter();
    const pathname = router.pathname;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-slate-50 text-slate-900">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Dashboard</h1>

            <div className="flex flex-col md:flex-row gap-8">
                <aside className="w-full md:w-48 flex-shrink-0">
                    <nav className="space-y-1 rounded-xl bg-white border border-slate-200 p-3">
                        {sidebarLinks.map((link) => {
                            const active = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${active
                                            ? 'bg-indigo-50 text-indigo-600 border-l-4 border-indigo-600'
                                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>
                </aside>

                <div className="flex-1 min-w-0 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    {children}
                </div>
            </div>
        </div>
    );
}
