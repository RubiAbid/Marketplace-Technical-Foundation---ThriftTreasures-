"use client"
// src/app/shop/page.tsx
import { client } from "@/sanity/lib/client"; // Import your sanity client
import ProductList from "@/components/ProductList";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Fetch products directly in the Server Component
const fetchProducts = async () => {
  const products = await client.fetch(
    `*[_type == "product"]{_id, title, description, price, image}`
  );
  return products;
};

// ShopPage remains a Server Component (no async directly on the component)
const ShopPage = async () => {
  // Fetch products on the server side
  const products = await fetchProducts();

  return (
    <div>
      <Navbar />
      <ProductList products={products} />
      <Footer />
    </div>
  );
};

export default ShopPage;
