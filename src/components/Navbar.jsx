import React from 'react'
import { Link  } from 'react-router-dom'
import { IoMdSearch } from 'react-icons/io'
import { MdOutlineLightMode } from "react-icons/md"
import { GiShoppingCart } from "react-icons/gi";

import Darkmode from './Darkmode'
import { FaRegUser, FaCaretDown } from "react-icons/fa";



const Menu = [
  {
    id:1,
    name: "Home",
    link: "/#"
  },

  {
    id:2,
    name:"Customization",
    link: "/#"
  },
  {
    id:3,
    name: 'Order Tracking',
    link: "/orderTracking", 



  },
  {
    id:4,
    name: 'Contact',
    link: "/Contact", 



  },
]

const DropdownLinks = [
  {
    id:1,
    name: "Roundneck Tshirts",
    link: "/Roundneck"
  },
  {
    id:2,
    name: "Polo Tshirts",
    link: "/#"
  },
  {
    id:3,
    name: "V-neck Tshirts",
    link: "/#"
  },
  {
    id:4,
    name: "Kids Tshirts",
    link: "/#"
  }
]

const Navbar = ({handleOrderPopup}) => {
  return (
    <div className='shadow-md bg-white dark:bg-black dark:text-white duration-200 relative z-40'>
        {/* upper Navbar */}
      <div className='bg-white dark:bg-black py-2'>
        <div className='container flex justify-between items-center'>
            <div> 
                <Link to='#' className=' font-extrabold w-10   flex gap-2 text-black font-robotoCondensed text-lg dark:text-white'>
               <span className='bg-orange-500 p-2 text-white rounded-full font-nunito'>Otella<span className=' text-orange-500 px-1 bg-white rounded-full'>store</span></span>
                </Link>
            </div>
            {/* search bar */}
            <div className='flex justify-between items-center gap-4'>
                <div className='group relative hidden sm:block'>
                    <input type="text"
                    placeholder='search ...'
                    className='w-[200px] sm:w-[200px] group-hover:w-[300px] translate-all duration-300 rounded-full border border-black px-2 py-1 focus:outline-none focus:border-1 focus:border-black dark:border-gray-500 dark:bg-gray-800' />
                    <IoMdSearch className='text-black text-lg group-hover:text-orange-500  absolute top-1/2 -translate-y-1/2 right-3'/>
                </div>
            </div>
            <div className='flex gap-8'>
            {/* order button */}
            <button className='bg-orange-500 transition-all duration-200 text-white dark:text-black font-bold py-1 px-4 rounded-full flex items-center gap-1 group dark:bg-orange-500'>
                <span
                className='group-hover:block hidden transition-all duration-200 '>Cart</span>
                <GiShoppingCart className='text-2xl  text-white dark:text-black drop-shadow-sm cursor-pointer '/>

            </button>
            {/* login */}
            <div>
              <button onClick={()=> handleOrderPopup()} className='bg-orange-500 transition-all duration-200 text-white dark:text-black font-bold py-1 px-4 rounded-full flex items-center gap-3 group dark:bg-orange-500'>
                <span className='group-hover:block hidden transition-all duration-10000 '  >Sign-up</span>
                <FaRegUser className='text-xl cursor-pointer drop-shadow-sm  '/>
              </button>
            </div>
            
            {/* darkmode switch */}
            <div>
            <Darkmode className='text-2xl'/>
            </div>
        </div>
      </div>
      </div>
     
        {/* lower Navbar */}
      <div data-aos="zoom-in" className='flex justify-center bg-orange-500   text-white font-md text-sm font-robotoCondensed
       '>
        <ul className='sm:flex hidden items-center gap-5 flex-wrap'>
          {
            Menu.map((data)=>(
              <li key={data.id}>
                <Link className='inline-block px- hover:font-extrabold duration-1000 ' to={data.link}>{data.name}{data.icon}</Link>
              </li>
            ))
          }
          {/* simple dropdown and links */}
          <li className='group relative cursor-pointer hover:text-orange-500'>
            <Link to='#' className='flex items-center gap-[2px] py-2'>Trending Products <span>
              <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
              </span></Link>
              <div className='absolute z-[1000] hidden group-hover:block w-[150px] rounded-md bg-black p-2 text-white shadow-md'>
                <ul>
                  {DropdownLinks.map((data)=>(
                    <li key={data.id}>
                      <Link to={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-orange-500">{data.name}</Link>
                    </li>
                  )
                )}

                </ul>
              </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
