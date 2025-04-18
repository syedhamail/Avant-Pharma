"use client";
import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative min-h-[75vh] flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/Avant-Website-Photos/avant_hero-sec-pic.png"
                    alt="Medical background"
                    className="w-full h-full object-cover opacity-70"
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 z-10 text-center pt-20 sm:pt-24 md:pt-28">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl sm:text-4xl md:text-[42px] font-bold text-gray-800 mb-6 leading-tight">
                        {'"'}A PRO ERA IN MEDICINE{'"'}
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold mb-8 max-w-2xl mx-auto">
                        A Company with the Vision of Customer’s Satisfaction
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-stretch">
                        <button
                            onClick={() => window.location.href = '/products-packs'}
                            style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                            className="w-full sm:w-auto inline-flex justify-center items-center font-semibold border-0 py-2.5 px-6 rounded-lg text-white hover:scale-105 transition duration-300"
                        >
                            Explore Products
                        </button>
                        <button
                            onClick={() => window.location.href = '#contact'}
                            style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                            className="w-full sm:w-auto inline-flex justify-center items-center font-semibold border-0 py-2.5 px-6 rounded-lg text-white hover:scale-105 transition duration-300"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
