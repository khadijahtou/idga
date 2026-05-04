import React from "react";
import { motion } from "framer-motion";
import about from "../assets/about.jpeg";

function About() {
  return (
    <section className="bg-white text-gray-700 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 md:px-6">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src={about}
            alt="About us"
            className="object-cover h-full w-full"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          {/* Section Title */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="h-0.5 w-12 bg-blue-950"></div>
            <span className="text-blue-950 tracking-widest text-2xl md:text-3xl font-bold">
              ABOUT US
            </span>
            <div className="h-0.5 w-12 bg-blue-950"></div>
          </div>

          {/* Heading */}
          <h3 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Empowering youth through affordable tech education!
          </h3>

          {/* Paragraphs */}
          <p className="text-[16px] leading-relaxed">
            Ideas & Data Global Academy is a leading institution dedicated to
            nurturing data science talent and driving positive societal impact.
            We offer comprehensive training programs, certifications, and
            consulting services to equip individuals and organizations with the
            skills needed to thrive in the data-driven world.
          </p>

          <p className="text-[16px] leading-relaxed">
            Our commitment to sustainable development is reflected in our focus
            on achieving <span className="font-semibold">SDGs 4 and 13.</span>{" "}
            We strive to provide accessible and inclusive education to foster a
            skilled workforce and promote climate action.
          </p>

          <p className="text-[16px] leading-relaxed">
            IDGA is proud to be implementing the Green Rising Initiative{" "}
            <span className="font-semibold">
              by UNICEF’s Generation Unlimited
            </span>{" "}
            in Katsina, Kano, and Jigawa States. This initiative aims to empower
            young people with the knowledge and skills necessary to address
            climate change and build sustainable communities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
