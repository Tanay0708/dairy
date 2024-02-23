import React from 'react';
import { proback,  proseek } from '../assets/images'

const PopularProductCard = ({big,name}) => {


  
  return (
  
  <div className='w-full h-full  relative max-sm:hidden'>
    <img src={proback} alt="" className='h-full w-full'/>
    <img src={proseek} className='absolute z-[99] top-1 opacity-[3%]' alt="" />
    <div className='absolute  top-1 w-full h-full z-[100] justify-center items-center flex'>
        <div className='w-[50%] h-full'>
          <img src={big} className='w-full h-[60%] mt-40 object-contain' alt="" />
        </div>
        <div className='w-[50%]'>
          <h1 className='text-[48px] leading-[50px] text-[#E0CE3D] '>PURE GHEE
            <br />
            <span className='font-[700]'>{name}</span>

          </h1>
          <p className='text-t-[28px] w-1/2 font-[400] mt-[15px] text-white'>
          Experience the essence of tradition with Maharishi Cow Ghee. Pure, rich, and <br /> authentic.
          </p>
          <button className=' mt-9 w-[280px] h-[70px] pl-5 bg-white bg-opacity-5 text-white rounded-lg text-left'>
             <h1 className='font-[700]'>Available Sizes</h1> 
              <p className='text-[16px]'>200ml, 500ml, & 1ltr</p>
          </button>

        </div>
    </div>
  </div>
  )
}

export default PopularProductCard