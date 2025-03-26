"use client";

import { createContext, useContext, useState } from "react";
import { addToCart as addToCartAction, getCart } from "@/lib/actions";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = async (product) => {
        const updatedCart = await addToCartAction(product);
        setCart(updatedCart);
    };

    // const loadCart = async () => {
    //     const cartData = await getCart();
    //     setCart(cartData);
    // };

    return (
        <CartContext.Provider value={{ cart, addToCart}}>
            {children}
        </CartContext.Provider>
    );
};
