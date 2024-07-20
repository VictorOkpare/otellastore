import React, { useState } from 'react';
import { useCart } from '../../components/CartContext';

const OrderPopup = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.size[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      size: selectedSize,
      quantity,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold dark:text-white text-black mb-4">Order {product.title}</h2>
        <div>
          <label className="block dark:text-white text-black mb-2">Select Size:</label>
          <select 
            className="block w-full p-2 rounded"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            {product.size.map(size => (
              <option key={size} value={size}>{size.toUpperCase()}</option>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <label className="block dark:text-white text-black mb-2">Quantity:</label>
          <input 
            type="number"
            className="block w-full p-2 rounded"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
          />
        </div>
        <div className="mt-6 flex justify-between">
          <button 
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button 
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPopup;
