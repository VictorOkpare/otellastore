import React from 'react'
import Img1 from '../assets/images/productsDataImages/Img1.png'
import Img2 from '../assets/images/productsDataImages/Img2.png'
import Img3 from '../assets/images/productsDataImages/Img3.png'
import {  FaStar } from 'react-icons/fa'


function Products() {

  const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Roundneck Tshirts",
        description: "100% plain cotton tshirts",
        size: ["s", "m", "l", "xl"],
        aosDelay: "0"
    },
    {
        id: 2,
        img: Img2,
        title: "Collarnecks Tshirt",
        description: "100% plain cotton tshirts",
        size: ["s", "m", "l", "xl"],
        aosDelay: "0"
    },
    {
        id: 3,
        img: Img3,
        title:"Longsleeve Tshirts",
        description: "100% plain cotton tshirts",
        size: ["s", "m", "l", "xl"],
        aosDelay: "0"
    }
]
  return (
    <div className='mt-14 mb-12'>
        {/* Header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p className='text-sm text-primary'>Top Selling Products for you</p>
            <h1 className='text-3xl font-bold'>Products</h1>
            <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolor veniam consequuntur. Inventore fuga unde  .</p>
        </div>
        {/* Body section */}
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center gap-5 '></div>
            {/* Card section */}
            {ProductsData.map((data)=>
            (
              <div key = {data.id} className='space-y-3 flex flex-col items-center justify-center w-full h-full p-4 bg-white rounded-md shadow-md'>
                <img src={data.img} 
                alt="" 
                className='h-[220px] w-[150px] object-cover rounded-md'/>
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className='text-sm text-gray-600'>
                    {data.description}</p>
                  <div className='flex items-center gap-1'>
                    {data.size.map((s) => {
                      return(<div className='bg-orange-600 border-solid text-white w-5 h-5 m-2 inline-block text-center rounded hover:bg-inherit hover:text-black '>{s}</div>)
                    })}
                  </div>
                </div>
              </div>

            ))}
            
        </div>
    </div>
  )
}

export default Products