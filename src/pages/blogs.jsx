import React from "react";
import { motion } from "framer-motion";
import summit from "../assets/summit.jpeg";
import outreach from "../assets/outreach.jpeg";
import robotics from "../assets/robotics.jpeg";
import { Link } from "react-router";

const blogs = [
  {
    img: summit,
    tag: "Summit",
    date: "December 28, 2024",
    title: "IDGA Impact Summit 2024: celebrating Impact, Inspiring Growth",
    link: "/summit",
  },
  {
    img: outreach,
    tag: "Summit",
    date: "December 28, 2024",
    title:
      "IDGA & Lumicilicate Leads Community Sanitation and Hygiene Sensitization Outreach in Katsina",
    link: "/sanitation",
  },
  {
    img: robotics,
    tag: "Summit",
    date: "September 9, 2024",
    title: "IDGA Robotics Training for Youth in Kano State",
    link: "/robotics",
  },
];

function Blogs() {
  return (
    <section className="bg-white py-20">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-4 mb-12 px-4"
      >
        <div className="h-0.5 w-16 bg-blue-950"></div>
        <span className="text-2xl md:text-3xl font-bold text-blue-950 text-center tracking-widest">
          LATEST BLOGS AND INSIGHTS
        </span>
        <div className="h-0.5 w-16 bg-blue-950"></div>
      </motion.div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={blog.img}
                alt=""
                className="w-full h-64 object-cover transition duration-500 hover:scale-110"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col gap-3">
              <h4 className="text-sm text-gray-500 flex gap-3">
                {blog.tag} <span>•</span> {blog.date}
              </h4>

              <Link
                to={blog.link}
                className="text-blue-950 font-semibold text-lg leading-snug hover:underline"
              >
                {blog.title}
              </Link>

              <Link to={blog.link}>
                <button
                  className="mt-2 border border-gray-300 text-gray-600 px-4 py-2 rounded-md
                  hover:bg-blue-950 hover:text-white transition duration-300"
                >
                  Read More
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
