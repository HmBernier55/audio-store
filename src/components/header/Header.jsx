import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Hamburger from '/assets/shared/tablet/icon-hamburger.svg';
import Logo from '/assets/shared/desktop/logo.svg';
import Cart from '/assets/shared/desktop/icon-cart.svg';

import { Nav, CartModal, CategoryCardContainer } from '../index';
import { toggleCart } from '../../store/cartSlice';


const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  }

  return (
    <nav className='sticky top-0 bg-black flex justify-between px-6 items-center h-24 border-b-2 border-b-[#979797] z-50 lg:px-[165px]'>
      <button onClick={toggleNav} className='lg:hidden'>
        <img src={Hamburger} alt="hamburger icon" />
      </button>
      <Link to='/'>
        <img src={Logo} alt='logo' className='' />
      </Link>
      {isOpen &&
        <div onClick={toggleNav} className='absolute left-0 top-full w-full bg-white flex items-center justify-center py-14 h-fit overflow-y-auto'>
          <CategoryCardContainer />
        </div>
      }
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