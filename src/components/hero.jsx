import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-175 w-full bg-[url(/hero.jpeg)] bg-cover bg-center relative">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 via-blue-900/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center px-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl text-white flex flex-col leading-tight"
        >
          <span className="font-semibold tracking-wide">IDEAS AND DATA</span>
          <span className="font-black tracking-tight">GLOBAL ACADEMY</span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-lg text-white/90 mt-5 max-w-xl leading-relaxed"
        >
          Empowering the next generation of innovators and leaders.
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;
