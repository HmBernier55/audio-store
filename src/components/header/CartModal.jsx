import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CartProduct } from '../index';

const CartModal = () => {

  const navigate = useNavigate();
  const cart = useSelector(state => state.cart);

  return (
    <div className='absolute top-24 left-0'>
      <div className='absolute h-screen w-screen bg-[#979797] opacity-50 z-10'></div>
      <div className='absolute bg-white z-50 top-8 left-[70vw] w-[377px] h-fit px-8 flex flex-col rounded-lg'>
        <div className='flex justify-between my-8'>
          <p className='font-bold tracking-[1px] text-lg'>CART</p>
          <button className='opacity-50 underline'>Remove all</button>
        </div>
        <div className='flex flex-col gap-6'>
          {cart.map(cartItem => (
            <CartProduct
              key={cartItem.id}
              data={cartItem.productInfo}
            />
          ))}
        </div>
        <div className='flex justify-between mt-8 mb-6'>
          <p className='opacity-50'>TOTAL</p>
          <p className='font-semibold text-lg'>$5000</p>
        </div>
        <button
          className='h-12 bg-orange-button text-white hover:bg-orange-hover text-sm font-semibold mb-8 tracking-[1px]'
          onClick={() => navigate('/checkout')}
        >CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartModal;