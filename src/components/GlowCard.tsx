"use client";
import React, { MouseEventHandler } from "react";
import { motion } from "framer-motion";

export const GlowCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  
  const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      onMouseMove={onMouseMove}
      className={`
        relative h-full bg-slate-800 border-slate-700 rounded-xl shadow-lg
        overflow-hidden py-10
        
        ${className}

        before:absolute before:-inset-px before:rounded-xl
        before:opacity-0 
        before:transition-opacity before:duration-300

        before:bg-[radial-gradient(400px_at_var(--mouse-x)_var(--mouse-y),rgba(239,68,68,0.2),transparent_80%)]
        
        hover:before:opacity-100
      `}
    >
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};