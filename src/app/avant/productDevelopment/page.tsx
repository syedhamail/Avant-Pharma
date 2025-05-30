"use client";
import React from 'react';
import Header from '../../components/header';
import ContactUs from '../../components/contactus';
import Footer from '../../components/footer';
import Image from 'next/image';
import Link from 'next/link';
export default function ProductDevelopment() {
    return (
        <main className='bg-white'>

            {/* Header */}
            <Header />

            {/* Product Development Section */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10">
                        {/* Image - Responsive sizing */}
                        <div className="w-full md:w-[90%] lg:w-[450px] relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
                            <Image
                                src="/Avant-Website-Photos/avant_product-development.png"
                                alt="Avant Pharma Product Development"
                                width={500}
                                height={600}
                                className="w-full h-full object-cover rounded-lg border-2 border-gray-300 shadow-lg"
                            />
                        </div>

                        {/* Content - Responsive sizing */}
                        <div className="w-full lg:w-[600px] mt-6 lg:mt-0">
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#009B7A] mb-4 sm:mb-6">PRODUCT DEVELOPMENT</h2>
                            <div className="text-gray-600 space-y-3 text-sm sm:text-base">
                                <p>
                                    Avant Pharma has a modern Development facility, equipped with the state
                                    of the art instruments and laboratory scale machines. Our laboratory is
                                    capable of producing all dosage forms of pharmaceuticals and performs
                                    various functions simultaneously.
                                </p>
                                <p>
                                    All new molecules received from our multinational partners undergo studies
                                    for compatibility, stability and proper dosage forms to meet local conditions.
                                    New formulations are developed for our own products in different dosage
                                    forms. Continuous improvement is carried out on our existing products to
                                    enhance the stability and efficiency in intended use.
                                </p>
                                <p>
                                    Before launching a new product, pilot batches are produced at lab scale.
                                    After proper testing and conducting stability studies and positive feedback,
                                    the product is recommended for commercial production. These commercial
                                    batches are then validated before they are released for marketing.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/*  */}
            <section>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        {/* Quality */}
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div
                                style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                                className="p-6 rounded-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/Avant-Website-Photos/avant_quality.png" alt="content" />
                                <h2 className="text-md text-black text-center font-bold title-font mb-4">
                                    QUALITY
                                </h2>
                                <p className="leading-relaxed text-base text-sm text-white">
                                    Avant Pharma strives for continuous improvement through establishing and
                                    reviewing the quality policy..
                                </p>
                                <Link href="/avant/quality" className="mt-3 text-black inline-flex items-center hover:text-gray-700 font-medium transition-colors">
                                    Read More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Manufacturing Plant */}
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div
                                style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                                className="p-6 rounded-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/Avant-Website-Photos/avant_manufacturing-plant.png" alt="content" />
                                <h2 className="text-md text-black text-center font-bold title-font mb-4">
                                    MANUFACTURING PLANT
                                </h2>
                                <p className="leading-relaxed text-base text-sm text-white">
                                    We have a modern manufacturing plant situated in Karachi, Pakistan which is
                                    cGMP / Cglp compliant and well equipped..
                                </p>
                                <Link href="/avant/manufacturingPlant" className="mt-3 text-black inline-flex items-center hover:text-gray-700 font-medium transition-colors">
                                    Read More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Research & Development */}
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div
                                style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                                className="p-6 rounded-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/Avant-Website-Photos/avant_research-&-development.png" alt="content" />
                                <h2 className="text-md text-black text-center font-bold title-font mb-4">
                                    RESEARCH & DEVELOPMENT
                                </h2>
                                <p className="leading-relaxed text-base text-sm text-white">
                                    Research & Development (R&D) generally stands as backbone
                                    of pharmaceuticals industry. In AVANT PHARMA we are..
                                </p>
                                <Link href="/avant/research&Development" className="mt-3 text-black inline-flex items-center hover:text-gray-700 font-medium transition-colors">
                                    Read More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Sales & Marketing */}
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div
                                style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                                className="p-6 rounded-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/Avant-Website-Photos/avant_sales-&-marketing.png" alt="content" />
                                <h2 className="text-md text-black text-center font-bold title-font mb-4">
                                    SALES & MARKETING
                                </h2>
                                <p className="leading-relaxed text-base text-sm text-white">
                                    AVANT PHARMA believes in transparent modes of marketing; transmiting a reliable brand image to
                                    its customers.
                                </p>
                                <Link href="/avant/sales&marketing" className="mt-3 text-black inline-flex items-center hover:text-gray-700 font-medium transition-colors">
                                    Read More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Export Operations */}
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div
                                style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                                className="p-6 rounded-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/Avant-Website-Photos/avant_export-operations.png" alt="content" />
                                <h2 className="text-md text-black text-center font-bold title-font mb-4">
                                    EXPORTS OPERATIONS
                                </h2>
                                <p className="leading-relaxed text-base text-sm text-white">
                                    To serve ailing humanity by offering quality pharmaceuticals
                                    products globally, yet keeping the coast as controlled as possible..
                                </p>
                                <Link href="/avant/exportOperations" className="mt-3 text-black inline-flex items-center hover:text-gray-700 font-medium transition-colors">
                                    Read More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Supply Chain */}
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div
                                style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                                className="p-6 rounded-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/Avant-Website-Photos/avant_supply-chain.png" alt="content" />
                                <h2 className="text-md text-black text-center font-bold title-font mb-4">
                                    SUPPLY CHAIN
                                </h2>
                                <p className="leading-relaxed text-base text-sm text-white">
                                    Supply Chain management is the planning & arrangement
                                    of materials, information and finances in a well
                                    coordinated..
                                </p>
                                <Link href="/avant/supplyChain" className="mt-3 text-black inline-flex items-center hover:text-gray-700 font-medium transition-colors">
                                    Read More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Contact us*/}
            <ContactUs />

            {/* Footer */}
            <Footer />

        </main>
    );
};