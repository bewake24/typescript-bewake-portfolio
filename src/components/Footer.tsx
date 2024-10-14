import { Link } from "react-router-dom";
import { twitterURL, youtubeURL, linkedinURL } from "../assets";
import { Youtube, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-purple-900 bg-opacity-20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/credits" className=" text-md text-purple-400 ease-in-out transform hover:scale-110" >Credits</Link>
          <p>&copy; {year} Vivek Kumar. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href={youtubeURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <Youtube size={24} />
            </a>
            <a
              href={linkedinURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://instagram.com/bewake24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <Instagram size={24} />
            </a>
            <a
              href={twitterURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
