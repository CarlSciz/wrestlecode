import React, { useState, useEffect } from 'react';
import './App.css';
import wrestlerData from './wrestlerData.json';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(wrestlerData);
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-black text-white h-24 flex items-center justify-start fixed top-0 left-0 w-full z-50'>
        <h1 className='text-8xl font-wrestlemania text-yellow-400 animate-jump-in ml-10 mb-5'>Wrestle Code</h1>
      </header>
      <main className='flex-1 flex items-center justify-center mt-24'> 
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-4">Wrestler Data</h2>
          <ul>
            {data.map((wrestler, index) => (
              <li key={index}>
                <strong>{wrestler.gimmick}</strong> - {wrestler.birthplace}, {wrestler.promotion}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
