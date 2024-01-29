import React from 'react'
import { galleryPic, shoes } from '../constants'
import Nav from '../components/Nav'
import { dairyLogo } from '../assets/images'

const Gallery = () => {
  return (
    <>
   <div>
   <nav className='flex justify-between items-center max-container p-2'>
        <a href="/">
            <img src={dairyLogo} alt="logo" width={130} height={29} />
        </a>
        </nav>
   </div>
    <div className=' w-full min-h-screen mt-10 mb-10'>
     
      <div className=' w-[75%] m-auto grid max-sm:grid-cols-1 grid-cols-3 max-lg:grid-cols-2 gap-2 '>

      
        {
            galleryPic.map((shoe) => (
                <div className='w-[250px] h-[250px] border-2 border-coral-red' key={Math.random()}>
                   <img src={shoe.pic} alt="" className='w-full h-full' />
                </div>
            ))
        }
        </div>
    </div>
    </>
  )
}

export default Gallery