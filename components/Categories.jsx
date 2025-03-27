import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Sofas", image: "/sofa.png" },
  { name: "Chairs", image: "/chair.webp" },
  { name: "Tables", image: "/table.jfif" },
  { name: "Beds", image: "/bed.avif" },
  { name: "Storage", image: "/storage.webp" },
  { name: "Decor", image: "/decor.webp" },
];

const Categories = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-black">Explore Our Categories</h2>
        <p className="mt-2 text-lg text-black">
          Find the perfect furniture to match your style.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link key={index} href="/products" passHref>
            <div className="relative group overflow-hidden rounded-xl shadow-md bg-white/20 dark:bg-gray-800/40 backdrop-blur-lg border border-white/20 hover:scale-105 transition-transform cursor-pointer">
              <Image
                src={category.image}
                alt={category.name}
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all">
                <span className="text-white text-lg font-semibold">{category.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
