'use client'; // Add this at the top to indicate client-side rendering
import React from 'react';
import Image from 'next/image'; // Import the Image component

const Note = () => {
  // Image file is located in the public folder
  const imageUrl = "/new.webp"; // Use the relative path to the image in the public folder

  return (
    <div className="w-full max-w-[2200px] h-[500px] bg-black flex mb-[10%]">
      {/* Left Side: Text Content */}
      <div className="w-1/2 flex items-center text-center p-8 relative opacity-80">
        <div className="w-1/2 flex justify-start items-center pl-8">
          <h2 className="text-4xl text-white font-extrabold leading-snug tracking-tight mb-[240px]">
            Welcome to Our Thrift Store
          </h2>
        </div>
        <div className="w-[900px] flex justify-center items-center text-center mt-[10%]">
          <div className="text-white py-2 mt-4">
            <h3
              className="text-4xl text-white translate-x-[-180px] font-bold leading-tight tracking-tight"
              style={{
                whiteSpace: 'normal',
              }}>
              At our Thrift Store, we believe in offering high-quality, pre-loved items at affordable prices, providing unique finds for everyone.
            </h3>
          </div>
        </div>
      </div>

      {/* Right Side: Image Content */}
      <div className="w-1/2 h-[110%] relative -translate-y-[21%]">
        <h3 className="text-white text-center text-4xl font-bold mt-16">Note</h3>
        <div className="flex justify-center items-center h-full">
          <Image
            src={imageUrl} // Use the image from the public folder
            alt="Flower" // Alt text for the image
            height={530} // Set the desired height
            width={500} // Set the desired width
            className="object-cover"
            unoptimized={true} // Disable automatic optimization
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
