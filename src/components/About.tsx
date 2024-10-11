import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold mb-8 gradient-text">About Me</h2>
      <div className="space-y-6">
        <p>
          I'm a <strong>Full Stack Developer</strong> with a passion for building scalable web applications and a knack for problem-solving. With expertise in <strong>MERN Stack (MongoDB, Express, React, Node.js)</strong>, <strong>Java</strong>, and database management, I create robust solutions that meet client needs. In addition to freelancing, I create content on platforms like <strong>YouTube</strong>, <strong>Twitter</strong>, and <strong>Instagram</strong>, sharing my journey and insights about full-stack development.
        </p>
        <p>
          As a full-stack developer with 4 years of freelancing experience, I have successfully completed over 7 projects, delivering high-quality, tailored web applications. I focus on solving complex challenges using the MERN stack, and my curiosity drives me to explore new development techniques. Alongside coding, I create content around unique technical solutions, helping others learn and grow in their development journey.
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">What I Do:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Frontend Development:</strong> Crafting clean, responsive, and visually appealing interfaces using <strong>React</strong>, <strong>Tailwind</strong>, <strong>Bootstrap</strong>, and modern JavaScript frameworks.</li>
          <li><strong>Backend Development:</strong> Building efficient APIs and handling server-side logic using <strong>Node.js</strong>, <strong>Express</strong>, and <strong>Mongoose</strong>.</li>
          <li><strong>Database Management:</strong> Proficient in <strong>MySQL</strong> and <strong>MongoDB</strong>, ensuring smooth data operations for both relational and NoSQL databases.</li>
          <li><strong>Devops:</strong> Helping clients bring their ideas to life by delivering high-quality, customized web solutions.</li>
        </ul>
      </div>
    </section>
  );
};

export default About;