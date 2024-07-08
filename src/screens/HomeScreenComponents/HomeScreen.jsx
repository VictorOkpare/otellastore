import React from 'react'
import image1 from '../../assets/images/homeScreenImages/homeImg7.png'
import image2 from '../../assets/images/homeScreenImages/homeImg9.png'
import image3 from '../../assets/images/homeScreenImages/homeImg1.png'
import image4 from '../../assets/images/homeScreenImages/homeImg10.png'
import Slider from 'react-slick'
import "../../index.css"
import Products from "./Products"
import TopDesign from "./TopDesign"
import CustomizationScreen from "./CustomizationScreen"
import Subscription from "./Subscription"
import Testimonials from "./Testimonials"
const ImageList = [
  {
    id:1,
    img:image1,
    title: "Shop Design Print in 10 minutes",
    description: "Get trending designs or customize to your taste."
  },

  {
    id:3,
    img:image3,
    title: 'Simplicity at its best!',
    description: "Trending new roundneck, that fits all purpose of casual wears."
  }, 

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
    <>
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-white flex justify-center items-center dark:bg-black dark:text-white duration-200'>
      {/* background pattern */}
     <div className="h-[600px] w-[300px] max-sm:h-[400px] max-sm:w-[700px] bg-orange-500 dark:bg-orange-500 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9 ">

     </div >
      {/* hero section */}
      <div className='container pb-8 sm:pb-0'  data-aos='zoom-out'
              data-aos-duration = '500'
              data-aos-once='true' >
        <Slider {...settings}>
          {ImageList.map((data)=>(
            <div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
              {/* text content section */}
              <div className='  
              flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                <h1  
                data-aos='zoom-out'
                data-aos-duration = '500'
                data-aos-once='true'
                className='text-black 
               text-5xl sm:text-6xl lg:text-7xl font-bold dark:text-white 
                
                '>{data.title}</h1>
                <p 
                data-aos='zoom-out'
                data-aos-duration = '500'
                data-aos-once='true'
                className="text-sm 
                text-black font-bold dark:text-orange-500 dark:max-sm:text-white ">{data.description}</p>
                <div 
                data-aos='zoom-out'
                data-aos-duration = '700'
                data-aos-once='true'>
                  <button className="bg-orange-500 hover:scale-105 duration-200 text-white  py-2 px-4 rounded-full  ">
                   <span className='font-bold text-white ' > Order Now</span> 
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
    <Products/>
    <TopDesign/>
    <CustomizationScreen/>
    <Subscription/>
    <Testimonials/>
    </>
  )
}

export default HomeScreen


