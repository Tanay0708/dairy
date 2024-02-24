import React from 'react'
import { Accordion } from 'flowbite-react';
import { useTranslation } from 'react-i18next';


const Acc = () => {

  const {t} = useTranslation();


    return (
      <section className=' flex flex-col justify-center max-sm:-m max-sm:bg-white max-sm:pb-10 rounded-xl'>
       <div className='text-center  max-sm:px-5 max-sm:pt-5'>
       <h2 className='text-[40px] max-sm:text-[24px] text-coral-red font-[300]'>{t("accH1")} <span className='font-[700]'>{t("accH2")}</span> {t("accH3")}</h2>
       <p className='text-[28px] max-sm:text-[14px] max-sm:leading-4 max-sm:text-left text-gray-400 leading-8'>
       {t("accP1")} <br className='max-sm:hidden' /> {t("accP2")}
       </p>
       </div>
        
        
        <Accordion collapseAll className='w-[80%] border-none m-auto mt-5'>
          <Accordion.Panel >
            <Accordion.Title className='bg-[#5EFE81] h-[74px] max-sm:h-[60px] rounded-md mt-[8px] text-black'>{t("accT1")}
         
             </Accordion.Title>
            <Accordion.Content className='w-full bg-[#5EFE81] rounded-md'>
              <p className="mb-2 text-black p-5">
              {t("accT12")}
              </p>
              
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className='bg-[#F2D913] h-[74px] text-black max-sm:h-[60px] rounded-md mt-[8px] '>{t("accT2")}</Accordion.Title>
            <Accordion.Content className='bg-[#F2D913] rounded-md p-5'>
              <p className="mb-2 text-black">
              {t("accT22")}
              </p>
              
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className='bg-[#0060AA] text-white h-[74px] max-sm:h-[60px] rounded-md mt-[8px] hover:text-black'>{t("accT3")}</Accordion.Title>
            <Accordion.Content className='bg-[#0060AA] p-5 rounded-md'>
              <p className="mb-2 text-white">
              {t("accT32")}
             </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className='bg-[#DA181F] text-white h-[74px] max-sm:h-[60px] hover:text-black rounded-md mt-[8px]'>{t("accT4")}</Accordion.Title>
            <Accordion.Content className='bg-[#DA181F] p-5 rounded-md'>
              <p className="mb-2 text-white">
              {t("accT42")}
             </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        </section>
    );
}

export default Acc