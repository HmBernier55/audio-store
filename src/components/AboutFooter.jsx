import React from 'react';

import BestGear from '../../public/assets/shared/desktop/image-best-gear.jpg';

const AboutFooter = () => {
  return (
    <div className='flex flex-col w-[85vw] my-32 h-fit gap-10 lg:h-[580px] lg:w-[65vw] lg:my-52 lg:gap-32 lg:flex-row'>
      <div className='flex flex-col gap-8 justify-center lg:w-1/2 lg:h-full'>
        <h3 className='text-[28px] font-semibold leading-none text-center lg:text-left lg:text-[40px]'>BRINGING YOU THE <span className='text-[#D87D4A]'>BEST</span> AUDIO GEAR</h3>
        <p className='opacity-50 text-center lg:text-left'>Located at the heart of New York City. Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>
      <img className='object-cover object-center h-[400px] rounded-lg lg:h-full lg:w-1/2' src={BestGear} alt="guy with headphones" />
    </div>
  )
}

export default AboutFooter;