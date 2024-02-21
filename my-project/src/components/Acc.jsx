import React from 'react'
import { Accordion } from 'flowbite-react';


const Acc = () => {
    return (
      <section className=' flex flex-col justify-center max-sm:-mt-64 max-sm:bg-white max-sm:pb-10 rounded-xl'>
       <div className='text-center  max-sm:px-5 max-sm:pt-5'>
       <h2 className='text-[40px] max-sm:text-[24px] text-coral-red font-[300]'>OUR <span className='font-[700]'>PRODUCTS</span> ARE</h2>
       <p className='text-[28px] max-sm:text-[14px] max-sm:leading-4 max-sm:text-left text-gray-400 leading-8'>
       where tradition meets purity inevery drop of <br className='max-sm:hidden' /> our golden goodness
       </p>
       </div>
        
        
        <Accordion collapseAll className='w-[80%] border-none m-auto mt-5'>
          <Accordion.Panel >
            <Accordion.Title className='bg-[#5EFE81] h-[74px] max-sm:h-[60px] rounded-md mt-[8px] text-black'>The Essence of Purity:
         
             </Accordion.Title>
            <Accordion.Content className='w-full bg-[#5EFE81] rounded-md'>
              <p className="mb-2 text-black p-5">
                Experience the purity of our ghee, meticulously crafted from the finest quality ingrediants.
              </p>
              
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className='bg-[#F2D913] h-[74px] text-black max-sm:h-[60px] rounded-md mt-[8px] '>Health & Wellness Benefits:</Accordion.Title>
            <Accordion.Content className='bg-[#F2D913] rounded-md p-5'>
              <p className="mb-2 text-black">
                We source only the freshest, ethically produced milk to ensure each bacth of ghee is rich in flavor and nutrition, free from additives or preservatives.
              </p>
              
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className='bg-[#0060AA] text-white h-[74px] max-sm:h-[60px] rounded-md mt-[8px] hover:text-black'>Embrace Tradition:</Accordion.Title>
            <Accordion.Content className='bg-[#0060AA] p-5 rounded-md'>
              <p className="mb-2 text-white">
                Discover the meticulous process behind our ghee-making, where tradition methods cutting-edge technology.
             </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className='bg-[#DA181F] text-white h-[74px] max-sm:h-[60px] hover:text-black rounded-md mt-[8px]'>Our Promise to You</Accordion.Title>
            <Accordion.Content className='bg-[#DA181F] p-5 rounded-md'>
              <p className="mb-2 text-white">
                From hand-churning to precise temperature control, everystep is carefully orchestrated to unlock the full potential of our premium ingrediants.
             </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        </section>
    );
}

export default Acc