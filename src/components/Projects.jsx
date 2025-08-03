// components/Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Expense Tracker',
      description: 'An expense tracker is an application to keep record of all your income and expenses.',
      category: 'web',
      link: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A task management application with drag and drop functionality.',
      category: 'app',
      link: '#',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern portfolio website with dark mode and animations.',
      category: 'web',
      link: '#',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current and forecasted weather.',
      category: 'app',
      link: '#',
    },
    {
      id: 5,
      title: 'Brainwave',
      description: 'Brainwave is a conversational web application powered by advanced natural language processing.',
      category: 'web',
      link: '#',
    },
    {
      id: 6,
      title: 'Fitness Guidance',
      description: 'A fitness guidance application with workout plans.',
      category: 'web',
      link: '#',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-700 mx-auto"></div>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            <Button 
              onClick={() => setFilter('all')} 
              className={`${filter === 'all' ? 'bg-gradient-to-r from-blue-600 to-indigo-700' : 'bg-gray-300 dark:bg-gray-700'} text-white`}
            >
              All
            </Button>
            <Button 
              onClick={() => setFilter('web')} 
              className={`${filter === 'web' ? 'bg-gradient-to-r from-blue-600 to-indigo-700' : 'bg-gray-300 dark:bg-gray-700'} text-white`}
            >
              Web
            </Button>
            <Button 
              onClick={() => setFilter('app')} 
              className={`${filter === 'app' ? 'bg-gradient-to-r from-blue-600 to-indigo-700' : 'bg-gray-300 dark:bg-gray-700'} text-white`}
            >
              App
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-700 flex items-center justify-center">
                <span className="text-5xl font-bold text-white/80">{project.title.charAt(0)}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <Button>
                  View Project
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;