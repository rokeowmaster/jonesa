"use server";

let cart = [];

export async function addToCart(product) {
    // Check if the product already exists in the cart
    const existingProduct = cart.find(item => item._id === product._id);

    if (!existingProduct) {
        // product.quantity = 1;
        cart.push(product);
        console.log(cart);
    }

    return cart;
}

export async function getCart() {
    return cart;
}
