"use client";
import React from 'react';
import Image from 'next/image';
import Header from '../components/header';
import WCU from '../components/wcu';
import OurValues from '../components/ourvalues';
import ContactUs from '../components/contactus';
import Footer from '../components/footer';
export default function VM() {
    return (
        <main className='bg-white'>

            {/* Header */}
            <Header />

            {/* Vision Section */}
            <section id='vision' className="py-12 sm:py-16 bg-white mt-8 sm:mt-10">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
                        {/* Image - Responsive sizing */}
                        <div className="w-full md:w-[90%] lg:w-[450px] relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
                            <Image
                                src="/Avant-Website-Photos/avant_vision.png"
                                alt="Avant Pharma Vision"
                                width={500}
                                height={600}
                                className="w-full h-full object-cover rounded-lg border-2 border-gray-300 shadow-lg"
                            />
                        </div>

                        {/* Content - Responsive sizing */}
                        <div className="w-full md:w-[90%] lg:w-[500px] mt-6 sm:mt-0">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#009B7A] mb-4 sm:mb-6">VISION</h2>
                            <div className="text-gray-600 space-y-3 sm:space-y-4 mb-6 text-sm sm:text-base">
                                <p>
                                    We want to be a vision driven company focusing on capitalizing
                                    our human resources, implementing advance technologies and
                                    finding innovative solutions which are pivotal in achieving par
                                    excellence in quality, productivity and cost efficiency, helping us
                                    in not only making our business efficient but also in capturing a
                                    decent place in the local and global pharmaceuticals markets.
                                </p>
                                <p>
                                    We also want to be a company where projects are totally backed
                                    up by equity financing and retained earnings are sufficient
                                    maintained to facilitate in the continious provision of unmatched
                                    benefits to stakeholders and fulfillment of social responsibilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section id='mission' className="py-12 sm:py-16 bg-white mt-8 sm:mt-10">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
                        {/* Image - Responsive sizing */}
                        <div className="w-full md:w-[90%] lg:w-[450px] relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden order-1 lg:order-2">
                            <Image
                                src="/Avant-Website-Photos/avant_mission.png"
                                alt="Avant Pharma Mission"
                                width={500}
                                height={600}
                                className="w-full h-full object-cover rounded-lg border-2 border-gray-300 shadow-lg"
                            />
                        </div>

                        {/* Content - Responsive sizing */}
                        <div className="w-full md:w-[90%] lg:w-[500px] mt-6 sm:mt-0 order-2 lg:order-1">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#009B7A] mb-4 sm:mb-6">MISSION</h2>
                            <div className="text-gray-600 space-y-3 sm:space-y-4 mb-6 text-sm sm:text-base">
                                <p>
                                    To produce premium quality medicines in the areas of proprietary
                                    prescription products, branded generics and niche therapeutic
                                    segments.
                                </p>
                                <p>
                                    We Produce medicines that confirm to cGMP requirements and
                                    cater the healthcare needs of not only the local but also the
                                    international markets.
                                </p>
                                <p>
                                    We work tirelessly to provide the highest quality and most
                                    affordable medicines to the ailing humanty, thereby contributing
                                    for the betterment of society.
                                </p>
                            </div>
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