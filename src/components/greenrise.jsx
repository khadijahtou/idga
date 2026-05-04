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

function Greenrise() {
  return (
    <section className="bg-white text-gray-700">
      {/* HERO */}
      <div className="relative bg-[url('/greenrise.jpeg')] bg-cover bg-center h-80 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative text-center px-4">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Green Rising
          </h3>
          <p className="text-white/90 text-xl md:text-2xl font-medium">
            Empowering the next generation of climate leaders.
          </p>
        </div>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="max-w-6xl mx-auto px-6 py-14 space-y-14">
        {/* INTRO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            What is Green Rising?
          </h2>
          <p className="text-lg leading-relaxed">
            The Green Rising Initiative is a youth-led movement under Ideas &
            Data Global Academy, in partnership with Generation Unlimited (GenU)
            and UNICEF...
          </p>
        </motion.div>

        {/* MISSION / VISION */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.img
            src={about}
            className="rounded-xl shadow-md"
            variants={fadeUp}
          />

          <motion.div variants={fadeUp} custom={1}>
            <h4 className="text-2xl font-semibold mb-4">
              OUR MISSION & VISION
            </h4>

            <p className="mb-4 text-lg leading-relaxed">
              <span className="font-semibold">Mission:</span> Green Rising is
              dedicated to empowering the next generation of climate leaders...
            </p>

            <p className="text-lg leading-relaxed">
              <span className="font-semibold">Vision:</span> To create a
              community of environmentally-conscious young Nigerians...
            </p>
          </motion.div>
        </motion.div>

        {/* PILLARS + PROGRAMS + IMPACT + JOIN */}
        <motion.div
          className="space-y-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            {
              title: "Our Pillar",
              content: "Green Rising operates on three foundational pillars...",
            },
            {
              title: "Our Programs",
              content: "Green Rising offers various programs...",
            },
            {
              title: "IMPACT",
              content:
                "Since its inception, Green Rising has made significant strides...",
            },
            {
              title: "JOIN US",
              content:
                "We welcome everyone to join the Green Rising movement...",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              className="bg-slate-50 border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-lg leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* TEAM */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
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
                <img src={member.img} className="h-72 w-full object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-lg">{member.name}</h4>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PARTNERS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold mb-4">PARTNERS</h3>
          <p className="text-lg mb-4">
            We are proud to partner with global organizations...
          </p>

          <ul className="space-y-2 list-disc pl-5 text-lg">
            <li>Generation Unlimited (GenU)</li>
            <li>UNICEF</li>
            <li>White Heart Development Initiative</li>
            <li>Friends Of The Community Initiative</li>
            <li>Mufarka Youth Development Initiative</li>
            <li>LUMILAB</li>
            <li>Al-huda Health and Youth Development Organization</li>
            <li>
              Network for Environmental Safety and Society Development
              Organizational
            </li>
            <li>Humanity Kindness and Peace Initiative</li>
            <li>Panacea Foundation</li>
            <li>RESCUE THE WOMEN FOUNDATION</li>
            <li>Kano State Children’s Parliament</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Greenrise;
