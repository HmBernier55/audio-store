import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='flex gap-[34px]'>
      <NavLink to='/' className='text-[13px] font-medium tracking-[2px] text-white hover:text-[#D87D4A]'>HOME</NavLink>
      <NavLink to='/headphones' className='text-[13px] font-medium tracking-[2px] text-white hover:text-[#D87D4A]'>HEADPHONES</NavLink>
      <NavLink to='/speakers' className='text-[13px] font-medium tracking-[2px] text-white hover:text-[#D87D4A]'>SPEAKERS</NavLink>
      <NavLink to='/earphones' className='text-[13px] font-medium tracking-[2px] text-white hover:text-[#D87D4A]'>EARPHONES</NavLink>
    </div>
  )
}

export default Nav;