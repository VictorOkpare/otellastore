import React from 'react'
import Banner from '../../assets/images/BannerandFooterImg/bannerImg.jpg'



const BannerImg ={
    backgroundImage:`url(${Banner})`,
    backgroundPoition: "center",
    backgroundRepeat: 'no=repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%'
  
  }
function Contact() {
  return (

    <div className='mt-50'>
        {/* banner section */}
        <div data-aos="zoom-in"
    className="mb-20  bg-gray-100 dark:bg-gray-800 text-white "
    style={BannerImg}>
      <div className="container backdrop-blur-sm py-10">
        <div className='space-y-6 max-w-xl mx-auto'>
          <h1 className='text-2xl !text-center sm:text-left sm:text-xl font-semibold'>Contact</h1>
        </div>
        
      </div>
    </div>
    {/* Data collection section*/}



    <div className='flex flex-wrap w-11/12 m-auto gap-7 mb-10'>


        <div className='flex flex-1 flex-wrap'>
            <div className='flex-1 flex flex-col gap-6 '>
                <h3 className='text-lg font-semibold'>STORE LOCATION</h3>
                <p><span className='font-semibold '>Head Office:</span> Lagos City Mall, Lagos Island</p>
                <p><span className='font-semibold '>Store 01:</span> No 12 Oshodi Road, Oshodi Lagos</p>
            </div>
            <div className='flex-1 flex flex-col gap-3 px-8'>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-lg font-semibold'>EMAIL US</h3>
                    <span>hello@otellastore.com.ng</span>
                </div>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-lg font-semibold'>TELEPHONE</h3>
                    <p><span>Phone:</span>+234 906 582 2440</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-lg font-semibold'>WORKING HOURS</h3>
                    <p>MON – FRI – 09:00AM – 08:00PM</p>
                    <p>SUN -12:00PM – 08:00PM</p>
                </div>
            </div>
        </div>
        <div className='flex-1'>
            <h2 className='text-3xl font-bold'>GET IN TOUCH</h2>
            <form action="#" className='flex flex-wrap gap-6'>
                <input type="text" placeholder='Your name'  className='border border-gray-200 border-solid w-80 px-6 py-3'/>
                <input type="email" placeholder='Your email'  className='border border-gray-200 border-solid w-80 px-6 py-3'/>
                <textarea name="contact" id="contact" placeholder='Your Message'  className='border border-gray-200 border-solid h-44 w-9/12 px-6'></textarea>
                <button className='bg-orange-600 h-fit text-white p-3'>Send Message</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Contact