import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../api/axios";

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError("");

      const params = new URLSearchParams();

      params.append("type", "blog");
      params.append("status", "published");
      params.append("sort", "newest");

      if (search.trim()) {
        params.append("search", search.trim());
      }

      if (category) {
        params.append("category", category);
      }

      const response = await api.get(`/content?${params.toString()}`);

      const fetchedBlogs = response.data.content || [];

      setBlogs(fetchedBlogs);

      // Get unique categories from returned blogs
      const allCategories = fetchedBlogs.flatMap((blog) => blog.category || []);

      setCategories([...new Set(allCategories)]);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);

      setError(
        error.response?.data?.message ||
          "Unable to load blogs. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  // Fetch when search or category changes
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      fetchBlogs();
    }, 400);

    return () => clearTimeout(delaySearch);
  }, [search, category]);

  return (
    <main className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-blue-950 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-5"
          >
            Blogs & Insights
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/80 max-w-2xl mx-auto text-lg"
          >
            Explore our latest stories, insights, ideas, and updates.
          </motion.p>
        </div>
      </section>

      {/* SEARCH + CATEGORY */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row gap-4">
          {/* SEARCH */}
          <div className="flex-1">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search blogs by title..."
              className="w-full border border-gray-300 rounded-lg px-5 py-3
              outline-none focus:ring-2 focus:ring-blue-950"
            />
          </div>

          {/* CATEGORY */}
          <div className="md:w-64">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-5 py-3
              outline-none focus:ring-2 focus:ring-blue-950 bg-white"
            >
              <option value="">All Categories</option>

              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        {/* LOADING */}
        {loading && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Loading blogs...</p>
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="text-center py-20">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* EMPTY */}
        {!loading && !error && blogs.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-blue-950 mb-2">
              No blogs found
            </h3>

            <p className="text-gray-500">
              Try searching for a different title or category.
            </p>
          </div>
        )}

        {/* BLOG GRID */}
        {!loading && !error && blogs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-md
                border border-slate-100"
              >
                {/* IMAGE */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={blog.heroImage?.url}
                    alt={blog.heroImage?.alt || blog.title}
                    className="w-full h-full object-cover
                    transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  {/* CATEGORY + DATE */}
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3">
                    {blog.category?.[0] && <span>{blog.category[0]}</span>}

                    {blog.category?.[0] && blog.publishedAt && <span>•</span>}

                    {blog.publishedAt && (
                      <span>
                        {new Date(blog.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
                      </span>
                    )}
                  </div>

                  {/* TITLE */}
                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="block text-xl font-semibold text-blue-950
                    leading-snug hover:underline mb-3"
                  >
                    {blog.title}
                  </Link>

                  {/* EXCERPT */}
                  {blog.excerpt && (
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-5">
                      {blog.excerpt}
                    </p>
                  )}

                  {/* READ MORE */}
                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="inline-block border border-gray-300
                    text-gray-600 px-5 py-2 rounded-md
                    hover:bg-blue-950 hover:text-white
                    transition duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default AllBlogs;
