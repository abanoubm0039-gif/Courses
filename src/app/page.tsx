"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CourseCard } from '@/components/shared/course-card';
import { Accordion } from '@/components/ui/accordion';
import { FEATURED_COURSES, CATEGORIES, TESTIMONIALS, FAQ_ITEMS } from '@/lib/mock-data';
import { ArrowRight, CheckCircle, Code, Palette, TrendingUp, Briefcase, Music, Camera, Star, Users, Award, PlayCircle, Sparkles } from 'lucide-react';
import Image from 'next/image';

// Icon mapping helper
const IconMap: Record<string, any> = {
    Code, Palette, TrendingUp, Briefcase, Music, Camera
};

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* ===== HERO SECTION ===== */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

                <div className="container relative mx-auto px-6 md:px-12 lg:px-16 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Text Content */}
                        <div className="text-white space-y-8">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                <Sparkles className="h-4 w-4 text-yellow-400" />
                                <span className="text-sm font-medium">Learn anytime, anywhere</span>
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Potential</span> with Online Learning
                            </h1>

                            {/* Description */}
                            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
                                Discover thousands of courses from top instructors. Master new skills in programming, design, marketing, and more.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link href="/courses">
                                    <Button size="lg" className="w-full sm:w-auto text-base px-8 py-6 rounded-full bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-500/50 transition-all hover:scale-105">
                                        Browse Courses
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="/register">
                                    <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 py-6 rounded-full border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                                        Try for Free
                                    </Button>
                                </Link>
                            </div>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                                <div>
                                    <div className="text-3xl font-bold">50K+</div>
                                    <div className="text-sm text-slate-400">Active Students</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold">1,200+</div>
                                    <div className="text-sm text-slate-400">Online Courses</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold">4.9/5</div>
                                    <div className="text-sm text-slate-400">Average Rating</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Visual Element */}
                        <div className="relative hidden lg:block">
                            <div className="relative">
                                {/* Floating Card 1 */}
                                <div className="absolute top-0 right-0 w-72 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                            <Code className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Web Development</h4>
                                            <p className="text-xs text-slate-300">120 Courses</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-300">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        <span className="font-medium">4.8</span>
                                        <span className="text-slate-400">(2.5k reviews)</span>
                                    </div>
                                </div>

                                {/* Floating Card 2 */}
                                <div className="absolute bottom-0 left-0 w-64 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                            <Users className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white">15K+</div>
                                            <p className="text-xs text-slate-300">Students Enrolled</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Center Illustration */}
                                <div className="relative z-10 mx-auto w-80 h-80 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
                                    <PlayCircle className="h-32 w-32 text-white/80" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FEATURES SECTION ===== */}
            <section className="py-20 md:py-28 bg-slate-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose EduPlatform?</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Everything you need to succeed in your learning journey</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="h-14 w-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Award className="h-7 w-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Instructors</h3>
                            <p className="text-slate-600 leading-relaxed">Learn from industry experts who are passionate about teaching and sharing their knowledge.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="h-14 w-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <CheckCircle className="h-7 w-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Lifetime Access</h3>
                            <p className="text-slate-600 leading-relaxed">Get unlimited access to your courses. Learn at your own pace, anytime and anywhere.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="h-14 w-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Star className="h-7 w-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Certified Learning</h3>
                            <p className="text-slate-600 leading-relaxed">Earn certificates upon completion to showcase your skills and advance your career.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CATEGORIES SECTION ===== */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Top Categories</h2>
                            <p className="text-lg text-slate-600">Explore our most popular learning paths</p>
                        </div>
                        <Link href="/courses" className="mt-4 md:mt-0 text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-2 group">
                            View All Categories
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {CATEGORIES.map((cat) => {
                            const Icon = IconMap[cat.icon] || Code;
                            return (
                                <Link key={cat.id} href={`/courses?category=${cat.id}`} className="group">
                                    <div className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 border-2 border-transparent hover:border-primary-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                        <div className="h-14 w-14 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                                            <Icon className="h-7 w-7 text-slate-600 group-hover:text-primary-600 transition-colors" />
                                        </div>
                                        <span className="font-semibold text-slate-900 group-hover:text-primary-700 transition-colors text-center">{cat.name}</span>
                                        <span className="text-xs text-slate-500 mt-1">{cat.count} Courses</span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ===== FEATURED COURSES SECTION ===== */}
            <section className="py-20 md:py-28 bg-slate-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Courses</h2>
                        <p className="text-lg text-slate-600">Hand-picked courses to get you started</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {FEATURED_COURSES.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>

                    <div className="text-center">
                        <Link href="/courses">
                            <Button size="lg" variant="outline" className="px-8 py-6 rounded-full border-2 hover:bg-primary-50 hover:border-primary-600 hover:text-primary-700">
                                Browse All Courses
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS SECTION ===== */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Students Say</h2>
                        <p className="text-lg text-slate-600">Join thousands of satisfied learners</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((testimonial) => (
                            <div key={testimonial.id} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-slate-700 leading-relaxed mb-6 italic">"{testimonial.content}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-primary-100">
                                        <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FAQ SECTION ===== */}
            <section className="py-20 md:py-28 bg-slate-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-slate-600">Everything you need to know</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                        <Accordion items={FAQ_ITEMS} />
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA SECTION ===== */}
            <section className="py-20 md:py-28 bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTZjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMjRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTEyIDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

                <div className="container relative mx-auto px-6 md:px-12 lg:px-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Learning?</h2>
                    <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join thousands of students and start your journey to success today. Get access to premium courses and expert instructors.
                    </p>
                    <Link href="/register">
                        <Button size="lg" className="bg-white text-primary-700 hover:bg-slate-100 px-10 py-6 text-lg rounded-full shadow-2xl hover:scale-105 transition-transform">
                            Create Free Account
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
