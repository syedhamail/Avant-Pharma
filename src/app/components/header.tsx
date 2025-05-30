"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !(dropdownRef.current as any).contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center justify-between">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <Link
                        href="/"
                        className="flex items-center hover:ease-in-out hover:scale-105 transition duration-300"
                    >
                        <img
                            src="/Avant-Website-Photos/avant-logo.png"
                            alt="Avant Pharma"
                            className="w-[50px] h-[60px] md:w-[90px] md:h-[90px] rounded-full object-cover"
                        />
                        <span className="ml-1 md:ml-3 text-md md:text-3xl text-[#009B7A] font-bold">
                            Avant Pharmaceuticals (Pvt) Ltd
                        </span>
                    </Link>

                    {/* Hamburger Icon for Mobile */}
                    <button
                        className="md:hidden text-black"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Navigation Links */}
                <nav
                    className={`w-full md:w-auto flex flex-col md:flex-row items-center text-base mt-4 md:mt-0 transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden md:flex"
                        }`}
                >
                    <Link
                        href="/"
                        className="mr-0 md:mr-7 mb-4 md:mb-0 text-black font-bold text-lg hover:text-[#009B7A] transition duration-300 hover:scale-105"
                    >
                        Home
                    </Link>
                    <Link
                        href="/aboutus"
                        className="mr-0 md:mr-7 mb-4 md:mb-0 text-black font-bold text-lg hover:text-[#009B7A] transition duration-300 hover:scale-105"
                    >
                        About
                    </Link>
                    <div className="relative" ref={dropdownRef}>
                        <div onClick={() => setIsOpen(!isOpen)}>
                            <button className="mr-0 md:mr-7 mb-4 md:mb-0 text-black font-bold text-lg hover:text-[#009B7A] transition duration-300 hover:scale-105">
                                Products
                            </button>
                        </div>

                        {isOpen && (
                            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 z-50 py-2">
                                <Link
                                    href="/registered-products"
                                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#E0F7F4] hover:text-[#009B7A] transition"
                                >
                                    Registered Product{"'"}s
                                </Link>
                                <Link
                                    href="/products-packs"
                                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#E0F7F4] hover:text-[#009B7A] transition"
                                >
                                    Product{"'"}s Packs
                                </Link>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={() => {
                            setMenuOpen(false); // Close menu if mobile
                            window.location.href = "#contact";
                        }}
                        style={{
                            background:
                                "linear-gradient(to right, #00B894, #00D2C6)",
                        }}
                        className="flex justify-center mt-1 w-full md:w-auto text-center inline-flex items-center border-0 py-2 px-5 rounded-lg text-white font-bold hover:scale-105 transition duration-300"
                    >
                        Contact Us
                    </button>
                </nav>
            </div>
        </header>
    );
}
