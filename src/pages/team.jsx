import React from "react";
import { motion } from "framer-motion";

import about from "../assets/about.jpeg";
import mshehu from "../assets/mshehu.jpeg";
import yusuf from "../assets/yusuf.png";
import ibrahim from "../assets/ibrahim.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function Team() {
  return (
    <section className="bg-white text-gray-700 p-2 md:p-6">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h3 className="text-3xl font-semibold mb-6">MEET THE TEAM</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: mshehu, name: "Mustapha Shehu", role: "Team Lead" },
            { img: yusuf, name: "Yusuf Umar Usman", role: "Admin Lead" },
            { img: ibrahim, name: "Ibrahim Hamisu", role: "Technical Lead" },
          ].map((member, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="bg-white border rounded-xl shadow-sm overflow-hidden"
            >
              <img
                src={member.img}
                className="h-90 md:h-80 w-full object-fill p-2"
              />
              <div className="p-4">
                <h4 className="font-semibold text-lg">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Team;
