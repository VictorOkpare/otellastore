import React from 'react'
import image1 from '../assets/images/homeScreenImages/homeImg1.png'
import image2 from '../assets/images/homeScreenImages/homeImg2.png'
import image3 from '../assets/images/homeScreenImages/homeImg3.png'
import image4 from '../assets/images/homeScreenImages/homeImg4.png'
import Slider from 'react-slick'
// import Card from '../components/Card'

const ImageList = [
  {
    id:1,
    img:image1,
    title: "Simple is the new stylish",
    description: "Trending new roundneck, that fits all purpose of casual wears."
  },
  {
    id:2,
    img:image2,
    title: 'Simplicity at its best!',
    description: "Trending new roundneck, that fits all purpose of casual wears."
  },
  {
    id:3,
    img:image3,
    title: 'Simplicity at its best!',
    description: "Trending new roundneck, that fits all purpose of casual wears."
  }, 
  {
    id:4,
    img:image4,
    title: 'Simplicity at its best!',
    description: "Trending new roundneck, that fits all purpose of casual wears."
  }
]
const Hero = ()=>{}
  var settings ={
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    SlidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  }


function HomeScreen() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-400 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
      {/* background pattern */}
     <div className="h-[700px] w-[700px] bg-primary/70 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9 ">

     </div >
      {/* hero section */}
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
          {ImageList.map((data)=>(
            <div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
              {/* text content section */}
              <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                <p className="text-sm">{data.description}</p>
                <div>
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px- rounded-full">
                    Order Now
                  </button>
                </div>
  
              </div>
              {/* image section */}
              <div className='order-1 sm:order-2'>
                <div className='z-10 relative'>
                  <img src={data.img} 
                       alt=""
                       className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto ' />
                </div>
              </div>
  
          </div>
          </div>
          ))}
          </Slider>
      </div>
    </div>
  )
}

export default HomeScreen