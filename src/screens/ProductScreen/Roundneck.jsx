import React, { useState } from 'react';
import Imagedata from './Roundneck.json';

function Roundneck() {
    const [selectedItem, setSelectedItem] = useState(Imagedata[0]);

    const handleImageClick = (item) => {
        setSelectedItem(item);
    };

    const handleColorChange = (event) => {
        const selectedColor = event.target.value;
        const newItem = Imagedata.find(item => item.colour === selectedColor);
        if (newItem) {
            setSelectedItem(newItem);
        }
    };

    return (
        <>
            <div className='flex w-[1000px] mx-20px m-auto'>
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
                <div>
                    <div className='pname'>{selectedItem.title}</div>
                    <div>{selectedItem.colour}</div>
                    <form action="#">
                        <label htmlFor="colours">Select a different colour</label>
                        <select name="colours" id="colours" onChange={handleColorChange}>
                            {Imagedata.map((data) => (
                                <option value={data.colour} key={data.id}>{data.colour}</option>
                            ))}
                        </select>
                    </form>
                    <div>
                        {selectedItem.brand.map((brand, index) => (
                            <div key={index}>
                                <div>{brand.name}</div>
                                <div>
                                    {brand.size.map((size, index) => (
                                        <div key={index}>{size.name}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Roundneck;
