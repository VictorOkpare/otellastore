import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
import { GiShoppingCart } from "react-icons/gi";
import Darkmode from './Darkmode';
import { FaRegUser, FaCaretDown, FaTimes, FaBars } from "react-icons/fa";
import { useCart } from './CartContext';
import OrderSummary from './OrderSummary';
import CartPage from '../screens/CartScreen/CartPage';

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Customization", link: "/Customization" },
  { id: 3, name: 'Order Tracking', link: "/orderTracking" },
  { id: 4, name: 'Contact', link: "/Contact" },
];

const DropdownLinks = [
  { id: 1, name: "Roundneck Tshirts", link: "/Roundneck" },
  { id: 2, name: "Polo Tshirts", link: "/Collarneck" },
  { id: 3, name: "V-neck Tshirts", link: "/Vneck" },
  { id: 4, name: "Kids Tshirts", link: "/KidsTshirt" },
  { id: 5, name: "Longsleeve Tshirts", link: "/Longsleeve" },
];

const Navbar = ({ handleOrderPopup, authenticated }) => {
  const [open, setOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cartItems, removeFromCart } = useCart();
  const [auth, setAuth] = useState(authenticated);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMenu = () => setOpen((prev) => !prev);
  const toggleCart = () => setShowCart((prev) => !prev);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  useEffect(() => {
    const storedAuth = localStorage.getItem('authenticated');
    if (storedAuth) {
      setAuth(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    setAuth(false);
    window.location.reload(); // Reload the page to update the navbar
  };

  return (
    <div className='shadow-md bg-white font-semibold dark:bg-black dark:text-white duration-200 relative z-40'>
      {/* Upper Navbar */}
      <div className='bg-white dark:bg-black py-2'>
        <div className='container flex justify-between items-center'>
          <div className='flex items-center'>
            {/* Hamburger button */}
            <div className='flex md:hidden'>
              <button
                type='button'
                onClick={handleMenu}
                className='flex justify-center p-2 rounded-md text-orange-500'
              >
                <span className='sr-only'>Open Main Menu</span>
                {open ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Logo */}
            <Link to='/' className='text-2xl font-bold text-gray-800 dark:text-white'>
              <span>Otella<span className='text-orange-500'>store</span></span>
            </Link>
          </div>

          {/* Primary Navigation */}
          <div className={`md:flex md:items-center md:space-x-8 ${open ? 'block' : 'hidden'}`}>
            {Menu.map((menu) => (
              <Link
                key={menu.id}
                to={menu.link}
                className='block mt-4 md:inline-block md:mt-0 text-gray-800 dark:text-white'
              >
                {menu.name}
              </Link>
            ))}
            {/* Products Dropdown */}
            <div className='relative '>
              <button
                onClick={toggleDropdown}
                className='flex items-center mt-4 md:flex md:mt-0 text-gray-800 dark:text-white'
              >
                Products <FaCaretDown className='ite' />
              </button>
              {dropdownOpen && (
                <div className='absolute left-0 mt-2 w-48 bg-white dark:bg-black rounded-md shadow-lg'>
                  {DropdownLinks.map((link) => (
                    <Link
                      key={link.id}
                      to={link.link}
                      className='block px-4 py-2 text-gray-800 dark:text-white'
                      onClick={() => setDropdownOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Secondary Navigation */}
          <div className='flex items-center space-x-4'>
            {/* Dark mode toggle */}
            <Darkmode />

            {/* Search Icon */}
            <IoMdSearch className='text-gray-800 dark:text-white' size={24} />
              <Link to={CartPage}>
            {/* Cart Icon */}
            <div className='relative'>
              <GiShoppingCart
                onClick={toggleCart}
                className='cursor-pointer text-gray-800 dark:text-white'
                size={24}
              />
              <span className='absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs'>
                {cartItems.length}
              </span>
            </div>
            </Link>

            {/* User Icon */}
            <div className='relative'>
              <FaRegUser
                onClick={handleOrderPopup}
                className='cursor-pointer text-gray-800 dark:text-white'
                size={24}
              />
              {auth && (
                <div className='absolute top-8 right-0 bg-white dark:bg-black rounded-md shadow-lg'>
                  <Link to="/profile" className='block px-4 py-2 text-gray-800 dark:text-white'>Profile</Link>
                  <button onClick={handleLogout} className='block w-full text-left px-4 py-2 text-gray-800 dark:text-white'>Logout</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Navigation for Small Screens */}


      {/* Cart Drawer */}
      {showCart && <OrderSummary closeCart={toggleCart} />}
    </div>
  );
};

export default Navbar;
