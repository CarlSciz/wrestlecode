import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-black text-white h-24 flex items-center justify-start fixed top-0 left-0 w-full z-50'>
        <h1 className='text-8xl font-wrestlemania text-yellow-400 animate-jump-in ml-10 mb-3'> <Link to="/">Wrestle Code</Link></h1>
        <h2 className='text-1xl ml-10 font-tna'> <Link to= "/wrestlers">Wrestlers</Link></h2>
        <h2 className='text-1xl ml-10 font-tna'><Link to = "/promotion">Promotions</Link></h2>
        <h2 className='text-1xl ml-10 font-tna'><Link to = "/about">About</Link></h2>
      </header>
      <div className="text-white mt-24 p-4">
        <h2>About</h2>
        <p>This is the page for About content.</p>
      </div>
    </div>
  );
}

export default About;
