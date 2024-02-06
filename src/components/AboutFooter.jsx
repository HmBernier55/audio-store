import React from 'react';

import BestGear from '../assets/shared/desktop/image-best-gear.jpg';

const AboutFooter = () => {
  return (
    <div className='flex w-[65vw] h-[580px] my-52 gap-32'>
      <div className='flex flex-col gap-8 justify-center w-1/2 h-full'>
        <h3 className='text-[40px] font-semibold leading-none'>BRINGING YOU THE <span className='text-[#D87D4A]'>BEST</span> AUDIO GEAR</h3>
        <p className='opacity-50'>Located at the heart of New York City. Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>
      <img className='object-cover h-full w-1/2 rounded-lg' src={BestGear} alt="guy with headphones" />
    </div>
  )
}

export default AboutFooter;