"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Importing Image from Next.js
import { client } from '@/sanity/lib/client';

interface Product {
  imageUrl: string;
  title: string;
  price: string;
}

const FeaturedPost = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(
          `
          *[_type == "product" && (title == "Cable Knit Sweatshirt " || 
                                    title == "Zip Polo Neck" ||
                                  title == " Round Neck Jumper"
                       )]{
            "imageUrl": image.asset->url,
            title,
            price
          }
          `
        );
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-center p-[112px_0px] gap-[80px] sm:w-[256px] md:w-[256px] lg:w-full h-auto mx-auto lg:translate-x-0 translate-x-[-10px] sm:translate-x-9 lg:translate-y-0 sm:translate-y-[340px]">
      {/* Section for heading and description */}
      <div className="flex flex-col items-center p-0 lg:w-[692px] w-[250px] h-[134px] break-words lg:-translate-x-0 -translate-x-[60px]">
        <h6 className="w-[114px] h-[24px] text-center text-[#23A6F0] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">
          winter 2025
        </h6>
        <h3 className="lg:w-[400px] w-[200px] h-[50px] text-center text-[#252B42] font-montserrat font-bold text-[30px] lg:text-[40px] leading-[50px] tracking-[0.2px]">
          Featured Products
        </h3>
        <p className="lg:w-[469px] w-[290px] lg:translate-y-0 translate-y-12 h-[40px] text-center text-[#737373] font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px]">
        Explore the latest trends and styles , designed to make you stand out!
        </p>
      </div>

      {/* Section for featured post cards */}
      <div className="flex flex-wrap justify-center lg:-translate-x-0 -translate-x-[60px] items-center gap-[30px] lg:w-full h-auto px-4">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center p-0 lg:w-[348px] w-[250px] h-auto">
            <div className="relative lg:w-[348px] w-[285px] h-[300px]">
              <Image 
                src={product.imageUrl} 
                alt={product.title} 
                height={300} // Set a fixed height for the image
                width={285} // Set a fixed width for the image
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col lg:w-full p-4 bg-white w-[290px]">
              <div className="flex flex-row items-center gap-4 w-[159px] h-[16px]">
                <div className="w-[45px] h-[16px] text-[#8EC2F2] text-sm leading-[16px] tracking-[0.2px]">
                  Google
                </div>
                <div className="w-[56px] h-[16px] text-[#737373] text-sm leading-[16px] tracking-[0.2px]">
                  Trending
                </div>
                <div className="w-[28px] h-[16px] text-[#737373] text-sm leading-[16px] tracking-[0.2px]">
                  New
                </div>
              </div>
              <div className="w-[247px] h-[60px] text-[#252B42] text-[20px] leading-[30px] tracking-[0.2px] font-normal mt-4">
                {product.title}
              </div>
              <div className="flex flex-row justify-between items-center py-[15px] gap-[10px] w-full h-[46px]">
                <div className="text-sm text-[#737373]">{product.price}$</div>
              </div>
              {/* Add to Cart Button */}
              <button
                className="text-[#23A6F0] font-semibold cursor-pointer py-2 px-4 border border-[#23A6F0] rounded-lg hover:bg-[#23A6F0] hover:text-white transition"
                onClick={() => {
                  // Handle "Add to Cart" logic here
                  console.log(`${product.title} added to cart!`);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPost;
