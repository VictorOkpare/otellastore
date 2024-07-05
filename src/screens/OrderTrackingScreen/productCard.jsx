import React from 'react'
import Img1 from '../assets/images/productsDataImages/Img1.png'
import Img2 from '../assets/images/productsDataImages/Img2.png'
import Img3 from '../assets/images/productsDataImages/Img3.png'


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

function productCard() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>{ProductsData.map((data)=>(
        <div>
            <img src={data.img} alt="" className="h-[220px] w-[150px] object-cover rounded-md"/>
        </div>
    )
    )}</div>
  )
}

export default productCard