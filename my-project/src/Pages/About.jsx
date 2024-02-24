import React from 'react'
import { useTranslation } from 'react-i18next'

const About = () => {

  const {t} = useTranslation()


  return (
    <div className=' max-sm:block p-4  '>
    <div className='mt-28'>
        <button className='border-2 h-[24px] w-[74px] text-[14px] text-[#4A4A4A] border-[#F2D913]  rounded-full'>
            {t("navA")}
        </button>
    </div>
    <div className='w-full  h-auto mt-[15px] text-left'>
            <h1 className='uppercase text-[29px] font-[300] leading-snug text-[#E31E24]'>
          <span className='font-[700] text-[32px]'>{t("sqH1")}</span> <br />
        {t("sqH2")} <br />
          {t("sqH3")}
            </h1>
            <p className='text-[18px] leading-[20.8px] mt-5'>
           {t("sqP1")} {t("sqp2")}
            </p>
            <hr className='w-full border border-black mt-20 border-dotted' />
    </div>
    <div className=' mt-10 text-[18px]'>
      <p>
      {t("aboutP1")} 
    </p>
<br className='mt-10'/>
<p>{t("aboutP2")} </p>

<br className='mt-10'/>
<p>
{t("aboutP3")} 
      </p>
    </div>
</div>
  )
}

export default About