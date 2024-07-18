import React from 'react';

const designTypeDescriptions = {
  frontOnlyPrice: 'Front Only',
  frontAndBackPrice: 'Front and Back',
  pocketPrice: 'Pocket Size'
};

const OrderSummary = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold dark:text-white text-black mb-6">Order Summary</h2>
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <div className="flex items-center max-sm:flex-col">
              <img src={item.img} alt="" className="w-16 h-16 object-cover rounded-lg mr-4" />
              <div>
                <p className="font-bold dark:text-white text-black">{`${item.colour || "Premade Design - "} ${item.title || item.category || item.designName}`}</p>
                <p className="dark:text-gray-300 text-gray-600">Brand: {item.brand || "Otella"}</p>
                <p className="dark:text-gray-300 text-gray-600">Size: {item.size}</p>
                <p className="dark:text-gray-300 text-gray-600">Quantity: {item.quantity} pcs</p>
                <p className="dark:text-gray-300 text-gray-600">Design Type: {designTypeDescriptions[item.designType || "No design" ] }</p>
                <p className="dark:text-gray-300 text-gray-600">Price: &#8358;{item.price * item.quantity }</p>
              </div>
            </div>
            <button
              onClick={() => onRemoveFromCart(index)}
              className="text-red-500 dark:text-red-400 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSummary;
