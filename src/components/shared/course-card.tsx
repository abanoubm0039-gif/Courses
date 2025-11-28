import Link from 'next/link';
import Image from 'next/image';
import { Star, Clock, BookOpen } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Course } from '@/types';

interface CourseCardProps {
    course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
    return (
        <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 w-full">
                <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-white/90 text-slate-900 hover:bg-white/100">
                    {course.category}
                </Badge>
            </div>

            <CardHeader className="p-4 pb-2">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3" /> {course.lessons} Lessons
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {course.duration}
                    </span>
                </div>
                <h3 className="font-bold text-lg leading-tight line-clamp-2 group-hover:text-primary-600 transition-colors">
                    <Link href={`/courses/${course.id}`}>
                        {course.title}
                    </Link>
                </h3>
                <p className="text-sm text-slate-500 mt-1">{course.instructor}</p>
            </CardHeader>

            <CardContent className="p-4 pt-0 flex-1">
                <div className="flex items-center gap-1 mt-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-sm">{course.rating}</span>
                    <span className="text-xs text-slate-400">(120 reviews)</span>
                </div>
            </CardContent>

            <CardFooter className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-lg text-primary-600">${course.price}</span>
                        {course.originalPrice && (
                            <span className="text-sm text-slate-400 line-through">${course.originalPrice}</span>
                        )}
                    </div>
                </div>
                <Link href={`/courses/${course.id}`}>
                    <Button size="sm" variant="outline">View Details</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
