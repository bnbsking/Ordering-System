import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // array of {id/name, quantity, etc.}

  const addToCart = (item, quantity) => {
    if (quantity === 0) return;

    setCart((prev) => {
      const existing = prev.find((c) => c.name === item.name);
      if (existing) {
        return prev.map((c) =>
          c.name === item.name
            ? { ...c, quantity: c.quantity + quantity }
            : c
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((c) => c.name !== name));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
