import React from 'react'
import  Banner from '../assets/images/BannerandFooterImg/footerImg.jpg'
import { Link } from 'react-router-dom'
import {FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt} from "react-icons/fa"

const BannerImg = {
    backgroundImage:` URL(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%"

}

const FooterLinks = [
    {
        title: "Home",
        link: "/#"
    },
    {
        title: "About",
        link: "/#"
    },
    {
        title: "Contact",
        link: "/#"
    },
    {
        title: "Blog",
        link: "/#"
    },
]

const Footer = () => {
  return (
    <div style={BannerImg} className='text-white mb-20'>
      <div className='container'>
        <div className='grid md:grid-cols-3 pb-44 pt-5  '>
            {/* company details */}
            <div className='py-8 px-4'>
                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>Otellastore</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quasi aut impedit, excepturi consectetur ratione?</p>
            </div>
            {/* footer links */}
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
              <div>
                <div className='py-8 px-4'>
                  <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                  <ul className='flex flex-col gap-3'>
                    {
                      FooterLinks.map((link)=>(
                        <li classNam="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200" key={link.title}> 
                        <span> {link.title} </span>
                        </li> 
                      ))
                    }
                  </ul>
                </div>
              </div>
                    {/* social links */}
                    <div>
                      <div className='flex items-center gap-3mt-6'>
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
  )
}

export default Footer
