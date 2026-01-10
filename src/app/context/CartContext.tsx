"use client";
import { createContext, useContext, useState, useEffect } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
  description?: string;
  category?: string;
};

type CartContextType = {
  cart: CartItem[];
  buyNowItem: CartItem | null;
  addToCart: (product: any) => "added" | "exists";
  setBuyNowItem: (item: CartItem | null) => void;
  removeFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [buyNowItem, setBuyNowItem] = useState<CartItem | null>(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /* ✅ FIXED ADD TO CART */
  const addToCart = (product: any): "added" | "exists" => {
    const exists = cart.find((p) => p.id === product.id);

    if (exists) {
      return "exists"; // ❌ qty change nahi hogi
    }

    setCart((prev) => [
      ...prev,
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: Array.isArray(product.image)
          ? product.image[0]
          : product.image,
        qty: 1,
      },
    ]);

    return "added";
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const increaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, buyNowItem, setBuyNowItem, addToCart, removeFromCart, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext)!;