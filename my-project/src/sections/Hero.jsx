import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1, dairy01 } from "../assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants";
import {Link} from 'react-router-dom';
import { EmblaCarousel } from "../components/EmblaCarousel"


const Hero = () => {


  const [bigShoeImg,setBigShoeImg] = useState(dairy01);


  return (
    <section
    id='home'
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
  >
    <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
     

      <h1 className='mt-10 font-montserrat text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
        स्वाद और <span className='text-coral-red inline-block mt-3'> शुद्धत्ता  </span> 
        </span>
        <br />
      
         <span className='text-coral-red inline-block mt-3'> से भरपूर... </span> 
      </h1>
      <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
      महाश्री घी में, हम आपके लिए सटीकता और देखभाल के साथ तैयार की गई बेहतरीन गुणवत्ता वाला घी लाते हैं। अपने आप को हमारे स्वर्णिम अमृत की मखमली समृद्धि में डुबो दें, जो सदियों से दुनिया भर के रसोईघरों में इस्तेमाल किया जाता रहा है।
      </p>

      
    </div>

    <div className='relative flex-1 flex justify-center items-center xl:min-h-full  max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
     
     <EmblaCarousel />
    </div>
  </section>
  )
}

export default Hero