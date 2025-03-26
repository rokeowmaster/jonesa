"use client";

import { useCart } from "@/context/cartContext";
import { useEffect } from "react";
import { Banner } from "@/components";

const Cart = () => {
    const { cart} = useCart();

    // useEffect(() => {
    //     loadCart();
    // }, []);

    return (
        <>
        <Banner />
        <div className="m-4 p-4 container mx-auto">
            
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="list-none m-4 p-4 container mx-auto">
                    {cart.map((item, index) => (
                        <li className="m-4" key={index}>{item.name} - ${item.price}</li>
                    ))}
                </ul>
            )}

        </div>
        </>

        
    );
};

export default Cart;
