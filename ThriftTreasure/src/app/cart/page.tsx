// src/app/cart/page.tsx
'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext'; // Correct import path
import { FaTrashAlt } from 'react-icons/fa'; // Trash icon for removing items
import Navbar from '@/components/Navbar';
import CheckoutModal from '@/components/CheckoutModal'; // Correct import path

const CartPage = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const calculateSubtotal = (price: string, quantity: number) => {
    return (parseFloat(price) * quantity).toFixed(2); // Convert string to number before calculating
  };

  const total = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );

  const handleProceedToCheckout = () => {
    setIsModalOpen(true); // Open the modal when the user proceeds to checkout
  };

  return (
    <div className="container mx-auto px-6 py-12">

  <Navbar />



      <div className="mt-[15%]">
        <h3 className="text-2xl font-semibold mb-6">Your Cart</h3>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty!</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>

                <div className="flex items-center">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-300 text-black px-2 py-1 rounded-md hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="mx-4 text-gray-800">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-300 text-black px-2 py-1 rounded-md hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>

                <div className="text-lg font-bold text-purple-600">
                  ${calculateSubtotal(item.price, item.quantity)}
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all duration-300"
                >
                  <FaTrashAlt size={20} />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12">
          <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Total</h3>
            <span className="text-lg font-bold text-purple-600">${total.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-all duration-300"
            >
              Clear Cart
            </button>
          </div>

          <button
            onClick={handleProceedToCheckout}
            className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-all duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Show the modal when the button is clicked */}
      <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} cartTotal={total} />
    </div>
  );
};

export default CartPage;
