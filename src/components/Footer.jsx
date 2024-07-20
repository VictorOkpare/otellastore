import React from 'react'

import { Link } from 'react-router-dom'
import {FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt} from "react-icons/fa"



const FooterLinks = [
    {
        title: "Home",
        link: "/#"
    },
    {
        title: "Order Tracking",
        link: "/ordertracking"
    },
    {
        title: "Contact",
        link: "/contact"
    },
    {
        title: "Customization",
        link: "/customization"
    },
]

const Footer = () => {
  return (
    <footer className='bg-black mb-0'>
    <div className='text-white'>
      <div className='container '>
        <div className='grid md:grid-cols-3 pb-20 pt-5  gap-10'>
            {/* company details */}
            <div className='py-8 px-4'>
            <Link to='/' className='text-2xl font-bold text-gray-800 dark:text-white'>
              <span className='text-4xl text-white'>Otella<span className='text-orange-500'>store</span></span>
            </Link>
                <p className='mt-5'>OtellaStore offers high-quality plain T-shirts and top-notch customization services. Our collection includes classic round necks, stylish V-necks, and versatile polos, all crafted for comfort and durability. Personalize your T-shirt for any occasion with our expert customization. Enjoy seamless shopping, fast shipping, and dedicated support</p>
            </div>
            {/* footer links */}
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
              <div>
                <div className='py-8 px-4'>
                  <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'> Links</h1>
                  <ul className='flex flex-col gap-3 mt-5'>
                    {
                      FooterLinks.map((link)=>(
                        <li className="cursor-pointer hover:text-orange-500 hover:translate-x-1 duration-300 text-gray-200  " key={link.title}> 
                        <span> {link.title} </span>
                        </li> 
                      ))
                    }
                  </ul>
                </div>
              </div>
                    {/* social links */}
                    <div>
                      <div className='flex items-center gap-5 mt-10'>
                        
                        <Link to="/#">
                        <FaInstagram className='text-3xl'/> 
                        </Link>
                        
                        <Link to="/#">
                        <FaFacebook className='text-3xl'/>
                        </Link>
                        <Link to="/#">
                        <FaLinkedin className='text-3xl'/>
                        </Link>
                      </div>
                      <div>
                        <div className='mt-5'>
                          <div className='flex items-center gap-3'>
                            <FaLocationArrow/>
                            <p>No 12 Oshodi Road</p>
                          </div>
                          <div className='flex items-center gap-3 mt-3'>
                            <FaMobileAlt/>
                            <p>+234 9065822440</p>

                          </div>
                        </div>
                      </div>
                    </div>

            </div>

        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer
