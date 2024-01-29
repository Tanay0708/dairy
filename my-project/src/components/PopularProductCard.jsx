import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full '>
        <img src={imgURL} alt={name} className='w-[280px] h-[280px] border-2 p-1 border-coral-red rounded-lg  bg-hero bg-cover bg-center' />
        
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
            {name}
        </h3>
        <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
            {price}
        </p>
    </div>
  )
}

export default PopularProductCard