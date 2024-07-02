import React from 'react'
import products from '../product';


function Card() {
  return (
    <div className="h-screen bg-gray-50 flex items-center justify-center flex-wrap gap-20">
      {products.map((product)=>(
       <div key={product._id} className='bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden '>

        {/* Product image*/}
       <img 
         className="w-full h-full object-cover"
         src={product.image}
         alt={product.name}
       />
       <div className='flex flex-col gap-3'>

       {/* Product name*/}
       <h2 className='font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap'>{product.name}</h2>

       {/* brand name */}
       <h4 className='font-robotoCondensed'>{product.brand}</h4>

        {/* Product sizes */}
       <div className='border-solid text-white bg-black flex px-3'>{product.size.map((size)=> (
       <span key={size} className='px-2 py-1 rounded-md bg-black text-white'>
       {size}
     </span>

       ))}
          
       </div>

        {/* Product price*/}
        <div >
          <span className='text-xl font-bold'>
          &#8358; {product.price}
          </span>

        </div>

       {/*No- Discount price*/}
       <div className= "flex items-center gap-2 mt-1">
        <span className='text-sm line-through opacity-50'>
        &#8358; {product.price + (product.price/10)}
        </span>
        <span className=' bg-zinc-600 text-white px-1.5 py-0.5 rounded-md'>save 10%</span>

       </div>

       {/* Add to Cart button*/}
       <div className='mt-5 flex gap-2'>
        <button className='bg-black hover:bg-orange-600 px-6 py-2 rounded-md text-white font-medium font-robotoCondensed tracking-wider transition'>
          Add to cart
        </button>

       </div>


        </div>
     </div> 
      ) )}
        

          
    </div>
  )
}

export default Card