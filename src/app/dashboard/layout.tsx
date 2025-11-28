"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, LayoutDashboard, FileText, CreditCard, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { clsx } from 'clsx';

const SIDEBAR_ITEMS = [
    { name: 'My Courses', href: '/dashboard', icon: BookOpen },
    { name: 'Profile', href: '/dashboard/profile', icon: User },
    { name: 'Billing', href: '/dashboard/billing', icon: CreditCard },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen bg-slate-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col fixed inset-y-0 pt-16">
                <div className="p-6">
                    <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Student Dashboard</h2>
                </div>
                <nav className="flex-1 space-y-1 px-3">
                    {SIDEBAR_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={clsx(
                                    "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                                    isActive
                                        ? "bg-primary-50 text-primary-600"
                                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                                )}
                            >
                                <item.icon className={clsx("h-5 w-5", isActive ? "text-primary-600" : "text-slate-400")} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
                <div className="p-4 border-t border-slate-200">
                    <Link href="/">
                        <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                            <LogOut className="mr-2 h-4 w-4" />
                            Sign Out
                        </Button>
                    </Link>
                </div>
            </aside>

            {/* Mobile Header Placeholder (could be added if needed) */}

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-8 pt-24">
                {children}
            </main>
        </div>
    );
}
