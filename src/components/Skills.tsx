import React from 'react';

const Skills = () => {
  const skills = [
    'JavaScript (ES6+)', 'Node.js', 'React.js', 'Express', 'Mongoose', 'Redux',
    'Tailwind CSS', 'Bootstrap', 'MySQL', 'MongoDB', 'Java'
  ];

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-8 gradient-text">My Core Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-4 py-2 bg-purple-800 rounded-full text-sm transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-purple-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;