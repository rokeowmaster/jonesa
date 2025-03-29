'use client';
import React from 'react';

const Footer = () => {
    const message = "Hello can we consult on website design";

    const handleClick = () => {
        if (typeof window !== "undefined") {
            window.open(`https://wa.me/${+254758490103}?text=${encodeURIComponent(message)}`, "_blank");
        }
    };

    return (
        <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800 relative mb-16">
            <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col sm:flex-row items-center justify-between">
                <span className="text-sm text-gray-500 text-center sm:text-left dark:text-gray-400 w-full sm:w-auto mb-2 sm:mb-0">
                    © 2025 <a href="" className="hover:underline">Jonesa Furniture</a>. All Rights Reserved.
                </span>
                <p className="text-sm text-gray-500 text-center sm:text-left dark:text-gray-400 w-full sm:w-auto">
                    Designed by <span className="cursor-pointer text-blue-500 hover:underline" onClick={handleClick}>Robert</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
