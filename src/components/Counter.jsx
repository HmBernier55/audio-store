import React, { useState } from 'react';

const Counter = () => {

  const [count, setCount] = useState(0);
  const [isBtnDisabled, setIsBtnDisabled ] = useState(true);

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
    <div className='flex h-12 bg-[#F1F1F1] items-center'>
      <button
        className={`pl-5 pr-3 font-bold opacity-25 ${isBtnDisabled ? '' : 'hover:text-orange-button'}`}
        onClick={subtract}
        disabled={isBtnDisabled}
      >-</button>
      <p className='px-3 font-semibold'>{count}</p>
      <button
        className='pl-3 pr-5 font-bold opacity-25 hover:text-orange-button'
        onClick={add}
      >+</button>
    </div>
  )
}

export default Counter;