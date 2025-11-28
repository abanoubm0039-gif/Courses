"use client";

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion } from '@/components/ui/accordion';
import { FEATURED_COURSES } from '@/lib/mock-data';
import { Star, Clock, BookOpen, Globe, Award, CheckCircle, PlayCircle, Lock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Mock curriculum data
const CURRICULUM = [
    {
        title: "Section 1: Introduction",
        content: (
            <div className="space-y-2">
                <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-md">
                    <div className="flex items-center gap-3">
                        <PlayCircle className="h-4 w-4 text-slate-400" />
                        <span className="text-sm">Welcome to the Course</span>
                    </div>
                    <span className="text-xs text-slate-400">02:30</span>
                </div>
                <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-md">
                    <div className="flex items-center gap-3">
                        <PlayCircle className="h-4 w-4 text-slate-400" />
                        <span className="text-sm">Course Overview</span>
                    </div>
                    <span className="text-xs text-slate-400">05:15</span>
                </div>
            </div>
        )
    },
    {
        title: "Section 2: Fundamentals",
        content: (
            <div className="space-y-2">
                <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-md">
                    <div className="flex items-center gap-3">
                        <Lock className="h-4 w-4 text-slate-400" />
                        <span className="text-sm">Core Concepts</span>
                    </div>
                    <span className="text-xs text-slate-400">10:45</span>
                </div>
                <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-md">
                    <div className="flex items-center gap-3">
                        <Lock className="h-4 w-4 text-slate-400" />
                        <span className="text-sm">Setting up Environment</span>
                    </div>
                    <span className="text-xs text-slate-400">15:20</span>
                </div>
            </div>
        )
    },
    {
        title: "Section 3: Advanced Topics",
        content: (
            <div className="space-y-2">
                <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-md">
                    <div className="flex items-center gap-3">
                        <Lock className="h-4 w-4 text-slate-400" />
                        <span className="text-sm">Deep Dive</span>
                    </div>
                    <span className="text-xs text-slate-400">20:00</span>
                </div>
            </div>
        )
    }
];

export async function generateStaticParams() {
    return FEATURED_COURSES.map((course) => ({
        id: course.id,
    }));
}

export default function CourseDetailsPage({ params }: { params: { id: string } }) {
    // In a real app, fetch course by ID. For now, just pick the first one or find by ID.
    const course = FEATURED_COURSES.find(c => c.id === params.id) || FEATURED_COURSES[0];

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header Section */}
            <div className="bg-slate-900 text-white py-12 md:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="flex items-center gap-2 text-primary-300 text-sm font-medium">
                                <span>{course.category}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-current" /> {course.rating} (120 reviews)</span>
                            </div>

                            <h1 className="text-3xl md:text-4xl font-bold leading-tight">{course.title}</h1>
                            <p className="text-lg text-slate-300">
                                Master the skills you need to succeed. Comprehensive curriculum, expert instruction, and hands-on projects.
                            </p>

                            <div className="flex flex-wrap gap-6 text-sm text-slate-300">
                                <div className="flex items-center gap-2">
                                    <BookOpen className="h-4 w-4" />
                                    <span>{course.lessons} Lessons</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe className="h-4 w-4" />
                                    <span>English</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Award className="h-4 w-4" />
                                    <span>Certificate of Completion</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 pt-4">
                                <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-white/20">
                                    <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt={course.instructor} fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Created by <span className="text-primary-300 underline underline-offset-4">{course.instructor}</span></p>
                                    <p className="text-xs text-slate-400">Senior Instructor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 -mt-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* What you'll learn */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <h3 className="text-xl font-bold mb-6">What you'll learn</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="flex gap-3">
                                        <CheckCircle className="h-5 w-5 text-primary-600 shrink-0" />
                                        <span className="text-sm text-slate-600">Master the fundamental concepts and advanced techniques.</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Course Content */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <h3 className="text-xl font-bold mb-6">Course Content</h3>
                            <Accordion items={CURRICULUM} />
                        </div>

                        {/* Requirements */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <h3 className="text-xl font-bold mb-4">Requirements</h3>
                            <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                                <li>No prior experience required.</li>
                                <li>A computer with internet access.</li>
                                <li>Willingness to learn and practice.</li>
                            </ul>
                        </div>

                        {/* Instructor */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <h3 className="text-xl font-bold mb-4">Instructor</h3>
                            <div className="flex gap-4">
                                <div className="relative h-20 w-20 rounded-full overflow-hidden shrink-0">
                                    <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" alt={course.instructor} fill className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{course.instructor}</h4>
                                    <p className="text-primary-600 text-sm mb-2">Senior Developer & Educator</p>
                                    <p className="text-slate-600 text-sm">
                                        John has over 10 years of experience in software development and has taught over 50,000 students worldwide. He is passionate about making complex topics easy to understand.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                            <div className="relative h-48 w-full">
                                <Image src={course.thumbnail} alt={course.title} fill className="object-cover" />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <PlayCircle className="h-16 w-16 text-white opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-3xl font-bold text-slate-900">${course.price}</span>
                                    {course.originalPrice && (
                                        <span className="text-lg text-slate-400 line-through">${course.originalPrice}</span>
                                    )}
                                    <Badge variant="destructive" className="ml-auto">50% OFF</Badge>
                                </div>

                                <Link href="/checkout">
                                    <Button size="lg" className="w-full mb-3 text-lg">Buy Now</Button>
                                </Link>
                                <p className="text-xs text-center text-slate-500 mb-6">30-Day Money-Back Guarantee</p>

                                <div className="space-y-4">
                                    <h4 className="font-bold text-sm">This course includes:</h4>
                                    <ul className="space-y-3 text-sm text-slate-600">
                                        <li className="flex items-center gap-3"><PlayCircle className="h-4 w-4 text-slate-400" /> {course.duration} on-demand video</li>
                                        <li className="flex items-center gap-3"><BookOpen className="h-4 w-4 text-slate-400" /> {course.lessons} lessons</li>
                                        <li className="flex items-center gap-3"><Globe className="h-4 w-4 text-slate-400" /> Full lifetime access</li>
                                        <li className="flex items-center gap-3"><Award className="h-4 w-4 text-slate-400" /> Certificate of completion</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
