import React from 'react'

const About = () => {
  return (
    <div className=' max-sm:block p-4  '>
    <div className='mt-28'>
        <button className='border-2 h-[24px] w-[74px] text-[14px] text-[#4A4A4A] border-[#F2D913]  rounded-full'>
            ABOUT
        </button>
    </div>
    <div className='w-full  h-auto mt-[15px] text-left'>
            <h1 className='uppercase text-[29px] font-[300] leading-snug text-[#E31E24]'>
          <span className='font-[700] text-[32px]'>WELCOME</span> <br />
        to the world of <br />
          MAHASHREE 
            </h1>
            <p className='text-[18px] leading-[20.8px] mt-5'>
            where tradition meets purity inevery drop of our golden goodness.
            </p>
            <hr className='w-full border border-black mt-20 border-dotted' />
    </div>
    <div className=' mt-10 text-[18px]'>
      <p>
      Our journey begins with a passion for preserving the essence of tradition, crafting premium ghee that embodies the rich heritage of our culture. 
    </p>
<br className='mt-10'/>
<p>Delve into the heart of our story, where generations of expertise merge with modern innovation.</p>

<br className='mt-10'/>
<p>
Rooted in time-honored techniques passed down through our family, MAHASHREE Ghee is the culmination of years of dedication to perfecting the art of ghee-making.
      </p>
    </div>
</div>
  )
}

export default About