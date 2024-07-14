import React, { useState, useEffect } from 'react';
import roundneck from '../ProductScreen/Roundneck.json';
import collarneck from "../ProductScreen/collarneck.json";
import vnecks from "../ProductScreen/vneck.json";
import kidsTshirt from "../ProductScreen/kidsTshirt.json";
import categories from "./categories.json";
import premadeDesigns from "./premade.json";
import pricing from "./pricing.json";

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
  const [isPremadeDesign, setIsPremadeDesign] = useState(false);
  const [selectedPremadeDesign, setSelectedPremadeDesign] = useState('');
  const [uploadedDesign, setUploadedDesign] = useState(null);

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
    if (!selectedBrand) return;

    let basePrice = isPremadeDesign ? pricing.frontOnlyPrice : pricing[designType];
    const brandPrice = brandOptions.find(brand => brand.brandname === selectedBrand)?.price || 0;
    const quantity = Number(selectedQuantity);

    // Logging for debugging
    console.log('Base Price:', basePrice);
    console.log('Brand Price:', brandPrice);
    console.log('Quantity:', quantity);

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
    setIsPremadeDesign(false);
    setDesignType('');
  };

  const handlePlaceOrder = () => {
    // Handle the order placement logic here
    alert("Order placed successfully!");
  };

  return (
    <div className="customization-page p-4">
      <div className="categories mb-4">
        <h2 className="text-2xl mb-2">Select Category</h2>
        <div className="grid grid-cols-2 gap-4">
          {categories.map(category => (
            <button
              key={category}
              className="p-2 bg-gray-200 rounded hover:bg-gray-300"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {selectedCategory && (
        <div className="customization-options mb-4">
          <h2 className="text-2xl mb-2">Customize Your {selectedCategory}</h2>

          <div className="color-selection mb-2">
            <h3 className="text-xl">Select Color</h3>
            <select
              className="p-2 border rounded"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option value="">Select Color</option>
              {categoryData.map(item => (
                <option key={item.colour} value={item.colour}>
                  {item.colour}
                </option>
              ))}
            </select>
          </div>

          {selectedColor && (
            <div className="brand-selection mb-2">
              <h3 className="text-xl">Select Brand</h3>
              <select
                className="p-2 border rounded"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option value="">Select Brand</option>
                {brandOptions.map(brand => (
                  <option key={brand.brandname} value={brand.brandname}>
                    {brand.brandname}
                  </option>
                ))}
              </select>
            </div>
          )}

          {selectedBrand && (
            <div className="size-selection mb-2">
              <h3 className="text-xl">Select Size</h3>
              <select
                className="p-2 border rounded"
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

          <div className="quantity-selection mb-2">
            <h3 className="text-xl">Select Quantity</h3>
            <input
              type="number"
              className="p-2 border rounded w-full"
              value={selectedQuantity}
              onChange={(e) => setSelectedQuantity(Number(e.target.value))}
              min="1"
            />
          </div>

          <div className="design-type-selection mb-2">
            <h3 className="text-xl">Select Design Type</h3>
            <select
              className="p-2 border rounded"
              value={designType}
              onChange={(e) => setDesignType(e.target.value)}
              disabled={isPremadeDesign || uploadedDesign}
            >
              <option value="">Select Design Type</option>
              <option value="pocketPrice">Pocket Design</option>
              <option value="frontOnlyPrice">Front Only Design</option>
              <option value="frontAndBackPrice">Front and Back Design</option>
            </select>
          </div>

          <div className="upload-design mb-2">
            <h3 className="text-xl">Upload Your Design</h3>
            <input
              type="file"
              className="p-2 border rounded w-full"
              onChange={handleDesignUpload}
              disabled={isPremadeDesign}
            />
          </div>

          <button
            className="calculate-cost-button p-2 bg-blue-500 text-white rounded mt-2"
            onClick={calculateTotalPrice}
          >
            Calculate Cost
          </button>

          <div className="total-price mt-4">
            <h2 className="text-2xl">Total Price: {totalPrice} Naira</h2>
          </div>

          <button
            className="place-order-button p-2 bg-green-500 text-white rounded mt-2"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      )}

      <div className="premade-designs mb-4">
        <h2 className="text-2xl mb-2">Select Premade Design</h2>
        <div className="grid grid-cols-3 gap-4">
          {premadeDesigns.map(design => (
            <div
              key={design.id}
              className="p-2 border rounded hover:bg-gray-200"
              onClick={() => {
                setIsPremadeDesign(true);
                setSelectedPremadeDesign(design.id);
                setDesignType('frontOnlyPrice');
                setUploadedDesign(null);
              }}
            >
              <img src={design.image} alt={design.title} className="w-full h-32 object-cover mb-2" />
              <p className="text-center">{design.title}</p>
            </div>
          ))}
        </div>

        {isPremadeDesign && (
          <div className="premade-design-options mb-4">
            <div className="brand-selection mb-2">
              <h3 className="text-xl">Select Brand</h3>
              <select
                className="p-2 border rounded"
                value={selectedBrand}
                onChange ={(e) => setSelectedBrand(e.target.value)}
              >
                <option value="">Select Brand</option>
                {brandOptions.map(brand => (
                  <option key={brand.brandname} value={brand.brandname}>
                    {brand.brandname}
                  </option>
                ))}
              </select>
            </div>

            {selectedBrand && (
              <>
                <div className="color-selection mb-2">
                  <h3 className="text-xl">Select Color</h3>
                  <select
                    className="p-2 border rounded"
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                  >
                    <option value="">Select Color</option>
                    {categoryData.map(item => (
                      <option key={item.colour} value={item.colour}>
                        {item.colour}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="size-selection mb-2">
                  <h3 className="text-xl">Select Size</h3>
                  <select
                    className="p-2 border rounded"
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

                <div className="quantity-selection mb-2">
                  <h3 className="text-xl">Select Quantity</h3>
                  <input
                    type="number"
                    className="p-2 border rounded w-full"
                    value={selectedQuantity}
                    onChange={(e) => setSelectedQuantity(Number(e.target.value))}
                    min="1"
                  />
                </div>

                <button
                  className="calculate-cost-button p-2 bg-blue-500 text-white rounded mt-2"
                  onClick={calculateTotalPrice}
                >
                  Calculate Cost
                </button>

                <div className="total-price mt-4">
                  <h2 className="text-2xl">Total Price: {totalPrice} Naira</h2>
                </div>

                <button
                  className="place-order-button p-2 bg-orange-500 text-white rounded mt-2"
                  onClick={handlePlaceOrder}
                >
                  Add to Cart
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomizationPage;