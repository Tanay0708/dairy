import React from 'react'

const ServiceCard = ({head}) => {
  return (
   <div className='hidden max-sm:block h-full w-full ' > 
   <img src={head} alt=""  className='h-full w-full'/>
   </div>
  )
}

export default ServiceCard