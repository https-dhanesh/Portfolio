"use client";
import { useState, useEffect } from "react"; 
import { motion, AnimatePresence } from "framer-motion";

const stackLayers = [
  "Crafting Interactive User Experiences",
  "Engineering Scalable, High-Performance APIs",
  "Optimizing Data & Queries",
  "Automating Infrastructure & Deployments"
];

const slideVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const FlippingText = () => {
  const [index, setIndex] = useState(0);
  const isHovered = true;

  useEffect(() => {
    const interval = setInterval(() => {
      if (isHovered) {
        setIndex((prev) => (prev + 1) % stackLayers.length);
      }
    }, 3000);

    return () => clearInterval(interval); 
  }, [isHovered]);

  return (
    <div className="relative h-12 w-full max-w-2xl mx-auto cursor-pointer flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={isHovered ? stackLayers[index] : "default"}
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute w-full lg:mt-4"
        >
          {isHovered ? (
            <span className="text-lg md:text-2xl text-red-500 max-w-2xl mx-auto italic">
              {stackLayers[index]}
            </span>
          ) : (
            <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto italic">
              Full-Stack Developer & DevOps Enthusiast
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FlippingText;
