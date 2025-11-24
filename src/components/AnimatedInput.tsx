"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { FaCheck, FaExclamation } from "react-icons/fa";

type AnimatedInputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  isTextarea?: boolean;
  register: UseFormRegisterReturn;
  error?: FieldError;
  isDirty?: boolean;
};

const wiggleVariants: Variants = {
  calm: {
    x: 0,
    transition: { duration: 0.4, ease: "easeInOut" }
  },
  wiggle: {
    x: [0, -5, 5, -5, 5, 0],
    transition: { duration: 0.4, ease: "easeInOut" }
  }
};

export const AnimatedInput = ({
  label, name, type = "text", placeholder, isTextarea = false, register, error, isDirty
}: AnimatedInputProps) => {

  const isValid = !error && isDirty;

  return (
    <motion.div 
      className="space-y-2 relative"
      variants={wiggleVariants}
      animate={error ? "wiggle" : "calm"}
    >
      <Label htmlFor={name} className="text-gray-300">
        {label}
      </Label>
      
      {isTextarea ? (
        <Textarea
          id={name}
          placeholder={placeholder}
          className={`
            bg-slate-800 border-2 text-white
            ${error ? 'border-red-500' : isValid ? 'border-green-500' : 'border-slate-700'}
          `}
          {...register}
        />
      ) : (
        <Input
          id={name}
          type={type}
          placeholder={placeholder}
          className={`
            bg-slate-800 border-2 text-white
            ${error ? 'border-red-500' : isValid ? 'border-green-500' : 'border-slate-700'}
          `}
          {...register}
        />
      )}

      <AnimatePresence>
        {isValid && (
          <motion.div 
            className="absolute right-3 top-[38px] text-green-500"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <FaCheck />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {error && (
          <motion.p
            className="text-red-500 text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {error.message}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};