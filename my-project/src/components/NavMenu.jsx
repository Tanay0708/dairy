import React from 'react'
import { facebook, instagram, twitter } from '../assets/icons'
import { Link } from 'react-router-dom'

const NavMenu = ({handleClick}) => {
  return (
    <>    <div className=' absolute w-full left-0 hidden max-sm:block h-[350px] bg-white top-0 text-center'>
    <ul className='h-full  flex flex-col gap-3 text-[24px] mt-5'>
      <Link to={'/'}>
      <li className='hover:text-coral-red'  onClick={handleClick} >Home</li>
      </Link>
      <Link to={'/about'}>
      <li className='hover:text-coral-red'  onClick={handleClick}>About</li>
      </Link>
      <Link to={'products'}>
      <li className='hover:text-coral-red'  onClick={handleClick}>Product</li>
      </Link>
      <Link to={'/gallery'}>
      <li className='hover:text-coral-red'  onClick={handleClick}>Gallery</li>
      </Link>
      <Link to={'/contact-us'}>
      <li className='hover:text-coral-red'  onClick={handleClick}>Contact us</li>
      </Link>
      <li className='hover:text-coral-red'>
      <ul className='flex gap-10 justify-center'>
                <li className='border-2 border-black w-10 h-10 p-2 rounded-full'>
                  
                  <a href="https://www.facebook.com/profile.php?id=61555865115775&mibextid=ZbWKwL" target='_blank'>
                  <img src={facebook} alt="" />
                  </a></li>
                  
                <li className='border-2 border-black w-10 h-10 p-2 rounded-full'>
                  <a href="https://www.instagram.com/mahashree2024?igsh=MXhycWY4M3lmaGFoMg==" target='_blank'>
                  <img src={instagram} alt="" />
                  </a>
                  </li>
              
            </ul>
      </li>
    </ul>
</div>
<div className='hidden max-sm:block w-10 h-10 absolute top-0 right-10 text-center items-center p-1 bg-black text-white mt-5 rounded-full'  onClick={handleClick}>
    X
</div>
</>

  )
}

export default NavMenu