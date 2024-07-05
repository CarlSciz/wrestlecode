import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../components/loginModal';
import '../App.css';
import wrestlerData from '../wrestlerData.json';
import Wrestlers from './Wrestlers';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-black text-white h-24 flex items-center justify-start fixed top-0 left-0 w-full z-50'>
        <h1 className='text-8xl font-wrestlemania text-yellow-400 animate-jump-in ml-10 mb-3 custom-cursor'> <Link to="/">Wrestle Code</Link></h1>
        <h2 className='text-1xl ml-10 font-tna custom-cursor'> <Link to= "/wrestlers">Wrestlers</Link></h2>
        <h2 className='text-1xl ml-10 font-tna custom-cursor'><Link to = "/promotion">Promotions</Link></h2>
        <h2 className='text-1xl ml-10 font-tna custom-cursor'><Link to = "/about">About</Link></h2>
        <h3 className='text-1xl ml-60 font-tna custom-cursor' onClick={openModal}>Login</h3>
      </header>
      <div className="mt-24 p-4">
        <h3>Welcome</h3>
        <p></p>
      </div>
      
      <LoginModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default App;
