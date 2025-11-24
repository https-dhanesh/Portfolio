"use client"; 

import Link from 'next/link';
import { useState } from 'react';
import { IoClose, IoMenu } from "react-icons/io5";
import { motion } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [

    { name: 'Projects', href: '/#projects' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Education', href: '/#education' },
    { name: 'Achievements', href: '/#achievements' },
  ];

  return (
    <motion.header 
      className="bg-slate-900 border-b border-gray-800 sticky top-0 z-50 shadow-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        <Link href="/" className="text-white text-2xl font-bold flex items-center ml-8">
          <span className="text-red-500 mr-2">{"<"}</span>
          Portfolio
          <span className="text-red-500 ml-2">{"/>"}</span>
        </Link>

        <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-red-500 transition-colors text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/#contact" passHref>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
              Let's Talk
            </button>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-800 border-t border-gray-700 shadow-lg pb-4">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-gray-300 hover:text-red-500 transition-colors text-xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/#contact" passHref>
              <button 
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;