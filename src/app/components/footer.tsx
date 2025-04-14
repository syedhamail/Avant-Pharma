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
                        className="w-full max-w-md md:w-[90%] rounded-lg border-2 border-gray-300 shadow-lg"
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
                        <span className="ml-2 sm:ml-3 text-lg sm:text-xl text-[#009B7A] font-bold">AVANT PHARMA</span>
                    </Link>

                    {/* Factory Addresses - Stack on mobile, row on larger screens */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
                        <div className="flex-1">
                            <p className="mb-1 font-bold">Factory 1:</p>
                            <p className="mb-1">Plot # 4/103, 4/104 Sector #21</p>
                            <p className="mb-1">Korangi Industrial Area,</p>
                            <p className="mb-1">Karachi-Pakistan.</p>
                        </div>
                        <div className="flex-1">
                            <p className="mb-1 font-bold">Factory 2:</p>
                            <p className="mb-1">Plot # M-28, Hub Industrial Trading</p>
                            <p className="mb-1">Estate, Hub-Pakistan.</p>
                            <p className="mb-1">Karachi-Pakistan.</p>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="w-full">
                        <p className="mb-1">
                            <span className="font-bold">Phone:</span> 021-35000583
                        </p>
                        <p className="mb-1">
                            <span className="font-bold">Email:</span> avantcommercial@gmail.com
                        </p>
                        <p className="">info@avantpharma.com.pk</p>
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