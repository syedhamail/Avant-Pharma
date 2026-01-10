"use client";
import React from 'react';
import Header from '../components/header';
import WCU from '../components/wcu';
import OurValues from '../components/ourvalues';
import ContactUs from '../components/contactus';
import Footer from '../components/footer';
export default function HPS() {
    return (
        <main className='bg-white'>

            {/* Header */}
            <Header />

            {/* History Section */}
            <section id='history' className="px-4 sm:px-6 py-8 sm:py-12">
                {/* Heading */}
                <div className="flex justify-center">
                    <h1
                        style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center py-3 px-4 sm:py-4 sm:px-6 text-white rounded-lg shadow-lg w-full max-w-md lg:max-w-xl"
                    >
                        HISTORY
                    </h1>
                </div>

                {/* Paragraph */}
                <div className="flex justify-center mt-8 sm:mt-10">
                    <div
                        style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                        className="text-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-4xl"
                    >
                        <p className="text-sm sm:text-base leading-relaxed sm:leading-loose">
                            Today, Avant Pharma is one of the fastest growing national pharmaceuticals companies, proud
                            of the current market share of its products. Avant Pharma products have unique advantages in
                            the healthcare system. The company is continuously evaluating new products to add to the
                            existing portfolio. The healing touch. It honors every individual{"'"}s right to live without
                            suffering & sickness. At Avant Pharma, we dedicate ourselves to medical advancement in
                            recognition of the fact that there can be no greater world than one free from disease.
                        </p>
                        <p className="mt-4 text-sm sm:text-base leading-relaxed sm:leading-loose">
                            Avant Pharma is dedicated to enhancing human life through developments, manufacturing, and
                            sales of quality pharmaceutical products. The company was established in 2012, with its main
                            office and manufacturing facility in Karachi, Pakistan. Avant Pharma thanks doctors, pharmacists,
                            and healthcare institutions who have placed trust in the quality and efficacy of its products.
                            Avant Pharmaceuticals is built on a solid foundation of talented people, unparalleled research and
                            development platforms, strong clinical and commercial presence, and trust from its loyal, quality-conscious
                            prescribers.
                        </p>
                        <p className="mt-4 text-sm sm:text-base leading-relaxed sm:leading-loose">
                            These factors have enabled Avant Pharma, in just a few years, to grow from a bold
                            young startup to a leading pharmaceutical company in Pakistan. Besides contributing significantly
                            to the economy through its growth, Avant Pharma has also contributed to exports to South Asia, Central Asia,
                            the Middle East, and Africa, with Europe in progress. Avant Pharma{"'"}s growth motive is to believe in tomorrow
                            and fulfill it, with extensive plans underway to meet the current cGMP.
                        </p>
                    </div>
                </div>
            </section>

            {/* PHILOSOPHY Section */}
            <section id='philosophy' className="px-4 sm:px-6 py-8 sm:py-12">
                {/* Heading */}
                <div className="flex justify-center">
                    <h1
                        style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center py-3 px-4 sm:py-4 sm:px-6 text-white rounded-lg shadow-lg w-full max-w-md lg:max-w-xl"
                    >
                        PHILOSOPHY
                    </h1>
                </div>

                {/* Paragraph */}
                <div className="flex justify-center mt-8 sm:mt-10">
                    <div
                        style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                        className="text-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-4xl"
                    >
                        <p className="text-sm sm:text-base leading-relaxed sm:leading-loose">
                            We at AVANT PHARMA pharma group are united in a common mission with shared values that drive
                            us to achieve an ambitious vision: {'"'}Customer caring Company{'"'} to be recognized as the leading
                            pharmaceutical company on the globe. Avant Pharma Group endeavors to produce the best products,
                            earn the best returns, offer the best package, and contribute to the communities in which we work
                            and live.
                        </p>
                        <p className="mt-4 text-sm sm:text-base leading-relaxed sm:leading-loose">
                            To accomplish this, we need to {'"'}Attract, Engage, Develop, Motivate & Retain Exceptional Talent{'"'}.
                            We believe that every individual should have the chance to achieve significant growth, both financially
                            and professionally.
                        </p>
                    </div>
                </div>
            </section>

            {/* STRENGTHS Section */}
            <section id='strengths' className="px-4 sm:px-6 py-8 sm:py-12">
                {/* Heading */}
                <div className="flex justify-center">
                    <h1
                        style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center py-3 px-4 sm:py-4 sm:px-6 text-white rounded-lg shadow-lg w-full max-w-md lg:max-w-xl"
                    >
                        STRENGTHS
                    </h1>
                </div>

                {/* Paragraph */}
                <div className="flex justify-center mt-8 sm:mt-10">
                    <div
                        style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                        className="text-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-4xl"
                    >
                        <p className="text-sm sm:text-base leading-relaxed sm:leading-loose">
                            Avant Pharma group believes that skills, commitment, modern concepts, new ways of working,
                            supportive organizational structure, state-of-the-art technologies, innovative methods, and
                            a motivated workforce are the key strengths towards our corporate success.
                        </p>
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