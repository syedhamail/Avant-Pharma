"use client";
import React from "react";

export default function ContactUs() {
    const handleClick = () => {
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        const email = "avantpharmainfo@gmail.com";
        const subject = encodeURIComponent("Inquiry from website");
        const body = encodeURIComponent("Hi Avant Pharma Team,\n\nI have a question regarding...");

        if (isMobile) {
            // For Mobile: Use mailto link
            window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        } else {
            // For Desktop: Open Gmail compose in new tab
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
            window.open(gmailUrl, "_blank");
        }
    };

    return (
        <section
            id="contact"
            style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
            className="rounded-lg md:rounded-2xl p-5 sm:p-6 md:p-8 mx-auto w-full sm:w-5/6 md:max-w-3xl relative overflow-hidden mt-10 sm:mt-16"
        >
            {/* Decorative curves - responsive sizing */}
            <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-br-full border-t-2 sm:border-t-3 md:border-t-4 border-l-2 sm:border-l-3 md:border-l-4 border-[#009B7A]"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-tl-full border-b-2 sm:border-b-3 md:border-b-4 border-r-2 sm:border-r-3 md:border-r-4 border-[#009B7A]"></div>

            <div className="relative z-10">
                <h2 className="text-lg sm:text-xl font-semibold text-white mb-1">Contact Us</h2>
                <p className="text-xs sm:text-sm text-gray-100 mb-4 sm:mb-5">Have a question? We{"'"}re here to help.</p>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 w-full">
                    <input
                        type="email"
                        value="avantpharmainfo@gmail.com"
                        readOnly
                        className="flex-1 rounded sm:rounded-l-md sm:rounded-r-none px-3 sm:px-4 py-2 border border-gray-300 bg-white text-xs sm:text-sm text-gray-700 focus:outline-none"
                    />
                    <button
                        onClick={handleClick}
                        className="bg-[#009B7A] text-white px-4 sm:px-5 py-2 rounded sm:rounded-r-md sm:rounded-l-none text-xs sm:text-sm font-semibold hover:ease-in-out hover:scale-105 transition duration-300"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    )
}