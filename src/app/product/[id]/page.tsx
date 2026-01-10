"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { FaStar, FaPlus, FaMinus } from "react-icons/fa";
import products from "../../data/products";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import Toast from "../../components/Toast";

export default function ProductDetailPage() {
  // ✅ ALL HOOKS AT TOP
  const { id } = useParams();
  const router = useRouter();
  const { addToCart, setBuyNowItem } = useCart();

  const [qty, setQty] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const product = products.find((p) => p.id === Number(id));

  // ✅ Early return AFTER hooks
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Product not found</p>
      </div>
    );
  }

  const discountPercentage = product.discount || 0;
  const discountedPrice =
    product.price - (product.price * discountPercentage) / 100;

  const renderStars = (rating: number) => (
    <div className="flex items-center gap-1 text-yellow-500 text-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          className={i < Math.round(rating) ? "opacity-100" : "opacity-30"}
          size={14}
        />
      ))}
      <span className="text-gray-600 ml-1">({rating})</span>
    </div>
  );

  const handleAddToCart = () => {
    const result = addToCart(product);

    setToastMsg(
      result === "exists"
        ? "Product already in cart"
        : "Product added to cart!"
    );

    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleBuyNow = () => {
    setBuyNowItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: Array.isArray(product.image) ? product.image[0] : product.image,
      qty,
    });

    router.push("/checkout");
  };

  return (
    <main className="bg-white min-h-screen">
      <Header />

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Breadcrumb */}

          <p className="text-sm text-gray-500 mb-6 flex flex-wrap items-center">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="truncate sm:truncate-none">{product.name}</span>
            {!product.inStock && (
              <>
                <span className="mx-2">›</span>
                <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded mt-1 sm:mt-0">
                  Out of Stock
                </span>
              </>
            )}
          </p>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
            {/* LEFT IMAGE */}
            <div className="flex justify-center items-start">
              <div className="relative w-[400px] h-[500px]">

                <Image
                  src={
                    Array.isArray(product.image)
                      ? product.image[0]
                      : product.image
                  }
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <h1 className="text-3xl font-semibold mb-2">
                {product.name}
              </h1>

              {/* ⭐ Dynamic Rating (same as products page) */}
              <div className="mt-1 min-h-[1.25rem] mb-4">
                {renderStars(product.rating)}
              </div>

              {/* Price */}
              <p className="text-2xl font-semibold mb-6">
                Rs.{product.price.toLocaleString()}
              </p>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Description:</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <p className="text-sm font-medium mb-2">Quantity:</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="border p-2"
                  >
                    <FaMinus />
                  </button>

                  <span className="min-w-[30px] text-center">{qty}</span>

                  <button
                    onClick={() => setQty(qty + 1)}
                    className="border p-2"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>

              {/* Discount */}
              <p className="text-sm text-gray-600">
                Discount:{" "}
                <span className="font-semibold text-green-600">
                  {discountPercentage}% OFF
                </span>
              </p>

              {/* Subtotal */}
              <p className="text-sm text-gray-600 mb-6">
                Subtotal:{" "}
                <span className="font-semibold">
                  Rs.{(discountedPrice * qty).toLocaleString()}
                </span>
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 text-[#009B7A] border border-[#009B7A] py-4 font-medium hover:bg-[#07b38e] hover:text-white"
                >
                  ADD TO CART
                </button>

                <button
                  onClick={handleBuyNow}
                  disabled={!product.inStock}
                  className="flex-1 text-[#009B7A] border border-[#009B7A] py-4 font-medium hover:bg-[#07b38e] hover:text-white"
                >
                  BUY IT NOW
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {showToast && <Toast message={toastMsg} />}

    </main>
  );
}