import React, { useState, useEffect } from 'react';
import wrestlerData from './wrestlerData.json';
import { Link } from 'react-router-dom';

function Wrestlers() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(wrestlerData);
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
        <h2 className="text-3xl font-bold mb-4">Top 100 Wrestlers</h2>
        <div className="grid grid-cols-1 gap-4">
            {Object.keys(data).map((key, index) => (
            <div key={index}>
                <div className="flex justify-between"> 
                <strong>{data[key].gimmick}</strong>
                <strong className="ml-4">{data[key].birthplace}</strong>
                <strong className="ml-4">{data[key].promotion}</strong> 
                </div>
                </div>
                ))}
                </div>
                </div>


        </div>
    );
}

export default Wrestlers;
