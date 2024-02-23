import React from 'react'
import { allpro, bucket, dairy01, dairy02, dairy03, dairy033, dh, pro2, pro3, pro4, pro5, united } from '../assets/images';
import PopularProductCard from '../components/PopularProductCard';
import ServiceCard from '../components/ServiceCard';
import { Subscribe } from '../sections';
import FooterM from '../components/FooterM';


const all = [
    {
        head: united,
        big: dairy01,
        name: "TETRA BOX"
    },
    {
        head: pro2,
        big: dairy02,
        name: "TIN JAR"
        
    },
    {
        head: pro3,
        big: dairy03,
        name: "TETRA PACK"
    },
    {
        head: pro4,
        big: bucket,
        name: "JAR"
    },
    {
        head: pro5,
        big: dairy033,
        name: "TETRA PACK"
    },
];




const ShowProduct = () => {
  return (
    <>
    <button className='mt-10  border-2 border-[#E0CE3D] max-sm:text-[12px] text-[#4A4A4A] mb-10 w-[200px] h-[60px] rounded-full max-sm:h-[24px] max-sm:w-[86px] max-sm:mt-32 '>
       PRODUCTS
      </button>
    <div className='h-auto mb-20 max-sm:mt-20'>
    <div className='max-sm:h-[70%] h-[80%] w-[80%] m-auto max-sm:-mt-20 ' slide={false}>
{
    all.map((el) => (
        <div key={el.head}>
        <PopularProductCard {...el} />
        <ServiceCard {...el}  />
        </div>
    ))
   

    
}


    </div>
    <div className=' w-[50%] m-auto mt-10 '>
<img src={dh} alt="" className='h-full w-full' />
</div>
<div className=' w-[50%] m-auto mt-10 max-sm:w-full '>
<img src={allpro} alt="" className='h-full w-full' />
</div>

</div>

</>
  )
}

export default ShowProduct