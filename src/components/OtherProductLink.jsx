import React from 'react';
import { useNavigate } from 'react-router-dom';

const OtherProductLink = ({slug, name, category, image}) => {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center'>
      <img className='mb-10 rounded-lg' src={new URL(image, import.meta.url).href} alt="product photo" />
      <p className='mb-8 font-bold text-2xl'>{name}</p>
      <button
        className='w-40 h-12 bg-orange-button text-white text-[13px] tracking-[1px] hover:bg-orange-hover font-medium'
        onClick={() => navigate(`/${category}/${slug}`)}
      >SEE PRODUCT</button>
    </div>
  )
}

export default OtherProductLink;