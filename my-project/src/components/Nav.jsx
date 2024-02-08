import React, { useState } from 'react';
import {dairyLogo, dh, headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {

    const [show,setShow] = useState(true);

    const handleClick = () => {
        setShow(prev => !prev);
    }



  return (
   <header className='padding-x py-8 absolute z-10 w-full '>
    <nav className='flex justify-between items-center max-container'>
        <a href="/">
            <img src={dh} alt="logo" width={130} height={29} />
        </a>
        {/* <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
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
        <div className={`hidden max-lg:block `}>
            <img src={hamburger} alt="" width={25} height={25} onClick={handleClick} />
        </div>
        <div className={`hidden max-lg:${show == true ? 'hidden' : 'block' }  `}>
           <div className='absolute right-10 top-2' onClick={handleClick}>
            x
           </div>
           <ul className='absolute top-10 right-10 bg-white' >
            {navLinks.map((item) => (
                <li key={item.label}>
                    <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'> {item.label}</a>
                </li>
            ))
            }
           </ul>
        </div> */}
    </nav>
   </header>
  )
}

export default Nav