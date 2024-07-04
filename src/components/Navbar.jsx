import React from 'react'
import { Link  } from 'react-router-dom'
import { IoMdSearch } from 'react-icons/io'
import { FaCartShopping } from 'react-icons/fa6'
import Darkmode from './Darkmode'
import { FaUserCircle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa"


const Menu = [
  {
    id:1,
    name: "Home",
    link: "/#"
  },
  {
    id:2, 
    name: "Products",
    link: "/#",
  },
  {
    id:3,
    name:"Order",
    link: "/#"
  },
  {
    id:4,
    name: 'Account',
    link: "/#", 
    icon: <FaUserCircle /> 


  },
]

const DropdownLinks = [
  {
    id:1,
    name: "Trending Products",
    link: "/#"
  },
  {
    id:2,
    name: "Best Selling",
    link: "/#"
  },
  {
    id:3,
    name: "Top Rated",
    link: "/#"
  }
]

const Navbar = ({handleOrderPopup}) => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        {/* upper Navbar */}
      <div className='bg-primary/40 py-2'>
        <div className='container flex justify-between items-center'>
            <div> 
                <Link to='#' className=' font-extrabold w-10 uppercase  flex gap-2'>
                Otellastore
                </Link>
            </div>
            {/* search bar */}
            <div className='flex justify-between items-center gap-4'>
                <div className='group relative hidden sm:block'>
                    <input type="text"
                    placeholder='search ...'
                    className='w-[200px] sm:w-[200px] group-hover:w-[300px] translate-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400 dark:border-gray-500 dark:bg-gray-800' />
                    <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
                </div>
            </div>
            {/* order button */}
            <button onClick={()=> handleOrderPopup()} className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items center gap-3 group'>
                <span
                className='group-hover:block hidden transition-all duration-200'>Cart</span>
                <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>

            </button>
            {/* darkmode switch */}
            <Darkmode/>

        </div>
      </div>
        {/* lower Navbar */}
      <div className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
          {
            Menu.map((data)=>(
              <li key={data.id}>
                <Link className='inline-block px- hover:text-primary duration-200' to={data.link}>{data.name}{data.icon}</Link>
              </li>
            ))
          }
          {/* simple dropdown and links */}
          <li className='group relative cursor-pointer'>
            <Link to='#' className='flex items-center gap-[2px] py-2'>Trending Products <span>
              <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
              </span></Link>
              <div className='absolute z-[1000] hidden group-hover:block w-[150px] rounded-md bg-yellow p-2 text-black shadow-md'>
                <ul>
                  {DropdownLinks.map((data)=>(
                    <li key={data.id}>
                      <Link to={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20">{data.name}</Link>
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
