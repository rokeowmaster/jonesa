"use server";

let cart = [];

export async function addToCart(product) {
    cart.push(product);
    return cart;
}

export async function getCart() {
    return cart;
}
