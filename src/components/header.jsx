import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user, openModal }) => {
  return (
    <header className='bg-black text-white h-24 flex items-center justify-start fixed top-0 left-0 w-full z-50'>
      <h1 className='text-8xl font-wrestlemania text-yellow-400 animate-jump-in ml-10 mb-3 custom-cursor'>
        <Link to="/">Wrestle Code</Link>
      </h1>
      <h2 className='text-1xl ml-10 font-tna custom-cursor'>
        <Link to="/wrestlers">Wrestlers</Link>
      </h2>
      <h2 className='text-1xl ml-10 font-tna custom-cursor'>
        <Link to="/promotion">Promotions</Link>
      </h2>
      <h2 className='text-1xl ml-10 font-tna custom-cursor'>
        <Link to="/about">About</Link>
      </h2>
      <h3 className='text-1xl ml-60 font-tna custom-cursor'>
        {user ? `Welcome, ${user}` : <span onClick={openModal}>Login</span>}
      </h3>
    </header>
  );
};

export default Header;
