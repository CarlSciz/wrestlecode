import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App'; 
import About from './pages/about'; 
import Wrestlers from './pages/Wrestlers'; 
import Promotion from './pages/Promotion'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/wrestlers" element={<Wrestlers />} />
        <Route path="/promotion" element={<Promotion />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
