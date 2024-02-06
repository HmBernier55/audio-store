import React, { lazy } from 'react';
import { ProductBtn } from './index';

const ProductLink = ({image, name, description, newProduct, url}) => {
  return (
    <div className='flex w-[65vw] h-[560px]'>
      <img className='w-1/2' src={new URL(image, import.meta.url).href} alt={name} />
      <div className='w-1/2 pl-[125px] flex flex-col justify-center'>
        {newProduct && <p className='text-[#D87D4A] tracking-[10px]'>NEW PRODUCT</p>}
        <h2 className='text-4xl font-semibold uppercase'>{name}</h2>
        <p className='mt-8 mb-10 opacity-50 font-medium'>{description}</p>
        <ProductBtn
          bgColor='[#D87D4A]'
          hoverColor='[#FBAF85]'
          url={url}
        />
      </div>
    </div>
  )
}

export default ProductLink;