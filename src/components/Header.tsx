import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="sticky top-0 py-4 px-6 bg-background flex justify-between items-center shadow-lg z-50">
      <h1 className="text-2xl font-bold gradient-text">Vivek Kumar</h1>

      {/* Desktop Menu */}
      <nav className="hidden md:flex md:space-x-6">
        <Link to="/" className="hover:text-purple-400 transition-colors">
          Home
        </Link>
        <a href="#about" className="hover:text-purple-400 transition-colors">
          About
        </a>
        <a href="#skills" className="hover:text-purple-400 transition-colors">
          Skills
        </a>
        <a href="#projects" className="hover:text-purple-400 transition-colors">
          Projects
        </a>
        <Link to="/blog" className="hover:text-purple-400 transition-colors">
          Blog
        </Link>
        <a href="#contact" className="hover:text-purple-400 transition-colors">
          Contact
        </a>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button className="z-50 focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            <nav
              className={`fixed top-0 left-0 bottom-0 flex flex-col justify-center bg-[#1e1e3a] w-64 p-8 transition-transform duration-300 ease-in-out transform ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <Link
                to="/"
                className="hover:text-purple-400 transition-colors py-2"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <a
                href="#about"
                className="hover:text-purple-400 transition-colors py-2"
                onClick={handleLinkClick}
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-purple-400 transition-colors py-2"
                onClick={handleLinkClick}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-purple-400 transition-colors py-2"
                onClick={handleLinkClick}
              >
                Projects
              </a>
              <Link
                to="/blog"
                className="hover:text-purple-400 transition-colors py-2"
                onClick={handleLinkClick}
              >
                Blog
              </Link>
              <a
                href="#contact"
                className="hover:text-purple-400 transition-colors py-2"
                onClick={handleLinkClick}
              >
                Contact
              </a>
            </nav>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;




