import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductLink = ({image, name, description, newProduct, url}) => {

  const navigate = useNavigate();

  return (
    <div className='flex w-[65vw] h-[560px]'>
      <img className='w-1/2' src={new URL(image, import.meta.url).href} alt={name} />
      <div className='w-1/2 pl-[125px] flex flex-col justify-center'>
        {newProduct && <p className='text-[#D87D4A] tracking-[10px]'>NEW PRODUCT</p>}
        <h2 className='text-4xl font-semibold uppercase'>{name}</h2>
        <p className='mt-8 mb-10 opacity-50 font-medium'>{description}</p>
        <button
          className={`w-40 h-12 bg-orange-button text-white text-[13px] tracking-[1px] hover:bg-orange-hover font-medium`}
          onClick={() => navigate(url)}
        >SEE PRODUCT</button>
      </div>
    </div>
  )
}

export default ProductLink;