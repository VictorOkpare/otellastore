import React, { useState } from 'react';
import Slider from 'react-slick';
import { useCart } from '../../components/CartContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import premadeDesigns from '../PremadeDesign/premadeDesign.json';

const PremadeDesign = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showOptions, setShowOptions] = useState(false);
  const [activeDesign, setActiveDesign] = useState(null);
  const { addToCart } = useCart();

  const handleCTAClick = (design) => {
    setActiveDesign(design);
    setShowOptions(true);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    const newItem = {
      id: activeDesign.id,
      img: activeDesign.img,
      description: activeDesign.description,
      designName: activeDesign.designName,
      designPrice: activeDesign.designPrice,
      size: selectedSize,
      quantity: quantity
    };

    addToCart(newItem);
    setShowOptions(false);
    setSelectedSize('');
    setQuantity(1);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <div className="premade-designs mt-8">
      <h2 className="text-2xl mb-4">Premade Designs</h2>
      <Slider {...sliderSettings}>
        {premadeDesigns.map((design) => (
          <div key={design.id} className="p-2">
            <img src={design.img} alt={design.designName} className="w-full h-full object-cover" style={{ width: '300px', height: '300px' }} />
            <h3 className="text-center mt-2">{design.designName}</h3>
            <p className="text-center">{design.description}</p>
            <p className="text-center font-bold">₦{design.designPrice}</p>
            <button
              className="mt-2 bg-orange-500 text-white p-2 rounded-full w-full"
              onClick={() => handleCTAClick(design)}
            >
              {design.cta}
            </button>
            {showOptions && activeDesign.id === design.id && (
              <div className="mt-4 p-4 bg-gray-200 rounded">
                <div className="mb-2">
                  <label className="block mb-1">Select Size:</label>
                  <select
                    className="p-2 border rounded w-full"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    <option value="">Select Size</option>
                    {design.size.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-2">
                  <label className="block mb-1">Quantity:</label>
                  <input
                    type="number"
                    className="p-2 border rounded w-full"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min="1"
                  />
                </div>
                <button
                  className="mt-2 bg-green-500 text-white p-2 rounded-full w-full"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PremadeDesign;
