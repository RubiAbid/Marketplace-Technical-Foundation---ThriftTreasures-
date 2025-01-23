'use client'
import React from 'react';
import { Truck, Flower, Headphones } from 'lucide-react'; // Lucide icons for simplicity

const Tagline: React.FC = () => {
  return (
    <div className="bg-black py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center h-[40px] -translate-y-9">
        
        {/* Delivery Section */}
        <div className="flex flex-col items-center">
          <Truck size={48} className="text-white" />
          <h3 className="text-xl font-bold">Delivery 7 Days a Week</h3>
          <p className="text-white mt-2">Reliable delivery at your doorstep every day.</p>
        </div>

        {/* Bouquet Section */}
        <div className="flex flex-col items-center">
          <Flower size={48} className="text-white " />
          <h3 className="text-xl font-bold">Exquisite Bouquet Collection</h3>
          <p className="text-white  mt-2">perfect for all occasions.</p>
        </div>

        {/* Support Section */}
        <div className="flex flex-col items-center">
          <Headphones size={48} className="text-white " />
          <h3 className="text-xl font-bold">24x7 Customer Support</h3>
          <p className="text-white mt-2">We&apos;re always here to assist you.</p>
        </div>

      </div>
    </div>
  );
};

export default Tagline;
