"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const blogs = [
    {
        id: 1,
        slug: "BUOO",
        title: "Bone Up on Osteoporosis!",
        excerpt: "A Simple Guide to Stronger, Healthier Bones",
        image: "/Blog-images/Bone Up on Osteoporosis!.png",
        date: "JAN 01, 2026",
    },
    {
        id: 2,
        slug: "BYWOOUTI",
        title: "Berry Your Way Out of Urinary Tract Infections",
        excerpt: "A Simple & Natural Guide to Urinary Health",
        image: "/Blog-images/Berry Your Way Out of Urinary Tract Infections.png",
        date: "JAN 01, 2026",
    },
    {
        id: 3,
        slug: "TAAY",
        title: "The Anaemia Around You",
        excerpt: "Understanding a Common Yet Overlooked Health Issue",
        image: "/Blog-images/The Anaemia Around You.png",
        date: "JAN 01, 2026",
    },
    {
        id: 4,
        slug: "MASHP",
        title: "Migraine A Serious Headache Problem",
        excerpt: "Understanding More Than Just Head Pain",
        image: "/Blog-images/Migraine – A Serious Headache Problem.png",
        date: "JAN 01, 2026",
    },
];

export default function BlogSection() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % blogs.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#009B7A] mb-8">
                WELLNESS BLOG
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* LEFT SLIDER */}
                <div className="lg:col-span-2 relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                        src={blogs[active].image}
                        alt={blogs[active].title}
                        className="w-full h-[260px] sm:h-[340px] lg:h-[420px] object-cover transition-all duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">

                        <h2 className="text-lg sm:text-2xl font-bold mt-2">
                            {blogs[active].title}
                        </h2>

                        <p className="text-xs sm:text-sm mt-2 opacity-90 max-w-xl line-clamp-3">
                            {blogs[active].excerpt}
                        </p>

                        <div className="mt-3 flex items-center justify-between">
                            <span className="text-xs opacity-70">
                                {blogs[active].date}
                            </span>

                            <Link
                                href={`/blog-details/${blogs[active].slug}`}
                                className="text-green-400 text-sm font-medium hover:underline"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>

                    {/* Slider Controls */}
                    <button
                        onClick={() =>
                            setActive((active - 1 + blogs.length) % blogs.length)
                        }
                        className="absolute top-1/2 left-3 sm:left-4 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <button
                        onClick={() => setActive((active + 1) % blogs.length)}
                        className="absolute top-1/2 right-3 sm:right-4 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>

                {/* RIGHT BLOG LIST */}
                <div className="space-y-3">
                    {blogs.map((blog, index) => (
                        <Link
                            key={blog.id}
                            href={`/blog-details/${blog.slug}`}
                            onClick={() => setActive(index)}
                            className={`flex gap-3 p-3 rounded-xl transition border ${active === index
                                    ? "bg-green-50 border-green-400"
                                    : "bg-white hover:bg-gray-50"
                                }`}
                        >
                            <img
                                src={blog.image}
                                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
                                alt={blog.title}
                            />

                            <div className="flex-1">
                                <h4 className="text-sm font-semibold line-clamp-2">
                                    {blog.title}
                                </h4>
                                <span className="text-xs text-gray-400">{blog.date}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
