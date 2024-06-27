import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import About from './about.jsx';
import Wrestlers from './Wrestlers.jsx';
import Promotion from './Promotion.jsx';
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
