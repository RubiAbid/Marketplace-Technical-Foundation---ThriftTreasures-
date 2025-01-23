'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define types for the cart items
interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
  image: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void; // Add increaseQuantity
  decreaseQuantity: (id: string) => void; // Add decreaseQuantity
  clearCart: () => void;
}

// Create the CartContext
const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

// CartProvider component to provide the context to the rest of the app
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Function to add item to the cart
  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((i) => i.id === item.id);
      if (itemExists) {
        // If item exists, increase its quantity
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // If item doesn't exist, add it to the cart
        return [...prevItems, item];
      }
    });
  };

  // Function to remove item from the cart
  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Function to increase item quantity
  const increaseQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease item quantity
  const decreaseQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the CartContext
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
