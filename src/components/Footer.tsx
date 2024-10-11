import React from 'react';
import { Youtube, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-900 bg-opacity-20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Vivek Kumar. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://youtube.com/vivekkumar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-all duration-300 ease-in-out transform hover:scale-110">
              <Youtube size={24} />
            </a>
            <a href="https://instagram.com/vivekdev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-all duration-300 ease-in-out transform hover:scale-110">
              <Instagram size={24} />
            </a>
            <a href="https://twitter.com/vivekdev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-all duration-300 ease-in-out transform hover:scale-110">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;