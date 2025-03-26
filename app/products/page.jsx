"use client";

import { useCart } from "@/context/cartContext";
import Link from "next/link";
import { Banner, Nav } from "@/components";

const ProductList = () => {
    const { addToCart } = useCart();
    
    const products = [
        { id: 1, name: "Laptop", price: 999 },
        { id: 2, name: "Phone", price: 499 },
        { id: 3, name: "Headphones", price: 199 }
    ];

    return (
        <div className="">
        <Banner />
        <Nav />
        <div className="container mx-auto m-4">
            <h2>Products</h2>
            <ul className="list-none p-4">
                {products.map((product) => (
                    <li key={product.id} className="flex justify-between py-2">
                        {product.name} - ${product.price}
                        <button className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded" onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
            <Link href="/cart">Go to Cart</Link>
        </div>
    </div>
    );
};

export default ProductList;
