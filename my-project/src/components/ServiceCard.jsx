import React from 'react'
import { proback, proseek } from '../assets/images'

const ServiceCard = ({head}) => {
  return (
   <div className='hidden max-sm:block h-full w-full   ' > 
   <img src={head} alt=""  className='h-full w-full'/>

{/*    
    <img src={proseek} className='absolute z-[99] top-1 opacity-[4%] w-full h-full rounded-full' alt="" />
        <div className='border-2 border-black h-[40%]'>

        </div>
        <div className='border-2 border-black h-[60%]'>
          <img src={big} className='w-full h-[90%] object-contain object-center' alt="" />
        </div> */}
   </div>
  )
}

export default ServiceCard