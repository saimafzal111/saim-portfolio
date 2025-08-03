// components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from "../assets/about-img.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-700 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* <span className="text-8xl font-bold text-white/80">S</span> */}
                  <img className='h-[100%] w-[100%] object-cover' src={aboutImg} alt="About Image" />
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 md:pl-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">I'm a Frontend Developer</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a passionate frontend developer with a keen eye for design and a love for creating intuitive, user-friendly web experiences. With expertise in React, JavaScript, and modern CSS frameworks, I build responsive and performant applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My journey in web development started a few years ago, and since then, I've worked on various projects, from small business websites to complex web applications. I'm always eager to learn new technologies and improve my skills.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Name:</p>
                <p className="text-gray-700 dark:text-gray-300">Saim</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Email:</p>
                <p className="text-gray-700 dark:text-gray-300">saim@example.com</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Location:</p>
                <p className="text-gray-700 dark:text-gray-300">Punjab, Pakistan</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Status:</p>
                <p className="text-gray-700 dark:text-gray-300">Available</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;