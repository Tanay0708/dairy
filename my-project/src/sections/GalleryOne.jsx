import React from 'react'
import { seek, well } from '../assets/images';


import { d1, d10, d11, d12, d13, d2, d3, d4, d5, d6, d7, d8, d9 } from '../assets/new';
import {p1, p2, p3, p4, p5, p6, p7, p8} from '../assets/videos'
import { Carousel } from 'flowbite-react';
import { arrowRight } from '../assets/icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const GalleryOne = () => {

  const {t} = useTranslation()


  return (
    <section className=' h-[650px]   w-[80%] m-auto  pb-10 pr-2 pl-2 max-sm:w-[100%]  max-sm:p-0'>
        <div className=' max-sm:h-[80%] w-full h-full rounded-3xl overflow-hidden max-sm:rounded-lg bg-[#E0CE3D] p-5 max-sm:p-1 '>
          <div className=' h-[141px] w-[63%] max-sm:left-10   flex absolute  left-30 justify-between items-center mt-5 ml-5   '>
            <img src={well} className='w-[323px] max-sm:w-[162px] max-sm:h-[70px] h-full' alt="" />
            <Link to={'/gallery'}>
            <button  className='flex items-center text-[20px] justify-center cursor-pointer   bg-white rounded-full gap-2 max-lg:w-[100px] max-lg:h-[40px] max-lg:text-[14px] w-[165px] h-[64px] max-sm:w-[92px] max-sm:h-[40px] max-sm:text-[12px] max-sm:p-1'>
              {t("galleryOb")}
              <img src={arrowRight} className='' alt="" />
            </ button>
            </Link>
          </div>
            <div className=' relative   h-40 max-sm:h-28 w-full -z-10  overflow-hidden '>
                <img src={seek} className='w-full bg-white h-[964.5px] max-sm:h-[850px] max-sm:opacity-10 absolute -top-[520.08px]  opacity-[10%] '  alt="" />
            </div>
            <div className='w-[full] max-sm:h-[78%] h-[75%] rounded-xl '>
            <Carousel slide={false} className='h-full rounded-xl '>
            
              <img src={p1} alt="" className='h-[80%]  object-contain' />
              <img src={p3} alt="" className='h-[80%] object-contain' />
              <img src={p2} alt="" className='h-[80%] object-contain' />
              <img src={p4} alt="" className='h-[80%] object-contain' />
              <img src={p5} alt="" className='h-[80%] object-contain' />
              {/* <img src={d9} alt="" className='h-[80%] object-contain' /> */}
              <img src={p6} alt="" className='h-[80%] object-contain' />
              <img src={p7} alt="" className='h-[80%] object-contain' />
              <img src={p8} alt="" className='h-[80%] object-contain' />
              <img src={d13} alt="" className='h-[80%] object-contain' />
            


            </Carousel>
   
    
            </div>
       
        </div>
        
    </section>
  )
}

export default GalleryOne