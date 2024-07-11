import React from 'react'
import Img1 from '../../assets/images/productsDataImages/Img1.png'
import Img2 from '../../assets/images/productsDataImages/Img2.png'
import Img3 from '../../assets/images/productsDataImages/longsleeve.png'
import Img4 from '../../assets/images/productsDataImages/Img4.png'



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
  },
  {
    id: 5,
    img: Img4,
    title:"Kids Roundneck Tshirts",
    description: "100% plain cotton tshirts",
    size: ["s", "m", "l", "xl"],
    aosDelay: "600"
}
]
  return (
    <div className='mb-12  dark:bg-black'>
      <div className='container'> 
        {/* Header section */}
          <div className=' w-full text-left mb-10 mx-auto'>
            <p data-aos="fade-up" className='text-xl text-orange-500 font-bold'> Shop by categories </p>
            {/* <h1 data-aos="fade-up" lassName='text-3xl font-bold'>Shop by Category</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>From classic round necks to trendy v-necks, and from kids' favorites to long-sleeve tees, we've got you covered. Discover our range of plain t-shirts, perfect for everyday wear, gifts, or even as a blank canvas for your creative design .</p> */}
          </div>
        {/* Body section */}
          <div>
            <div className='grid grid-cols-1  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 '>
            {/* Card section */}
            {ProductsData.map((data)=>
            (
              <div key = {data.id} className='space-y-3 text-white bg-orange-500 rounded-lg '
              data-aos='fade-up'
              data-aos-delay={data.aosDelay}>
                <img src={data.img} 
                alt="" 
                className='h-[280px] w-[350px] object-cover rounded-md bg-orange-300 dark:bg-gray-200'/>
                <div className='text-center'>
                  <h1 className="font-semibold r">{data.title}</h1>
                  <p className='text-sm text-orange-100'>
                    {data.description}</p>
                  <div className='flex justify-center items-center gap-3 mt-2 '>
                    {data.size.map((s) => {
                      return(<div className='bg-white  border-solid text-orange-500 w-7 h-7 inline-block text-center rounded hover:bg-black hover:text-white '>{s}</div>)
                    })}
                  </div>
                </div>
              </div>
            
            ))}
            </div>
            {/* view all button */}
            <div className='flex justify-center'>
              <button className='text-center mt-10 cursor-pointer bg-orange-500 text-white py-1 px-5 rounded-md'>View All</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Products