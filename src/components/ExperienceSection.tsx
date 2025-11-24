"use client";

import { experienceData } from "@/data/experience";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

const containerVariantsExp: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariantsExp: Variants = {
  hidden: { opacity: 0, x: -40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <motion.h2
        className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-16 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Experience & Leadership
      </motion.h2>

      <motion.div
        className="relative space-y-14 px-4 md:px-6 container mx-auto"
        variants={containerVariantsExp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="absolute left-3.5 top-5 w-0.5 h-full bg-gradient-to-b from-red-500 to-slate-700"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        {experienceData.map((exp, i) => {
          const isActive = activeIndex === i;

          return (
            <motion.div
              key={i}
              className="relative pl-12 group cursor-pointer outline-none"
              variants={itemVariantsExp}
              tabIndex={0}
              onFocus={() => setActiveIndex(i)}
              onBlur={() => setActiveIndex(null)}
              onTouchStart={() => setActiveIndex(i)}
              onTouchEnd={() => setActiveIndex(null)}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <motion.div
                className="absolute left-0 top-2 w-7 h-7 bg-red-500 rounded-full border-4 border-slate-900 shadow-lg"
                animate={
                  isActive
                    ? { scale: 1.2, boxShadow: "0 0 12px rgba(255,0,0,0.7)" }
                    : { scale: 1, boxShadow: "0 0 3px rgba(0,0,0,0.4)" }
                }
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="
                  p-6 rounded-xl 
                  bg-slate-800/40 backdrop-blur-lg 
                  border border-slate-700 
                  transition-all
                "
                animate={
                  isActive
                    ? { scale: 1.02, y: -4 }
                    : { scale: 1, y: 0 }
                }
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="text-sm font-semibold text-red-400">{exp.date}</p>
                <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
                <p className="text-md font-medium text-gray-300">{exp.organization}</p>
                <p className="text-gray-400 mt-2 leading-relaxed">{exp.description}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
