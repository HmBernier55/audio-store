import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/shared/desktop/logo.svg';
import Facebook from '../../assets/shared/desktop/icon-facebook.svg';
import Twitter from '../../assets/shared/desktop/icon-twitter.svg';
import Instagram from '../../assets/shared/desktop/icon-instagram.svg';
import { Nav } from '../index';

const Footer = () => {
  return (
    <div className='relative flex flex-col w-full h-[365px] bg-black px-[165px] pt-[75px]'>
      <div className='flex w-full justify-between'>
        <img className='w-36 h-6' src={Logo} alt="logo" />
        <Nav />
      </div>
      <p className='text-white mt-9 mb-14 opacity-50 w-1/2'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
      <div className='flex justify-between w-full'>
        <p className='text-white opacity-50 font-medium'>Copyright 2021. All Rights Reserved</p>
        <div className='flex gap-4 items-center'>
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