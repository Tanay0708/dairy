import React from 'react'
import { dairyLogo, foot, proseek } from '../assets/images'
import { facebook, instagram, twitter } from '../assets/icons'

const FooterM = () => {
  return (
    <>
    <div className='rounded-full w-full max-sm:h-[415px] hidden max-sm:block'>
        <img src={foot} alt="" className='rounded-lg' />
    </div>
    <div className='max-sm:hidden w-full  h-[546px] bg-[#F2D913] relative '>
            <img src={proseek} className='w-full h-full opacity-[15%] absolute  top-0 ' alt="" />
            <div className='w-[80%] m-auto h-full flex items-center'>
               <div className='w-1/3'>
                    <img src={dairyLogo} className='w-[50%]' alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate quas debitis illum sed omnis non tempore eos, neque, fugit dolores odit fugiat ad consectetur, et quisquam. Quae, doloribus in.</p>
               </div>
               <div className='w-1/3 flex gap-10 justify-evenly text-[14px] font-[700]   '>
                    <ul className=''>
                        <li>Home</li>
                        <li>Products</li>
                    </ul>
                    <ul className=''>
                        <li>Know Your Milk</li>
                        <li>Shop</li>
                    </ul>
               </div>
               <div className='w-1/3  flex flex-col justify-center text-center'>
                    <h2 className='text-3xl mb-5'>Follow Us</h2>
                    <ul className='flex gap-10 justify-center'>
                        <li className='border-2 border-black w-10 h-10 p-2 rounded-full'><img src={facebook} alt="" /></li>
                        <li className='border-2 border-black w-10 h-10 p-2 rounded-full'><img src={instagram} alt="" /></li>
                        <li className='border-2 border-black w-10 h-10 p-2 rounded-full'><img src={twitter} alt="" /></li>
                    </ul>
               </div>
            </div>
    </div>
    </>
  )
}

export default FooterM