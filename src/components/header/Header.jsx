import React, { useState, useEffect } from 'react';

import { Nav, CartModal } from '../index';
import Logo from '../../assets/shared/desktop/logo.svg';
import Cart from '../../assets/shared/desktop/icon-cart.svg';

const Header = () => {

  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setShowCart(false);
  }, [])

  const toggleCart = () => {
    setShowCart(prev => !prev);
  }

  return (
    <nav className='sticky top-0 bg-black flex justify-between px-[165px] items-center h-24 border-b-2 border-b-[#979797] z-50'>
      <img src={Logo} alt='logo' className='' />
      <Nav />
      <button onClick={toggleCart}>
        <img src={Cart} alt='cart icon' />
      </button>
      {showCart && <CartModal />}
    </nav>
  )
}

export default Header;