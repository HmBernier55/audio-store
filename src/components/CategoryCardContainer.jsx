import React from 'react';
import { Link } from 'react-router-dom';

import { CategoryLinks } from '../components/index';
import HeadphonesThumbnail from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import SpeakerThumbnail from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import EarphonesThumbnail from '../assets/shared/desktop/image-category-thumbnail-earphones.png';

const CategoryCardContainer = () => {
  return (
    <div className='flex gap-[30px] mt-[120px]'>
        <Link to='/headphones'>
          <CategoryLinks
            thumbnail={HeadphonesThumbnail}
            category='headphones'
          />
        </Link>
        <Link to='/speakers'>
          <CategoryLinks
            thumbnail={SpeakerThumbnail}
            category='speakers'
          />
        </Link>
        <Link to='/earphones'>
          <CategoryLinks
            thumbnail={EarphonesThumbnail}
            category='earphones'
          />
        </Link>
      </div>
  )
}

export default CategoryCardContainer;