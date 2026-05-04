import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ConsultationForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Consultation request sent!");
  };

  return (
    <section className="bg-slate-50 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-3">
          Book a Consultation
        </h2>

        <p className="text-slate-600 mb-8">
          Book a consultation with IDGA to design and implement impactful
          technology, STEM, and digital literacy programs in your school or
          community.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-6">
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
              className="border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          {/* Phone & Date */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
              className="border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            />

            <input
              type="date"
              name="date"
              onChange={handleChange}
              required
              className="border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          {/* Consultation Type */}
          <select
            name="service"
            onChange={handleChange}
            required
            className="border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
          >
            <option value="">Area of Consultation</option>
            <option>STEM / Robotics Program Setup for Schools</option>
            <option>Digital Skills & ICT Training for Students</option>
            <option>Teacher Training on Emerging Technologies</option>
            <option>School Tech Lab Setup & Equipment Advisory</option>
            <option>Community Sanitation & Hygiene Tech Outreach</option>
            <option>Green Rising / Climate-Tech Program Partnership</option>
            <option>Youth Empowerment & Digital Literacy Programs</option>
            <option>Curriculum Development for Tech Education</option>
            <option>NGO / Government Tech Partnership</option>
            <option>General Inquiry</option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            placeholder="Tell us more about your needs..."
            onChange={handleChange}
            className="border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
          />

          {/* Button */}
          <button className="bg-blue-950 text-white py-3 rounded-lg text-lg hover:opacity-90 transition">
            Submit Request
          </button>
        </form>
      </motion.div>
    </section>
  );
}
