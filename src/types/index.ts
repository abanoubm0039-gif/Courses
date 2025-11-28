export interface Course {
    id: string;
    title: string;
    instructor: string;
    thumbnail: string;
    price: number;
    originalPrice?: number;
    rating: number;
    lessons: number;
    duration: string;
    category: string;
}
