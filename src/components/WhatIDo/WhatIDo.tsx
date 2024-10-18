import React from "react";
import { motion } from "framer-motion";
import { whatsAppURL } from "../../assets/index";
import Services from "./Services";
import Socials from "./Socials";

const WhatIDo: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 gradient-text">What I do</h2>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-y-16 md:gap-x-16 lg:gap-x-32">
          {/* 2x2 grid */}
          <Services />

          {/* Right Grid */}
          <div className="flex flex-col justify-between">
            <div className="text-left">
              <h2 className="text-4xl font-bold max-w-[500px] mb-4">
                Just a curious developer who keeps experimenting around the
                ideas in his mind.
              </h2>
              <p className="text-lg text-gray-300 max-w-[500px] mb-8">
                Exploring new technologies, and building creative solutions to
                solve real-world challenges while continuously learning and
                growing
              </p>

              <a href={whatsAppURL} target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="gradient-bg px-6 py-3 rounded-full text-white font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </a>
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg mb-4">Follow Me</p>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
