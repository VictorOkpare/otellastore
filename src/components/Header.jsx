import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';


function Header() {

  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
    <header className='flex justify-between items-center px-5 text-xl py-5'>

      {/* Hamburger Menu */}
      <button className="lg:hidden "
      type="button"
      onClick={handleToggleMenu}
      aria-controls="navbarSupportedContent1"
      aria-expanded={showMenu}
      aria-label="Toggle navigation">
        <span className='text-black'>
          <RxHamburgerMenu/>
        </span>
      </button>

      {/* Logo Icon*/}
      <div className="logo font-robotoCondensed font-extrabold
      text-2xl "><Link to='/'>Otellastore</Link></div>

      {/* Search Bar */}
      <div className='hidden lg:flex flex-grow justify-center'>
        <div className="search flex  border-2  rounded-lg items-center w-full max-w-lg">
          <input type="text" placeHolder='Search...' className='px-3 py-3 w-full text-sm border-black ' />
            <span className='  px-2 py-2 '><CiSearch /></span>
        </div>
      </div>

      {/* Right Header */}
      <div className="flex items-center ">
        <ul className='flex gap-5 items-center'>
          <li className="hidden lg:block"><a href="#">Products</a></li>
          <li className="hidden lg:block"><a href="#">Design</a></li>
           <li><a href="#">< MdShoppingCart/>Cart</a></li>
          <li><a href="#"><FaUserCircle/>Account</a></li>
        </ul>
      </div>

      {/*Hamburger Menu Content*/}
      {showMenu && (
        <div className="absolute top-20 left-0 w-6/12 bg-white shadow-md lg:hidden ">
          <ul className='flex flex-col py-3 px-5 font-ui-sans-serif text-lg'>
            <li><a href="#">Products</a></li>
            <li><a href="#">Design</a></li>
            <li><a href="#">Order</a></li>
            <li><a href="#" className='flex'><FaUserCircle/> User Account </a></li>
            <li><a href="#" className='flex'> < MdShoppingCart/>Cart </a></li>
          </ul>
        </div>
      )}
    
    </header>
    <hr />
    </>
  )
}

export default Header