import React from 'react';

import RightArrow from '../assets/shared/desktop/icon-arrow-right.svg';

const CategoryLinks = ({thumbnail, category}) => {
  return (
    <div className='relative w-[21vw]'>
      <div className='relative z-10 flex flex-col items-center'>
        <img className='w-[250px] h-[225px]' src={thumbnail} alt={category} />
        <div className='pb-5 flex flex-col gap-[15px]'>
          <p className='uppercase font-bold tracking-[1.5px] text-lg'>{category}</p>
          <div className='flex items-center gap-[12px] justify-center'>
            <p className='opacity-50 text-sm font-semibold tracking-[1px]'>SHOP</p>
            <img className='w-[8px] h-[10px]' src={RightArrow} alt="right arrow icon" />
          </div>
        </div>
      </div>
      <div className='bg-[#F1F1F1] absolute w-full h-2/3 bottom-0 z-0 rounded-lg'></div>
    </div>
  )
}

export default CategoryLinks;