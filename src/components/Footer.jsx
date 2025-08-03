import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white py-10 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Saim</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Frontend Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            {['github', 'linkedin', 'twitter', 'instagram'].map((icon) => (
              <a
                key={icon}
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors text-2xl"
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Saim. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
