import React, { useState } from "react";
import { motion } from "framer-motion";
import api from "../api/axios";

export default function CourseEnrollmentForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
    country: "",
    state: "",
    organization: "",
    program: "",
    experienceLevel: "Beginner",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setSuccess("");
      setError("");

      const response = await api.post("/enrollments", {
        ...form,
        age: form.age ? Number(form.age) : undefined,
      });

      setSuccess(
        response.data.message ||
          "Enrollment submitted successfully. We will contact you shortly.",
      );

      setForm({
        fullName: "",
        email: "",
        phone: "",
        gender: "",
        age: "",
        country: "",
        state: "",
        organization: "",
        program: "",
        experienceLevel: "Beginner",
        message: "",
      });
    } catch (error) {
      console.error("Failed to submit enrollment:", error);

      setError(
        error.response?.data?.message ||
          "Unable to submit enrollment. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-100 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10"
      >
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-950 mb-3">
            Course Enrollment
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Join an IDGA program and develop practical skills for the future.
            Complete the form below to begin your enrollment.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6">
          {/* SUCCESS MESSAGE */}
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4">
              {success}
            </div>
          )}

          {/* ERROR MESSAGE */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4">
              {error}
            </div>
          )}

          {/* FULL NAME + EMAIL */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Full Name *
              </label>

              <input
                type="text"
                name="fullName"
                value={form.fullName}
                placeholder="Full Name"
                onChange={handleChange}
                required
                className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address *
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                placeholder="Email Address"
                onChange={handleChange}
                required
                className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
          </div>

          {/* PHONE + AGE */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number *
              </label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                placeholder="Phone Number"
                onChange={handleChange}
                required
                className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Age
              </label>

              <input
                type="number"
                name="age"
                value={form.age}
                min="10"
                max="100"
                placeholder="Age"
                onChange={handleChange}
                className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
          </div>

          {/* GENDER + COUNTRY */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Gender
              </label>

              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Country *
              </label>

              <input
                type="text"
                name="country"
                value={form.country}
                placeholder="Country"
                onChange={handleChange}
                required
                className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
          </div>

          {/* STATE + ORGANIZATION */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                State
              </label>

              <input
                type="text"
                name="state"
                value={form.state}
                placeholder="State / Province"
                onChange={handleChange}
                className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Organization
              </label>

              <input
                type="text"
                name="organization"
                value={form.organization}
                placeholder="School, Company, or Organization"
                onChange={handleChange}
                className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
          </div>

          {/* PROGRAM */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Select Program *
            </label>

            <select
              name="program"
              value={form.program}
              onChange={handleChange}
              required
              className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            >
              <option value="">Select Course</option>
              <option value="AI & Data Science">AI & Data Science</option>
              <option value="Robotics">Robotics</option>
              <option value="Web Development">Web Development</option>
              <option value="Digital Literacy">Digital Literacy</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Internet of Things (IoT)">
                Internet of Things (IoT)
              </option>
              <option value="Graphics Design">Graphics Design</option>
              <option value="Entrepreneurship">Entrepreneurship</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* EXPERIENCE LEVEL */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Experience Level
            </label>

            <select
              name="experienceLevel"
              value={form.experienceLevel}
              onChange={handleChange}
              className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Tell Us About Yourself *
            </label>

            <textarea
              name="message"
              value={form.message}
              rows="5"
              placeholder="Tell us about your interests, goals, or previous experience..."
              onChange={handleChange}
              required
              className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 resize-none"
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-950 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Enroll Now"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
