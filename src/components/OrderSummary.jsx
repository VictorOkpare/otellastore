import React from 'react';

const OrderSummary = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="order-summary">
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="flex items-center mb-4">
              <img src={item.img} alt={item.title} className="w-16 h-16 mr-4" />
              <div className="flex-grow">
                <h4 className="font-bold">{item.title}</h4>
                <p>₦{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button
                  onClick={() => onRemoveFromCart(index)}
                  className="text-red-500 hover:underline mt-2"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderSummary;
