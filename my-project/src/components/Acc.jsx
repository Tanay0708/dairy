import React from 'react'
import { Accordion } from 'flowbite-react';


const Acc = () => {
    return (
      <section className=' flex flex-col justify-center -mt-40 max-sm:bg-white max-sm:pb-10 rounded-xl'>
       <div className='text-center  max-sm:px-5 max-sm:pt-5'>
       <h2 className='text-[40px] max-sm:text-[24px] text-coral-red font-[300]'>OUR <span className='font-[700]'>PRODUCTS</span> ARE</h2>
       <p className='text-[28px] max-sm:text-[14px] max-sm:leading-4 max-sm:text-left text-gray-400 leading-8'>
       where tradition meets purity inevery drop of <br className='max-sm:hidden' /> our golden goodness
       </p>
       </div>
        
        
        <Accordion collapseAll className='w-[80%] border-none m-auto mt-5'>
          <Accordion.Panel >
            <Accordion.Title className='bg-[#5EFE81] h-[74px] max-sm:h-[60px] rounded-md mt-[8px] text-black'>What is Flowbite? 
         
             </Accordion.Title>
            <Accordion.Content className='w-full bg-[#5EFE81] rounded-md'>
              <p className="mb-2 text-black p-5">
                Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                dropdowns, modals, navbars, and more.
              </p>
              
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className='bg-[#F2D913] h-[74px] text-black max-sm:h-[60px] rounded-md mt-[8px] '>Is there a Figma file </Accordion.Title>
            <Accordion.Content className='bg-[#F2D913] rounded-md p-5'>
              <p className="mb-2 text-black">
                Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                has a design equivalent in our Figma file.
              </p>
              
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className='bg-[#0060AA] text-white h-[74px] max-sm:h-[60px] rounded-md mt-[8px] hover:text-black'>What are the differences?</Accordion.Title>
            <Accordion.Content className='bg-[#0060AA] p-5 rounded-md'>
              <p className="mb-2 text-white">
                The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                components, whereas Tailwind UI offers sections of pages.
             </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className='bg-[#DA181F] text-white h-[74px] max-sm:h-[60px] hover:text-black rounded-md mt-[8px]'>Our Promise to You</Accordion.Title>
            <Accordion.Content className='bg-[#DA181F] p-5 rounded-md'>
              <p className="mb-2 text-white">
                The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                components, whereas Tailwind UI offers sections of pages.
             </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        </section>
    );
}

export default Acc