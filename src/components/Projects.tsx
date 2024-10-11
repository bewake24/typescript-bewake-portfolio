import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'E-commerce Platform', description: 'A full-stack e-commerce solution built with MERN stack.' },
    { title: 'Task Management App', description: 'A React-based task management application with real-time updates.' },
    { title: 'Portfolio Website', description: 'A responsive portfolio website built with React and Tailwind CSS.' },
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8 gradient-text">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-purple-900 bg-opacity-20 p-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-800 hover:bg-opacity-30"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;