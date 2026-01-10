import React from 'react';

export default function WCU() {
    return (
        <section
            style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
            className="flex items-center justify-center min-h-[50vh] p-6 sm:p-10 mt-10"
        >
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-10 md:gap-20">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center md:text-left w-full md:w-1/3">
                    Why Choose Us?
                </h2>

                {/* Paragraph */}
                <p className="text-white text-base sm:text-lg leading-relaxed w-full md:w-2/3 text-center md:text-left px-2">
                    Choosing <span className="font-bold">Avant Pharma</span> means partnering with a company that understands
                    the importance of quality in healthcare. We pride ourselves on delivering consistently reliable pharmaceutical
                    products that help healthcare providers improve patient care and outcomes. Our expertise, coupled with our deep
                    commitment to safety and innovation, makes us a trusted partner for healthcare providers.
                </p>
            </div>
        </section>
    );
}
