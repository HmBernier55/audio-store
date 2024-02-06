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
      <div className='bg-hero-desktop w-full h-screen bg-cover bg-no-repeat bg-center flex items-center pl-[165px]'>
        <div className='flex flex-col gap-6 items-start'>
          <p className='text-white tracking-[10px] text-sm'>NEW PRODUCT</p>
          <h1 className='text-white tracking-[2px] font-medium text-[56px] max-w-[396px] leading-none'>XX99 MARK II HEADPHONES</h1>
          <h2 className='text-white max-w-[349px] text-[15px]'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</h2>
          <button
            className={`w-40 h-12 bg-orange-button text-white text-[13px] tracking-[1px] hover:bg-orange-hover font-medium`}
            onClick={() => navigate('/headphones/xx99-mark-two-headphones')}
          >SEE PRODUCT</button>
        </div>
      </div>
      <CategoryCardContainer />
      <div className='relative overflow-hidden w-[65vw] h-[560px] bg-[#D87D4A] flex justify-end items-center rounded-lg mt-[168px]'>
        <div className='relative z-20 max-w-sm mr-24 flex gap-5 flex-col'>
          <p className='font-semibold text-white text-[56px]'>ZX9 SPEAKER</p>
          <p className='text-white opacity-75'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <button
            className={`w-40 h-12 bg-black text-white text-[13px] tracking-[1px] hover:bg-black-hover font-medium`}
            onClick={() => navigate('/speakers/zx9-speaker')}
          >SEE PRODUCT</button>
        </div>
        <img className='absolute w-[350px] h-[400px] z-10 -bottom-[10px] left-[12%]' src={SpeakerZX9} alt="speaker" />
        <img className='absolute top-0 right-[30%] z-0' src={Circles} alt="circles" />
      </div>
      <div className='bg-zx7-speaker w-[65vw] h-80 bg-cover bg-no-repeat mt-12 rounded-lg flex items-center'>
        <div className='flex flex-col ml-24 gap-8'>
          <p className='font-semibold text-[28px] tracking-[2px]'>ZX7 SPEAKER</p>
          <button
            className={`w-40 h-12 bg-black text-white text-[13px] tracking-[1px] hover:bg-black-hover font-medium`}
            onClick={() => navigate('/speakers/zx7-speaker')}
          >SEE PRODUCT</button>
        </div>
      </div>
      <div className='flex w-[65vw] h-80 mt-12 gap-8'>
        <img className='w-1/2 object-cover rounded-lg' src={EarphonesYX1} alt="earphones" />
        <div className='flex gap-8 w-1/2 h-full flex-col justify-center pl-24 bg-[#F1F1F1] rounded-lg'>
          <p className='font-semibold text-[28px] tracking-[2px]'>YX1 EARPHONES</p>
          <button
            className={`w-40 h-12 bg-black text-white text-[13px] tracking-[1px] hover:bg-black-hover font-medium`}
            onClick={() => navigate('/earphones/yx1-earphones')}
          >SEE PRODUCT</button>
        </div>
      </div>
      <AboutFooter />
    </div>
  )
}

export default Home;