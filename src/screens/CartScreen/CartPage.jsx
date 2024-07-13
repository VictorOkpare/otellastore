import React, { useContext } from 'react';
import { CartContext } from '../../components/CartContext';

function CartPage() {
    const { cartItems, setCartItems } = useContext(CartContext);

    const handleRemoveFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    return (
        <div className="cart-page dark:bg-gray-900 bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-10">
            <h2 className="text-xl font-bold dark:text-white text-black">Shopping Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index} className="flex justify-between dark:text-gray-300 text-gray-600 mb-2">
                        <span>{item.title} - {item.brand} - {item.size}</span>
                        <span>₦{item.price} x {item.quantity}</span>
                        <button onClick={() => handleRemoveFromCart(index)} className="text-red-500">Remove</button>
                    </li>
                ))}
            </ul>
            <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition mt-4">Proceed to Payment</button>
        </div>
    );
}

export default CartPage;
