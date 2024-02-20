import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';
import { navLinks } from '../constants';
import { dairyLogo } from '../assets/images';
import { hamburger } from '../assets/icons';

const FloatingNav = () => {


    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [show,setShow] = useState(true);

    const handleClick = () => {
        setShow(prev => !prev);
    }



    const [visible,setVisible] = useState(false)
    
    useMotionValueEvent(scrollYProgress, "change", (current) => {
        let direction = current - scrollYProgress.getPrevious();
    
        if (scrollYProgress.get() < 0.05) {
          setVisible(false);
        } else {
          if (direction < 0) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        }
      });

  return (
    <>
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
       className=' "flex max-w-fit  fixed top-10 inset-x-0 mx-auto   rounded-full bg-white border-coral-red border shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4 ",'
      >
             
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:text-base max-lg:gap-4 '>
            {
                navLinks.map((item) => (
                    <li key={item.label}>
                            <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                                {item.label}
                            </a>
                    </li>
                ))
            }
        </ul>
       
        </motion.div>
        </AnimatePresence>
       
    </>
  )
}

export default FloatingNav