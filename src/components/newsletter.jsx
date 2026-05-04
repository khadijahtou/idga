import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

function Newsletter() {
  return (
    <section className="bg-white py-16 px-4 flex items-center justify-center">
      {/* Container */}
      <div className="relative w-full max-w-5xl h-105 sm:h-120 md:h-130 rounded-xl overflow-hidden bg-[url('/newsletter_bg.jpg')] bg-cover bg-center flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-950/70" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col gap-6 text-center p-6 sm:p-8 max-w-2xl"
        >
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-snug">
            Subscribe to Our Newsletter
          </h3>

          <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
            Renovation projects can range from minor upgrades, like repainting
            or installing new fixtures.
          </p>

          <motion.div
            whileTap={{ scale: 0.95 }}
            className="flex justify-center"
          >
            <Link to="/newsletterform">
              <button className="bg-white text-blue-950 hover:bg-blue-100 active:bg-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none py-3 px-6 text-base sm:text-lg font-semibold rounded-md transition duration-300">
                Sign Up With Your Email
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Newsletter;
