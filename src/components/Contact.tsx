import React from 'react';
import { Mail, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-8 gradient-text">Contact Me</h2>
      <p className="mb-6">If you'd like to work with me or just want to say hi, feel free to reach out!</p>
      <div className="space-y-4">
        <a href="mailto:vivek@valeff.com" className="flex items-center space-x-2 text-purple-400 hover:underline transition-all duration-300 ease-in-out transform hover:translate-x-2">
          <Mail size={20} />
          <span>vivek@valeff.com</span>
        </a>
        <a href="https://twitter.com/bewake24" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-purple-400 hover:underline transition-all duration-300 ease-in-out transform hover:translate-x-2">
          <Twitter size={20} />
          <span>@bewake24</span>
        </a>
        <a href="https://linkedin.com/in/bewake24" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-purple-400 hover:underline transition-all duration-300 ease-in-out transform hover:translate-x-2">
          <Linkedin size={20} />
          <span>@bewake24</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;