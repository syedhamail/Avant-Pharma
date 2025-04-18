"use client";
import React from 'react';
import Image from 'next/image';
import Header from '../components/header';
import ContactUs from '../components/contactus';
import Footer from '../components/footer';

export default function Products() {
    const productCategories = [
        {
            name: "PRODUCTs PACKs",
            items: Array.from({ length: 106 }, (_, i) => ({
                image: `/Avant-Products/${i + 1}.png`,
            }))
        },
        {
            name: "GENERAL HEALTH PORTFOLIO",
            items: Array.from({ length: 32 }, (_, i) => ({
                image: `/General-Health-Portfolio/${i + 1}.png`,
            }))
        },
        {
            name: "AVANT PEADS CARE",
            items: Array.from({ length: 17 }, (_, i) => ({
                image: `/Avant-Peads-Care/${i + 1}.png`,
            }))
        },
        {
            name: "AVANT CNS MIND FORCE",
            items: Array.from({ length: 32 }, (_, i) => ({
                image: `/Avant-CNS-Mind-Force/${i + 1}.png`,
            }))
        },
        {
            name: "LIFE HEALTH CARE DIVISION",
            items: Array.from({ length: 24 }, (_, i) => ({
                image: `/Life-Health-Care-Division/${i + 1}.png`,
            }))
        }
    ];

    return (
        <main className='bg-white'>
            {/* Header */}
            <Header />

            {/* Product Categories */}
            {productCategories.map((category, index) => (
                <section key={index} className="text-gray-600 body-font mt-6 sm:mt-10">
                    <div className="container px-4 sm:px-5 py-8 sm:py-10 mx-auto">
                        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#009B7A] mb-6 sm:mb-10">
                            {category.name}
                        </h1>
                        <div className="flex flex-wrap -mx-2 sm:-mx-3">
                            {category.items.map((product, idx) => (
                                <div key={idx} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2 sm:p-3">
                                    <div className="block relative h-40 sm:h-48 md:h-56 rounded overflow-hidden">
                                        <Image
                                            alt={`${category.name} product ${idx + 1}`}
                                            src={product.image}
                                            width={300}
                                            height={300}
                                            className="object-contain object-center w-full h-full block rounded-lg border-2 border-gray-300 shadow-lg"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Contact us */}
            <div className='mt-6 sm:mt-10'>
                <ContactUs />
            </div>

            {/* Footer */}
            <Footer />
        </main>
    );
};