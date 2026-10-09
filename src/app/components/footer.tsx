import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer
            style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
            className="text-white px-4 sm:px-6 py-8 sm:py-10 rounded-t-2xl md:rounded-t-3xl mt-16 sm:mt-[10%]"
        >
            <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 text-xs sm:text-sm">

                {/* Left Section - Company Image */}
                <div className="flex justify-center md:justify-start items-center px-4 sm:px-0">
                    <img
                        src="/Avant-Website-Photos/avant-company.png"
                        alt="avantcompany"
                        className="w-full max-w-md md:w-[90%] rounded-lg border-2 border-gray-300 shadow-lg object-cover"
                    />
                </div>

                {/* Right Section - Content */}
                <div className="flex flex-col space-y-4 sm:space-y-6 items-center text-center md:items-start md:text-left px-4 sm:px-0">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center hover:ease-in-out hover:scale-105 transition duration-300"
                    >
                        <img
                            src="/Avant-Website-Photos/avant-logo.png"
                            alt="Avant Logo"
                            className="w-10 h-12 sm:w-[50px] sm:h-[60px] rounded-full object-cover"
                        />
                        <span className="ml-2 sm:ml-3 text-lg sm:text-xl text-[#009B7A] font-bold">
                            AVANT PHARMA
                        </span>
                    </Link>

                    {/* Nested Grid: Factories on Left, Contact Info on Right */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-white/90">

                        {/* Left Column (Inside this grid) - Factories Stacked */}
                        <div className="flex flex-col space-y-4">
                            {/* Factory 1 */}
                            <div>
                                <h4 className="font-bold text-white mb-1">Factory 1</h4>
                                <p className="leading-relaxed">Plot # 4/103, 4/104 Sector #21</p>
                                <p className="leading-relaxed">Korangi Industrial Area,</p>
                                <p className="leading-relaxed">Karachi-Pakistan.</p>
                            </div>

                            {/* Factory 2 */}
                            <div>
                                <h4 className="font-bold text-white mb-1">Factory 2</h4>
                                <p className="leading-relaxed">Plot # M-28, Hub Industrial Trading</p>
                                <p className="leading-relaxed">Estate, Hub-Pakistan.</p>
                                <p className="leading-relaxed">Karachi-Pakistan.</p>
                            </div>
                        </div>

                        {/* Right Column (Inside this grid) - Contact Info */}
                        <div className="flex flex-col space-y-3 sm:border-l sm:border-white/20 sm:pl-4">
                            <div>
                                <h4 className="font-bold text-white mb-2">Contact Info</h4>

                                <div className="mb-3">
                                    <span className="block font-semibold text-white/80 text-[10px] uppercase mb-0.5">Email:</span>
                                    {/* Email Links */}
                                    <a href="mailto:avantpharma.pakistan@gmail.com" className="block leading-relaxed whitespace-nowrap hover:underline">
                                        avantpharma.pakistan@gmail.com
                                    </a>
                                    <a href="mailto:farazali84@yahoo.com" className="block leading-relaxed whitespace-nowrap hover:underline">
                                        farazali84@yahoo.com
                                    </a>
                                </div>

                                <div className="mb-3">
                                    <span className="block font-semibold text-white/80 text-[10px] uppercase mb-0.5">WhatsApp:</span>
                                    {/* WhatsApp Link */}
                                    <a 
                                        href="https://wa.me/923218288378" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="block leading-relaxed hover:underline"
                                    >
                                        03218288378
                                    </a>
                                </div>

                                <div>
                                    <span className="block font-semibold text-white/80 text-[10px] uppercase mb-0.5">Website:</span>
                                    <Link href="/" className="leading-relaxed hover:underline whitespace-nowrap">
                                        www.avantpharmaceutical.com.pk
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Copyright - Responsive margins and text size */}
            <div className="text-center text-xs mt-8 sm:mt-12 px-4">
                © Copyright 2025, All Rights Reserved by Avant Pharma Inc.
            </div>
        </footer>
    )
}