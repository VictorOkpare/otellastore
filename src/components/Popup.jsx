// import React from 'react'
// import { IoCloseOutline } from 'react-icons/io5'
// import { FaRegUser } from "react-icons/fa";
// const Popup = ({orderPopup, setOrderPopup}) => {

//   const [isLogin, setIsLogin] = useState(true);
//   return ( 
//   <>
//   { orderPopup && (
//         <div className='popup'>
//             <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
//            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]'>
//             {/* header */}
          
//             <div className='flex items-center justify-end'>

//               <div className=' '>
//                 <IoCloseOutline
//                 className='text-2xl cursor-pointer ' onClick={()=> setOrderPopup(false)} />
//               </div>
//             </div>

//             <div className=' rounded-xl m-4 p-4'>
//             <div className='flex flex-col items-center justify-center mt-4 '>
//                 <FaRegUser className=' text-4xl mb-2 text-orange-500'/>
//                 <h1 className='text-xl font-semibold'>Login</h1>
//               </div>
//             {/* form section */}
//             <div className='mt-4 mb-4'>
//               <input type="text" placeholder='Name'
//               className='w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-white px-2 py-1 mb-4 ' />
//               <input type="password" placeholder='Password'
//               className='w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-white px-2 py-1 mb-0 ' />
//               <span className='text-sm text-orange-500'>Forgotten password</span>
//             </div>
//             <div className='flex justify-center'>
//               <button className='bg-gradient-to-r from-orange-400 to-orange-600 hover:scale-105 duration-200 text-white py01 px-4 rounded-full'>Login</button>
//             </div>
//             </div>
//             {/* Sign up section */}
//             <div className='text-center '>
//               <p>Dont have an acount?  <span  className='text-orange-500'> 
//                   <button>Sign Up
//                   </button>
//                 </span>
//               </p>
//             </div>

//            </div>
//             </div>
//         </div>
//     )
//   }
//   </>
//   )
// }

// export default Popup


import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { FaRegUser } from "react-icons/fa";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {orderPopup && (
        <div className='popup'>
          <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]'>
              {/* header */}
              <div className='flex items-center justify-end'>
                <div>
                  <IoCloseOutline
                    className='text-2xl cursor-pointer'
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>

              <div className='rounded-xl m-4 p-4'>
                <div className='flex flex-col items-center justify-center mt-4'>
                  <FaRegUser className='text-4xl   bg-orange-500 rounded-full px-3 w-[50px] h-[50px] mb-4 text-white' />
                  <h1 className='text-xl font-semibold'>{isLogin ? 'Login' : 'Sign Up'}</h1>
                </div>
                {/* form section */}
                {isLogin ? (
                  <>
                    <div className='mt-4 mb-4'>
                      <input
                        type="text"
                        placeholder='Username'
                        className='w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-white px-2 py-1 mb-4'
                      />
                      <input
                        type="password"
                        placeholder='Password'
                        className='w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-white px-2 py-1 mb-0'
                      />
                      <span className='text-sm text-orange-500'>Forgotten password</span>
                    </div>
                    <div className='flex justify-center'>
                      <button className='bg-gradient-to-r from-orange-400 to-orange-600 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full'>
                        Login
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className='mt-4 mb-4'>
                      <input
                        type="text"
                        placeholder='Username'
                        className='w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-white px-2 py-1 mb-4'
                      />
                      <input
                        type="email"
                        placeholder='Email'
                        className='w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-white px-2 py-1 mb-4'
                      />
                      <input
                        type="text"
                        placeholder='Phone Nos'
                        className='w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-white px-2 py-1 mb-4'
                      />

                      <input
                        type="password"
                        placeholder='Password'
                        className='w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-white px-2 py-1 mb-4'
                      />
                      <input
                        type="password"
                        placeholder='Confirm Password'
                        className='w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-white px-2 py-1 mb-4'
                      />
                    </div>
                    <div className='flex justify-center'>
                      <button className='bg-gradient-to-r from-orange-400 to-orange-600 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full'>
                        Sign Up
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Toggle between login and signup */}
              <div className='text-center'>
                <p>
                  {isLogin ? (
                    <>
                      Don't have an account? <span className='text-orange-500 cursor-pointer' onClick={() => setIsLogin(false)}>Sign Up</span>
                    </>
                  ) : (
                    <>
                      Already have an account? <span className='text-orange-500 cursor-pointer' onClick={() => setIsLogin(true)}>Login</span>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
