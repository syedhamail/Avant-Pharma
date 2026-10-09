"use client";

import React, { useState } from "react";
import products from "../data/products";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import Toast from "../components/Toast";

export default function ProductsPage() {

    const [filters, setFilters] = useState<{
        mainCategory: "all" | "nutraceuticals" | "general-psychiatry";
        subCategory: string;
        inStock: boolean;
        price: number;
    }>({
        mainCategory: "all",
        subCategory: "",
        inStock: false,
        price: 3000,
    });

    const [visibleCount, setVisibleCount] = useState(20);
    const [sortBy, setSortBy] = useState("az");
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [gpOpen, setGpOpen] = useState(false); // General & Psychiatry dropdown

    /* ================= GENERAL & PSYCHIATRY SUB-CATEGORIES ================= */
    const generalPsychiatryCategories = Array.from(
        new Set(
            products
                .filter((p) => p.generalPsychiatryProducts)
                .map((p) => p.category)
        )
    ).sort((a, b) => a.localeCompare(b));


    /* ================= FILTER + SORT ================= */
    const filteredProducts = [...products]
        .filter((product) => {

            // 🔹 ALL PRODUCTS
            if (filters.mainCategory === "all") {
                return (
                    (!filters.inStock || product.inStock !== false) &&
                    product.price <= filters.price
                );
            }

            // 🔹 NUTRACEUTICALS PRODUCTS
            if (filters.mainCategory === "nutraceuticals") {
                return (
                    product.nutraceuticalsProducts === true &&
                    (!filters.inStock || product.inStock !== false) &&
                    product.price <= filters.price
                );
            }

            // 🔹 GENERAL & PSYCHIATRY PRODUCTS
            if (filters.mainCategory === "general-psychiatry") {
                const matchesSubCategory =
                    !filters.subCategory ||
                    product.category === filters.subCategory;

                return (
                    product.generalPsychiatryProducts === true &&
                    matchesSubCategory &&
                    (!filters.inStock || product.inStock !== false) &&
                    product.price <= filters.price
                );
            }

            return true;
        })

        .sort((a, b) => {
            switch (sortBy) {
                case "best-selling":
                    return (b.rating || 0) - (a.rating || 0);

                case "price-low":
                    return a.price - b.price;

                case "price-high":
                    return b.price - a.price;

                case "az":
                default:
                    return a.name.localeCompare(b.name);

                case "za":
                    return b.name.localeCompare(a.name);
            }
        });


    /* ================= PAGINATION ================= */
    const visibleProducts = filteredProducts.slice(0, visibleCount);

    /* ================= ADD TO CART ================= */
    const { addToCart } = useCart();
    const [showToast, setShowToast] = useState(false);
    const [toastMsg, setToastMsg] = useState("");

    const handleAddToCart = (product: any) => {
        const result = addToCart(product);

        setToastMsg(
            result === "exists"
                ? "Product already in cart"
                : "Product added to cart!"
        );

        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

    /* ================= FORMAT CATEGORY LABEL ================= */
    const formatCategoryLabel = (text: string) => {
        return text
            .toLowerCase()
            .split("-")
            .map(
                word => word.charAt(0).toUpperCase() + word.slice(1)
            )
            .join("-");
    };


    /* ================= RATING STARS ================= */
    const renderStars = (rating: number) => {
        return (
            <div className="flex items-center gap-1 text-yellow-500 text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                        key={i}
                        className={
                            i < Math.round(rating)
                                ? "opacity-100"
                                : "opacity-30"
                        }
                        size={14}
                    />
                ))}
                <span className="text-gray-600 ml-1">
                    ({rating})
                </span>
            </div>
        );
    };


    return (
        <main className="bg-white min-h-screen">
            <Header />

            {showToast && <Toast message={toastMsg} />}

            <section className="py-8 md:py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-[#009B7A]">
                        ALL PRODUCTs
                    </h1>

                    {/* Mobile Filter Toggle */}
                    <div className="md:hidden mb-6">
                        <button
                            onClick={() => setShowMobileFilters(!showMobileFilters)}
                            className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium"
                        >
                            {showMobileFilters ? "Hide Filters" : "Show Filters"}
                        </button>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* ================= LEFT SIDEBAR ================= */}
                        <aside
                            className={`${showMobileFilters ? "block" : "hidden"
                                } md:block w-full md:w-64 bg-white rounded-lg  p-6`}
                        >
                            <h2 className="text-xl font-semibold mb-6">Filters</h2>

                            <div className="space-y-8">
                                {/* Categories */}
                                <div>
                                    <h3 className="font-semibold mb-3">Categories</h3>

                                    <ul className="space-y-2 text-sm">

                                        {/* ALL PRODUCTS */}
                                        <li
                                            onClick={() =>
                                                setFilters({
                                                    ...filters,
                                                    mainCategory: "all",
                                                    subCategory: "",
                                                })
                                            }
                                            className={`cursor-pointer ${filters.mainCategory === "all"
                                                ? "font-semibold"
                                                : "text-gray-600"
                                                }`}
                                        >
                                            All Products
                                        </li>

                                        {/* NUTRACEUTICALS */}
                                        <li
                                            onClick={() =>
                                                setFilters({
                                                    ...filters,
                                                    mainCategory: "nutraceuticals",
                                                    subCategory: "",
                                                })
                                            }
                                            className={`cursor-pointer ${filters.mainCategory === "nutraceuticals"
                                                ? "font-semibold"
                                                : "text-gray-600"
                                                }`}
                                        >
                                            Nutraceuticals Products
                                        </li>

                                        {/* GENERAL & PSYCHIATRY */}
                                        <li
                                            onClick={() => {
                                                setGpOpen(!gpOpen);
                                                setFilters({
                                                    ...filters,
                                                    mainCategory: "general-psychiatry",
                                                    subCategory: "",
                                                });
                                            }}
                                            className={`cursor-pointer flex items-center justify-between ${filters.mainCategory === "general-psychiatry"
                                                ? "font-semibold"
                                                : "text-gray-600"
                                                }`}
                                        >
                                            <span>General & Psychiatry Products</span>

                                            <span
                                                className={`transition-transform duration-300 ${gpOpen ? "rotate-90" : ""
                                                    }`}
                                            >
                                                ▶
                                            </span>
                                        </li>

                                        {/* DROPDOWN SUB-CATEGORIES */}
                                        {filters.mainCategory === "general-psychiatry" && gpOpen && (
                                            <ul className="ml-4 mt-2 space-y-1">
                                                {generalPsychiatryCategories.map((cat) => (
                                                    <li
                                                        key={cat} // ✅ original value
                                                        onClick={() =>
                                                            setFilters({
                                                                ...filters,
                                                                subCategory: cat,
                                                            })
                                                        }
                                                        className={`cursor-pointer text-sm ${filters.subCategory === cat
                                                            ? "font-semibold text-black"
                                                            : "text-gray-600"
                                                            }`}
                                                    >
                                                        {formatCategoryLabel(cat)}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </ul>
                                </div>


                                {/* Availability */}
                                <div>
                                    <h3 className="font-semibold mb-3">Availability</h3>
                                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={filters.inStock}
                                            onChange={(e) =>
                                                setFilters({ ...filters, inStock: e.target.checked })
                                            }
                                        />
                                        Show In-Stock Products Only
                                    </label>
                                </div>

                            </div>
                        </aside>

                        {/* ================= PRODUCTS ================= */}
                        <div className="flex-1">

                            {/* Sort By */}
                            <div className="flex justify-end mb-4">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="border px-3 py-2 rounded text-sm"
                                >
                                    <option value="best-selling">Best Selling</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="az">Alphabetic: A–Z</option>
                                    <option value="za">Alphabetic: Z–A</option>
                                </select>
                            </div>

                            {/* Products Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {visibleProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
                                    >
                                        {/* Image */}
                                        <Link href={`/product/${product.id}`}>
                                            <div className="mx-2 my-2 relative aspect-square">
                                                {!product.inStock && (
                                                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded z-10">
                                                        Out of Stock
                                                    </span>
                                                )}

                                                {/* SALE BADGE */}
                                                {/* {product.sale && (
                                                    <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded z-10 font-semibold">
                                                        {product.discount}% OFF
                                                    </span>
                                                )} */}

                                                <Image
                                                    src={Array.isArray(product.image) ? product.image[0] : product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="bg-[#e7e8e9] object-contain"
                                                />
                                            </div>

                                        </Link>

                                        <div className="p-4 space-y-">

                                            {/* Name */}
                                            <Link href={`/product/${product.id}`}>
                                                <h3 className="text-md font-bold line-clamp-1 -mt-3 uppercase hover:underline transition ">
                                                    {product.name}
                                                </h3>
                                            </Link>

                                            {/* ⭐ Rating */}
                                            <div className="mt-1 min-h-[1.25rem]">
                                                {renderStars(product.rating || 4)}
                                            </div>

                                            {/* Description */}
                                            <p className="text-xs text-gray-600 line-clamp-2 min-h-[2rem] mt-1">
                                                {product.description ||
                                                    "High quality supplement for daily health support."}
                                            </p>

                                            {/* Price + Cart */}
                                            <div className="flex items-center justify-between mt-1 min-h-[2rem]">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-bold text-lg text-gray-900">
                                                        Rs.{product.price.toLocaleString()}
                                                    </span>
                                                </div>

                                                <button
                                                    onClick={() => handleAddToCart(product)}
                                                    disabled={!product.inStock}
                                                    className={`px-2 py-1 rounded transition
                                                            ${product.inStock
                                                            ? "bg-[#009B7A] text-white hover:bg-[#07b38e]"
                                                            : "bg-gray-300 text-gray-500 cursor-not-allowed"}
                                                        `}
                                                >
                                                    <FaCartPlus />
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            {visibleCount < filteredProducts.length && (
                                <div className="flex justify-center mt-12">
                                    <button
                                        onClick={() => setVisibleCount((prev) => prev + 20)}
                                        className="px-8 py-3 bg-[#009B7A] text-white rounded hover:bg-[#07b38e] transition"
                                    >
                                        SHOW MORE
                                    </button>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}