import React from 'react'
import Img1 from '../assets/images/productsDataImages/Img1.png'
import Img2 from '../assets/images/productsDataImages/Img2.png'
import Img3 from '../assets/images/productsDataImages/Img3.png'
import Img4 from '../assets/images/productsDataImages/longsleeve.png'



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
        aosDelay: "200"
    },
    {
        id: 3,
        img: Img3,
        title:"Longsleeve Tshirts",
        description: "100% plain cotton tshirts",
        size: ["s", "m", "l", "xl"],
        aosDelay: "400"
    },
    {
      id: 4,
      img: Img4,
      title:"Kids Roundneck Tshirts",
      description: "100% plain cotton tshirts",
      size: ["s", "m", "l", "xl"],
      aosDelay: "600"
  }
]
  return (
    <div className='mt-14 mb-12'>
      <div className='container'> 
        {/* Header section */}
          <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products for you</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolor veniam consequuntur. Inventore fuga unde  .</p>
          </div>
        {/* Body section */}
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 '>
            {/* Card section */}
            {ProductsData.map((data)=>
            (
              <div key = {data.id} className='space-y-3 '
              data-aos='fade-up'
              data-aos-delay={data.aosDelay}>
                <img src={data.img} 
                alt="" 
                className='h-[220px] w-[150px] object-cover rounded-md'/>
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className='text-sm text-gray-600'>
                    {data.description}</p>
                  <div className='flex items-center gap-3 mt-2 '>
                    {data.size.map((s) => {
                      return(<div className='bg-orange-600 border-solid text-white w-7 h-7 inline-block text-center rounded hover:bg-black hover:text-white '>{s}</div>)
                    })}
                  </div>
                </div>
              </div>
            
            ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Products