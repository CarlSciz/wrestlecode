import React, { useState, useEffect } from 'react';
import promotionData from './promotionData.json';
import { Link } from 'react-router-dom';

function Promotions() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(promotionData);
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-black text-white h-24 flex items-center justify-start fixed top-0 left-0 w-full z-50'>
        <h1 className='text-8xl font-wrestlemania text-yellow-400 animate-jump-in ml-10 mb-3'> <Link to="/">Wrestle Code</Link></h1>
        <h2 className='text-1xl ml-10 font-tna'> <Link to= "/wrestlers">Wrestlers</Link></h2>
        <h2 className='text-1xl ml-10 font-tna'><Link to = "/promotion">Promotions</Link></h2>
        <h2 className='text-1xl ml-10 font-tna'><Link to = "/about">About</Link></h2>
      </header>
      <div className="text-white mt-24">
        <h2 className="text-3xl font-bold mb-4">Wrestling Promotions</h2>
        <div className="grid grid-cols-1 gap-4">
          {data.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between"> 
                <strong><a href={item.href} target="_blank">{item.promotionName}</a></strong>
                <strong className="ml-4">{item.promotionHQ}</strong>
                <strong className="ml-4">{item.years}</strong> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Promotions;
