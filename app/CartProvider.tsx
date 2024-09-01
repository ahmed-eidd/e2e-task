'use client';
import { useState, createContext } from 'react';
import { Product } from './types';

export const cartContext = createContext<CartContext>({
  cart: [],
  addToCart: (product: Product) => {},
  removeFromCart: (product: Product) => {},
  clearCart: () => {},
});

interface CartContext {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void,
}

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (product: Product) => {
    setCart((prevCart) => prevCart.filter((p) => p.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <cartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
