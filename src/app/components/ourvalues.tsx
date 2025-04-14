import React from "react";

export default function OurValues() {
    return (

        //Our Values 
        <section
          //  style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
            className="w-full py-16 px-4 mt-10">
            <h1 className="text-[#009B7A] text-4xl font-bold text-center mb-10">Our Values</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Quality Card */}
                <div className="bg-gray-100 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                        <div className="rounded-full p-2 mr-3" style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}>
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h2 className="text-[#009B7A] text-xl font-bold">Quality</h2>
                    </div>
                    <p className="text-gray-800">
                        We are relentless in our pursuit of the highest standards in pharmaceutical production and distribution.
                    </p>
                </div>

                {/* Integrity Card */}
                <div className="bg-gray-100 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                        <div className="rounded-full p-2 mr-3" style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}>
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h2 className="text-[#009B7A] text-xl font-bold">Integrity</h2>
                    </div>
                    <p className="text-gray-800">
                        Transparency and honesty guide every decision we make, from sourcing to delivering medicines to our clients.
                    </p>
                </div>

                {/* Innovation Card */}
                <div className="bg-gray-100 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                        <div className="rounded-full p-2 mr-3" style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}>
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                            </svg>
                        </div>
                        <h2 className="text-[#009B7A] text-xl font-bold">Innovation</h2>
                    </div>
                    <p className="text-gray-800">
                        We continually evolve to meet the changing needs of the healthcare industry, staying ahead with cutting-edge solutions.
                    </p>
                </div>

                {/* Customer-Centricity Card */}
                <div className="bg-gray-100 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                        <div className="rounded-full p-2 mr-3" style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}>
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 14.094A5.973 5.973 0 004 17v1H1v-1a3 3 0 013.75-2.906z" />
                            </svg>
                        </div>
                        <h2 className="text-[#009B7A] text-xl font-bold">Customer-Centricity</h2>
                    </div>
                    <p className="text-gray-800">
                        Our clients and their patients are at the heart of everything we do, driving us to deliver exceptional service and reliable products.
                    </p>
                </div>
            </div>
        </section>
    )
}
