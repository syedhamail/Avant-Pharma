// src/app/checkout/page.tsx

"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import Header from "../components/header";
import Footer from "../components/footer";
import { useSearchParams } from "next/navigation";

function CheckoutContent() {
    const { cart, buyNowItem, setBuyNowItem } = useCart();
    const searchParams = useSearchParams();
    const buyNowId = searchParams.get("buyNowId");

    const [mounted, setMounted] = useState(false);

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");

    const [loading, setLoading] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);

    const [toast, setToast] = useState<{
        msg: string;
        type: "error" | "success";
    } | null>(null);

    // Hydration guard
    useEffect(() => {
        setMounted(true);
    }, []);

    // FALLBACK: if buyNowId in URL but buyNowItem not in localStorage, fetch product
    useEffect(() => {
        if (!mounted) return;
        if (buyNowId && !buyNowItem) {
            const fetchProduct = async () => {
                const { data, error } = await supabase
                    .from("products")
                    .select("*")
                    .eq("id", buyNowId)
                    .single();
                if (data) {
                    setBuyNowItem({
                        id: data.id,
                        name: data.name,
                        price: data.price,
                        qty: 1,
                        image: data.image,
                        category: data.category,
                    });
                }
            };
            fetchProduct();
        }
    }, [buyNowId, buyNowItem, mounted, setBuyNowItem]);

    if (!mounted) return null;

    const itemsToShow = buyNowItem ? [buyNowItem] : cart;
    const subtotal = itemsToShow.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    const discountPercentage = 20;
    const discountedSubtotal =
        subtotal - (subtotal * discountPercentage) / 100;

    const showToast = (msg: string, type: "error" | "success") => {
        setToast({ msg, type });
        setTimeout(() => setToast(null), 3000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !phone || !firstName || !lastName || !address || !city) {
            showToast("Please fill all required fields", "error");
            return;
        }

        setLoading(true);

        const productsJson = itemsToShow.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            qty: item.qty,
            image: item.image,
            category: item.category,
        }));

        const { error } = await supabase
            .from("AvantPharma_Customers_Orders")
            .insert({
                email,
                phone,
                first_name: firstName,
                last_name: lastName,
                address,
                city,
                postal_code: postalCode || null,
                products: productsJson,
                total: Number(subtotal),
            });

        setLoading(false);

        if (error) {
            console.error("Supabase Insert Error:", error);
            showToast("Order failed. Please try again.", "error");
            return;
        }

        showToast("🎉 Order placed successfully!", "success");
        setOrderComplete(true);
        setBuyNowItem(null);

        fetch("/api/send-order-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                firstName,
                lastName,
                products: productsJson,
                subtotal,
            }),
        }).catch((err) => console.error("Email error:", err));

        fetch("/api/send-admin-order-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                firstName,
                lastName,
                phone,
                email,
                address,
                city,
                products: productsJson,
            }),
        }).catch(console.error);
    };

    if (orderComplete) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="p-6 bg-green-100 rounded shadow max-w-md text-center">
                    <h2 className="text-lg font-semibold mb-2">
                        🎉 Order Confirmed
                    </h2>
                    <p className="mb-2">
                        Your order has been placed successfully.
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                        Time (PK):{" "}
                        {new Date().toLocaleString("en-PK", {
                            timeZone: "Asia/Karachi",
                        })}
                    </p>
                    <Link href="/">
                        <button className="bg-[#009B7A] text-white py-3 px-4 rounded hover:bg-[#07b38e]">
                            Back to Home Page
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {toast && (
                <div
                    className={`fixed bottom-5 right-5 px-4 py-2 rounded shadow-lg text-white
                    ${toast.type === "error" ? "bg-red-500" : "bg-green-600"}`}
                >
                    {toast.msg}
                </div>
            )}

            <section className="container mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Contact</h2>

                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                            <input className="border px-3 py-2 rounded" type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input className="border px-3 py-2 rounded" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>

                        <h3 className="font-semibold mb-3">Delivery</h3>

                        <input className="w-full border px-3 py-2 mb-3 rounded" value="Pakistan" readOnly />

                        <div className="grid grid-cols-2 gap-3 mb-3">
                            <input className="border px-3 py-2 rounded" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            <input className="border px-3 py-2 rounded" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>

                        <input className="w-full border px-3 py-2 mb-3 rounded" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />

                        <div className="grid grid-cols-2 gap-3 mb-3">
                            <input className="border px-3 py-2 rounded" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                            <input className="border px-3 py-2 rounded text-xs" placeholder="Postal code (optional)" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                        </div>

                        <h3 className="font-semibold mb-3">Shipping method</h3>
                        <div className="bg-gray-100 border border-black px-4 py-3 flex justify-between rounded mb-6">
                            <span>Free Home Delivery</span>
                            <span className="font-semibold">FREE</span>
                        </div>

                        <h3 className="font-semibold mb-3">Payment</h3>
                        <div className="bg-gray-100 border border-black px-4 py-3 rounded mb-6">
                            Cash on Delivery (COD)
                        </div>

                        <button
                            disabled={loading}
                            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 disabled:opacity-60"
                        >
                            {loading ? "Placing Order..." : "Complete order"}
                        </button>
                    </div>
                </form>

                <div className="border rounded-lg p-5 h-fit">
                    {itemsToShow.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 mb-4">
                            <div className="relative">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={60}
                                    height={60}
                                    className="rounded bg-gray-100"
                                />
                                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                    {item.qty}
                                </span>
                            </div>

                            <div className="flex-1">
                                <p className="text-sm font-medium">{item.name}</p>
                            </div>

                            <p className="text-sm font-semibold">
                                Rs.{(item.price * item.qty).toLocaleString()}
                            </p>
                        </div>
                    ))}

                    <div className="flex justify-between text-sm mb-2">
                        <span>Discount</span>
                        <span>{discountPercentage}%</span>
                    </div>

                    <div className="flex justify-between text-sm mb-2">
                        <span>Shipping</span>
                        <span>FREE</span>
                    </div>

                    <div className="flex justify-between text-sm mb-2">
                        <span>Subtotal</span>
                        <span>Rs.{discountedSubtotal.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between font-semibold border-t pt-3 text-[#009B7A]">
                        <span>Total</span>
                        <span>Rs.{discountedSubtotal.toLocaleString()}</span>
                    </div>
                </div>

            </section>

            <Footer />
        </main>
    );
}

export default function CheckoutPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <CheckoutContent />
        </Suspense>
    );
}