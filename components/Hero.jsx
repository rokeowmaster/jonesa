"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto px-6 py-10">
      {/* Left Content */}
      <div className="text-center md:text-left">
        <h2 className="text-slate-900 font-bold md:text-5xl text-3xl leading-tight">
          Jonesa <span className="text-blue-600">Furniture</span>
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-xl leading-relaxed">
          Leading producer of quality, durable furniture across the country.
        </p>
        <Link href="/products">
          <button
            type="button"
            className="px-6 py-3 mt-8 rounded-lg text-[16px] font-semibold bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Explore
          </button>
        </Link>
      </div>

      {/* Right Image */}
      <div className="md:h-[500px]">
        <Image
          src="/sofa.png"
          alt="Sofa"
          width={550}
          height={500}
          className="w-full h-full md:object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
