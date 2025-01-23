"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Define the Product type
type Product = {
  id: number;
  title: string;
  description: string;
};

const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const [products, setProducts] = useState<Product[]>([]); // Use Product[] type here
  const [loading, setLoading] = useState<boolean>(false); // To handle loading state
  const [error, setError] = useState<string | null>(null); // To handle errors

  useEffect(() => {
    if (typeof query === "string" && query.trim() !== "") {
      setLoading(true);
      setError(null); // Reset any previous errors

      // Fetch products based on the query
      fetch(`/api/products?search=${encodeURIComponent(query)}`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch products");
          return res.json();
        })
        .then((data) => setProducts(data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [query]);

  return (
    <div>
      <h1>Search Results for &quot;{query}&quot;</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id}>
                <h2>{product.title}</h2>
                <p>{product.description}</p> {/* Now TypeScript knows description exists */}
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </>
      )}
    </div>
  );
};

export default SearchPage;
