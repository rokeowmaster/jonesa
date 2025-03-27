import React from "react";

const Trending = () => {
  return (
    <div className="mt-4 px-4 mb-8">
      {/* Section Title */}
      <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
        Trending
      </h3>

      {/* Trending Cards */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        
        {/* Trending Item 1 */}
        <a
          href="#"
          className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden w-full max-w-md md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full h-56 md:h-auto md:w-48"
            src="/dine.webp"
            alt="Trending Item"
          />
          <div className="p-4 flex flex-col justify-between">
            <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
              Noteworthy furniture
            </h5>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-400 mt-2">
              Here are the biggest furniture acquisitions of 2025 so far
            </p>
          </div>
        </a>

        {/* Trending Item 2 */}
        <a
          href="#"
          className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden w-full max-w-md md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full h-56 md:h-auto md:w-48"
            src="/dine.webp"
            alt="Trending Item"
          />
          <div className="p-4 flex flex-col justify-between">
            <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
              You cant go wrong with these
            </h5>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-400 mt-2">
              Furniture that will never go out of style
            </p>
          </div>
        </a>

      </div>
    </div>
  );
};

export default Trending;
