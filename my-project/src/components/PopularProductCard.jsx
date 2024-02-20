import React from 'react'
import { star } from '../assets/icons'
import { dairy01, proback, procard, proseek } from '../assets/images'

const PopularProductCard = ({head}) => {
  return (
  // <section className="text-white body-font bg-[#DA181F] rounded-xl h-full w-full max-sm:hidden">
  //   <div className='border-2 border-black h-full w-full p-2 max-sm:p-[24px] flex max-sm:flex-col-reverse '>
  //       <div className='w-1/2 h-full max-sm:w-full border-2 border-blue-400 text-right'>
  //         <img src={dairy01} className='h-full w-[80%] max-sm:w-full max-sm:h-[80%] border-2 ' alt="" />
  //       </div>
  //       <div className='w-1/2 h-auto p-0 max-sm:w-full border-2 border-green-300 flex flex-col items-start justify-center'>
  //         <h1 className='text-[48px] max-sm:text-[24px] max-sm:leading-8 leading-12 font-[300] text-[#E0CE3D] '>
  //           PURE GHEE
  //           <br />
  //          <span className='font-[700]  '>TETRA PACK</span>
  //         </h1>
  //         <p className='text-[24px] max-sm:text-[12px] font-[300] w-[75%] text-left mt-5 max-sm:leading-4 leading-8'>
  //         Experience the essence of tradition with Maharishi Cow Ghee. Pure, rich, and authentic.
  //         </p>
  //         <button className='border-2 border-black  w-[60%]'>
  //           Available Size

  //         </button>
  //       </div>
  //   </div>    
  // </section>
  <div className='w-full h-full relative max-sm:hidden'>
    <img src={proback} alt="" className='h-full w-full'/>
    <img src={proseek} className='absolute z-[99] top-1 opacity-[3%]' alt="" />
    <div className='absolute  top-1 w-full h-full z-[100] justify-center items-center flex'>
        <div className='w-[50%] h-full'>
          <img src={dairy01} className='w-full h-full' alt="" />
        </div>
        <div className='w-[50%]'>
          <img src={procard} className='w-full ' alt="" />
        </div>
    </div>
  </div>
  )
}

export default PopularProductCard