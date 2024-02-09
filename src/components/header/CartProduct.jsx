import React, { useState } from 'react';

const CartProduct = ({data}) => {

  const [count, setCount] = useState(data.quantity);
  const [isBtnDisabled, setIsBtnDisabled ] = useState(false);

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

  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-4'>
        <img className='h-16 w-16 rounded-lg' src={new URL(data.image, import.meta.url).href} alt="product image" />
        <div>
          <p className='font-bold'>{data.name}</p>
          <p className='opacity-50 text-sm font-semibold'>{`$ ${data.price}`}</p>
        </div>
      </div>
      <div className={`flex h-8 w-24 px-3 bg-[#F1F1F1] items-center justify-between`}>
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
    </div>
  )
}

export default CartProduct;