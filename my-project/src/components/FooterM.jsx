import React from 'react'
import { dairyLogo, dh, foot, proseek } from '../assets/images'
import { facebook, instagram, twitter } from '../assets/icons'
import { useTranslation } from 'react-i18next'

const FooterM = () => {

  const {t} = useTranslation()

  return (
    <>
    <div className='rounded-lg  w-[95%] m-auto max-sm:h-[415px] hidden max-sm:block relative bg-[#F2D913] mb-5'>
       
        <img src={foot} alt="" className='rounded-lg h-full w-[360px] opacity-[30%] relative' />
        
        <img src={dairyLogo} alt="" className='absolute top-8 left-6  w-40' />
        <p className='absolute bottom-36  ml-5 w-[300px] text-balance font-[500]'>
       {t("footP")}
        </p>
        <div className='absolute bottom-10 left-6'>
          <h2 className='text-3xl'>Follow Us</h2>
          <div className='flex gap-10'>

          <a href="https://www.instagram.com/mahashree2024?igsh=MXhycWY4M3lmaGFoMg==" target='_blank'>
          <img src={instagram} alt="" className='border-2 border-black rounded-full p-2' />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61555865115775&mibextid=ZbWKwL" target='_blank'>
          <img src={facebook} alt="" className='border-2 border-black rounded-full p-2' />
          </a>
          </div>
        </div>
    </div>
    <div className='max-sm:hidden w-full  h-[546px] bg-[#F2D913] relative '>
            <img src={proseek} className='w-full h-full opacity-[15%] absolute  top-0 ' alt="" />
            <div className='w-[80%] m-auto h-full flex items-center'>
               <div className='w-1/3'>
                    <img src={dairyLogo} className='w-[50%]' alt="" />
                    <p>{t("footP")}</p>
               </div>
               <div className='w-1/3 flex gap-10 justify-evenly text-[14px] font-[700]   '>
                    {/* <ul className=''>
                        <li>Home</li>
                        <li>Products</li>
                    </ul>
                    <ul className=''>
                        <li>Know Your Milk</li>
                        <li>Shop</li>
                    </ul> */}
               </div>
               <div className='w-1/3  flex flex-col justify-center text-center z-10'>
                    <h2 className='text-3xl mb-5'>Follow Us</h2>
                    <ul className='flex gap-10 justify-center'>
                    <a href="https://www.facebook.com/profile.php?id=61555865115775&mibextid=ZbWKwL" target='_blank'>
                        <li className='border-2 border-black w-10 h-10 p-2 rounded-full'><img src={facebook} alt="" /></li>
                        </a>
                        <a href="https://www.instagram.com/mahashree2024?igsh=MXhycWY4M3lmaGFoMg==" target='_blank'>
                        <li className='border-2 border-black w-10 h-10 p-2 rounded-full'><img src={instagram} alt="" /></li>
                        </a>
                       
                    </ul>
               </div>
            </div>
    </div>
    </>
  )
}

export default FooterM