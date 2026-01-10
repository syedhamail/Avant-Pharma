"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";


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

    // Cart context
    const { cart, removeFromCart } = useCart();
    const [cartOpen, setCartOpen] = useState(false);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);



    return (

        <main className="bg-white shadow-md sticky top-0 z-50">

            {/* 🔥 Discount Top Bar */}
            <div className="bg-gradient-to-r from-[#00B894] to-[#00D2C6] text-white text-center py-2 text-sm md:text-lg lg:text-xl font-semibold">
                🎉 Flat <span className="font-bold">20% OFF</span> on All Products – Limited Time Offer
            </div>

            {/* Header Section */}
            <header className="">

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
                        {/* Home */}
                        <Link
                            href="/"
                            className="mr-0 md:mr-7 mb-4 md:mb-0 text-black font-bold text-lg hover:text-[#009B7A] transition duration-300 hover:scale-105"
                        >
                            Home
                        </Link>

                        {/* About us*/}
                        <Link
                            href="/aboutus"
                            className="mr-0 md:mr-7 mb-4 md:mb-0 text-black font-bold text-lg hover:text-[#009B7A] transition duration-300 hover:scale-105"
                        >
                            About
                        </Link>

                        {/* All Products */}
                        <Link
                            href="/all-products"
                            className="mr-0 md:mr-7 mb-4 md:mb-0 text-black font-bold text-lg hover:text-[#009B7A] transition duration-300 hover:scale-105"
                        >
                            All Products
                        </Link>

                        {/* Products */}
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

                        {/* Shopping Bag */}
                        <div className="relative mr-0 md:mr-7 mb-4 md:mb-0 flex items-center">
                            <button onClick={() => setCartOpen(!cartOpen)} className="relative flex items-center gap-1 md:gap-0">

                                {/* Small screen label */}
                                <span className="md:hidden mr-1 text-black font-bold text-lg">Cart</span>
                                <ShoppingBag size={28} />

                                {mounted && cart.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                        {cart.length}
                                    </span>
                                )}

                            </button>

                            {/* CART DROPDOWN */}
                            {cartOpen && (
                                <div
                                    className="
                                    fixed md:absolute
                                    left-1/2 md:left-auto
                                    -translate-x-1/2 md:translate-x-0
                                    md:right-0
                                    top-16 md:top-full
                                    mt-2
                                    w-[90vw] max-w-sm
                                    bg-white shadow-lg rounded-lg p-4 z-50
                                "
                                >

                                    <div className="flex justify-between">
                                        <h3 className="font-semibold mb-3">Shopping Cart</h3>

                                        {/* X icon to close dropdown */}
                                        <div className="flex justify-end mb-2">
                                            <button onClick={() => setCartOpen(false)}>
                                                <X size={20} className="text-gray-600 hover:text-gray-900" />
                                            </button>
                                        </div>
                                    </div>

                                    {cart.length === 0 ? (
                                        <p className="text-sm text-gray-500">Cart is empty</p>
                                    ) : (
                                        <div className="max-h-[320px] overflow-y-auto pr-2 space-y-4">
                                            {cart.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="flex gap-4 pb-3 border-b last:border-b-0"
                                                >
                                                    <img
                                                        src={item.image}
                                                        className="w-14 h-14 object-contain bg-gray-100 rounded"
                                                    />

                                                    <div className="flex-1">
                                                        <p className="text-sm font-medium line-clamp-1">
                                                            {item.name}
                                                        </p>
                                                        <p className="text-sm text-gray-600">
                                                            Rs.{item.price}
                                                        </p>
                                                    </div>

                                                    <button onClick={() => removeFromCart(item.id)}>
                                                        <Trash2 size={16} className="text-red-500" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}


                                    <Link href="/cart" onClick={() => setCartOpen(false)}>
                                        <button className="w-full bg-[#009B7A] text-white mt-3 px-4 py-2 font-medium hover:bg-[#07b38e] rounded">
                                            View Cart
                                        </button>
                                    </Link>

                                </div>
                            )}

                        </div>

                        {/* Contact us */}
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

        </main>
    );
}
