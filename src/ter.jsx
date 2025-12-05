import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addProduct = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeProduct = (id) => {
    setCart((prev) => {
      if (!prev[id]) return prev;
      return { ...prev, [id]: prev[id] - 1 };
    });
  };

  const deleteOne = (id) => {
    setCart((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const clearCart = () => setCart({});

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, deleteOne, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
