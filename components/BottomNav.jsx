"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/cartContext";

const BottomNav = () => {
  const { cart } = useCart();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cart.reduce((total, item) => total + (item.quantity || 1), 0));
  }, [cart]);

  return (
    <div className="lg:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-gray-50 border-t border-gray-300 dark:bg-gray-800 dark:border-gray-700 shadow-md">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">

        {/* Products */}
        <Link href="/products" className="flex flex-col items-center justify-center px-5 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300 transition" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M6 9l6-6 6 6" />
            <path d="M6 15l6-6 6 6" />
          </svg>
          <span className="text-xs text-gray-600 dark:text-gray-300 transition">Products</span>
        </Link>

        {/* Cart */}
        <Link href="/cart" className="relative flex flex-col items-center justify-center px-5 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300 transition" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2 10h13l2-6H6" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-1 right-4 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
          <span className="text-xs text-gray-600 dark:text-gray-300 transition">Cart</span>
        </Link>

        {/* Contacts */}
        <Link href="/contact" className="flex flex-col items-center justify-center px-5 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300 transition" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M22 16.92V19a2 2 0 0 1-2 2 15 15 0 0 1-15-15 2 2 0 0 1 2-2h2.08a2 2 0 0 1 2 1.72 10 10 0 0 0 3.3 5.29 2 2 0 0 1 .62 2.11z" />
          </svg>
          <span className="text-xs text-gray-600 dark:text-gray-300 transition">Contacts</span>
        </Link>

      </div>
    </div>
  );
};

export default BottomNav;
