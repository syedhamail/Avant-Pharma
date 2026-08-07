"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import products from "../data/products";
import Header from "../components/header";
import Footer from "../components/footer";
import Toast from "../components/Toast";
import { useCart } from "../context/CartContext";

export default function AllProductsPage() {
  const { addToCart, cart } = useCart(); // ✅ cart bhi lo

  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  // Filtering state
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedSort, setSelectedSort] = useState("default");

  const categories = [
    "All",
    ...new Set(products.map((p) => p.category).filter(Boolean)),
  ];

  const filteredProducts = products
    .filter((p) => {
      if (selectedCategory === "All") return true;
      return p.category === selectedCategory;
    })
    .filter((p) => {
      if (selectedPrice === "All") return true;
      if (selectedPrice === "Under 500") return p.price < 500;
      if (selectedPrice === "500 - 1000") return p.price >= 500 && p.price <= 1000;
      if (selectedPrice === "Above 1000") return p.price > 1000;
      return true;
    })
    .sort((a, b) => {
      if (selectedSort === "low-to-high") return a.price - b.price;
      if (selectedSort === "high-to-low") return b.price - a.price;
      return 0;
    });

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

  const handleAddToCart = (product: any) => {
    const productId = String(product.id); // ✅ string conversion
    const exists = cart.some((item) => item.id === productId);

    if (exists) {
      setToastMsg("Product already in cart");
    } else {
      addToCart({
        id: productId,
        name: product.name,
        price: product.price,
        image: Array.isArray(product.image) ? product.image[0] : product.image,
        qty: 1,
        category: product.category,
      });
      setToastMsg("Product added to cart!");
    }

    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <main className="bg-white min-h-screen">
      <Header />

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="text-3xl font-bold mb-8 text-center">All Products</h1>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <select
              className="border px-4 py-2 rounded"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <select
              className="border px-4 py-2 rounded"
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
            >
              <option value="All">All Prices</option>
              <option value="Under 500">Under Rs.500</option>
              <option value="500 - 1000">Rs.500 - Rs.1000</option>
              <option value="Above 1000">Above Rs.1000</option>
            </select>

            <select
              className="border px-4 py-2 rounded"
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
            >
              <option value="default">Sort by: Default</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 hover:shadow-lg transition"
              >
                <Link href={`/product/${product.id}`}>
                  <div className="relative w-full h-48 mb-4">
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
                  <h2 className="font-semibold text-sm line-clamp-2">
                    {product.name}
                  </h2>
                </Link>

                <div className="mt-1">{renderStars(product.rating)}</div>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-bold">
                    Rs.{product.price.toLocaleString()}
                  </span>
                  {product.discount > 0 && (
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                  className={`mt-4 w-full py-2 text-sm font-medium border rounded
                    ${
                      product.inStock
                        ? "text-[#009B7A] border-[#009B7A] hover:bg-[#009B7A] hover:text-white"
                        : "text-gray-400 border-gray-300 cursor-not-allowed"
                    }`}
                >
                  {product.inStock ? "ADD TO CART" : "OUT OF STOCK"}
                </button>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-8">
              No products found matching your filters.
            </p>
          )}
        </div>
      </section>

      <Footer />
      {showToast && <Toast message={toastMsg} />}
    </main>
  );
}