import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, className = '', ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-4 py-3 font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-700 
                  rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 
                  dark:from-blue-500 dark:to-indigo-600 
                  ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
