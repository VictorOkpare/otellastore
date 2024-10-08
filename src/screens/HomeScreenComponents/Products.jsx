import React from 'react';
import { useNavigate } from 'react-router-dom';
import Img1 from '../../assets/images/productsDataImages/Img1.png';
import Img2 from '../../assets/images/productsDataImages/Img2.png';
import Img3 from '../../assets/images/productsDataImages/longsleeve.png';
import Img4 from '../../assets/images/productsDataImages/Img4.png';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Roundneck Tshirts",
    description: "Timeless comfort",
    cta: "Shop now",
    material: "100% cotton",
    aosDelay: "0",
    link: '/Roundneck'
  },
  {
    id: 2,
    img: Img2,
    title: "Collarnecks Tshirt",
    description: "Classic style for every occasion",
    cta: "Explore",
    aosDelay: "200",
    link: '/Collarneck'
  },
  {
    id: 3,
    img: Img3,
    title: "Longsleeve Tshirts",
    description: "Cozy and comfortable for any time",
    cta: "Shop Now",
    aosDelay: "400",
    link: '/Longsleeve'
  },
  {
    id: 4,
    img: Img4,
    title: "Kids Tshirts",
    description: "Adorable and soft for little ones",
    cta: "Discover",
    aosDelay: "600",
    link: '/KidsTshirt'
  },
  {
    id: 5,
    img: Img4,
    title: "Vneck Tshirt",
    description: "Timeless and versatile for any style",
    cta: "Explore",
    aosDelay: "800",
    link: '/Vneck'
  }
];

function Products() {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <div className='mb-12 dark:bg-gray-900 bg-gray-100 py-10'>
      <div className='container mx-auto px-4'>
        {/* Header section */}
        <div className='w-full text-left mb-10'>
          <p data-aos="fade-up" className='text-3xl text-black dark:text-orange-500 font-semibold font-robotoCondensed'>Shop by categories</p>
        </div>
        {/* Body section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
            {/* Card section */}
            {ProductsData.map((data) => (
              <div
                key={data.id}
                className='space-y-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105'
                data-aos='fade-up'
                data-aos-delay={data.aosDelay}
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className='h-[280px] w-full object-cover rounded'
                />
                <div className='text-center'>
                  <h1 className="text-xl font-semibold text-black dark:text-white">{data.title}</h1>
                  <p className='text-sm text-gray-600 dark:text-gray-300'>{data.description}</p>
                  <button
                    className='mt-3 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition'
                    onClick={() => handleNavigate(data.link)}
                  >
                    {data.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
