import React from 'react'
import { galleryPic, shoes } from '../constants'
import Nav from '../components/Nav'
import { dairy01, dairy02, dairy03, dairyLogo, dh } from '../assets/images'
import { d1, d10, d11, d12, d13, d2, d3, d4, d5, d6, d7, d8, d9 } from '../assets/new'

const Gallery = () => {
  return (
    <div className='p-10 max-sm:p-2 '>
      <button className='border-2 border-[#E0CE3D] max-sm:text-[12px] text-[#4A4A4A] mb-10 w-[200px] h-[60px] rounded-full max-sm:h-[24px] max-sm:w-[86px] max-sm:mt-28 '>
        GALLERY
      </button>
  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="grid gap-4">
        <div className='border-4 border-[#F2D913] rounded-lg'>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={d2}
            alt="gallery-photo"
          />
        </div>
        <div className='border-4 border-[#F2D913] rounded-lg' >
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src={d12}
            alt="gallery-photo"
          />
        </div>
        <div className='border-4 border-[#F2D913] rounded-lg'>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={d13}
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div className='border-4 border-[#F2D913] rounded-lg'>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={d5}
            alt="gallery-photo"
          />
        </div>
        <div className='border-4 border-[#F2D913] rounded-lg'>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={d6}
            alt="gallery-photo"
          />
        </div>
        <div className='border-4 border-[#F2D913] rounded-lg'>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src={d7}
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        
        <div className='border-4 border-[#F2D913] rounded-lg'>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src={dairy01}
            alt="gallery-photo"
          />
        </div>
        <div className='border-4 border-[#F2D913] rounded-lg'>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={dairy02}
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div className='border-4 border-[#F2D913] rounded-lg'>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={dairy03}
            alt="gallery-photo"
          />
        </div>
        <div className='border-4 border-[#F2D913] rounded-lg'>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={d11}
            alt="gallery-photo"
          />
        </div>
      </div>
      
    </div>
</div>
  )
}

export default Gallery