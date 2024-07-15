import React, { useState, useEffect } from 'react';
import Imagedata from './Roundneck.json';
import OrderSummary from '../../components/OrderSummary';
import { useCart } from '../../components/CartContext';

function Roundneck() {
  const { addToCart, cartItems, removeFromCart } = useCart();
  const [selectedItem, setSelectedItem] = useState(Imagedata[0]);
  const [selectedBrand, setSelectedBrand] = useState(selectedItem.brand[0].brandname);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(selectedItem.brand[0].price);
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  useEffect(() => {
    const brand = selectedItem.brand.find(b => b.brandname === selectedBrand);
    if (brand) {
      setPrice(brand.price);
    }
  }, [selectedBrand, selectedItem]);

  const handleImageClick = (item) => {
    setSelectedItem(item);
    setSelectedBrand(item.brand[0].brandname);
    setSelectedSize('');
    setQuantity(1);
  };

  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    const newItem = Imagedata.find(item => item.colour === selectedColor);
    if (newItem) {
      setSelectedItem(newItem);
      setSelectedBrand(newItem.brand[0].brandname);
      setSelectedSize('');
      setQuantity(1);
    }
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    const item = {
      ...selectedItem,
      brand: selectedBrand,
      size: selectedSize,
      quantity: parseInt(quantity),
      price: price,
    };
    addToCart(item);
    setShowOrderSummary(true);
  };

  return (
    <>
      <div className="dark:bg-gray-900 bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-10">
        <div className='flex w-full'>
          {/* Big Image Roundneck */}
          <div className='w-[250px]'>
            <img src={selectedItem.img} alt="" className='w-inherit' />
            {/* Small Images Roundneck */}
            <div className='flex justify-between w-full mt-[15px]'>
              {Imagedata.map((item) => (
                <div key={item.id} className='w-[50px] overflow-hidden border-[1.5px] border-solid'>
                  <img
                    src={item.img}
                    alt=""
                    className='transition-all duration-[0.3s] ease-linear w-inherit cursor-pointer hover:scale-110'
                    onClick={() => handleImageClick(item)}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Product details section */}
          <div className='ml-6'>
            <div className='pname dark:text-white text-black text-xl font-bold'>{`${selectedItem.colour} ${selectedItem.title}`}</div>
            <div className='dark:text-gray-300 text-gray-600 mb-2'>Color: {selectedItem.colour}</div>
            <div className='dark:text-gray-300 text-gray-600 mb-2'>Price: &#8358;{price}</div>
            <form className='flex flex-col mb-4'>
              <label htmlFor="colours" className='dark:text-gray-300 text-gray-600'>Select a different colour</label>
              <select name="colours" id="colours" onChange={handleColorChange} className='p-2 border rounded mb-4'>
                {Imagedata.map((data) => (
                  <option value={data.colour} key={data.id}>{data.colour}</option>
                ))}
              </select>
            </form>
            <form className='flex flex-col mb-4'>
              <label htmlFor="brands" className='dark:text-gray-300 text-gray-600'>Select from our range of brands</label>
              <select name="brands" id="brands" onChange={handleBrandChange} className='p-2 border rounded mb-4'>
                {selectedItem.brand.map((brand, index) => (
                  <option value={brand.brandname} key={index}>{brand.brandname}</option>
                ))}
              </select>
            </form>
            <form className='flex flex-col mb-4'>
              <label htmlFor="sizes" className='dark:text-gray-300 text-gray-600'>Select Size</label>
              <select name="sizes" id="sizes" onChange={handleSizeChange} className='p-2 border rounded mb-4'>
                {selectedItem.brand.find(b => b.brandname === selectedBrand)?.size.map((size, index) => (
                  <option value={size.sizename} key={index}>{size.sizename}</option>
                ))}
              </select>
            </form>
            <div className='flex items-center mb-4'>
              <label htmlFor="quantity" className='dark:text-gray-300 text-gray-600 mr-2'>Quantity</label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className='p-2 border rounded w-16'
              />
            </div>
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
        {showOrderSummary && <OrderSummary cartItems={cartItems} onRemoveFromCart={removeFromCart} />}
      </div>
    </>
  );
}

export default Roundneck;
