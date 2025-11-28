import { Course } from "@/types";

export const FEATURED_COURSES: Course[] = [
    {
        id: "1",
        title: "Complete Web Development Bootcamp 2024",
        instructor: "John Doe",
        thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
        price: 89.99,
        originalPrice: 199.99,
        rating: 4.8,
        lessons: 156,
        duration: "42h 30m",
        category: "Development"
    },
    {
        id: "2",
        title: "Digital Marketing Masterclass",
        instructor: "Sarah Smith",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
        price: 49.99,
        originalPrice: 99.99,
        rating: 4.6,
        lessons: 84,
        duration: "28h 15m",
        category: "Marketing"
    },
    {
        id: "3",
        title: "UI/UX Design Fundamentals",
        instructor: "Alex Johnson",
        thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600",
        price: 69.99,
        originalPrice: 149.99,
        rating: 4.9,
        lessons: 62,
        duration: "18h 45m",
        category: "Design"
    },
    {
        id: "4",
        title: "Python for Data Science and Machine Learning",
        instructor: "Emily Chen",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
        price: 94.99,
        originalPrice: 189.99,
        rating: 4.7,
        lessons: 110,
        duration: "36h 20m",
        category: "Data Science"
    }
];

export const CATEGORIES = [
    { id: "dev", name: "Development", count: 120, icon: "Code" },
    { id: "design", name: "Design", count: 85, icon: "Palette" },
    { id: "marketing", name: "Marketing", count: 64, icon: "TrendingUp" },
    { id: "business", name: "Business", count: 92, icon: "Briefcase" },
    { id: "music", name: "Music", count: 30, icon: "Music" },
    { id: "photo", name: "Photography", count: 45, icon: "Camera" },
];

export const TESTIMONIALS = [
    {
        id: 1,
        name: "Michael Brown",
        role: "Web Developer",
        content: "This platform changed my career. The courses are top-notch and the instructors are very knowledgeable.",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100"
    },
    {
        id: 2,
        name: "Jessica Lee",
        role: "UX Designer",
        content: "I loved the practical approach of the design courses. I was able to build my portfolio while learning.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
    },
    {
        id: 3,
        name: "David Wilson",
        role: "Entrepreneur",
        content: "The business courses helped me launch my startup. Highly recommended for anyone looking to upskill.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
    }
];

export const FAQ_ITEMS = [
    {
        title: "How do I access my courses?",
        content: "Once you purchase a course, you can access it anytime from your dashboard. The content is available 24/7."
    },
    {
        title: "Is there a money-back guarantee?",
        content: "Yes, we offer a 30-day money-back guarantee if you are not satisfied with the course content."
    },
    {
        title: "Can I download the videos?",
        content: "Most courses allow you to download video lectures for offline viewing through our mobile app."
    },
    {
        title: "Do I get a certificate?",
        content: "Yes, upon successful completion of a course, you will receive a verifiable digital certificate."
    }
];
