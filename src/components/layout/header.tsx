"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur-md shadow-lg">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="h-9 w-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <BookOpen className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-white">EduPlatform</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            Home
                        </Link>
                        <Link href="/courses" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            Courses
                        </Link>
                        <Link href="/courses" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            Categories
                        </Link>
                        <Link href="/#faq" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            About
                        </Link>
                        <Link href="/#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            Contact
                        </Link>
                    </nav>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link href="/login">
                            <Button variant="ghost" className="text-white hover:bg-white/10">
                                Log in
                            </Button>
                        </Link>
                        <Link href="/register">
                            <Button className="bg-primary-600 hover:bg-primary-700 text-white rounded-full px-6 shadow-lg shadow-primary-500/30">
                                Get Started
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-white/10">
                        <nav className="flex flex-col gap-4">
                            <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-2">
                                Home
                            </Link>
                            <Link href="/courses" className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-2">
                                Courses
                            </Link>
                            <Link href="/courses" className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-2">
                                Categories
                            </Link>
                            <Link href="/#faq" className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-2">
                                About
                            </Link>
                            <Link href="/#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-2">
                                Contact
                            </Link>
                            <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                                <Link href="/login">
                                    <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                                        Log in
                                    </Button>
                                </Link>
                                <Link href="/register">
                                    <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white rounded-full">
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
