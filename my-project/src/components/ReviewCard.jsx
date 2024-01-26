import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL,customerName,feedback,rating}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgURL} alt='customer' className='rounded-full object-cover w-[120px] h-[120px]' />
        <p className='mt-6 max-w-sm info-text text-center'>{feedback}</p>
        <div   className='mt-3 flex justify-center items-center gap-2.5 ' >
            <img src={star} alt="" width={24} height={24} className='object-contain m-0' />
            <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
           
        </div>
        <p className='mt-1 font-palanquin text-3xl text-center font-bold'>{customerName}</p>
    </div>
  )
}

export default ReviewCard