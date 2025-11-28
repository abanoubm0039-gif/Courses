"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CourseCard } from '@/components/shared/course-card';
import { Course } from '@/types';
import { FEATURED_COURSES, CATEGORIES } from '@/lib/mock-data';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Extended mock data for listing
const ALL_COURSES: Course[] = [
    ...FEATURED_COURSES,
    {
        id: "5",
        title: "Advanced React Patterns",
        instructor: "John Doe",
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600",
        price: 79.99,
        rating: 4.9,
        lessons: 45,
        duration: "12h 00m",
        category: "Development"
    },
    {
        id: "6",
        title: "Social Media Strategy 2024",
        instructor: "Sarah Smith",
        thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600",
        price: 39.99,
        rating: 4.5,
        lessons: 32,
        duration: "8h 30m",
        category: "Marketing"
    }
];

export default function CoursesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredCourses = ALL_COURSES.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory ? course.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Explore Courses</h1>
                    <p className="text-slate-500">Find the perfect course to upgrade your skills.</p>
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                            placeholder="Search courses..."
                            className="pl-9"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button variant="outline" size="icon">
                        <SlidersHorizontal className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Filters */}
                <aside className="w-full lg:w-64 shrink-0 space-y-8">
                    <div>
                        <h3 className="font-semibold mb-4">Categories</h3>
                        <div className="space-y-2">
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className={`flex items-center justify-between w-full text-sm ${!selectedCategory ? 'text-primary-600 font-medium' : 'text-slate-600 hover:text-slate-900'}`}
                            >
                                All Categories
                            </button>
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.name)} // Using name for simplicity as mock data uses name
                                    className={`flex items-center justify-between w-full text-sm ${selectedCategory === cat.name ? 'text-primary-600 font-medium' : 'text-slate-600 hover:text-slate-900'}`}
                                >
                                    {cat.name}
                                    <span className="text-xs text-slate-400">({cat.count})</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Level</h3>
                        <div className="space-y-2">
                            {['Beginner', 'Intermediate', 'Advanced'].map(level => (
                                <div key={level} className="flex items-center gap-2">
                                    <input type="checkbox" id={level} className="rounded border-slate-300 text-primary-600 focus:ring-primary-600" />
                                    <label htmlFor={level} className="text-sm text-slate-600">{level}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Price</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="free" className="rounded border-slate-300 text-primary-600 focus:ring-primary-600" />
                                <label htmlFor="free" className="text-sm text-slate-600">Free</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="paid" className="rounded border-slate-300 text-primary-600 focus:ring-primary-600" />
                                <label htmlFor="paid" className="text-sm text-slate-600">Paid</label>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Course Grid */}
                <div className="flex-1">
                    {filteredCourses.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCourses.map(course => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <h3 className="text-lg font-medium text-slate-900">No courses found</h3>
                            <p className="text-slate-500">Try adjusting your search or filters.</p>
                            <Button
                                variant="link"
                                onClick={() => { setSearchQuery(""); setSelectedCategory(null); }}
                                className="mt-2"
                            >
                                Clear all filters
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
