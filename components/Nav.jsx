"use client";

import { useCart } from "@/context/cartContext";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

const Nav = () => {
  const { cart } = useCart();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cart.reduce((total, item) => total + (item.quantity || 1), 0));
  }, [cart]);

  return (
    <header className="bg-gray-900 text-gray-200 shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-12" aria-label="Global">
        {/* Logo Section */}
        <div className="flex lg:flex-1">
          <Link href="/" className="text-xl font-bold text-orange-400">
            Jonesa
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          <Link href="/products" className="text-sm font-semibold hover:text-orange-400 transition">
            Products
          </Link>
          <Link href="/contacts" className="text-sm font-semibold hover:text-orange-400 transition">
            Contacts
          </Link>
        </div>

        {/* Right Section (Login + Cart) */}
        <div className="flex items-center gap-x-6 ml-16">
          <Link href="/cart" className="relative flex items-center">
            <ShoppingCart className="w-6 h-6 text-orange-400" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
