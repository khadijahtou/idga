import React from "react";
import { motion } from "framer-motion";
import robotics from "../assets/robotics.jpeg";
import robotics1 from "../assets/robotics1.jpeg";
import robotics2 from "../assets/robotics2.jpeg";
import robotics3 from "../assets/robotics3.jpeg";
import robotics4 from "../assets/robotics4.jpeg";
import robotics5 from "../assets/robotics5.jpeg";
import robotics6 from "../assets/robotics6.jpeg";

function Robotics() {
  return (
    <section className="pb-20 overflow-x-hidden">
      {/* HERO */}
      <div className="bg-[url('/roboticsbg.jpeg')] bg-cover bg-center relative h-80 sm:h-95 md:h-112.5 w-full flex items-center justify-center px-4 text-center">
        <div className="absolute inset-0 bg-blue-950/75" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-4xl"
        >
          <h3 className="text-xl sm:text-2xl md:text-4xl text-white font-bold leading-snug">
            Ideas & Data Global Academy Conducts Robotics Training for Youth in
            Kano State
          </h3>
          <p className="text-white mt-3 text-sm sm:text-base">
            September 9, 2024
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
          In a bold step towards shaping the future of technology-driven
          innovation, Ideas & Data Global Academy (IDGA) recently conducted an
          engaging robotics training for youth aged 15 to 17 in Kano State.
        </p>

        <p>
          The training introduced participants to the fundamentals of robotics
          through hands-on projects where they built, programmed, and controlled
          robots while developing teamwork and problem-solving skills.
        </p>

        <motion.img
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          src={robotics}
          alt="Robotics training session"
          className="w-full rounded-xl shadow-md"
        />

        <p>
          The curriculum was intentionally interactive and practical, allowing
          students to construct functional robot models under expert guidance.
        </p>

        <p>
          Early exposure to robotics aims to spark long-term interest in STEM
          careers and prepare youth for the future of work.
        </p>

        <h5 className="text-lg sm:text-xl font-semibold text-blue-950 mt-10">
          A Step Towards the Future
        </h5>

        <p>
          This training forms part of the Green Rising Initiative, highlighting
          the role of robotics and technology in environmental monitoring,
          disaster response, and sustainable innovation.
        </p>

        <p>
          IDGA continues to prepare Nigerian youth for participation in the
          global digital economy through accessible and impactful tech
          education.
        </p>
      </motion.div>

      {/* GALLERY */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0 mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {[robotics1, robotics2, robotics3, robotics4, robotics5, robotics6].map(
          (img, i) => (
            <motion.img
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              src={img}
              alt="Robotics gallery"
              className="w-full h-55 object-cover rounded-xl shadow-md"
            />
          ),
        )}
      </motion.div>
    </section>
  );
}

export default Robotics;
