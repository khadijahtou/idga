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
      <div className="bg-[url('/roboticsbg.jpeg')] bg-cover bg-center relative h-80 sm:h-96 md:h-112.5 w-full flex items-center justify-center px-4 text-center">
        <div className="absolute inset-0 bg-blue-900/70" />

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
          <h4 className="text-white mt-3 text-sm sm:text-base">
            September 9, 2024
          </h4>
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
          engaging robotics training for youth aged 15 to 17 in Kano State. This
          initiative is part of the Academy’s commitment to fostering skills in
          emerging technologies among young minds, providing them with the tools
          and knowledge to thrive in the digital age.
        </p>

        <p>
          The training program, which took place in Kano State, introduced
          participants to the fundamentals of robotics. With hands-on activities
          and practical projects, the young learners were able to build,
          program, and control robots, gaining invaluable experience in
          problem-solving, teamwork, and critical thinking.
        </p>

        <p>
          The course instructors at IDGA designed the curriculum to ensure that
          it was not only educational but also fun and interactive. Students
          explored the world of robotics through the construction of their own
          functional robot models, using cutting-edge technology and guided by
          expert trainers.
        </p>

        <motion.img
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          src={robotics}
          alt=""
          className="w-full rounded-xl shadow-md"
        />

        <p>
          The Academy’s focus on nurturing young talent aligns with its broader
          mission to empower the youth of Nigeria, especially in Kano State,
          with the skills necessary for the future of work. By giving these
          teens early exposure to robotics, the training aims to spark an
          interest in technology and engineering, potentially guiding them
          toward careers in STEM (Science, Technology, Engineering, and
          Mathematics).
        </p>

        <h5 className="text-lg sm:text-xl font-semibold text-blue-950">
          A Step Towards the Future
        </h5>

        <p>
          The Kano robotics training is part of the Green Rising Initiative,
          which emphasizes the role of technology in solving global challenges,
          such as climate change. Robotics plays a crucial role in environmental
          monitoring, disaster response, and green technologies, making it a key
          element in the Academy’s broader sustainability goals.
        </p>

        <p>
          As the world increasingly shifts towards automation and artificial
          intelligence, IDGA continues to lead efforts in preparing Nigerian
          youth to participate in the global digital economy. This training is
          only the beginning, with more planned programs aimed at increasing
          access to digital learning, connectivity, and innovation.
        </p>

        <p>
          Stay tuned for more updates on our upcoming programs and initiatives
          as we continue to transform young lives through education and
          technology.
        </p>
      </motion.div>

      {/* GALLERY */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0 mt-14 grid grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {[robotics1, robotics2, robotics3, robotics4, robotics5, robotics6].map(
          (img, i) => (
            <motion.img
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              src={img}
              alt=""
              className="w-full h-55 object-cover rounded-xl shadow-md"
            />
          ),
        )}
      </motion.div>
    </section>
  );
}

export default Robotics;
