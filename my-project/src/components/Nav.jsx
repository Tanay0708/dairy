import React, { useState } from 'react'
import { dairyLogo } from '../assets/images';
import { facebook, hamburger, instagram, twitter } from '../assets/icons';
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';


const Nav = () => {

  const [open,setOpen] = useState(false);


  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  return (
    <nav className='h-28 max-sm:h-26 flex justify-between items-center max-sm:p-5 max-sm:bg-white max-sm:fixed z-[999] w-full'>
        <img src={dairyLogo} className='h-full w-32' alt="" />
        <ul className='flex items-center gap-10 text-[18px] font-[700] max-sm:hidden'>
         <Link to={'/'}>
          <li>HOME</li>
          </Link>
          <Link to={'/about'}>
           
          <li>ABOUT</li>
          
          </Link>
          <Link to={'/products'}>
          <li>PRODUCT</li>
          </Link>
          <Link to={'/gallery'}>
          <li>GALLERY</li>
          </Link>
        </ul>
        <Link to={'/contact-us'}>
        <button className='border-2 h-[60%] w-52 bg-black text-white text-[24px] rounded-full font-[300] imtems-center max-sm:hidden'>
          Contact Us
        </button>
        </Link>
        <div className='max-sm:flex gap-2 hidden '>

        
        <button className='hidden max-sm:block  w-20 h-10 rounded-full bg-[#F2D913] text-[20px]'>
      Hindi
        </button>
        <button className='hidden max-sm:block h-10  bg-black rounded-full w-10   '>
<img src={hamburger} alt="" className='h-[40%] m-auto z-[999]  ' onClick={() => setOpen((prev) => !prev)} />
        </button>
        </div>
      {
        open && <NavMenu handleClick= {handleClick} />
      }
    </nav>
  )
}

export default Nav