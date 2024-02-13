import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductLink = ({productData, newProduct, url, detailPage = false, btnText}) => {

  const [count, setCount] = useState(1);
  const [isBtnDisabled, setIsBtnDisabled ] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const add = () => {
    setCount(prevCount => prevCount + 1);
    setIsBtnDisabled(false);
  };
  const subtract = () => {
    if (count > 2) {
      setCount(prevCount => prevCount - 1);
    } else {
      setCount(1);
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
    setCount(1);
  }

  return (
    <div className='flex flex-col w-[85vw] mt-16 h-fit md:flex-row md:gap-10 lg:gap-32 lg:h-[560px] xl:w-[65vw]'>
      <img className='rounded-lg md:w-1/2' src={new URL(productData.categoryImage.desktop, import.meta.url).href} alt={productData.name} />
      <div className='flex flex-col justify-center items-center md:items-start md:w-1/2'>
        {newProduct && <p className='text-[#D87D4A] tracking-[10px] mt-8 text-center text-sm md:text-left lg:text-base lg:m-0'>NEW PRODUCT</p>}
        <h2 className='text-3xl font-semibold uppercase mt-6 text-center sm:text-4xl md:text-left'>{productData.name}</h2>
        <p className='mt-6 mb-6 opacity-50 font-medium text-center md:text-left'>{productData.description}</p>
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
              className='w-40 h-12 bg-orange-button text-white text-[13px] tracking-[1px] hover:bg-orange-hover font-medium'
              onClick={addToHandler}
            >{btnText}</button>
          }
        </div>
      </div>
    </div>
  )
}

export default ProductLink;