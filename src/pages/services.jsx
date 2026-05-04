import React from "react";
import { motion } from "framer-motion";

import MnE from "../assets/m&e.png";
import certifications from "../assets/certification.jpeg";
import robotics from "../assets/robotics.jpeg";
import research from "../assets/research.png";
import climate from "../assets/climate.jpeg";
import ai from "../assets/ai.png";

const services = [
  {
    img: MnE,
    title: "M&E Training",
    text: "Offer comprehensive training programs on monitoring and evaluation (M&E) techniques, equipping individuals and organizations with the skills to effectively measure the impact of their projects and initiatives.",
  },
  {
    img: certifications,
    title: "Certifications",
    text: "Provide industry-recognized certifications in data science, data analytics, and related fields. Our certifications validate your skills and expertise, making you stand out in the job market and opening doors to new opportunities.",
  },
  {
    img: robotics,
    title: "Robotics",
    text: "Offer training and consulting services related to robotics and automation. Our experts can help you integrate these technologies into your operations, improving efficiency, productivity, and safety.",
  },
  {
    img: research,
    title: "Research and Development",
    text: "Engage in cutting-edge research and development projects to stay at the forefront of data science and technology.",
  },
  {
    img: climate,
    title: "Climate Change",
    text: "Focus on training and research related to climate change and sustainability, equipping individuals with knowledge for environmental impact.",
  },
  {
    img: ai,
    title: "AI and Machine Learning",
    text: "Offer training and consulting services in artificial intelligence (AI) and machine learning to build intelligent systems and insights.",
  },
];

function Services() {
  return (
    <section className="bg-slate-50 py-20 px-4 text-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-4 mb-6"
      >
        <div className="h-0.5 w-16 bg-blue-950"></div>
        <span className="text-blue-950 tracking-widest text-3xl font-bold">
          SERVICES
        </span>
        <div className="h-0.5 w-16 bg-blue-950"></div>
      </motion.div>

      <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-10">
        What We Do
      </h3>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover transition duration-500 hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-lg font-bold text-blue-950">{item.title}</h3>

              <p className="text-gray-600 text-[15px] leading-relaxed">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
