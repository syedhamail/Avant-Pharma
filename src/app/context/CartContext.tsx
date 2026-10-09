// "use client";

// import React, { createContext, useContext, useState, useEffect } from "react";

// export type CartItem = {
//   id: string;
//   name: string;
//   price: number;
//   qty: number;
//   image: string;
//   category?: string;
// };

// type CartContextType = {
//   cart: CartItem[];
//   addToCart: (item: CartItem) => "exists" | "added";
//   removeFromCart: (id: string) => void;
//   updateQty: (id: string, qty: number) => void;
//   increaseQty: (id: string) => void;   // 👈 add
//   decreaseQty: (id: string) => void;   // 👈 add
//   clearCart: () => void;
//   buyNowItem: CartItem | null;
//   setBuyNowItem: (item: CartItem | null) => void;
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export function CartProvider({ children }: { children: React.ReactNode }) {
//   // ---------------------- CART ----------------------
//   const [cart, setCart] = useState<CartItem[]>(() => {
//     if (typeof window !== "undefined") {
//       const saved = localStorage.getItem("cart");
//       return saved ? JSON.parse(saved) : [];
//     }
//     return [];
//   });

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // -------------------- BUY NOW --------------------
//   // ✅ Persist buyNowItem in localStorage
//   const [buyNowItem, setBuyNowItem] = useState<CartItem | null>(() => {
//     if (typeof window !== "undefined") {
//       const saved = localStorage.getItem("buyNowItem");
//       return saved ? JSON.parse(saved) : null;
//     }
//     return null;
//   });

//   useEffect(() => {
//     if (buyNowItem) {
//       localStorage.setItem("buyNowItem", JSON.stringify(buyNowItem));
//     } else {
//       localStorage.removeItem("buyNowItem");
//     }
//   }, [buyNowItem]);

//   // ----------------- CART ACTIONS -------------------
//   const addToCart = (item: CartItem): "exists" | "added" => {
//     let status: "exists" | "added" = "added";

//     setCart((prev) => {
//       const existing = prev.find((i) => i.id === item.id);
//       if (existing) {
//         status = "exists";
//         return prev; // qty nahi badhayenge, list same rahegi
//       }
//       return [...prev, item];
//     });

//     return status;
//   };

//   const removeFromCart = (id: string) => {
//     setCart((prev) => prev.filter((i) => i.id !== id));
//   };

//   const updateQty = (id: string, qty: number) => {
//     if (qty <= 0) {
//       removeFromCart(id);
//       return;
//     }
//     setCart((prev) =>
//       prev.map((i) => (i.id === id ? { ...i, qty } : i))
//     );
//   };

//   const increaseQty = (id: string) => {
//     setCart((prev) =>
//       prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
//     );
//   };

//   const decreaseQty = (id: string) => {
//     setCart((prev) =>
//       prev
//         .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
//         .filter((i) => i.qty > 0) // 0 ho to item hata do
//     );
//   };

//   const clearCart = () => setCart([]);

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         updateQty,
//         increaseQty,   // 👈 add
//         decreaseQty,   // 👈 add
//         clearCart,
//         buyNowItem,
//         setBuyNowItem,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// }
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
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  clearCart: () => void;
  buyNowItem: CartItem | null;
  setBuyNowItem: (item: CartItem | null) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

// ✅ Sanitize cart items loaded from localStorage
const sanitizeCart = (items: any[]): CartItem[] => {
  if (!Array.isArray(items)) return [];
  return items
    .filter((item) => item && item.id)
    .map((item) => ({
      id: String(item.id),
      name: item.name || "Unnamed Product",
      price: Number(item.price) || 0,
      qty: Math.max(1, Number(item.qty) || 1), // qty kabhi 0 se kam na ho
      image: item.image || "/placeholder.png",
      category: item.category || "",
    }));
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  // ---------------------- CART ----------------------
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return sanitizeCart(parsed);
        } catch {
          return [];
        }
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // -------------------- BUY NOW --------------------
  const [buyNowItem, setBuyNowItem] = useState<CartItem | null>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("buyNowItem");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return parsed
            ? {
                id: String(parsed.id),
                name: parsed.name || "",
                price: Number(parsed.price) || 0,
                qty: Math.max(1, Number(parsed.qty) || 1),
                image: parsed.image || "",
                category: parsed.category || "",
              }
            : null;
        } catch {
          return null;
        }
      }
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

    // ✅ Normalize incoming item
    const safeItem: CartItem = {
      id: String(item.id),
      name: item.name || "Unnamed Product",
      price: Number(item.price) || 0,
      qty: Math.max(1, Number(item.qty) || 1), // qty kam az kam 1
      image: item.image || "/placeholder.png",
      category: item.category || "",
    };

    setCart((prev) => {
      const existing = prev.find((i) => i.id === safeItem.id);
      if (existing) {
        status = "exists";
        return prev; // qty nahi badhayenge, list same rahegi
      }
      return [...prev, safeItem];
    });

    return status;
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQty = (id: string, qty: number) => {
    const safeQty = Math.max(1, Number(qty) || 1);
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: safeQty } : i))
    );
  };

  const increaseQty = (id: string) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, qty: Math.max(1, Number(i.qty) || 1) + 1 } : i
      )
    );
  };

  const decreaseQty = (id: string) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, qty: Math.max(1, Number(i.qty) || 1) - 1 } : i
        )
        .filter((i) => i.qty > 0) // 0 ho to item hata do
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
        increaseQty,
        decreaseQty,
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