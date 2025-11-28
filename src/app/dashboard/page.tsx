import { CourseCard } from '@/components/shared/course-card';
import { FEATURED_COURSES } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DashboardPage() {
    // Mock purchased courses (subset of featured)
    const myCourses = FEATURED_COURSES.slice(0, 2);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">My Courses</h1>
                <p className="text-slate-500">Continue learning where you left off.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myCourses.map(course => (
                    <div key={course.id} className="flex flex-col h-full">
                        <CourseCard course={course} />
                        <div className="mt-4">
                            <Link href={`/dashboard/courses/${course.id}`}>
                                <Button className="w-full">Continue Learning</Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
