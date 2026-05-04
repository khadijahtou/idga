import React, { useState } from "react";
import { motion } from "framer-motion";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail("");

      setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-md p-6 md:p-10 max-w-xl mx-auto"
    >
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-blue-950 mb-3 text-center"
      >
        Subscribe to our Newsletter
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-600 text-center mb-6"
      >
        Get updates on programs, events, and opportunities from IDGA.
      </motion.p>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={loading}
          className="bg-blue-950 text-white px-6 py-3 rounded-md hover:bg-blue-900 transition disabled:opacity-60"
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </motion.button>
      </motion.form>

      {/* Success message */}
      {success && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1 }}
          className="text-green-600 text-center mt-4 font-medium"
        >
          Successfully subscribed 🎉
        </motion.p>
      )}
    </motion.div>
  );
}

export default NewsletterForm;
