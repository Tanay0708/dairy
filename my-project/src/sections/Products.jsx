import { Carousel } from 'flowbite-react'
import React from 'react'
import PopularProductCard from '../components/PopularProductCard'
import { dairy01, dairy02, dairy03, dairy033, pro2, pro3, pro4, pro5, united } from '../assets/images'
import ServiceCard from '../components/ServiceCard'


const all = [
    {
        head: united
    },
    {
        head: pro2
    },
    {
        head: pro3
    },
    {
        head: pro4
    },
    {
        head: pro5
    },
]


const Products = () => {
  return (
    <div className='h-screen'>
        <Carousel className='max-sm:h-[70%] h-[80%] max-sm:-mt-20' slide={false}>
    {
        all.map((el) => (
            <>
            <PopularProductCard {...el} key={head} />
            <ServiceCard {...el} />
            </>
        ))
    }
        </Carousel>
    </div>
  )
}

export default Products