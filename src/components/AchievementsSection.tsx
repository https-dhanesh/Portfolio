"use client";

import { motion , AnimatePresence} from "framer-motion";
import Image from "next/image";
import { useState } from "react";


type Achievement = {
title: string;
desc: string;
image: string;
};


const achievements: Achievement[] = [
    {
        title: "MSBTE State Level Technical Quiz Competition - Winner",
        desc: "This certificate of merit was awarded for winning the First Prize in a State Level Technical Quiz Competition amongst teams from 30 colleges.",
        image: "/certificates/Quiz Competition.jpg",
    },
    {
        title: "Full Stack Development Internship in Java ",
        desc: "This certificate for given for completion of Full Stack Development Internship in Java , where I developed Java-based modules to optimize internal workflows, improving team efficiency.",
        image: "/certificates/Internship.png",
    },
    {
        title: "Resource Person - Hands-on Java Programming Workshop",
        desc: "This certificate was given for contribution as resource Person for a Hands-on Java Programming Workshop conducted for first-year students.",
        image: "/certificates/Java Workshop.png",
    },
    {
        title: "Technical Lead - ITESA (2025-26)",
        desc: "This certificate is given for serving as Technical Lead at ITESA , where I am responsible for conducting various technical activities throughout the year , leading a tech-enthusiastic team of junior , converting ideas into reality with technical aspects.",
        image: "/certificates/ITESA-TECH_LEAD.jpg",
    },
    {
        title: "Cloud Coordinator - GDGC DYPCOE ( 2024-25)",
        desc: "This role typically involved contributing to community initiatives, events, and workshops focused on Google Cloud Platform (GCP) technologies.",
        image: "/certificates/GDGC CERT.jpg",
    },
    {
        title: "NPTEL Data Base Management System (DBMS) Certification",
        desc: "An 8-week course on Data Base Management System (DBMS) with a consolidated score of 65% (Elite). The course covers the foundational theoretical and practical principles of designing and using database systems.",
        image: "/certificates/NPTEL.png",
    },
];


const AchievementsSection = () => {
    const [selectedImage, setSelectedImage] = useState<Achievement | null>(null);
    return (
        <section
            id="achievements"
            className="w-full bg-slate-900 py-20 lg:py-32 border-t border-slate-700"
        >
            <div className="container mx-auto px-4 md:px-6">
                <motion.h2
                    className="text-3xl font-bold text-white tracking-tighter sm:text-5xl text-center mb-14"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    Achievements & Certifications
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {achievements.map((card, i) => (
                        <motion.div
                            key={i}
                            className="
                bg-slate-800/40 
                backdrop-blur-xl 
                border border-slate-700 
                rounded-2xl 
                shadow-xl 
                overflow-hidden 
                hover:shadow-red-500/20 
                transition-all 
                duration-300
              "
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.3 }}
                        >
                                <>
                                    <div className="w-full h-48 relative" onClick={() => setSelectedImage(card)}>
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="p-5">
                                        <h3 className="text-lg font-semibold text-white">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm mt-2">
                                            {card.desc}
                                        </p>
                                    </div>
                                </>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-[9999] p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-4xl w-full"
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="z-1 absolute -top-10 right-0 text-white text-3xl hover:text-red-400 transition"
                            >
                                ✕
                            </button>

                            <div className="relative w-full  h-[60vh] sm:h-[70vh] rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
                                <Image
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <div className="mt-5 bg-slate-800/40 p-5 rounded-xl border border-slate-700">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {selectedImage.title}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {selectedImage.desc}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default AchievementsSection;
