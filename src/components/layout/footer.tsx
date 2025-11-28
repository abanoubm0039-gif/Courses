import Link from 'next/link';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* About Column */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-4 group">
                            <div className="h-9 w-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                <BookOpen className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">EduPlatform</span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-4">
                            Empowering learners worldwide with high-quality online courses. Learn new skills, advance your career, and achieve your goals.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="h-9 w-9 rounded-full bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors">
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a href="#" className="h-9 w-9 rounded-full bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors">
                                <Twitter className="h-4 w-4" />
                            </a>
                            <a href="#" className="h-9 w-9 rounded-full bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors">
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a href="#" className="h-9 w-9 rounded-full bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors">
                                <Linkedin className="h-4 w-4" />
                            </a>
                            <a href="#" className="h-9 w-9 rounded-full bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors">
                                <Youtube className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/courses" className="text-sm hover:text-white transition-colors">Browse Courses</Link></li>
                            <li><Link href="/courses" className="text-sm hover:text-white transition-colors">Top Categories</Link></li>
                            <li><Link href="/#faq" className="text-sm hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/#contact" className="text-sm hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/register" className="text-sm hover:text-white transition-colors">Become an Instructor</Link></li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div>
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Support</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-sm hover:text-white transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="text-sm hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-sm hover:text-white transition-colors">Cookie Policy</Link></li>
                            <li><Link href="#" className="text-sm hover:text-white transition-colors">Sitemap</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-sm">
                                <Mail className="h-4 w-4 mt-0.5 text-primary-400" />
                                <span>support@eduplatform.com</span>
                            </li>
                            <li className="text-sm">
                                <p className="mb-2">Available 24/7</p>
                                <p className="text-xs text-slate-400">Monday - Sunday</p>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <p className="text-sm font-medium text-white mb-2">Subscribe to our newsletter</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                                <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-slate-400">
                            © 2024 EduPlatform. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="#" className="text-xs text-slate-400 hover:text-white transition-colors">Terms</Link>
                            <Link href="#" className="text-xs text-slate-400 hover:text-white transition-colors">Privacy</Link>
                            <Link href="#" className="text-xs text-slate-400 hover:text-white transition-colors">Cookies</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
