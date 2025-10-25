import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (game) => {
    setCart((prev) => {
      if (prev.find((item) => item.id === game.id)) return prev; // no duplicates
      return [
        ...prev,
        {
          id: game.id,
          name: game.name,
          image: game.background_image || game.background_image_additional,
          price: Math.floor(game.rating * 1000) || 499,
        },
      ];
    });
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
