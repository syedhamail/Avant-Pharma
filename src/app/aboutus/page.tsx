"use client";
import React from 'react';
import Image from 'next/image';
import Header from '../components/header';
import WCU from '../components/wcu';
import OurValues from '../components/ourvalues';
import ContactUs from '../components/contactus';
import Footer from '../components/footer';
export default function AboutSection() {
    return (
        <main className='bg-white'>

            {/* Header */}
            <Header />

            {/* Aboutus Section */}
            <section className="py-10 sm:py-16 bg-white mt-8 sm:mt-10">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
                        {/* Image - Full width on mobile, fixed width on larger screens */}
                        <div className="w-full sm:w-[90%] md:w-[450px] relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
                            <Image
                                src="/Avant-Website-Photos/farazSb.png"
                                alt="Faraz Ali - Chairman of Avant Pharma"
                                width={500}
                                height={600}
                                className="w-full h-full object-cover rounded-lg border-2 border-gray-300 shadow-lg"
                            />
                        </div>

                        {/* Content - Full width on mobile, fixed width on larger screens */}
                        <div className="w-full md:w-[90%] lg:w-[500px] mt-6 sm:mt-0">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#009B7A] mb-4 sm:mb-6">About us</h2>
                            <h3 className='font-bold text-xl sm:text-2xl text-[#009B7A] mb-3 sm:mb-4'>
                                Chairman: Faraz Ali
                            </h3>
                            <div className="text-gray-600 space-y-3 sm:space-y-4 mb-4 text-sm sm:text-base">
                                <p>
                                    Avant Pharma has been operating in Pakistan for more than 11 years. Over this period, the company has
                                    successfully developed and strengthened its pharmaceutical marketing and manufacturing base, which
                                    enabled us to achieve the distinction of being the fastest growing national pharmaceutical company.
                                    We, by the grace of God Almighty, are now amongst the leading pharmaceutical companies operating in Pakistan.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Content - Responsive padding and text */}
                    <div className='sm:mt-10'>
                        <div className="text-gray-600 space-y-3 sm:space-y-4 mb-6 text-sm sm:text-base">
                            <p>
                                The key reasons for Avant Pharma success include recognition of our employees as our prime resource and putting continuous
                                emphasis on their training and development for enhancement of their professional skills. Strong work ethics, mutual trust,
                                close teamwork, professionalism and continuous endeavor for improvement of quality are some of the other guiding principles
                                of our corporate philosophy.
                            </p>
                            <p className="mt-4">
                                In this era of global competitiveness, Avant Pharma continues to focus on the quality of our products and to introduce new innovative
                                healthcare products. We are confident that InshaAllah (God willing) Avant Pharma will continue to grow and move ahead.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <WCU />

            {/* Our Values Section */}
            <OurValues />

            {/*Contact us*/}
            <ContactUs />

            {/* Footer */}
            <Footer />

        </main>
    );
};