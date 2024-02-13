import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CategoryCardContainer, AboutFooter } from '../components/index';
import SpeakerZX9 from '../assets/home/desktop/image-speaker-zx9.png';
import Circles from '../assets/home/desktop/pattern-circles.svg';
import EarphonesYX1 from '../assets/home/desktop/image-earphones-yx1.jpg';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center'>
      <div className='bg-hero-mobile w-full h-[600px] bg-cover bg-no-repeat bg-center flex items-center justify-center mb-[120px] px-6 sm:bg-hero-tablet sm:h-[800px] lg:pl-[165px] lg:bg-hero-desktop lg:h-screen lg:justify-start'>
        <div className='flex flex-col gap-6 items-center lg:items-start'>
          <p className='text-white tracking-[10px] text-sm opacity-50'>NEW PRODUCT</p>
          <h1 className='text-white tracking-[2px] font-medium text-4xl text-center max-w-[396px] leading-none sm:text-[56px] lg:text-left'>XX99 MARK II HEADPHONES</h1>
          <h2 className='text-white max-w-[349px] text-[15px] text-center opacity-75 lg:text-left'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</h2>
          <button
            className={`w-40 h-12 bg-orange-button text-white text-[13px] tracking-[1px] hover:bg-orange-hover font-medium`}
            onClick={() => navigate('/headphones/xx99-mark-two-headphones')}
          >SEE PRODUCT</button>
        </div>
      </div>
      <CategoryCardContainer />
      <div className='relative overflow-hidden w-[85vw] h-[560px] bg-[#D87D4A] flex items-center justify-center rounded-lg mt-[168px] lg:w-[65vw]'>
        <div className='flex gap-5 flex-col items-center relative z-20 xl:flex-row xl:gap-36'>
          <img className='w-[175px] h-[205px] xl:w-[300px] xl:h-[350px] xl:self-end' src={SpeakerZX9} alt="speaker" />
          <div className='max-w-[350px] flex flex-col items-center gap-6 xl:items-start'>
            <p className='font-semibold text-white text-4xl text-center xl:text-[56px] xl:max-w-64 xl:text-left xl:leading-[58px]'>ZX9 SPEAKER</p>
            <p className='text-white opacity-75 text-center xl:text-left'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <button
              className={`w-40 h-12 bg-black text-white text-[13px] tracking-[1px] hover:bg-black-hover font-medium`}
              onClick={() => navigate('/speakers/zx9-speaker')}
            >SEE PRODUCT</button>
          </div>
        </div>
        <img className='absolute top-0 right-0 z-0 md:-top-1/4 xl:right-[30%]' src={Circles} alt="circles" />
      </div>
      <div className='bg-zx7-speaker-mobile w-[85vw] h-80 bg-cover bg-no-repeat mt-12 rounded-lg flex items-center md:bg-zx7-speaker-tablet lg:bg-zx7-speaker-desktop lg:w-[65vw]'>
        <div className='flex flex-col ml-6 gap-8 md:ml-16 lg:ml-24'>
          <p className='font-semibold text-[28px] tracking-[2px]'>ZX7 SPEAKER</p>
          <button
            className={`w-40 h-12 font-semibold bg-transparent border-2 border-black text-[13px] tracking-[1px] hover:bg-black hover:text-white`}
            onClick={() => navigate('/speakers/zx7-speaker')}
          >SEE PRODUCT</button>
        </div>
      </div>
      <div className='flex flex-col w-[85vw] mt-12 gap-8 md:flex-row md:h-80 lg:w-[65vw]'>
        <img className='object-cover rounded-lg md:w-1/2' src={EarphonesYX1} alt="earphones" />
        <div className='flex gap-8 py-10 pl-6 h-full flex-col justify-center bg-[#F1F1F1] rounded-lg md:w-1/2 lg:pl-24'>
          <p className='font-semibold text-[28px] tracking-[2px]'>YX1 EARPHONES</p>
          <button
            className={`w-40 h-12 font-semibold bg-transparent border-2 border-black text-[13px] tracking-[1px] hover:bg-black hover:text-white`}
            onClick={() => navigate('/earphones/yx1-earphones')}
          >SEE PRODUCT</button>
        </div>
      </div>
      <AboutFooter />
    </div>
  )
}

export default Home;