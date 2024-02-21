import React from 'react'
import { contact, proback } from '../assets/images'

const ContactUs = () => {
  return (
    <>
     <button className='mt-10  border-2 border-[#E0CE3D] max-sm:text-[12px] text-[#4A4A4A] mb-10 w-[200px] h-[60px] rounded-full max-sm:h-[24px] max-sm:w-[86px] max-sm:mt-32 '>
       CONTACT US
      </button>
      <div className='w-[40%] max-sm:w-[80%] h-auto mb-20 m-auto ' >
        <img src={contact} alt="" />
      </div>
    </>
  )
}

export default ContactUs