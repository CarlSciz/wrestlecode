import React, { useState, useEffect } from 'react';
import wrestlerData from './wrestlerData.json';
import LoginModal from './loginModal';
import { Link } from 'react-router-dom';

function Wrestlers() {
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);

    useEffect(() => {
        setData(wrestlerData);
    }, []);

    const moveRowUp = (index) => {
        if (index === 0) return; // Can't move the first row up
        const newData = [...data];
        const temp = newData[index];
        newData[index] = newData[index - 1];
        newData[index - 1] = temp;
        setData(newData);
    };

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
                <h1 className='text-8xl font-wrestlemania text-yellow-400 animate-jump-in ml-10 mb-3'> <Link to="/">Wrestle Code</Link></h1>
                <h2 className='text-1xl ml-10 font-tna'> <Link to= "/wrestlers">Wrestlers</Link></h2>
                <h2 className='text-1xl ml-10 font-tna'><Link to = "/promotion">Promotions</Link></h2>
                <h2 className='text-1xl ml-10 font-tna'><Link to = "/about">About</Link></h2>
                <h3 className='text-1xl ml-60 font-tna' onClick={openModal}>Login</h3>
            </header>
            <div className="text-white mt-24">
                <h2 className="text-3xl font-bold mb-4">Top 100 Wrestlers</h2>
                <div className="grid grid-cols-1 gap-4">
                    {data.map((row, index) => (
                        <div key={index}>
                            <div className="flex justify-between items-center"> 
                                <strong><a href={row.href} target="_blank">{row.gimmick}</a></strong>
                                <strong className="ml-4">{row.birthplace}</strong>
                                <strong className="ml-4">{row.promotion}</strong>
                                <button onClick={() => moveRowUp(index)}>Rank Up</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <LoginModal isModalOpen={isModalOpen} closeModal={closeModal} />
        </div>
    );
}

export default Wrestlers;
