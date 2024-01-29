import React from 'react'

const ShoeCard = ({imgURL,changeBigShoeImage,bigShoeImg}) => {


const handleClick = () => {
    if(bigShoeImg !== imgURL.bigShoe){
        changeBigShoeImage(imgURL.bigShoe)
    }
}


  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgURL .bigShoe? `border-coral-red` : 'border-transparent'} cursor-pointer max-sm:flex-1 w-full h-full`} onClick={handleClick}>
        <div className='flex justify-center items-center bg-card bg-center w-full h-full   bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
            <img src={imgURL.thumbnail} alt="" className='w-full h-[100%]'   />
        </div>
    </div>
  )
}

export default ShoeCard