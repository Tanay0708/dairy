import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1, dairy01 } from "../assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants";
import {Link} from 'react-router-dom';


const Hero = () => {


  const [bigShoeImg,setBigShoeImg] = useState(dairy01);


  return (
    <section
    id='home'
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
  >
    <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
     

      <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
         Celebrate <span className='text-coral-red inline-block mt-3'> Taste</span> 
        </span>
        <br />
       with 
         <span className='text-coral-red inline-block mt-3'> Health </span> 
      </h1>
      <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
      At Pure Gold Ghee, we bring you the finest quality clarified butter, crafted with precision and care. Immerse yourself in the velvety richness of our golden elixir, a staple in kitchens around the world for centuries.
      </p>
<Link to={'/pro'}>
      <Button label='Gallery' iconURL={arrowRight} />
      </Link>
      <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
        {statistics.map((stat, index) => (
          <div key={index}>
            <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
            <p className='leading-7 font-montserrat text-slate-gray'>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>

    <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
     
     <div className=" w-full h-[500px] object-contain">
       <img
        src={bigShoeImg}
        alt='shoe colletion'
       
        className='object-contain relative w-full h-full z-10'
      />
</div>
      <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
        {shoes.map((image, index) => (
          <div key={index} className=" max-sm:w-[30%] max-sm:h-[100px] ">
            <ShoeCard
              index={index}
              imgURL={image}
              changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Hero