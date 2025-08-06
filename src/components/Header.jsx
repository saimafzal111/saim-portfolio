// components/Header.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent"
        >
          Saim
        </motion.div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <Button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full shadow bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <i className="fas fa-sun text-yellow-400" title="Switch to Light Mode"></i>
            ) : (
              <i className="fas fa-moon text-gray-800 dark:text-gray-200" title="Switch to Dark Mode"></i>
            )}
          </Button>
          
          {/* Mobile Menu Button */}
          <Button 
            onClick={toggleMenu} 
            className="md:hidden p-2 rounded-full shadow bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle Mobile Menu"
          >
            {isOpen ? (
              <FaTimes className='text-gray-800 dark:text-gray-200 text-2xl' />
            ) : (
              <FaBars className='text-gray-800 dark:text-gray-200 text-2xl' />
            )}
          </Button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden fixed top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg z-40"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center py-6 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;