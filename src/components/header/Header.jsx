import React from 'react';

import { Nav } from '../index';
import Logo from '../../assets/shared/desktop/logo.svg';
import Cart from '../../assets/shared/desktop/icon-cart.svg';

const Header = () => {
  return (
    <nav className='sticky top-0 bg-black flex justify-between px-[165px] items-center h-24 border-b-2 border-b-[#979797] z-50'>
      <img src={Logo} alt='logo' className='' />
      <Nav />
      <img src={Cart} alt='cart icon' />
    </nav>
  )
}

export default Header;