import React from "react";
import { motion } from "framer-motion";
import impact from "../assets/impact.jpeg";
import impactSummit from "../assets/impactSummit.jpeg";

function Summit() {
  return (
    <section className="pb-20 overflow-x-hidden">
      {/* HERO */}
      <div className="bg-[url('/summitbg.jpeg')] bg-cover bg-center relative h-80 sm:h-95 md:h-112.5 w-full flex items-center justify-center px-4 text-center">
        <div className="absolute inset-0 bg-blue-950/80" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-4xl"
        >
          <h3 className="text-xl sm:text-2xl md:text-4xl text-white font-bold leading-snug">
            IDGA Impact Summit 2024: Celebrating Impact, Inspiring Growth
          </h3>
          <p className="text-white mt-3 text-sm sm:text-base">
            December 28, 2024
          </p>
        </motion.div>
      </div>

      {/* ARTICLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 md:px-0 mt-12 text-slate-700 text-base sm:text-lg leading-7 sm:leading-8 space-y-6"
      >
        <p>
          On Saturday, 28th December 2024, Ideas and Data Global Academy (IDGA)
          hosted the Impact Summit 2024, bringing together changemakers,
          leaders, and innovators committed to sustainable development.
        </p>

        <p>
          Held at Tahir Guest Palace, Kano, the summit showcased success stories
          from programs including SDGs Advocacy, Leadership, Skills for Life,
          Photography, and Green Rising Initiative.
        </p>

        <motion.img
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          src={impact}
          alt="Impact Summit event"
          className="w-full rounded-xl shadow-md"
        />

        <h5 className="text-lg sm:text-xl font-semibold text-blue-950">
          Highlights from the Summit
        </h5>

        <p>
          The event opened with a powerful ceremony led by Ibrahim Hamisu,
          followed by a keynote address by Mustapha Shehu on leadership and
          sustainable community building.
        </p>

        <p>
          Participants also engaged in poetry, skills showcases, and leadership
          sessions that emphasized creativity as a tool for advocacy.
        </p>

        <h5 className="text-lg sm:text-xl font-semibold text-blue-950">
          Collaboration & Dialogue
        </h5>

        <p>
          A panel session moderated by Auwal Rafindadi featured discussions on
          connecting changemakers, collaboration, and innovation.
        </p>

        <motion.img
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          src={impactSummit}
          alt="Panel discussion"
          className="w-full rounded-xl shadow-md"
        />

        <h5 className="text-lg sm:text-xl font-semibold text-blue-950">
          Impact & Takeaways
        </h5>

        <p>
          The summit highlighted the power of youth-led initiatives in driving
          sustainable development and creating lasting community impact.
        </p>

        <p>
          Participants left inspired, equipped with skills and motivation to
          drive change in their communities.
        </p>

        <h5 className="text-lg sm:text-xl font-semibold text-blue-950">
          Looking Ahead
        </h5>

        <p>
          IDGA continues its commitment to building the next generation of
          changemakers through innovation, education, and leadership training.
        </p>

        <h6 className="text-slate-500 font-medium pt-6">
          Published by: Ideas and Data Global Academy
        </h6>
      </motion.div>
    </section>
  );
}

export default Summit;
