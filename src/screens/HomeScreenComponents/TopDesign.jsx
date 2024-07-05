import React from 'react'
import Img1 from '../../assets/images/topDesignScreenImages/design1.jpg'
import Img2 from '../../assets/images/topDesignScreenImages/design2.jpg'
import Img3 from '../../assets/images/topDesignScreenImages/design3.jpg'
import Img4 from '../../assets/images/topDesignScreenImages/design8.jpg'
import Img5 from '../../assets/images/topDesignScreenImages/design6.jpg'
import Img6 from '../../assets/images/topDesignScreenImages/design7.jpg'

const ProductsData = [
  {
    id:1,
    img:Img1,
    title: 'Design 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nostrum ullam porro blanditiis pariatur earum aperiam debitis '
  },
  {
    id:2,
    img:Img2,
    title: 'Design 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nostrum ullam porro blanditiis pariatur earum aperiam debitis '
  },
  {
    id:3,
    img:Img3,
    title: 'Design 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nostrum ullam porro blanditiis pariatur earum aperiam debitis '
  },
  {
    id:4,
    img:Img4,
    title: 'Design 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nostrum ullam porro blanditiis pariatur earum aperiam debitis '
  },
  {
    id:5,
    img:Img5,
    title: 'Design 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nostrum ullam porro blanditiis pariatur earum aperiam debitis '
  },
  {
    id:6,
    img:Img6,
    title: 'Design 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nostrum ullam porro blanditiis pariatur earum aperiam debitis '
  },
]

function TopDesign() {
  return (
    <div className='dark:bg-black'>
        <div className='container'>
        {/* Header section */}
        <div  className='text-left mb-24 '>
            <p data-aos="fade-up" className='text-sm text-secondary'>Trending Designs</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Designs</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolor veniam consequuntur. Inventore fuga unde </p>
          </div>
          {/* body section */}
        <div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
          {ProductsData.map((data)=>(
              <div 
              data-aos ="zoom-in"
              className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover: text-white relative shadow-xl duration-300 group max-w-[300px]' >
                {/* image section */}
                <div className='h-[100px]'>
                  <img src={data.img} alt=""
                  className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
                  />
                </div>
                {/* details section */}
                <div className='p-4 text-center'>
                  <h1 className='text-xl font-bold'>{data.title}</h1>
                  <p text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2>{data.description}

                  </p>
                  <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  //  onClick={handleOrderPopup}
                   >
                    Order Now
                   </button>
                </div>
              </div>
            ))
          }
        </div>
        </div>
    </div>
  )
}

export default TopDesign