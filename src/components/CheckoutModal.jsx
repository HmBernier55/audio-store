import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { CartProduct } from './index';
import OrderConfirmation from '../../public/assets/checkout/icon-order-confirmation.svg';
import { removeAll } from '../store/cartSlice';
import { toggleConfirmation } from '../store/checkoutSlice';

const CheckoutModal = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);

  const handleClick = () => {
    dispatch(removeAll());
    dispatch(toggleConfirmation());
    navigate('/');
  }

  return (
    <div className='bg-white w-[85vw] px-8 h-fit flex flex-col rounded-lg my-24 sm:w-[540px] sm:px-12'>
      <img className='h-16 w-16 mt-12 mb-8' src={OrderConfirmation} alt="checkmark" />
      <h2 className='mb-6 font-semibold text-3xl'>THANK YOU FOR YOUR ORDER</h2>
      <p className='mb-8 opacity-50'>You will receive an email confirmation shortly.</p>
      <div className='flex flex-col md:flex-row'>
        <div className='bg-[#F1F1F1] p-6 rounded-t-lg md:rounded-l-lg md:w-[55%]'>
          <div className='flex flex-col gap-4'>
            {cart.items.map(cartItem => (
              <CartProduct
                key={cartItem.id}
                data={cartItem.productInfo}
                cartItemId={cartItem.id}
                checkout
              />
            ))}
          </div>
        </div>
        <div className='flex items-center bg-black rounded-b-lg md:rounded-r-lg md:w-[45%] md:justify-center'>
          <div className='flex flex-col gap-2 ml-6 my-4 md:m-0'>
            <p className='opacity-50 text-white'>GRAND TOTAL</p>
            <p className='font-semibold text-lg text-white'>{`$ ${cart.total + 50}`}</p>
          </div>
        </div>
      </div>
      <button
        className='w-full h-12 bg-orange-button text-white hover:bg-orange-hover text-sm font-semibold my-12'
        onClick={handleClick}
      >BACK TO HOME</button>
    </div>
  )
}

export default CheckoutModal;