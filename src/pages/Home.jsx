
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to SlimPress</h1>
      <p className="text-gray-600 mb-6 max-w-xl">Easily compress and convert your images with advanced options like presets, format conversion, batch uploads, and more.</p>
      <div className="space-x-4">
        <Link to="/compress" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Start Compressing</Link>
        <Link to="/about" className="px-6 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">About</Link>
      </div>
    </div>
  );
}
