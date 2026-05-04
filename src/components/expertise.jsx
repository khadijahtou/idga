import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

function Expertise() {
  return (
    <section className="relative min-h-screen w-full bg-[url('/cta_bg.jpg')] bg-cover bg-center flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-950/80 via-blue-900/70 to-blue-950/80" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col gap-8 text-center px-6 max-w-3xl"
      >
        {/* Heading */}
        <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Need Expert Data Science Solutions for Your Organization?
        </h3>

        {/* Buttons */}
        <div className="flex flex-row  gap-4 items-center justify-center">
          {/* Primary Button */}
          <Link to="/enrollment">
            <button
              className="bg-white text-blue-950 font-semibold hover:bg-slate-100
              focus:ring-2 focus:ring-white/40 focus:outline-none
              py-3 px-6 rounded-md transition duration-300 shadow-md hover:scale-105"
            >
              Enroll in a Course
            </button>
          </Link>

          {/* Secondary Button */}
          <Link to="/consultation">
            <button
              className="bg-transparent border border-white text-white font-semibold
              hover:bg-white hover:text-blue-950
              focus:ring-2 focus:ring-white/40 focus:outline-none
              py-3 px-6 rounded-md transition duration-300 hover:scale-105"
            >
              Request a Consultation
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default Expertise;
