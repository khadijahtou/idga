import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import api from "../api/axios";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestBlogs();
  }, []);

  const fetchLatestBlogs = async () => {
    try {
      const response = await api.get(
        "/content?type=blog&status=published&limit=3",
      );

      setBlogs(response.data.content || []);
    } catch (error) {
      console.error("Failed to fetch latest blogs:", error);
    } finally {
      setLoading(false);
    }
  };

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

      {/* Loading */}
      {loading && (
        <div className="text-center">
          <p className="text-gray-500">Loading latest blogs...</p>
        </div>
      )}

      {/* Empty State */}
      {!loading && blogs.length === 0 && (
        <div className="text-center">
          <p className="text-gray-500">No blogs available at the moment.</p>
        </div>
      )}

      {/* GRID */}
      {!loading && blogs.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={blog.heroImage}
                  alt={blog.title}
                  className="w-full h-64 object-cover transition duration-500 hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col gap-3">
                <h4 className="text-sm text-gray-500 flex gap-3">
                  {blog.category || "Insights"}
                  <span>•</span>
                  {new Date(blog.createdAt).toLocaleDateString()}
                </h4>

                <Link
                  to={`/blogs/${blog.slug}`}
                  className="text-blue-950 font-semibold text-lg leading-snug hover:underline"
                >
                  {blog.title}
                </Link>

                <Link
                  to={`/blogs/${blog.slug}`}
                  className="mt-2 inline-block border border-gray-300 text-gray-600 px-4 py-2 rounded-md
                  hover:bg-blue-950 hover:text-white transition duration-300 text-center"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Blogs;
