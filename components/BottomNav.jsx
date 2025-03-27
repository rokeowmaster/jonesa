import React from "react";

const BottomNav = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-gray-50 border-t border-gray-300 dark:bg-gray-800 dark:border-gray-700 shadow-md">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        
        {/* Products */}
        <a href="/products" className="flex flex-col items-center justify-center px-5 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
          <svg
            className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-500 transition"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6-6 6 6" />
            <path d="M6 15l6-6 6 6" />
          </svg>
          <span className="text-xs text-gray-600 dark:text-gray-300 group-hover:text-blue-500 transition">
            Products
          </span>
        </a>

        {/* Cart */}
        <a href="/cart" className="flex flex-col items-center justify-center px-5 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
          <svg
            className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-500 transition"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2 10h13l2-6H6" />
          </svg>
          <span className="text-xs text-gray-600 dark:text-gray-300 group-hover:text-blue-500 transition">
            Cart
          </span>
        </a>

        {/* Contacts */}
        <a href="/contact" className="flex flex-col items-center justify-center px-5 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
          <svg
            className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-500 transition"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M22 16.92V19a2 2 0 0 1-2 2 15 15 0 0 1-15-15 2 2 0 0 1 2-2h2.08a2 2 0 0 1 2 1.72 10 10 0 0 0 3.3 5.29 2 2 0 0 1 .62 2.11z" />
          </svg>
          <span className="text-xs text-gray-600 dark:text-gray-300 group-hover:text-blue-500 transition">
            Contacts
          </span>
        </a>
        
      </div>
    </div>
  );
};

export default BottomNav;
