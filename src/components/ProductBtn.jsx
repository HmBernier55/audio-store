import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductBtn = ({bgColor, hoverColor, url}) => {

  const navigate = useNavigate();

  return (
    <button
      className={`w-40 h-12 bg-${bgColor} text-white text-[13px] tracking-[1px] hover:bg-${hoverColor} font-medium`}
      onClick={() => navigate(url)}
    >SEE PRODUCT</button>
  )
}

export default ProductBtn;