import React, { useState } from 'react';
import Imagedata from './Roundneck.json';

function Roundneck() {
    const [selectedItem, setSelectedItem] = useState(Imagedata[0]);
    const [selectedBrand, setSelectedBrand] = useState(selectedItem.brand[0]);
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleImageClick = (item) => {
        setSelectedItem(item);
        setSelectedBrand(item.brand[0]);
        setSelectedSize('');
    };

    const handleColorChange = (event) => {
        const selectedColor = event.target.value;
        const newItem = Imagedata.find(item => item.colour === selectedColor);
        if (newItem) {
            setSelectedItem(newItem);
            setSelectedBrand(newItem.brand[0]);
            setSelectedSize('');
        }
    };

    const handleBrandChange = (event) => {
        const brandName = event.target.value;
        const brand = selectedItem.brand.find(b => b.name === brandName);
        if (brand) {
            setSelectedBrand(brand);
            setSelectedSize('');
        }
    };

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleAddToCart = () => {
        const selectedSizeObj = selectedBrand.size.find(s => s.name === selectedSize);
        if (selectedSizeObj && selectedSizeObj.quantity >= quantity) {
            alert(`${quantity} ${selectedSize} size(s) added to cart!`);
            selectedSizeObj.quantity -= quantity;
        } else {
            alert('Out of stock or not enough quantity!');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center p-6 bg-white dark:bg-black text-black dark:text-white">
            <div className="flex w-full max-w-4xl mx-auto">
                {/* Big Image Roundneck */}
                <div className="w-1/3">
                    <img src={selectedItem.img} alt="" className="w-full" />
                    {/* Small Images Roundneck */}
                    <div className="flex justify-between w-full mt-4">
                        {Imagedata.map((item) => (
                            <div key={item.id} className="w-12 border border-black overflow-hidden cursor-pointer">
                                <img
                                    src={item.img}
                                    alt=""
                                    className="transition-transform transform hover:scale-110"
                                    onClick={() => handleImageClick(item)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Product details section */}
                <div className="ml-6 flex-1">
                    <div className="text-2xl font-bold">{selectedItem.title}</div>
                    <div className="text-lg mb-2">{selectedItem.colour}</div>
                    <form className="mb-4">
                        <label htmlFor="colours" className="block mb-1">Select a different colour</label>
                        <select
                            name="colours"
                            id="colours"
                            onChange={handleColorChange}
                            className="w-full p-2 border border-black bg-white dark:bg-black"
                        >
                            {Imagedata.map((data) => (
                                <option value={data.colour} key={data.id}>{data.colour}</option>
                            ))}
                        </select>
                    </form>
                    <form className="mb-4">
                        <label htmlFor="brands" className="block mb-1">Select from our range of brands</label>
                        <select
                            name="brands"
                            id="brands"
                            onChange={handleBrandChange}
                            className="w-full p-2 border border-black bg-white dark:bg-black"
                        >
                            {selectedItem.brand.map((brand, index) => (
                                <option value={brand.name} key={index}>{brand.name}</option>
                            ))}
                        </select>
                    </form>
                    <form className="mb-4">
                        <label htmlFor="sizes" className="block mb-1">Select size</label>
                        <select
                            name="sizes"
                            id="sizes"
                            onChange={handleSizeChange}
                            className="w-full p-2 border border-black bg-white dark:bg-black"
                        >
                            <option value="">Select size</option>
                            {selectedBrand.size.map((size, index) => (
                                <option value={size.name} key={index}>{size.name}</option>
                            ))}
                        </select>
                    </form>
                    <div className="mb-4">
                        <label htmlFor="quantity" className="block mb-1">Quantity</label>
                        <input
                            type="number"
                            id="quantity"
                            value={quantity}
                            onChange={handleQuantityChange}
                            className="w-full p-2 border border-black bg-white dark:bg-black"
                            min="1"
                        />
                    </div>
                    <div className="mb-4">
                        <div className="text-lg">Selected Brand: {selectedBrand.name}</div>
                        <div className="text-lg">Selected Colour: {selectedItem.colour}</div>
                        <div className="text-lg">Selected Size: {selectedSize}</div>
                    </div>
                    <button
                        onClick={handleAddToCart}
                        className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Roundneck;
