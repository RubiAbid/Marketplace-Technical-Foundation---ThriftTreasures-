"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Image as SanityImage } from "sanity"; // Import the Sanity Image type

// Initialize the image builder
const builder = imageUrlBuilder(client);

// Update the type of `source` to `SanityImage`
function urlFor(source: SanityImage) {
  return builder.image(source);
}

// Interface for the product type
interface Product {
  title: string;
  description: string;
  image: SanityImage; // Use the Sanity Image type
  price: string;
}

// Server-side fetching for the product data
const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Fetch product data from Sanity
  const query = `*[_id == "${id}"][0]`;
  const product: Product = await client.fetch(query);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />

      {/* Product details layout */}
      <div className="container mx-auto px-6 py-12 flex">
        {/* Left side: Image */}
        <div className="flex-1 pr-8">
          <Image
            src={urlFor(product.image).url()}
            alt={product.title}
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>

        {/* Right side: Product Details */}
        <div className="flex-1">
          <h2 className="text-7xl font-bold">{product.title}</h2>
          <p className="text-6xl text-gray-600 my-4">{product.description}</p>
          <p className="text-2xl font-bold text-purple-600">{product.price}</p>

          {/* Add to Cart Button */}
          <button
            className="py-3 px-6 w-[80%] bg-black text-white font-bold rounded-3xl mt-[10%] hover:bg-purple-700 transition"
            onClick={() => {
              // Handle "Add to Cart" logic here
              console.log(`${product.title} added to cart!`);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetail;
