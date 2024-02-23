import React from 'react'
import { galleryPic, shoes } from '../constants'
import Nav from '../components/Nav'
import { dairy01, dairy02, dairy03, dairyLogo, dh } from '../assets/images'
import { d1, d10, d11, d12, d13, d2, d3, d4, d5, d6, d7, d8, d9 } from '../assets/new'
import { p1, p2, p3, p4, p5, p6, p7, p8, p9, v1, v2, v3, v4, v5, v6, v7, v8 } from '../assets/videos'

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
            src={p8}
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
      <div className="grid gap-4">
        <div className=''>
          <img
            className="h-auto max-w-full border-4 border-[#F2D913] rounded-lg object-cover object-center"
            src={p1}
            alt="gallery-photo"
          />
        </div>
        
        <div className='' >
          <img
            className="h-auto max-w-full border-4 border-[#F2D913] rounded-lg object-cover object-center "
            src={p7}
            alt="gallery-photo"
          />
        </div>
       
      </div>
      <div className="grid gap-4">
        <div className=''>
          <img
            className="h-auto max-w-full rounded-lg object-cover border-4 border-[#F2D913]  object-center"
            src={p4}
            alt="gallery-photo"
          />
        </div>
        <div className='border-4 border-[#F2D913] rounded-lg' >
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src={p5}
            alt="gallery-photo"
          />
        </div>
        <div className='border-4 border-[#F2D913] rounded-lg'>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={p6}
            alt="gallery-photo"
          />
        </div>
        
      </div>
   
      
    </div>
    <div className="container px-5 py-24 mx-auto ">
    {/* <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#F2D913]">Videos</h1>
      
    </div> */}
    <div className="flex flex-wrap -m-4 max-sm:gap-3 ">
      <div className="lg:w-1/3 sm:w-1/2 p-4 ">
        <div className="flex relative border-4 border-[#F2D913] rounded-lg">
          
          <video src={v1} className=" absolute inset-0 w-full h-full object-cover object-center z-10" controls></video>
          <div className="px-8 py-10 relative z-0 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-0 ">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 ">
        <div className="flex relative  border-4 border-[#F2D913] rounded-lg">
        <video src={v2} className="absolute inset-0 w-full h-full object-cover object-center z-10" controls></video>
          <div className="px-8 py-10 relative z-0 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-0">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 ">
        <div className="flex relative  border-4 border-[#F2D913] rounded-lg">
        <video src={v3} className="absolute inset-0 w-full h-full object-cover object-center z-10" controls></video>
          <div className="px-8 py-10 relative z-0 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-0">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4  ">
        <div className="flex relative border-4 border-[#F2D913] rounded-lg">
        <video src={v4} className="absolute inset-0 w-full h-full object-cover object-center z-10" controls></video>
          <div className="px-8 py-10 relative z-0 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-0">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4  ">
        <div className="flex relative border-4 border-[#F2D913] rounded-lg">
        <video src={v5} className="absolute inset-0 w-full h-full object-cover object-center z-10" controls></video>
          <div className="px-8 py-10 relative z-0 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-0">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 ">
        <div className="flex relative  border-4 border-[#F2D913] rounded-lg">
        <video src={v6} className="absolute inset-0 w-full h-full object-cover object-center z-10" controls></video>
          <div className="px-8 py-10 relative z-0 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-0">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4  ">
        <div className="flex relative border-4 border-[#F2D913] rounded-lg">
        <video src={v7} className="absolute inset-0 w-full h-full object-cover object-center z-10" controls></video>
          <div className="px-8 py-10 relative z-0 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-0">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4  ">
        <div className="flex relative border-4 border-[#F2D913] rounded-lg">
        <video src={v8} className="absolute inset-0 w-full h-full object-cover object-center z-10" controls></video>
          <div className="px-8 py-10 relative z-0 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-0">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4  ">
        <div className="flex relative border-2 border-[#F2D913] rounded-lg">
        <video src={p9} className="absolute inset-0 w-full h-full object-cover object-center z-10" controls></video>
          <div className="px-8 py-10 relative z-0 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-0">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Gallery