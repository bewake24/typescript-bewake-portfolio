import { linkedinURL } from "../assets/index";
import { RiDownload2Fill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import avatar01 from "../assets/images/avatar01.webp";

const Intro = () => {
  return (
    <section className="pt-20 text-center relative">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
        Hi, I'm <span className="gradient-text">Vivek Kumar!</span> 👋
      </h1>
      <h2 className="text-2xl md:text-3xl mb-8 animate-fade-in-up">
        Full Stack Developer & Content Creator
      </h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto animate-fade-in">
        Fullstack Web developer from India specializing in creating efficient,
        responsive, scalable, and secure web solutions for businesses
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href="http://www.google.com"
          className="gradient-bg px-6 py-3 rounded-full flex items-center space-x-2 hover:opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <RiDownload2Fill size={20} />
          <span>Download CV</span>
        </a>
        <a
          href={linkedinURL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#1e1e3a] px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaLinkedinIn size={20} />
          <span>Hire Me</span>
        </a>
      </div>

      <div className="flex justify-center  mt-8 md:mt-16">
        <div className="relative p-1 md:p-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600">
          <img
            src={avatar01}
            alt="My ai avatar working on a laptop"
            className="rounded-xl w-full max-w-[900px] h-auto object-cover aspect-[16/7]"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
