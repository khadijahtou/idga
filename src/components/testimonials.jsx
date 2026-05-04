import React from "react";
import { User, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

function Testimonials() {
  return (
    <section className="bg-linear-to-b from-slate-50 to-white py-28">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="h-0.5 w-16 bg-blue-950"></div>
          <span className="text-blue-950 tracking-[0.3em] text-2xl md:text-3xl font-bold">
            TESTIMONIALS
          </span>
          <div className="h-0.5 w-16 bg-blue-950"></div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold text-gray-900 mb-20 leading-tight"
        >
          Hear From Our Happy Clients: Their Stories
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -8 }}
          viewport={{ once: true }}
          className="relative bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                     rounded-2xl pt-24 pb-16 px-10 border border-slate-100"
        >
          {/* Avatar */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2">
            <div className="w-32 h-32 rounded-full border-[6px] border-white shadow-lg bg-white flex items-center justify-center">
              <User size={60} className="text-slate-700" />
            </div>
          </div>

          {/* Name */}
          <h3 className="text-xl font-bold text-gray-900 mt-4">Musa Halliru</h3>
          <p className="text-gray-500 mb-4">Impact Summit 2024</p>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className="text-orange-500 fill-orange-500"
              />
            ))}
          </div>

          {/* Text */}
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-lg">
            The IDGA Annual Impact Summit, 2024 is full of inspiration and
            meaningful knowledge sessions. We are truly grateful for attending
            such a gigantic event.
          </p>

          {/* Quote */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-80">
            <Quote size={80} className="text-orange-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
