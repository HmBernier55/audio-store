import React from 'react';
import { NavLink } from 'react-router-dom';

import { CategoryLinks } from '../components/index';
import HeadphonesThumbnail from '/assets/shared/desktop/image-category-thumbnail-headphones.png';
import SpeakerThumbnail from '/assets/shared/desktop/image-category-thumbnail-speakers.png';
import EarphonesThumbnail from '/assets/shared/desktop/image-category-thumbnail-earphones.png';

const CategoryCardContainer = () => {
  return (
    <div className='flex flex-col gap-4 md:flex-row md:gap-2 lg:gap-[30px]'>
        <NavLink to='/headphones'>
          <CategoryLinks
            thumbnail={HeadphonesThumbnail}
            category='headphones'
          />
        </NavLink>
        <NavLink to='/speakers'>
          <CategoryLinks
            thumbnail={SpeakerThumbnail}
            category='speakers'
          />
        </NavLink>
        <NavLink to='/earphones'>
          <CategoryLinks
            thumbnail={EarphonesThumbnail}
            category='earphones'
          />
        </NavLink>
      </div>
  )
}

export default CategoryCardContainer;