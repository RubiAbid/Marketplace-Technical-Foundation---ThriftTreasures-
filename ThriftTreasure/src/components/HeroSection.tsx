'use client'; // Add this at the top to indicate client-side rendering
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="w-full max-w-[1500px] h-[1500px] flex">
{/* Left Side: Text content */}
<div className="w-[70%] flex flex-col justify-start items-center text-black p-8 relative opacity-90">
  <div className="text-center mt-[30%]">
    <h2
      className="text-7xl font-extrabold w-[180%] leading-snug tracking-tight  translate-x-9 mb-4"
     
    >
      New Collection
    </h2>
    <hr className="border-white w-1/2 mx-auto mb-4" />
    <div className="bg-white text-black py-2 px-4 mt-4">
      <h3
        className="text-4xl font-bold leading-snug tracking-tight w-[180%]"
        style={{ fontFamily: 'cursive' }}
      >
        <motion.div
          className="whitespace-nowrap  text-lg sm:text-base md:text-lg lg:text-lg font-semibold animate-blink"
        >
          Available to order
        </motion.div>
      </h3>
    </div>

    {/* Tick Marks Section in 2x2 Grid */}
    <div className=" grid grid-cols-2 gap-10 mt-[20%] w-[190%]">
      {[
        "90+ Brands",
        "100% Authentic",
        "Handpicked Vintage",
        "1-of-1 Finds",
      ].map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="w-6 h-6 flex justify-center items-center rounded-full bg-green-500 text-white">
            ✓
          </div>
          <span
            className="font-medium"
            style={{
              fontSize: '3rem', /* Slightly larger font size */
            }}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>




      {/* Right Side: Image */}
      <div
        className="w-[140%] bg-cover bg-center translate-x-[41.5%]"
        style={{
          backgroundImage: "url('/sale.webp')", // Set the background image
        }} 
      ></div>
    </div>
  );
};

export default HeroSection;
