import React, { useState } from 'react'
import Img1 from '../../assets/images/topDesignScreenImages/design20.png'
import Img2 from '../../assets/images/topDesignScreenImages/design21.png'
import Img3 from '../../assets/images/topDesignScreenImages/design22.png'
import Img4 from '../../assets/images/topDesignScreenImages/design23.png'
import Img5 from '../../assets/images/topDesignScreenImages/design24.png'
import Img6 from '../../assets/images/topDesignScreenImages/design25.png'
import OrderPopup from './OrderPopup'; // Make sure to update the path as needed

const ProductsData = [
  {
    id:1,
    img:Img1,
    title: 'Win Way',
    design: 'Pre-made Design',
    description: 'Win-way Tshirt is made from 100% cotton. ',
    size:['m', 'l', 'xl', 'xxl'], 
    price: 18000
  },
  {
    id:2,
    img:Img2,
    title: 'Smile',
    design: 'Pre-made Design',
    description: 'Smile design is a trendy new look. 100% cotton',
    size:['m', 'l', 'xl', 'xxl'],
    price:20000
  },
  {
    id:3,
    img:Img3,
    title: 'Tskanumi',
    design: 'Pre-made Design',
    description: 'Tskanumi tshirt is a favorite of Anime lovers. Comfy and stylish look ',
    size:['m', 'l', 'xl', 'xxl'],
    price: 13000
  },
  {
    id:4,
    img:Img4,
    title: 'New Nation',
    design: 'Pre-made Design',
    description: 'T',
    size:['m', 'l', 'xl', 'xxl'],
    price: 14500
  },
  {
    id:5,
    img:Img5,
    title: 'Metropolitan',
    design: 'Pre-made Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nostrum ullam porro blanditiis pariatur earum aperiam debitis ',
    size:['m', 'l', 'xl', 'xxl'],
    price: 13000
  },
  {
    id:6,
    img:Img6,
    title: 'loravel',
    design: 'Pre-made Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nostrum ullam porro blanditiis pariatur earum aperiam debitis ',
    size:['m', 'l', 'xl', 'xxl'], 
    price: 8000
  },
]

function TopDesign() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className='dark:bg-black'>
        <div className='container'>
        {/* Header section */}
        <div className='text-left mb-24 '>
            <p data-aos="fade-up" className='text-lg text-orange-500 '>Trending Design</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Pre-Made Design</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>View a wide range of trendy designs to customize your t-shirts in less than 10 minutes.</p>
        </div>
        {/* Body section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
          {ProductsData.map((data) => (
            <div 
              key={data.id}
              data-aos="zoom-in"
              className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-orange-500 text-white relative shadow-xl duration-300 group max-w-[300px]' 
            >
              {/* Image section */}
              <div className='h-[100px]'>
                <img 
                  src={data.img} 
                  alt={data.title} 
                  className='max-w-[180px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' 
                />
              </div>
              {/* Details section */}
              <div className='p-4 hover:z-10 text-center relative group hover:mt-10 duration-500'>
                <h1 className='hidden group-hover:block text-xl font-bold'>{data.title}</h1>
                {/* <p className='hidden group-hover:block'>{data.description}</p> */}
                <p className='hidden text-orange-500 dark:text-white group-hover:block'>Price: &#8358;{data.price}</p>
                <button 
                  className='hidden group-hover:block bg-orange-500 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-orange-500'
                  onClick={() => setSelectedProduct(data)}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>
        {selectedProduct && (
          <OrderPopup 
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
    </div>
  );
}

export default TopDesign;
