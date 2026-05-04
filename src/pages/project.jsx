import React from "react";
import { motion } from "framer-motion";
import projectImage from "../assets/project.jpeg";
import { Link } from "react-router";

function Project() {
  return (
    <section className="bg-blue-950 py-16 px-4 md:px-10">
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-white mb-10"
      >
        Latest Projects
      </motion.h3>

      {/* Center container */}
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="bg-white w-full max-w-5xl rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="relative h-96 overflow-hidden group">
            {/* Image */}
            <img
              src={projectImage}
              alt="project"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay (more premium now) */}
            <div
              className="absolute inset-0 bg-linear-to-t from-blue-950/95 via-blue-900/70 to-transparent
                         flex flex-col justify-end p-8
                         opacity-0 group-hover:opacity-100 transition duration-500"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold text-white">Green Rising</h3>

                <p className="text-white/90 text-[16px] max-w-xl leading-relaxed">
                  Through Green Rising, Ideas & Data Global Academy aims to
                  address environmental challenges and create a sustainable
                  future.
                </p>

                <Link to="/greenrise">
                  <button
                    className="border border-white text-white rounded-full px-6 py-2
                    hover:bg-white hover:text-blue-950 transition duration-300 h-12 w-46 font-medium"
                  >
                    READ MORE
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Project;
