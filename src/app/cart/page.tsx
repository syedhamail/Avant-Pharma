"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Header from "../components/header";
import Footer from "../components/footer";
import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";

export default function CartPage() {
    const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();
    const [mounted, setMounted] = useState(false);

    // Only render cart after component mounts
    useEffect(() => {
        setMounted(true);
    }, []);

    const discountPercentage = 20;

    const getDiscountedPrice = (price: number) =>
        price - (price * discountPercentage) / 100;

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    const discountedSubtotal = cart.reduce(
        (sum, item) => sum + getDiscountedPrice(item.price) * item.qty,
        0
    );

    if (!mounted) return null; // Avoid hydration mismatch

    return (
        <main className="bg-white min-h-screen">
            <Header />

            <section className="container mx-auto px-4 py-12 max-w-7xl">
                {/* Breadcrumb */}
                <p className="text-sm text-gray-500 mb-6">
                    <Link href="/">Home</Link> <span className="mx-2">›</span> Your Cart
                </p>

                <h1 className="text-2xl text-[#009B7A] font-bold mb-8 uppercase">Your Cart</h1>

                {cart.length === 0 ? (
                    <p className="text-gray-600">Your cart is empty.</p>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* LEFT: PRODUCTS TABLE */}
                        <div className="lg:col-span-2 border rounded-lg overflow-x-auto">
                            {/* Header */}
                            <div className="grid grid-cols-6 text-sm font-semibold px-4 py-3 border-b bg-gray-50 min-w-[720px]">
                                <span className="col-span-2">Product</span>
                                <span>Price</span>
                                <span>Quantity</span>
                                <span>Discount</span>
                                <span>Total</span>
                            </div>

                            {/* Product Rows */}
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="grid grid-cols-6 items-center gap-2 p-3 border-b last:border-b-0 min-w-[720px]"
                                >
                                    {/* Product */}
                                    <div className="col-span-2 flex items-center gap-2">
                                        <div className="w-16 h-16 relative flex-shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-contain bg-gray-100 rounded"
                                            />
                                        </div>
                                        <p className="font-medium text-sm lg:text-base truncate max-w-[200px]">
                                            {item.name}
                                        </p>
                                    </div>

                                    {/* Price */}
                                    <div className="text-sm lg:text-base">Rs.{item.price.toLocaleString()}</div>

                                    {/* Quantity */}
                                    <div className="flex items-center gap-2 border px-2 py-1 w-fit">
                                        <button
                                            onClick={() => decreaseQty(item.id)}
                                            className="text-gray-400 hover:text-gray-700 text-xs lg:text-sm"
                                        >
                                            <FaMinus />
                                        </button>
                                        <span>{item.qty}</span>
                                        <button
                                            onClick={() => increaseQty(item.id)}
                                            className="text-gray-400 hover:text-gray-700 text-xs lg:text-sm"
                                        >
                                            <FaPlus />
                                        </button>
                                    </div>

                                    {/* Discount */}
                                    <div className="text-green-600 font-semibold text-sm lg:text-base">
                                        20% OFF
                                    </div>

                                    {/* Total & Remove */}
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="font-semibold text-sm lg:text-base text-[#009B7A]">
                                            Rs.{(getDiscountedPrice(item.price) * item.qty).toLocaleString()}
                                        </span>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-500 hover:text-red-600"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>


                        {/* RIGHT: ORDER SUMMARY */}
                        <div className="border rounded-lg p-6 h-fit">
                            <h3 className="font-semibold mb-4 uppercase">Order Summary</h3>

                            <div className="flex justify-between mb-3 text-sm">
                                <span>Subtotal</span>
                                <span>Rs.{discountedSubtotal.toLocaleString()}</span>
                                
                            </div>

                            <div className="flex justify-between mb-3 text-sm">
                                <span>Shipping</span>
                                <span>FREE</span>
                            </div>

                            <div className="flex justify-between font-semibold border-t pt-3 mb-6">
                                <span>Total</span>
                                <span>Rs.{discountedSubtotal.toLocaleString()}</span>
                            </div>

                            <Link href="/checkout">
                                <button className="w-full bg-[#009B7A] text-white py-3 mb-3 hover:bg-[#07b38e]">
                                    PROCEED TO CHECKOUT
                                </button>
                            </Link>

                        </div>
                    </div>
                )}
            </section>

            <Footer />
        </main>
    );
}
