
import React, {useState} from 'react'
import Imagedata from './Roundneck.json'


function Roundneck() {

    const [bigImage, setBigImage] = useState(Imagedata[0].img);
    const handleImageClick = (img) => {
      setBigImage(img);
    }

  return (
    <>
        <div className='flex w-[1000px] mx-20px m-auto'>
            {/* Big Image Roundneck */}
            <div className=' w-[250px]'>
                <img src={bigImage} alt="" className='w-inherit' />
            {/* small Image Roundneck */}
                <div className='flex  justify-between w-full mt-[15px] '>
                    {Imagedata.map((data)=>(

                    <div key={data.id} className='w-[50px] '>
                        <img src={data.img} alt="" className="w-inherit cursor-pointer"
                            onClick={() => handleImageClick(data.img)} />
                </div>
                        
           ))}
           </div>

                </div>
        
        
        </div>
    </>
  )
}

export default Roundneck