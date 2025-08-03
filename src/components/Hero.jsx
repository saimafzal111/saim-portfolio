// components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import profileImg from "../assets/profile.avif";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-700/10 dark:from-blue-900/20 dark:to-indigo-900/20"></div>
      
      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 mt-5">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Saim</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Frontend Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              I create stunning, responsive, and user-friendly web applications using modern technologies.
            </p>
            <div className="flex space-x-4">
              <Button>
                <a href="#projects">View Projects</a>
              </Button>
              <Button className="bg-transparent border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-700/20 absolute -top-4 -right-4"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-700/20 absolute -bottom-4 -left-4"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-700 opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img className='h-full w-full object-cover rounded-full' src={profileImg} alt="Profile Img" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
