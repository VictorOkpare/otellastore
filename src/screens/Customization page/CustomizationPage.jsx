import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import roundneck from '../ProductScreen/Roundneck.json';
import collarneck from "../ProductScreen/collarneck.json";
import vnecks from "../ProductScreen/vneck.json";
import kidsTshirt from "../ProductScreen/kidsTshirt.json";
import categories from "./categories.json";
import pricing from "./pricing.json";
import { useCart } from '../../components/CartContext';
import './CustomizationPage.css'; 

const CustomizationPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryData, setCategoryData] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [brandOptions, setBrandOptions] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [sizeOptions, setSizeOptions] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [designType, setDesignType] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [uploadedDesign, setUploadedDesign] = useState(null);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [isOrderSummaryClicked, setIsOrderSummaryClicked] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    switch (selectedCategory) {
      case 'roundneck':
        setCategoryData(roundneck);
        break;
      case 'collarneck':
        setCategoryData(collarneck);
        break;
      case 'vnecks':
        setCategoryData(vnecks);
        break;
      case 'kids-tshirt':
        setCategoryData(kidsTshirt);
        break;
      default:
        setCategoryData([]);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedColor) {
      const brands = categoryData.find(item => item.colour === selectedColor)?.brand || [];
      setBrandOptions(brands);
    } else {
      setBrandOptions([]);
    }
  }, [selectedColor, categoryData]);

  useEffect(() => {
    if (selectedBrand) {
      const sizes = brandOptions.find(brand => brand.brandname === selectedBrand)?.size || [];
      setSizeOptions(sizes);
    } else {
      setSizeOptions([]);
    }
  }, [selectedBrand, brandOptions]);

  const calculateTotalPrice = () => {
    if (!selectedBrand || !designType) return;

    const basePrice = pricing[0][designType] || 0;
    const brandPrice = brandOptions.find(brand => brand.brandname === selectedBrand)?.price || 0;
    const quantity = Number(selectedQuantity);

    if (isNaN(basePrice) || isNaN(brandPrice) || isNaN(quantity)) {
      console.error('Invalid price calculation due to NaN values.');
      setTotalPrice(0);
      return;
    }

    const total = (basePrice + brandPrice) * quantity;
    setTotalPrice(total);
  };

  const handleDesignUpload = (event) => {
    const file = event.target.files[0];
    setUploadedDesign(file);
    setDesignType(''); // Reset design type on new upload
  };

  const handleAddToCart = () => {
    const newItem = {
      category: selectedCategory,
      colour: selectedColor,
      brand: selectedBrand,
      size: selectedSize,
      quantity: selectedQuantity,
      designType: designType,
      price: totalPrice,
      img: uploadedDesign ? URL.createObjectURL(uploadedDesign) : '', // Add image URL if available
    };
    addToCart(newItem);
    alert('Item added to cart!');
  };

  const handleOrderSummary = () => {
    calculateTotalPrice();
    setShowOrderSummary(true);
    setIsOrderSummaryClicked(true);
  };

  const isFormComplete = () => {
    return selectedCategory && selectedColor && selectedBrand && selectedSize && uploadedDesign && designType;
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
    <div className="dark:bg-gray-900 p-4 bg-white text-black dark:text-white">
      <nav className="p-4 mb-4 bg-orange-500 text-white dark:text-white">
        <h1 className="text-2xl text-white font-nunito text-center">T-Shirt Customization</h1>
      </nav>

      <div className="categories mb-4">
        <h2 className="text-2xl mb-2 dark:text-white">Select Category</h2>
        <div className="grid grid-cols-2 gap-4">
          {categories.map(category => (
            <button
              key={category}
              className="p-2 bg-orange-50 rounded dark:bg-orange-500 text-black dark:text-white hover:bg-orange-500 hover:text-white hover:font-bold transition duration-300"
              onClick={() => setSelectedCategory(category)}
              data-aos="fade-up"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {selectedCategory && (
        <div className="mb-4">
          <h2 className="text-2xl mb-2">Customize Your {selectedCategory}</h2>

          <div className="mb-2" data-aos="fade-up">
            <h3 className="text-md">Select Color</h3>
            <select
              className="p-2 border rounded w-full text-black"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option value="" className='text-black'>Select Color</option>
              {categoryData.map(item => (
                <option key={item.colour} value={item.colour}>
                  {item.colour}
                </option>
              ))}
            </select>
          </div>

          {selectedColor && (
            <div className="mb-2" data-aos="fade-up">
              <h3 className="text-md text-white">Select Brand</h3>
              <select
                className="p-2 border rounded w-full text-black"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option value="">Select Brand</option>
                {brandOptions.map(brand => (
                  <option key={brand.brandname} value={brand.brandname}>
                    {brand.brandname} ({brand.price} Naira)
                  </option>
                ))}
              </select>
            </div>
          )}

          {selectedBrand && (
            <div className="size-selection mb-2" data-aos="fade-up">
              <h3 className="text-md">Select Size</h3>
              <select
                className="p-2 border rounded w-full text-black"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="">Select Size</option>
                {sizeOptions.map(size => (
                  <option key={size.sizename} value={size.sizename}>
                    {size.sizename}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="quantity-selection mb-2" data-aos="fade-up">
            <h3 className="text-md">Select Quantity</h3>
            <input
              type="number"
              className="p-2 border rounded w-full text-black"
              value={selectedQuantity}
              onChange={(e) => setSelectedQuantity(Number(e.target.value))}
              min="1"
            />
          </div>

          <div className="upload-design mb-2" data-aos="fade-up">
            <h3 className="text-xl">Upload Your Design</h3>
            <input
              type="file"
              className="p-2 border rounded w-full"
              onChange={handleDesignUpload}
            />
          </div>

          <div className="design-type-selection mb-2" data-aos="fade-up">
            <h3 className="text-xl">Select Design Type</h3>
            <select
              className="p-2 border rounded w-full"
              value={designType}
              onChange={(e) => setDesignType(e.target.value)}
              disabled={!uploadedDesign} // Allow selection only if a design is uploaded
            >
              <option value="">Select Design Type</option>
              <option value="pocketPrice">Pocket Design</option>
              <option value="frontOnlyPrice">Front Only Design</option>
              <option value="frontAndBackPrice">Front and Back Design</option>
            </select>
          </div>

          <button
            className={`order-summary-button p-2 rounded mt-2 ${isFormComplete() ? "bg-orange-500 text-white" : "bg-gray-300 text-gray-600 cursor-not-allowed"}`}
            onClick={isFormComplete() ? handleOrderSummary : null}
            data-aos="fade-up"
            disabled={!isFormComplete()} // Disable button until all fields are filled
          >
            Order Summary
          </button>

          {showOrderSummary && (
            <div className="total-price mt-4" data-aos="fade-up">
              <h2 className="text-2xl">Order Summary:</h2>
              <p>Brand: {selectedBrand} ({brandOptions.find(brand => brand.brandname === selectedBrand)?.price} Naira)</p>
              <p>Color: {selectedColor}</p>
              <p>Size: {selectedSize}</p>
              <p>Design Type: {designType}</p>
              <p>Base Price: {pricing[0][designType] || 0} Naira</p>
              <p>Quantity: {selectedQuantity}</p>
              <p>Total Price: {totalPrice} Naira</p>
            </div>
          )}

          {isOrderSummaryClicked && (
            <button
              className="add-to-cart-button p-2 bg-green-500 text-white rounded mt-2"
              onClick={handleAddToCart}
              data-aos="fade-up"
            >
              Add to Cart
            </button>
          )}
        </div>
      )}

      <div className="premade-designs mt-8" data-aos="fade-up">
        <h2 className="text-2xl mb-4">Premade Designs</h2>
        <button
          className="p-2 bg-orange-500 text-white rounded mt-2 mb-4"
          onClick={() => alert('Premade designs will be displayed!')}
          data-aos="fade-up"
        >
          Click here to get premade designs
        </button>
        <Slider {...sliderSettings}>
          {categoryData.map(item => (
            <div key={item.title} className="p-2">
              <img src={item.image} alt={item.title} className="rounded-lg shadow-lg" />
              <h3 className="text-center mt-2">{item.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomizationPage;
