"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
  image: string;
  category?: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => "exists" | "added"; 
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  buyNowItem: CartItem | null;
  setBuyNowItem: (item: CartItem | null) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  // ---------------------- CART ----------------------
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // -------------------- BUY NOW --------------------
  // ✅ Persist buyNowItem in localStorage
  const [buyNowItem, setBuyNowItem] = useState<CartItem | null>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("buyNowItem");
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  });

  useEffect(() => {
    if (buyNowItem) {
      localStorage.setItem("buyNowItem", JSON.stringify(buyNowItem));
    } else {
      localStorage.removeItem("buyNowItem");
    }
  }, [buyNowItem]);

  // ----------------- CART ACTIONS -------------------
  const addToCart = (item: CartItem): "exists" | "added" => {
    let status: "exists" | "added" = "added";

    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        status = "exists";
        return prev; // qty nahi badhayenge, list same rahegi
      }
      return [...prev, item];
    });

    return status;
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty } : i))
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        buyNowItem,
        setBuyNowItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}