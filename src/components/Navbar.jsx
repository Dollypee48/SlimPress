import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Compress", path: "/compress" },
    { label: "About", path: "/about" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white dark:bg-slate-900 shadow-md fixed top-0 left-0 w-full z-50 transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        <Link to="/" className="text-2xl font-bold text-violet-700 dark:text-violet-400">
          Slim<span className="text-slate-800 dark:text-slate-100">Press</span>
        </Link>

       
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`hover:text-violet-600 dark:hover:text-violet-400 font-medium transition ${
                location.pathname === path
                  ? "text-violet-600 dark:text-violet-400"
                  : "text-slate-700 dark:text-slate-200"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 dark:text-slate-200">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden px-4 pt-4 pb-2 space-y-3 bg-white dark:bg-slate-900 shadow-sm"
        >
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`block text-base font-medium hover:text-violet-600 dark:hover:text-violet-400 transition ${
                location.pathname === path
                  ? "text-violet-600 dark:text-violet-400"
                  : "text-slate-700 dark:text-slate-200"
              }`}
            >
              {label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
