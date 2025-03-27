"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getTrendingProducts } from "@/sanityclient/query";
import client from "@/sanityclient/client";
import { urlFor } from "@/sanityclient/client";

const Trending = () => {
  const [trendingItems, setTrendingItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      try {
        const data = await getTrendingProducts(client);
        setTrendingItems(data || []);
      } catch (error) {
        console.error("Failed to fetch trending products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Section Title */}
      <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Trending Now
      </h3>

      {/* Loading State */}
      {loading ? (
        <p className="text-center text-gray-500 text-lg">Loading trending items...</p>
      ) : trendingItems.length > 0 ? (
        /* Trending Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingItems.map((item) => (
            <a
              key={item._id}
              href={`/products/${item._id}`}
              className="group block bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative w-full h-64">
                <Image
                  src={urlFor(item.productImage).url()}
                  alt={item.productName}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>

              {/* Product Details */}
              <div className="p-5">
                <h5 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                  {item.productName}
                </h5>
                <p className="text-sm text-gray-600 mt-2">{item.productDescription}</p>
              </div>
            </a>
          ))}
        </div>
      ) : (
        /* No Items Found */
        <p className="text-center text-gray-500 text-lg">
          No trending products available at the moment.
        </p>
      )}
    </div>
  );
};

export default Trending;
