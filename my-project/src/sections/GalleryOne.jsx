import React from 'react'
import { seek, well } from '../assets/images';
import { Button } from 'flowbite-react';

import { d1, d10, d11, d12, d13, d2, d3, d4, d5, d6, d7, d8, d9 } from '../assets/new';
import { Carousel } from 'flowbite-react';
import { arrowRight } from '../assets/icons';

const GalleryOne = () => {
  return (
    <section className=' h-[650px]  pb-10 pr-5 pl-5 max-sm:w-[100%]  max-sm:p-0'>
        <div className=' max-sm:h-[80%] h-full rounded-3xl overflow-hidden max-sm:rounded-lg bg-[#E0CE3D] p-5 max-sm:p-2 '>
          <div className=' h-[141px] w-[70%] max-sm:left-10  flex absolute left-40 justify-between items-center mt-5 ml-5 mb-10'>
            <img src={well} className='w-[323px] max-sm:w-[162px] max-sm:h-[70px] h-full' alt="" />
            <button className='flex items-center text-[20px] justify-center  bg-white rounded-full gap-5 w-[165px] h-[64px] max-sm:w-[92px] max-sm:h-[40px] max-sm:text-[12px]'>
              See All
              <img src={arrowRight} alt="" />
            </button>
          </div>
            <div className=' relative   h-40 max-sm:h-28 w-full   overflow-hidden '>
                <img src={seek} className='w-full h-[964.5px] max-sm:h-[850px] max-sm:opacity-10 absolute -top-[520.08px] opacity-25 '  alt="" />
            </div>
            <div className='w-full max-sm:h-[78%] h-[70%] rounded-xl mt-5 '>
            <Carousel slide={false} className='h-full rounded-xl'>
            
              <img src={d2} alt="" className='h-[80%]' />
              <img src={d5} alt="" className='h-[80%]' />
              <img src={d6} alt="" className='h-[80%]' />
              <img src={d7} alt="" className='h-[80%]' />
              <img src={d8} alt="" className='h-[80%]' />
              <img src={d9} alt="" className='h-[80%]' />
              <img src={d10} alt="" className='h-[80%]' />
              <img src={d11} alt="" className='h-[80%]' />
              <img src={d12} alt="" className='h-[80%]' />
              <img src={d13} alt="" className='h-[80%]' />
            


            </Carousel>
   
    
            </div>
       
        </div>
        
    </section>
  )
}

export default GalleryOne