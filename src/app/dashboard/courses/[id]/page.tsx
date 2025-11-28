"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Accordion } from '@/components/ui/accordion';
import { FEATURED_COURSES } from '@/lib/mock-data';
import { PlayCircle, CheckCircle, ChevronLeft, Menu } from 'lucide-react';
import Link from 'next/link';

// Mock lessons data
const LESSONS = [
    { id: 1, title: "Introduction to the Course", duration: "02:30", completed: true },
    { id: 2, title: "Setting Up Your Environment", duration: "05:15", completed: true },
    { id: 3, title: "Understanding the Basics", duration: "10:45", completed: false },
    { id: 4, title: "Your First Project", duration: "15:20", completed: false },
    { id: 5, title: "Advanced Concepts", duration: "20:00", completed: false },
];

export async function generateStaticParams() {
    return FEATURED_COURSES.map((course) => ({
        id: course.id,
    }));
}

export default function CoursePlayerPage({ params }: { params: { id: string } }) {
    const course = FEATURED_COURSES.find(c => c.id === params.id) || FEATURED_COURSES[0];
    const [currentLesson, setCurrentLesson] = useState(LESSONS[2]);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)] -m-8 mt-0">
            {/* Player Header */}
            <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="hover:text-slate-300">
                        <ChevronLeft className="h-6 w-6" />
                    </Link>
                    <h1 className="font-medium truncate max-w-md">{course.title}</h1>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:block text-sm text-slate-400">
                        Progress: 40%
                    </div>
                    <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden hidden md:block">
                        <div className="h-full bg-primary-500 w-[40%]" />
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-slate-800 lg:hidden"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Main Video Area */}
                <div className="flex-1 bg-black flex items-center justify-center relative">
                    <div className="text-center text-white">
                        <PlayCircle className="h-20 w-20 mx-auto mb-4 opacity-50" />
                        <p className="text-lg">Video Player Placeholder</p>
                        <p className="text-sm text-slate-400">Playing: {currentLesson.title}</p>
                    </div>
                </div>

                {/* Playlist Sidebar */}
                <div className={`w-80 bg-white border-l border-slate-200 flex flex-col transition-all duration-300 absolute inset-y-0 right-0 lg:relative ${sidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0 lg:w-0 lg:border-none'}`}>
                    <div className="p-4 border-b border-slate-200 font-bold flex justify-between items-center">
                        <span>Course Content</span>
                        <span className="text-xs font-normal text-slate-500">5 Lessons</span>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {LESSONS.map((lesson, index) => (
                            <button
                                key={lesson.id}
                                onClick={() => setCurrentLesson(lesson)}
                                className={`w-full flex items-start gap-3 p-4 text-left hover:bg-slate-50 border-b border-slate-100 transition-colors ${currentLesson.id === lesson.id ? 'bg-primary-50 hover:bg-primary-50' : ''}`}
                            >
                                <div className="mt-0.5">
                                    {lesson.completed ? (
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                    ) : (
                                        <PlayCircle className={`h-5 w-5 ${currentLesson.id === lesson.id ? 'text-primary-600' : 'text-slate-400'}`} />
                                    )}
                                </div>
                                <div>
                                    <p className={`text-sm font-medium ${currentLesson.id === lesson.id ? 'text-primary-700' : 'text-slate-700'}`}>
                                        {index + 1}. {lesson.title}
                                    </p>
                                    <p className="text-xs text-slate-400 mt-1">{lesson.duration}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
