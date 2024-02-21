import { Carousel } from 'flowbite-react'
import React from 'react'
import PopularProductCard from '../components/PopularProductCard'
import { bucket, dairy01, dairy02, dairy03, dairy033, pro2, pro3, pro4, pro5, united } from '../assets/images'
import ServiceCard from '../components/ServiceCard'


const all = [
    {
        head: united,
        big: dairy01
    },
    {
        head: pro2,
        big: dairy02,
        
    },
    {
        head: pro3,
        big: dairy03
    },
    {
        head: pro4,
        big: bucket
    },
    {
        head: pro5,
        big: dairy033
    },
];




const Products = () => {
  return (
    <div className='h-screen'>
        <Carousel className='max-sm:h-[70%] h-[80%] max-sm:-mt-40 max-lg:h-[400px]   ' slide={false}>
    {
        all.map((el) => (
            <div key={el.head}>
            <PopularProductCard {...el} />
            <ServiceCard {...el}  />
            </div>
        ))
       

        
    }

   
        </Carousel>

   
    </div>
  )
}

export default Products