import React from 'react';
import { Code, Database, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      icon: <Code size={24} />,
      skills: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Redux']
    },
    {
      name: 'Backend',
      icon: <Server size={24} />,
      skills: ['Node.js', 'Express', 'Java']
    },
    {
      name: 'Database',
      icon: <Database size={24} />,
      skills: ['MongoDB', 'MySQL', 'Mongoose']
    }
  ];

  const techIcons = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: <Code size={24} /> },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Express', icon: '🚂' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'HTML5', icon: '🟧' },
    { name: 'CSS3', icon: '🟦' },
    { name: 'Git', icon: '🐙' },
  ];

  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold mb-8 gradient-text">My Skill Set</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="bg-purple-900 bg-opacity-20 p-3 rounded-full">
                {category.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-purple-800 bg-opacity-50 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 border-4 border-purple-600 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 border-4 border-pink-600 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              MERN
            </div>
          </div>
          {techIcons.map((tech, index) => (
            <div
              key={index}
              className="absolute w-12 h-12 bg-purple-800 bg-opacity-50 rounded-full flex items-center justify-center text-2xl cursor-pointer transform transition-all duration-300 hover:scale-110 hover:bg-opacity-80"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 1}s infinite alternate ease-in-out`,
              }}
              title={tech.name}
            >
              {tech.icon}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4 gradient-text">Additional Skills</h3>
        <div className="flex flex-wrap gap-4">
          {['Bootstrap', 'Git', 'RESTful APIs', 'GraphQL', 'Webpack', 'Jest'].map((skill, index) => (
            <span key={index} className="px-4 py-2 bg-purple-800 bg-opacity-50 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
