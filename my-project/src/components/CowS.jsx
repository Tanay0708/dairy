import React from 'react'
import { cow, cowm } from '../assets/images'

const CowS = () => {
  return (
    <div className='w-[80%] m-auto max-sm:w-full'>
        <img src={cow} alt=""  className='max-sm:hidden'/>
        <img src={cowm} className='hidden max-sm:block' alt="" />
    </div>
  )
}

export default CowS