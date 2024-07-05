import React from 'react'
import Banner from '../../assets/images/BannerandFooterImg/bannerImg.jpg'
import '../../index.css'

const BannerImg ={
  backgroundImage:`url(${Banner})`,
  backgroundPoition: "center",
  backgroundRepeat: 'no=repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%'

}

function OrderTracking() {
  return (
    <><div className='dark:bg-black'>
      {/* bannersection */}
    <div data-aos="zoom-in"
    className="mb-20  bg-gray-100 dark:bg-gray-800 text-white "
    style={BannerImg}>
      <div className="container backdrop-blur-sm py-10">
        <div className='space-y-6 max-w-xl mx-auto'>
          <h1 className='text-2xl !text-center sm:text-left sm:text-xl font-semibold'>Order Tracking</h1>
        </div>
        
      </div>
    </div>
    {/* Form Section */}

    <div className='w-1/2 h-fit pb-20  m-auto p-10 flex flex-col gap-3 dark:bg-gray-900 dark:bg-opacity-90 rounded-md'>
          <p className='w-inherit text-center'>To track your order please enter your Order ID in the box below and press the "Track" <br/> button. This was given to you on your receipt and in the confirmation email you should have received</p>

          <div className='h-fit flex flex-col justify-center w-full m-auto gap-3'>
            <input className=' w-full border border-solid border-gray-400 py-2' type="text"   />
            <p >Order ID</p>
            <input type="text " className='w-full border border-solid border-gray-400 py-2'/>
            <p >Billing Email</p>
            <button className='bg-orange-400 text-white py-2'>
              <span>Track</span>
            </button>
          </div>
        </div>


    </div>
    </>
  )
}

export default OrderTracking