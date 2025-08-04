import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Compress from './pages/Compress';
import About from './pages/About';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen flex flex-col transition-all duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compress" element={<Compress />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
