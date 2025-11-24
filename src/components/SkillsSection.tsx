"use client";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillCategories } from "@/data/skills";
import { motion, Variants } from 'framer-motion';
import { GlowCard } from "@/components/GlowCard"; 
import { SkillBadge } from "@/components/SkillBadge";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" }
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full py-20 lg:py-32 bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.h2 
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          My Technical Skills
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <GlowCard>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <SkillBadge key={skill} skill={skill} />
                    ))}
                  </div>
                </CardContent>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;