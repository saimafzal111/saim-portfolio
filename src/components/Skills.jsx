import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { 
      name: 'HTML', 
      level: 95, 
      icon: 'fab fa-html5',
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'CSS', 
      level: 90, 
      icon: 'fab fa-css3-alt',
      color: 'from-blue-400 to-blue-600'
    },
    { 
      name: 'JavaScript', 
      level: 85, 
      icon: 'fab fa-js-square',
      color: 'from-yellow-400 to-yellow-600'
    },
    { 
      name: 'React.js', 
      level: 80, 
      icon: 'fab fa-react',
      color: 'from-cyan-400 to-blue-500'
    },
    { 
      name: 'Tailwind CSS', 
      level: 85, 
      icon: 'fas fa-paint-brush',
      color: 'from-teal-400 to-cyan-500'
    },
    { 
      name: 'Bootstrap', 
      level: 75, 
      icon: 'fab fa-bootstrap',
      color: 'from-purple-500 to-indigo-600'
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-700 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies I specialize in and my proficiency levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mr-4`}>
                  <i className={`${skill.icon} text-white text-xl`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">{skill.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Proficiency</p>
                </div>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Level</span>
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="text-sm font-bold text-blue-600 dark:text-blue-400"
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                  >
                    <motion.div 
                      className="absolute right-0 top-0 w-3 h-3 rounded-full bg-white shadow-md"
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(255,255,255,0.4)",
                          "0 0 0 10px rgba(255,255,255,0)",
                          "0 0 0 0 rgba(255,255,255,0)"
                        ]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        repeatType: "loop",
                        delay: index * 0.1 + 1
                      }}
                    />
                  </motion.div>
                </div>
              </div>
              
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1 + i * 0.1 + 0.5 
                    }}
                    className={`w-4 h-4 rounded-full mx-1 ${
                      i < Math.floor(skill.level / 20) 
                        ? 'bg-gradient-to-r ' + skill.color 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Always learning new technologies to expand my skillset
          </p>
          <div className="flex justify-center space-x-4">
            <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
              <i className="fas fa-code mr-2"></i>Frontend Development
            </div>
            <div className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium">
              <i className="fas fa-mobile-alt mr-2"></i>Responsive Design
            </div>
            <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
              <i className="fas fa-palette mr-2"></i>UI/UX
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;