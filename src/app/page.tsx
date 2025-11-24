"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { AnimatedSection } from "@/components/AnimatedSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ScrambleText from "@/components/HeroSection/ScrambleText";
import FlippingText from "@/components/HeroSection/FlippingText";
import HoldToDownloadButton from "@/components/HeroSection/HoldToDownload";
import AchievementsSection from "@/components/AchievementsSection";

export default function Home() {

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };
  return (
    <main>
      <section id="hero"
        className="min-h-screen flex items-center justify-center bg-slate-900 py-20 lg:py-0 relative overflow-hidden hero-spotlight"
        onMouseMove={handleMouseMove}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-10">

          <motion.div
            className="text-center md:text-left px-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              <span className="text-red-500">
                <ScrambleText text="Hello, I'm" />
              </span>
              <br />
              <ScrambleText text="Dhanesh Shingade" />
            </h1>
            <FlippingText />

            <p className="text-md md:text-lg text-gray-400 mt-4 max-w-xl">
              I build high-performance, scalable web applications and enjoy automating the infrastructure they run on.
            </p>

            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link href="/#contact">Contact Me</Link>
              </Button>
              <HoldToDownloadButton />
            </div>

            <div className="mt-12 flex justify-center md:justify-start gap-4">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href="https://github.com/https-dhanesh" target="_blank" className="text-gray-400 hover:text-red-500 transition-colors">
                  <FaGithub className="h-8 w-8" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.2, rotate: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href="https://linkedin.com/in/dhanesh-shingade-57954124b" target="_blank" className="text-gray-400 hover:text-red-500 transition-colors">
                  <FaLinkedin className="h-8 w-8" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          >
            <div
              className="
                relative 
                w-80 h-80 md:w-96 md:h-96 
                rounded-full 
                border-4 border-red-500 
                bg-slate-800
                group 
              "
            >
              <Image
                src="/Passport photo.jpg"
                alt="Dhanesh Shingade"
                width={400}
                height={400}
                className="
                    w-full h-full 
                    object-cover 
                    rounded-full 
                    p-2 
                    transition-all duration-500 
                    group-hover:opacity-5
                    group-hover:blur-sm
                  "
              />

              <div
                className="
                  absolute inset-0 
                  flex items-center justify-center 
                  p-8 text-center 
                  opacity-0 group-hover:opacity-100 
                  transition-opacity duration-500
                "
              >
                <div className="text-white">
                  <h4 className="font-bold text-red-500 text-sm uppercase tracking-widest mb-4">
                    CHARACTER STATS
                  </h4>
                  <p className="text-md text-gray-200 text-left font-mono tracking-tighter">
                    Problem Solving: 10/10<br />
                    Adaptability: 10/10<br />
                    Bugs Squashed: 1000+<br />
                    Teamwork: 9/10<br />
                    Curiosity: 10/10<br />
                    Code Quality: (OCD-level)<br />
                    Coffee Intake: 11/10
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatedSection>
        <section className="w-full py-20 lg:py-32  border-t border-slate-700">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ExperienceSection />
            <EducationSection />
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <ProjectsSection />
      </AnimatedSection>

      <AnimatedSection>
        <SkillsSection />
      </AnimatedSection>

      <AnimatedSection>
        <AchievementsSection />
      </AnimatedSection>

      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
    </main>
  );
}