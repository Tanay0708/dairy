import React from 'react'

const About = () => {
  return (
    <div className='hidden max-sm:block p-4'>
        <div>
            <button className='border-2 h-[24px] w-[74px] text-[14px] text-[#4A4A4A] border-[#F2D913]  rounded-full'>
                ABOUT
            </button>
        </div>
        <div className='w-full border-2 border-red-400 h-auto mt-[15px] text-left'>
                <h1 className='uppercase text-[29px] font-[300] leading-snug text-[#E31E24]'>
              <span className='font-[700] text-[32px]'>WELCOME</span> <br />
            to the world of <br />
              MAHASHREE 
                </h1>
                <p className='text-[18px] leading-[20.8px] mt-5'>
                where tradition meets purity inevery drop of our golden goodness.
                </p>
        </div>
    </div>
  )
}

export default About




