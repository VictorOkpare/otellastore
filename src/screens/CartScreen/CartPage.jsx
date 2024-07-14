import React from 'react';
import { useCart } from '../../components/CartContext';

const CartPage = () => {
    const { cartItems, removeFromCart } = useCart();

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold dark:text-white text-black mb-6">Your Cart</h2>
            <div className="space-y-4">
                {cartItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                        <div className="flex items-center">
                            <img src={item.img} alt="" className="w-16 h-16 object-cover rounded-lg mr-4" />
                            <div>
                                <p className="font-bold dark:text-white text-black">{`${item.colour} ${item.title}`}</p>
                                <p className="dark:text-gray-300 text-gray-600">Brand: {item.brand}</p>
                                <p className="dark:text-gray-300 text-gray-600">Size: {item.size}</p>
                                <p className="dark:text-gray-300 text-gray-600">Quantity: {item.quantity}</p>
                                <p className="dark:text-gray-300 text-gray-600">Price: &#8358;{item.price}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => removeFromCart(index)}
                            className="text-red-500 dark:text-red-400 hover:underline"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            <button className="mt-6 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
                Proceed to Payment
            </button>
        </div>
    );
};

export default CartPage;
