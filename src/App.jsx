import React from 'react';
import './App.css';
import wrestlerData from './wrestlerData.json';
import Wrestlers from './Wrestlers';

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-black text-white h-24 flex items-center justify-start fixed top-0 left-0 w-full z-50'>
        <h1 className='text-8xl font-wrestlemania text-yellow-400 animate-jump-in ml-10 mb-3'>Wrestle Code</h1>
        <h2 className='text-1xl ml-10'> Wrestlers</h2>
        <h2 className='text-1xl ml-10'>Promotions</h2>
        <h2 className='text-1xl ml-10'>About</h2>
      </header>
      <div className="mt-24 p-4">
        <h3>Main Page</h3>
        <p>This is where content for the main page lives.</p>
      </div>
    </div>
  );
}

export default App;
