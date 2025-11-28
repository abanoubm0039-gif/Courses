"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BookOpen } from 'lucide-react';

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <div className="text-center">
                    <Link href="/" className="inline-flex items-center gap-2 font-bold text-2xl text-primary-600 mb-2">
                        <BookOpen className="h-8 w-8" />
                        <span>EduPlatform</span>
                    </Link>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">Create your account</h2>
                    <p className="mt-2 text-sm text-slate-600">
                        Already have an account?{' '}
                        <Link href="/login" className="font-medium text-primary-600 hover:text-primary-500">
                            Sign in
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-slate-900">Full Name</label>
                            <div className="mt-2">
                                <Input id="full-name" name="name" type="text" required placeholder="John Doe" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-900">Email address</label>
                            <div className="mt-2">
                                <Input id="email" name="email" type="email" autoComplete="email" required placeholder="john@example.com" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-slate-900">Phone Number (Optional)</label>
                            <div className="mt-2">
                                <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-slate-900">Password</label>
                            <div className="mt-2">
                                <Input id="password" name="password" type="password" required placeholder="••••••••" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-slate-900">Confirm Password</label>
                            <div className="mt-2">
                                <Input id="confirm-password" name="confirm-password" type="password" required placeholder="••••••••" />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                className="h-4 w-4 rounded border-slate-300 text-primary-600 focus:ring-primary-600"
                                required
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-slate-900">
                                I agree to the <Link href="#" className="text-primary-600 hover:text-primary-500">Terms and Conditions</Link>
                            </label>
                        </div>
                    </div>

                    <div>
                        <Link href="/dashboard">
                            <Button type="submit" className="w-full">
                                Create Account
                            </Button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
