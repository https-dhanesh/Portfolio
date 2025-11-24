"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { motion, Variants } from "framer-motion";
import { projectData } from "@/data/projects";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full py-20 lg:py-32 bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectData.map((project) => (
            <motion.div key={project.title} variants={itemVariants} whileHover={{ scale: 1.03, rotate: 0.3 }} whileTap={{ scale: 0.97, rotate: -0.3 }}>
              <Card
                className="flex flex-col h-full bg-slate-800 border-slate-700 text-gray-200 shadow-lg overflow-hidden group relative"
              >
                <div className="relative h-48 w-full">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                  />

                  <div className="lg:hidden absolute bottom-2 right-2 flex gap-2 z-20">
                    {project.liveUrl && (
                      <Button size="sm" asChild className="bg-red-600 hover:bg-red-700">
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <LuExternalLink className="mr-1 h-4 w-4" /> Live
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="secondary" asChild>
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-slate-800">
                          <FaGithub className="mr-1 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    )}
                  </div>

                  <div className="absolute inset-0 bg-black/70 items-center justify-center hidden lg:flex opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <Button
                          asChild
                          className="bg-red-600 hover:bg-red-700 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out delay-100"
                        >
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            View Project <LuExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          asChild
                          variant="secondary"
                          className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out delay-150"
                        >
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-slate-800">
                            Source Code <FaGithub className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">{project.title}</CardTitle>
                  <CardDescription className="pt-2 text-gray-400">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <motion.div
                        key={tech}
                        className="rounded-full inline-block"
                        whileHover={{
                          scale: 1.08,
                          y: -2,
                          boxShadow: "0px 0px 10px rgba(255, 0, 0, 0.5)"
                        }}
                        whileTap={{ scale: 0.92 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-slate-700  text-gray-300 cursor-pointer select-none"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>

              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
