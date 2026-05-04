import React from "react";
import { motion } from "framer-motion";
import outreach from "../assets/outreach.jpeg";
import outreach2 from "../assets/outreach2.jpeg";
import outreach3 from "../assets/outreach3.jpeg";
import outreach4 from "../assets/outreach4.jpeg";

function Sanitation() {
  return (
    <section className="pb-20 overflow-x-hidden">
      {/* HERO */}
      <div className="bg-[url('/outreachbg.jpeg')] bg-cover bg-center relative h-80 sm:h-95 md:h-112.5 w-full flex items-center justify-center px-4 text-center">
        <div className="absolute inset-0 bg-blue-950/80" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-4xl"
        >
          <h3 className="text-xl sm:text-2xl md:text-4xl text-white font-bold leading-snug">
            Ideas and Data Global Academy & Lumiclimate Leads Community
            Sanitation and Hygiene Sensitization Outreach in Katsina
          </h3>
          <p className="text-white mt-3 text-sm sm:text-base">
            February 15, 2026
          </p>
        </motion.div>
      </div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 md:px-0 mt-12 text-slate-700 text-base sm:text-lg leading-7 sm:leading-8 space-y-6"
      >
        <p>
          Ideas and Data Global Academy (IDGA) in partnership with Lumiclimate,
          has on Saturday carried out a one-day community sanitation and hygiene
          sensitization outreach in Kasuwar Tsaitsaye, Katsina Town, as part of
          its ongoing commitment to sustainable community development and public
          health promotion.
        </p>

        <p>
          The outreach was designed to strengthen community well-being while
          advancing the United Nations Sustainable Development Goals (SDGs),
          specifically SDG 3 (Good Health and Well-Being), SDG 6 (Clean Water
          and Sanitation), and SDG 13 (Climate Action).
        </p>

        <motion.img
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          src={outreach}
          alt=""
          className="w-full rounded-xl shadow-md"
        />

        <p>
          The outreach adopted a dual-impact approach. First, the team carried
          out hands-on sanitation activities, ensuring a cleaner and healthier
          market environment for traders, residents, and visitors. Second and
          more critically, embedded sustainability by sensitizing the community
          through hygiene talks and engaging directly with community leadership
          to promote ownership, behavioral change, and long-term adherence to
          best practices.
        </p>

        <p>
          The leadership of Kasuwar Tsaitsaye commended the initiative,
          acknowledging the relevance of community-driven approaches in
          addressing preventable health and environmental challenges.
        </p>

        <blockquote className="border-l-4 border-blue-950 pl-4 italic text-slate-800">
          “Sanitizing communities is important, but sensitizing people is what
          sustains impact. When communities understand why hygiene matters, they
          become partners in protecting their own health and environment.”
        </blockquote>

        <motion.img
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          src={outreach2}
          alt=""
          className="w-full rounded-xl shadow-md"
        />

        <p>
          This outreach reflects IDGA’s broader mission to translate ideas and
          innovation into practical, grassroots-level solutions that empower
          communities and strengthen resilience against public health and
          environmental risks.
        </p>

        <p>
          Ideas and Data Global Academy remains committed to scaling similar
          interventions across communities, reinforcing the belief that
          sustainable development begins where people live, trade, and interact
          daily.
        </p>

        <p>
          Ideas and Data Global Academy remains committed to scaling similar
          interventions across communities, reinforcing the belief that
          sustainable development begins where people live, trade, and interact
          daily.
        </p>

        <h5 className="text-lg sm:text-xl font-semibold text-blue-950">
          Photography: Ibrahim Habibu Matazu
        </h5>
      </motion.div>

      {/* GALLERY */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0 mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {[outreach, outreach2, outreach3, outreach4].map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Outreach gallery"
            className="w-full h-105 object-cover rounded-xl shadow-md hover:scale-[1.03] transition duration-300"
          />
        ))}
      </motion.div>
    </section>
  );
}

export default Sanitation;
