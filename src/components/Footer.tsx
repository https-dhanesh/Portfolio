"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="border-t border-slate-700 bg-slate-900"
    >
      <div className="container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-20">

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Dhanesh Shingade
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Developer focused on crafting smooth digital experiences with modern
            web technologies, performance-driven interfaces, and clean UI design.
          </p>

          <div className="flex gap-3 mt-5">
            <Link href="mailto:shingadedhanesh1234@gmail.com">
              <Button variant="secondary" className="bg-red-600 hover:bg-red-700">
                <FaEnvelope className="mr-2" /> Email Me
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="#about" className="hover:text-red-500 transition">About</Link></li>
            <li><Link href="#projects" className="hover:text-red-500 transition">Projects</Link></li>
            <li><Link href="#skills" className="hover:text-red-500 transition">Skills</Link></li>
            <li><Link href="#achievements" className="hover:text-red-500 transition">Achievements</Link></li>
            <li><Link href="#contact" className="hover:text-red-500 transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Web App Development</li>
            <li>Frontend UI/UX Development</li>
            <li>Mobile App Development</li>
            <li>API Integration</li>
            <li>Scalability and Pipelining of Applications</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 ">Connect</h4>

          <div className="flex space-x-3 mb-5">
            <Link href="https://github.com/https-dhanesh" target="_blank">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500 hover:bg-slate-800">
                <FaGithub className="h-5 w-5" />
              </Button>
            </Link>

            <Link href="https://linkedin.com/in/dhanesh-shingade-57954124b" target="_blank">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500 hover:bg-slate-800">
                <FaLinkedin className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          <p className="text-gray-400 text-sm">
            Pune, Maharashtra, India
          </p>
        </div>
      </div>

      <div className="border-t border-slate-700 py-5">
        <div className="container mx-auto px-6 flex justify-between items-center">

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Dhanesh Shingade. All rights reserved.
          </p>

          <motion.a
            href="#hero"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-red-500"
          >
            <FaArrowUp className="h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
