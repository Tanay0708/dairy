import { Carousel } from 'flowbite-react'
import React from 'react'
import PopularProductCard from '../components/PopularProductCard'
import { bucket, dairy01, dairy02, dairy03, dairy033, pro2, pro3, pro4, pro5, united, wellpro, wellprom } from '../assets/images'
import ServiceCard from '../components/ServiceCard'


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




const Products = () => {
  return (
    <>
    
    <div className='h-screen max-sm:h-[550px]   max-sm:-mt-40 max-sm:mb-10'>
        <Carousel className='max-sm:h-[100%] h-[80%]  max-lg:h-[400px]   ' slide={false}>
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
    </>
  )
}

export default Products