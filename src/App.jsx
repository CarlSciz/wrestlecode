import React, { useState, useEffect } from 'react';
import './App.css';
import wrestlerData from './wrestlerData.json';
import Wrestlers from './Wrestlers';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(wrestlerData);
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-black text-white h-24 flex items-center justify-start fixed top-0 left-0 w-full z-50'>
        <h1 className='text-8xl font-wrestlemania text-yellow-400 animate-jump-in ml-10 mb-3'>Wrestle Code</h1>
        <h2 className='text-1xl ml-10'> Wrestlers</h2>
        <h2 className='text-1xl ml-10'>Promotions</h2>
        <h2 className='text-1xl ml-10'>About</h2>
      </header>
      

    </div>
  );
}

export default App;
