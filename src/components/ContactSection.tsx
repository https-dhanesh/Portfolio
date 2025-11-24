"use client";

import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { useForm } from "react-hook-form";
import { AnimatedInput } from "@/components/AnimatedInput";
import toast from "react-hot-toast";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const orbVariants: Variants = {
  animate: {
    scale: [1, 1.15, 1],
    rotate: [0, 360],
    transition: {
      duration: 18,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success("Message sent!");
  };

  return (
    <section
      id="contact"
      className="w-full py-20 lg:py-32 bg-slate-900 border-t border-slate-700"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="relative flex justify-center items-center">

            <motion.div
              variants={orbVariants}
              animate="animate"
              className="
                w-72 h-72 md:w-80 md:h-80 
                rounded-full 
                bg-gradient-to-br from-red-600 via-red-700 to-red-700 
                blur-3xl opacity-40
                absolute
              "
            />

            <motion.div
              className="
                relative z-10 p-10 
                bg-slate-800/40 backdrop-blur-xl 
                border border-slate-700 
                rounded-2xl shadow-2xl
                max-w-sm text-center
              "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Let’s Work Together 🤝
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Whether you have a project idea, collaboration request, or
                just want to say hello — I’m always open to conversations.
              </p>

              <p className="mt-4 text-gray-400 text-sm">
                I usually respond within 24 hours.
              </p>
            </motion.div>
          </div>

          <motion.form
            className="space-y-6 relative z-10"
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedInput
                label="First Name"
                name="firstName"
                placeholder="Dhanesh"
                register={register("firstName", {
                  required: "First name is required",
                })}
                error={errors.firstName}
                isDirty={dirtyFields.firstName}
              />
              <AnimatedInput
                label="Last Name"
                name="lastName"
                placeholder="Shingade"
                register={register("lastName")}
              />
            </div>

            <AnimatedInput
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              register={register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              error={errors.email}
              isDirty={dirtyFields.email}
            />

            <AnimatedInput
              label="Message"
              name="message"
              placeholder="Your message..."
              isTextarea={true}
              register={register("message", {
                required: "Message is required",
              })}
              error={errors.message}
              isDirty={dirtyFields.message}
            />

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 shadow-lg"
              >
                Send Message
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
