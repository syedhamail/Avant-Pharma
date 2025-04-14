"use client";
import React from 'react';
import Header from '../../components/header';
import ContactUs from '../../components/contactus';
import Footer from '../../components/footer';
import Image from 'next/image';
import Link from 'next/link';
export default function Quality() {
    return (
        <main className='bg-white'>

            {/* Header */}
            <Header />

            {/* Quality Section */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10">
                        {/* Image - Responsive sizing */}
                        <div className="w-full md:w-[90%] lg:w-[450px] relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
                            <Image
                                src="/Avant-Website-Photos/avant_quality.png"
                                alt="Avant Pharma Quality Standards"
                                width={500}
                                height={600}
                                className="w-full h-full object-cover rounded-lg border-2 border-gray-300 shadow-lg"
                            />
                        </div>

                        {/* Content - Responsive sizing */}
                        <div className="w-full lg:w-[600px] mt-6 lg:mt-0">
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#009B7A] mb-4 sm:mb-6">QUALITY</h2>
                            <div className="text-gray-600 space-y-4 text-sm sm:text-base">
                                <p>
                                    Avant Pharma strives for continuous improvement through establishing and
                                    reviewing the quality policy, quality objectives and outcome of internal quality
                                    audits, corrective and preventive actions annually. Also providing training to its
                                    employees, adoption of latest techniques and the implementation of documented
                                    procedures at all levels.
                                </p>
                                <p>
                                    Our Management provides good working environment and makes it sure that all
                                    the required resources are available and proper training is provided to the status
                                    and strives ceaselessly day after day to improve their skills.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Content - Responsive padding and text */}
                    <div className='mt-4 sm:mt-10'>
                        <div className="text-gray-600 space-y-4 text-sm sm:text-base">
                            <p>
                                We strive to enhance the quality of human life and help humanity to attain excellence in all aspects of
                                quality and standards and provide quality products to all suffering people.
                                We believe continuous improvement in our personnel, processes, products &
                                yielding the best we can. We will provide total satisfaction to our direct and
                                indirect customers through quality products and services and observe high
                                Ethical Standards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  */}
            <section>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        {/* Product Development */}
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div
                                style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                                className="p-6 rounded-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/Avant-Website-Photos/avant_product-development.png" alt="content" />
                                <h2 className="text-md text-black text-center font-bold title-font mb-4">
                                    PRODUCT DEVELOPMENT
                                </h2>
                                <p className="leading-relaxed text-base text-sm text-white">
                                    Avant Pharma has a modern Development facility, equipped with the state
                                    of the art instruments and laboratory scale machines..
                                </p>
                                <Link href="/avant/productDevelopment" className="mt-3 text-black inline-flex items-center hover:text-gray-700 font-medium transition-colors">
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