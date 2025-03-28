"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "@/context/cartContext";
import { getProduct } from "@/sanityclient/query";
import { Banner, Nav } from "@/components";
import client from "@/sanityclient/client";
import { urlFor } from "@/sanityclient/client";
import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  const { addToCart } = useCart();
  const { category } = useParams(); // ✅ Get category from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!category) return; // ✅ Ensure category exists before fetching

    const fetchProducts = async () => {
      try {
        const data = await getProduct(client);
        const foundProducts = data.filter(
          (item) => item.productCategory.toLowerCase() === category.toLowerCase()
        );
        setProducts(foundProducts); // ✅ Always set an array, not null
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) return <p className="text-center py-10 text-gray-500">Loading...</p>;

  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      <Banner />
      <Nav />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          {category ? `${category} Products` : "Our Products"}
        </h2>

        {products.length > 0 ? (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {products.map((product) => (
              product.productImage && (
                <div key={product._id} className="bg-white rounded-lg p-4 shadow-lg">
                  {/* Wrap the Image in a Link */}
                  <Link href={`/products/${product._id}`}>
                    <Image
                      src={urlFor(product.productImage).url()}
                      alt={product.productName || "Product Image"}
                      width={300}
                      height={300}
                      className="rounded-md cursor-pointer hover:opacity-80 transition"
                    />
                  </Link>
                  <h3 className="text-xl font-medium mt-4">{product.productName}</h3>
                  <p className="text-gray-600 text-sm mt-2">{product.productDescription}</p>
                  <p className="text-orange-500 text-lg font-semibold mt-2">
                    Kshs. {product.productPrice.toFixed(2)}
                  </p>
                  <button
                    className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md transition"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              )
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
