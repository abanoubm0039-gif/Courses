"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BookOpen, Users, ShoppingCart, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { clsx } from 'clsx';

const ADMIN_SIDEBAR_ITEMS = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Courses', href: '/admin/courses', icon: BookOpen },
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'Orders', href: '/admin/orders', icon: ShoppingCart },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen bg-slate-50">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col fixed inset-y-0">
                <div className="p-6">
                    <h2 className="text-xl font-bold tracking-wider">Admin Panel</h2>
                </div>
                <nav className="flex-1 space-y-1 px-3">
                    {ADMIN_SIDEBAR_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={clsx(
                                    "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                                    isActive
                                        ? "bg-primary-600 text-white"
                                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                )}
                            >
                                <item.icon className="h-5 w-5" />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
                <div className="p-4 border-t border-slate-800">
                    <Link href="/">
                        <Button variant="ghost" className="w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800">
                            <LogOut className="mr-2 h-4 w-4" />
                            Exit Admin
                        </Button>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-8">
                {children}
            </main>
        </div>
    );
}
