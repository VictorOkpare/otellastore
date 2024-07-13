import React, { useState } from 'react';


function Cart({ cartItems, onRemoveFromCart }) {
    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    return (
        <div className="dark:bg-gray-800 bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-10">
            <h2 className="text-2xl font-bold dark:text-white text-black mb-4">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <div className="dark:text-white text-black">Your cart is empty.</div>
            ) : (
                <div className="space-y-4">
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                            <div>
                                <h3 className="dark:text-white text-black font-semibold">{item.title}</h3>
                                <p className="dark:text-gray-300 text-gray-600">Brand: {item.brand}</p>
                                <p className="dark:text-gray-300 text-gray-600">Color: {item.colour}</p>
                                <p className="dark:text-gray-300 text-gray-600">Size: {item.size}</p>
                                <p className="dark:text-gray-300 text-gray-600">Quantity: {item.quantity}</p>
                            </div>
                            <div className="flex items-center">
                                <p className="dark:text-white text-black font-semibold">${item.price}</p>
                                <button
                                    onClick={() => onRemoveFromCart(index)}
                                    className="ml-4 px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="text-right dark:text-white text-black font-bold">
                        Total: ${calculateTotal().toFixed(2)}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
