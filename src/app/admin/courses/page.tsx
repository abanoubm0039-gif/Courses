"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { FEATURED_COURSES } from '@/lib/mock-data';
import { Plus, Search, MoreVertical, Edit, Trash2 } from 'lucide-react';
import Image from 'next/image';

export default function AdminCoursesPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Courses</h1>
                    <p className="text-slate-500">Manage your course catalog.</p>
                </div>
                <Button className="flex items-center gap-2">
                    <Plus className="h-4 w-4" /> Add New Course
                </Button>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input placeholder="Search courses..." className="pl-9" />
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">Filter</Button>
                    <Button variant="outline">Sort</Button>
                </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4 font-medium text-slate-500">Course</th>
                            <th className="px-6 py-4 font-medium text-slate-500">Instructor</th>
                            <th className="px-6 py-4 font-medium text-slate-500">Price</th>
                            <th className="px-6 py-4 font-medium text-slate-500">Status</th>
                            <th className="px-6 py-4 font-medium text-slate-500">Sales</th>
                            <th className="px-6 py-4 font-medium text-slate-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {FEATURED_COURSES.map((course) => (
                            <tr key={course.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="relative h-10 w-16 rounded overflow-hidden bg-slate-100">
                                            <Image src={course.thumbnail} alt="" fill className="object-cover" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-900">{course.title}</p>
                                            <p className="text-xs text-slate-500">{course.category}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-slate-600">{course.instructor}</td>
                                <td className="px-6 py-4 font-medium text-slate-900">${course.price}</td>
                                <td className="px-6 py-4">
                                    <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">Published</Badge>
                                </td>
                                <td className="px-6 py-4 text-slate-600">120</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-primary-600">
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-red-600">
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
