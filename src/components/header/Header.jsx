import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/shared/desktop/logo.svg';
import Cart from '../../assets/shared/desktop/icon-cart.svg';

const Header = () => {
  return (
    <nav className='sticky top-0 bg-black flex justify-between px-[165px] items-center h-24 border-b-2 border-b-[#979797]'>
      <img src={Logo} alt='logo' className='' />
      <div className='flex gap-[34px]'>
        <NavLink to='/' className='text-[13px] font-medium tracking-[2px] text-white hover:text-[#D87D4A]'>HOME</NavLink>
        <NavLink to='/headphones' className='text-[13px] font-medium tracking-[2px] text-white hover:text-[#D87D4A]'>HEADPHONES</NavLink>
        <NavLink to='/speakers' className='text-[13px] font-medium tracking-[2px] text-white hover:text-[#D87D4A]'>SPEAKERS</NavLink>
        <NavLink to='/earphones' className='text-[13px] font-medium tracking-[2px] text-white hover:text-[#D87D4A]'>EARPHONES</NavLink>
      </div>
      <img src={Cart} alt='cart icon' />
    </nav>
  )
}

export default Header;