import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Info, ImageIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">SlimPress</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Optimize your images in seconds. Convert, compress, and download without quality loss – all in one clean, simple interface.
          </p>
        </div>

      
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition duration-200">Home</Link></li>
            <li><Link to="/compress" className="hover:text-white transition duration-200">Compress</Link></li>
            <li><Link to="/about" className="hover:text-white transition duration-200">About</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">Resources</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Github size={16} />
              <a
                href="https://github.com/Dollypee48/SlimPress.git"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-200"
              >
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-2">
              <ImageIcon size={16} />
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-200"
              >
                Unsplash
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Info size={16} />
              <Link to="/about" className="hover:text-white transition duration-200">
                Learn More
              </Link>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="border-t border-gray-800 text-center text-xs text-gray-500 py-4 px-6">
        © {new Date().getFullYear()} <span className="font-medium text-white">SlimPress</span>. All rights reserved.
      </div>
    </footer>
  );
}
