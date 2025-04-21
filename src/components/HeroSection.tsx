import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="py-20 text-center">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Fast-track your idea to reality
      </motion.h1>
      
      <motion.p 
        className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Let AI instantly transform your vision into executable code.
      </motion.p>
    </section>
  );
}