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
                <h2 className='text-1xl ml-10'> <Link to= "/wrestlers">Wrestlers</Link></h2>
                <h2 className='text-1xl ml-10'><Link to = "/promotion">Promotions</Link></h2>
                <h2 className='text-1xl ml-10'><Link to = "/about">About</Link></h2>
                </header>
            <div className="text-white mt-24">
                <h2 className="text-3xl font-bold mb-4">Wrestlers</h2>
                <ul>
                    {data.map((wrestler, index) => (
                        <li key={index}>
                            <strong>{wrestler.gimmick}</strong>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Wrestlers;
