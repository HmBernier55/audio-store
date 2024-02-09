import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductLink = ({productData, newProduct, url, detailPage = false, btnText}) => {

  const [count, setCount] = useState(0);
  const [isBtnDisabled, setIsBtnDisabled ] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const add = () => {
    setCount(prevCount => prevCount + 1);
    setIsBtnDisabled(false);
  };
  const subtract = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    } else {
      setCount(0);
      setIsBtnDisabled(true)
    }
  };

  const addToHandler = () => {
    const data = {
      id: productData.id,
      product: {
        name: productData.cartName,
        image: productData.cartImage,
        price: productData.price,
        quantity: count
      }
    };
    dispatch(addToCart(data));
  }

  return (
    <div className='flex w-[65vw] h-[560px] mt-40'>
      <img className='w-1/2' src={new URL(productData.categoryImage.desktop, import.meta.url).href} alt={productData.name} />
      <div className='w-1/2 pl-[125px] flex flex-col justify-center'>
        {newProduct && <p className='text-[#D87D4A] tracking-[10px]'>NEW PRODUCT</p>}
        <h2 className='text-4xl font-semibold uppercase'>{productData.name}</h2>
        <p className='mt-8 mb-10 opacity-50 font-medium'>{productData.description}</p>
        {detailPage && <p className='mb-12 font-bold text-lg tracking-[1.5px]'>{`$${productData.price}`}</p>}
        <div className='flex gap-4'>
          {detailPage &&
            <div className='flex h-12 w-32 px-5 bg-[#F1F1F1] items-center justify-between'>
              <button
                className={`font-bold opacity-25 ${isBtnDisabled ? '' : 'hover:text-orange-button'}`}
                onClick={subtract}
                disabled={isBtnDisabled}
              >-</button>
              <p className='font-semibold'>{count}</p>
              <button
                className='font-bold opacity-25 hover:text-orange-button'
                onClick={add}
              >+</button>
            </div>
          }
          {!detailPage &&
            <button
              className='w-40 h-12 bg-orange-button text-white text-[13px] tracking-[1px] hover:bg-orange-hover font-medium'
              onClick={() => navigate(url)}
            >{btnText}</button>
          }
          {detailPage &&
            <button
              className={`w-40 h-12 bg-orange-button text-white text-[13px] tracking-[1px] ${isBtnDisabled ? '' : 'hover:bg-orange-hover'} font-medium`}
              onClick={addToHandler}
              disabled={isBtnDisabled}
            >{btnText}</button>
          }
        </div>
      </div>
    </div>
  )
}

export default ProductLink;