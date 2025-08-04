
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Compress from './pages/Compress';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">SlimPress</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/compress" className="text-gray-700 hover:text-blue-600">Compress</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        </nav>
      </header>
      <main className="py-6 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compress" element={<Compress />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}