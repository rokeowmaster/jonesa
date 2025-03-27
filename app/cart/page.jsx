"use client";

import { useCart } from "@/context/cartContext";
import { Banner } from "@/components";
import { useState } from "react";

const Cart = () => {
  const { cart } = useCart();
  const [cartItems, setCartItems] = useState(cart);

  const updateQuantity = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <Banner />
      <div className="m-4 p-6 container mx-auto bg-gray-900 shadow-lg rounded-lg border border-gray-700 text-gray-300">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-100">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-400 text-center">Your cart is empty.</p>
        ) : (
          <div className="divide-y divide-gray-700">
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center justify-between py-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-200">{item.productName}</h3>
                  <p className="text-gray-400">${item.productPrice.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md hover:bg-gray-600 transition"
                    onClick={() => updateQuantity(item._id, -1)}
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-medium text-lg text-gray-100">{item.quantity}</span>
                  <button
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md hover:bg-gray-600 transition"
                    onClick={() => updateQuantity(item._id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="mt-6 flex justify-between font-semibold text-xl border-t border-gray-700 pt-4">
            <span className="text-gray-100">Total:</span>
            <span className="text-gray-100">${getTotal().toFixed(2)}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;