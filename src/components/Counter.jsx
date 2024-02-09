import React, { useState } from 'react';

const Counter = ({isCart = false}) => {

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
    <div className={`flex ${isCart ? 'h-8 w-24 px-3' : 'h-12 w-32 px-5'} bg-[#F1F1F1] items-center justify-between`}>
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
  )
}

export default Counter;