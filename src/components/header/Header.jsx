import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Nav, CartModal, CheckoutModal } from '../index';
import Logo from '../../assets/shared/desktop/logo.svg';
import Cart from '../../assets/shared/desktop/icon-cart.svg';
import { toggleCart } from '../../store/cartSlice';

const Header = () => {

  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  return (
    <nav className='sticky top-0 bg-black flex justify-between px-[165px] items-center h-24 border-b-2 border-b-[#979797] z-50'>
      <img src={Logo} alt='logo' className='' />
      <Nav />
      <div className='flex gap-2 items-center'>
        <button onClick={() => dispatch(toggleCart())}>
          <img src={Cart} alt='cart icon' />
        </button>
        {cart.totalItems > 0 &&
          <p className='text-white'>{`(${cart.totalItems})`}</p>
        }
      </div>
      {cart.showCart && <CartModal />}
    </nav>
  )
}

export default Header;