import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { CartProduct } from '../index';
import { removeAll, toggleCart } from '../../store/cartSlice';

const CartModal = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);

  const handleCheckout = () => {
    dispatch(toggleCart());
    navigate('/checkout');
  }

  return (
    <div className='absolute top-24 left-0'>
      <div className='absolute h-screen w-screen bg-[#979797] opacity-50 z-10'></div>
      <div className='absolute bg-white z-50 top-8 left-[70vw] w-[377px] h-fit px-8 flex flex-col rounded-lg'>
        <div className='flex justify-between my-8'>
          <p className='font-bold tracking-[1px] text-lg'>{`CART (${cart.totalItems})`}</p>
          <button
            className='opacity-50 underline'
            onClick={() => dispatch(removeAll())}
          >Remove all</button>
        </div>
        <div className='flex flex-col gap-6'>
          {cart.items.map(cartItem => (
            <CartProduct
              key={cartItem.id}
              data={cartItem.productInfo}
              cartItemId={cartItem.id}
            />
          ))}
        </div>
        <div className='flex justify-between mt-8 mb-6'>
          <p className='opacity-50'>TOTAL</p>
          <p className='font-semibold text-lg'>{`$ ${cart.total}`}</p>
        </div>
        <button
          className='h-12 bg-orange-button text-white hover:bg-orange-hover text-sm font-semibold mb-8 tracking-[1px]'
          onClick={handleCheckout}
        >CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartModal;