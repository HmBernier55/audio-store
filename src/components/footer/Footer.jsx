import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../../../public/assets/shared/desktop/logo.svg';
import Facebook from '../../../public/assets/shared/desktop/icon-facebook.svg';
import Twitter from '../../../public/assets/shared/desktop/icon-twitter.svg';
import Instagram from '../../../public/assets/shared/desktop/icon-instagram.svg';

const Footer = () => {
  return (
    <div className='relative flex flex-col w-full h-fit bg-black items-center pt-12 md:items-start md:px-10 xl:px-[165px] xl:pt-[75px]'>
      <div className='flex gap-12 flex-col md:gap-8 xl:w-full xl:justify-between xl:flex-row'>
        <img className='w-36 h-6' src={Logo} alt="logo" />
        <div className='flex flex-col items-center gap-4 md:flex-row md:gap-[34px]'>
          <NavLink to='/' className='text-[13px] font-medium tracking-[2px] text-white hover:text-[#D87D4A]'>HOME</NavLink>
          <NavLink to='/headphones' className='text-[13px] font-medium tracking-[2px] text-white hover:text-[#D87D4A]'>HEADPHONES</NavLink>
          <NavLink to='/speakers' className='text-[13px] font-medium tracking-[2px] text-white hover:text-[#D87D4A]'>SPEAKERS</NavLink>
          <NavLink to='/earphones' className='text-[13px] font-medium tracking-[2px] text-white hover:text-[#D87D4A]'>EARPHONES</NavLink>
        </div>
      </div>
      <p className='text-white mt-9 mb-14 opacity-50 px-6 text-center md:text-left md:px-0 md:mb-20 xl:w-1/2'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
      <div className='flex flex-col items-center md:flex-row md:justify-between md:w-full'>
        <p className='text-white opacity-50 font-medium mb-12'>Copyright 2021. All Rights Reserved</p>
        <div className='flex gap-4 items-center mb-9'>
          <Link to='#'>
            <img src={Facebook} alt="facebook icon" />
          </Link>
          <Link to='#'>
            <img src={Twitter} alt="twitter icon" />
          </Link>
          <Link to='#'>
            <img src={Instagram} alt="instagram icon" />
          </Link>
        </div>
      </div>
      <div className='absolute w-28 h-1 bg-[#D87D4A] top-0'></div>
    </div>
  )
}

export default Footer;