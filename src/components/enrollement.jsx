import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CourseEnrollmentForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    education: "",
    experience: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Enrollment submitted!");
  };

  return (
    <section className="bg-slate-100 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-8">
          Course Enrollment
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-900"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-900"
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-900"
          />

          <select
            name="course"
            onChange={handleChange}
            required
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-900"
          >
            <option value="">Select Course</option>
            <option>Robotics</option>
            <option>Web Development</option>
            <option>Data Science</option>
            <option>UI/UX Design</option>
            <option>Digital Literacy</option>
          </select>

          <input
            type="text"
            name="education"
            placeholder="Highest Level of Education"
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-900"
          />

          <textarea
            name="experience"
            rows="4"
            placeholder="Do you have any prior experience?"
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-900"
          />

          <button className="bg-blue-950 text-white py-3 rounded-lg text-lg hover:opacity-90 transition">
            Enroll Now
          </button>
        </form>
      </motion.div>
    </section>
  );
}
