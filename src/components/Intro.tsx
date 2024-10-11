import React, { useState } from 'react';
import { Download, Play, X } from 'lucide-react';

const Intro = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="py-20 text-center relative">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
        Hi, I'm <span className="gradient-text">Vivek Kumar!</span> 👋
      </h1>
      <h2 className="text-2xl md:text-3xl mb-8 animate-fade-in-up">Full Stack Developer & Content Creator</h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto animate-fade-in">
        Fullstack Web developer from India specializing in creating efficient, responsive, scalable, and secure web solutions for businesses
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href="http://www.google.com"
          className="gradient-bg px-6 py-3 rounded-full flex items-center space-x-2 hover:opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <Download size={20} />
          <span>Download CV</span>
        </a>
        <button
          onClick={() => setShowVideo(true)}
          className="bg-white text-[#1e1e3a] px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <Play size={20} />
          <span>Play Intro</span>
        </button>
      </div>

      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 animate-fade-in">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/RVbvhPGFi6E?si=LIgffVwftqk4w6th&autoplay=1"
                title="Vivek Kumar Intro"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Intro;