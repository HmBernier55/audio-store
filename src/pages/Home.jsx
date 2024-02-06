import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CategoryLinks } from '../components/index';
import HeadphonesThumbnail from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import SpeakerThumbnail from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import EarphonesThumbnail from '../assets/shared/desktop/image-category-thumbnail-earphones.png';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className='bg-hero-desktop w-full h-screen bg-cover bg-no-repeat bg-center flex items-center pl-[165px]'>
        <div className='flex flex-col gap-6 items-start'>
          <p className='text-white tracking-[10px] text-sm'>NEW PRODUCT</p>
          <h1 className='text-white tracking-[2px] font-medium text-[56px] max-w-[396px] leading-none'>XX99 MARK II HEADPHONES</h1>
          <h2 className='text-white max-w-[349px] text-[15px]'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</h2>
          <button
            className='w-40 h-12 bg-[#D87D4A] hover:bg-[#FBAF85] text-white text-[13px] tracking-[1px] font-medium'
            onClick={() => navigate('/headphones/xx99-mark-two-headphones')}
          >SEE PRODUCT</button>
        </div>
      </div>
      <div>
        <CategoryLinks
          thumbnail={HeadphonesThumbnail}
          title='headphones'
        />
        <CategoryLinks
          thumbnail={SpeakerThumbnail}
          title='speakers'
        />
        <CategoryLinks
          thumbnail={EarphonesThumbnail}
          title='earphones'
        />
      </div>
    </div>
  )
}

export default Home;