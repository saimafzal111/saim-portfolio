import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Government Graduate College Samundri, Faisalabad',
      period: '2022...',
      description: 'Graduated with honors. Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems.',
    },
    {
      id: 2,
      degree: 'Frontend Development Bootcamp',
      institution: 'Spark IT institute',
      period: '2024',
      description: 'Intensive 12-week program focused on modern frontend technologies including React, JavaScript, and CSS frameworks.',
    },
    {
      id: 3,
      degree: 'Freelancing Certification',
      institution: 'Online Platform (DigiSkills)',
      period: '2021',
      description: 'Learn essential skills to start your freelancing career and earn online independently.',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-700 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-indigo-700"></div>
            
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`mb-12 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                <div className="md:w-1/2 px-4 md:px-8">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">{edu.institution}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{edu.period}</p>
                    <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                  </div>
                </div>
                
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 border-4 border-white dark:border-gray-800 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;