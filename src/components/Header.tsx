import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 px-6 flex justify-between items-center relative z-50">
      <h1 className="text-2xl font-bold gradient-text">Vivek Kumar</h1>
      <nav className={`fixed top-0 left-0 bottom-0 flex flex-col justify-center bg-[#1e1e3a] w-64 p-8 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:flex md:flex-row md:space-x-6 md:w-auto md:p-0 md:bg-transparent md:translate-x-0`}>
        <Link to="/" className="hover:text-purple-400 transition-colors py-2 md:py-0" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <a href="#about" className="hover:text-purple-400 transition-colors py-2 md:py-0" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#skills" className="hover:text-purple-400 transition-colors py-2 md:py-0" onClick={() => setIsMenuOpen(false)}>Skills</a>
        <a href="#projects" className="hover:text-purple-400 transition-colors py-2 md:py-0" onClick={() => setIsMenuOpen(false)}>Projects</a>
        <Link to="/blog" className="hover:text-purple-400 transition-colors py-2 md:py-0" onClick={() => setIsMenuOpen(false)}>Blog</Link>
        <a href="#contact" className="hover:text-purple-400 transition-colors py-2 md:py-0" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </nav>
      <button className="md:hidden z-50 focus:outline-none" onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden" 
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;