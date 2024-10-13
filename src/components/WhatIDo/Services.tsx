import React, { useState } from "react";
import { motion } from "framer-motion";
import services from "../../assets/data/Services";

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 gap-6 md:gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="bg-purple-900 bg-opacity-20 p-6 rounded-lg text-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: hoveredIndex === index ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-center items-center">
              {service.icon}
            </div>
          </motion.div>
          <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
          <p className="text-sm text-gray-300">{service.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Services;
