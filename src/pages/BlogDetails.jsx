import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api/axios";

const BlogDetails = () => {
  const { slug } = useParams();

  // =========================
  // BLOG STATE
  // =========================
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =========================
  // COMMENTS STATE
  // =========================
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);

  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const [commentSubmitting, setCommentSubmitting] = useState(false);
  const [commentMessage, setCommentMessage] = useState("");
  const [commentError, setCommentError] = useState("");

  // =========================
  // FETCH BLOG
  // =========================
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.get(`/content/${slug}`);

        setBlog(response.data.content);
      } catch (error) {
        console.error("Failed to fetch blog:", error);

        setError(error.response?.data?.message || "Unable to load this blog.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);
  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        setBlogsLoading(true);

        const response = await api.get("/content?type=blog&status=published");

        setAllBlogs(response.data.content || []);
      } catch (error) {
        console.error("Failed to fetch all blogs:", error);
        setAllBlogs([]);
      } finally {
        setBlogsLoading(false);
      }
    };

    fetchAllBlogs();
  }, []);
  // =========================
  // FETCH COMMENTS
  // =========================
  useEffect(() => {
    const fetchComments = async () => {
      if (!blog?._id) return;

      try {
        setCommentsLoading(true);

        const response = await api.get(`/comments/content/${blog._id}`);

        setComments(response.data.comments || []);
      } catch (error) {
        console.error("Failed to fetch comments:", error);

        setComments([]);
      } finally {
        setCommentsLoading(false);
      }
    };

    fetchComments();
  }, [blog?._id]);
  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        setBlogsLoading(true);

        const response = await api.get("/content?type=blog&status=published");

        setAllBlogs(response.data.content || []);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setAllBlogs([]);
      } finally {
        setBlogsLoading(false);
      }
    };

    fetchAllBlogs();
  }, []);
  useEffect(() => {
    if (!allBlogs.length) return;

    const uniqueCategories = [
      ...new Set(allBlogs.flatMap((blog) => blog.category || [])),
    ];

    setCategories(uniqueCategories);
  }, [allBlogs]);

  // =========================
  // COMMENT INPUT
  // =========================
  const handleCommentChange = (e) => {
    const { name, value } = e.target;

    setCommentForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // SUBMIT COMMENT
  // =========================
  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    try {
      setCommentSubmitting(true);
      setCommentMessage("");
      setCommentError("");

      const response = await api.post("/comments", {
        content: blog._id,
        name: commentForm.name,
        email: commentForm.email,
        website: commentForm.website,
        message: commentForm.message,
      });

      setCommentMessage(
        response.data.message ||
          "Your comment has been submitted and is awaiting approval.",
      );

      setCommentForm({
        name: "",
        email: "",
        website: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to submit comment:", error);

      setCommentError(
        error.response?.data?.message ||
          "Unable to submit your comment. Please try again.",
      );
    } finally {
      setCommentSubmitting(false);
    }
  };
  const handleSearch = async (e) => {
    const value = e.target.value;

    setSearch(value);
    setSelectedCategory("");

    if (!value.trim()) {
      setSearchResults([]);
      return;
    }

    try {
      setSearchLoading(true);

      const response = await api.get(
        `/content?type=blog&status=published&search=${encodeURIComponent(
          value,
        )}`,
      );

      setSearchResults(response.data.content || []);
    } catch (error) {
      console.error("Failed to search blogs:", error);
      setSearchResults([]);
    } finally {
      setSearchLoading(false);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearch("");

    const filteredBlogs = allBlogs.filter((item) =>
      item.category?.includes(category),
    );

    setSearchResults(filteredBlogs);
  };
  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-blue-950 text-lg">Loading blog...</p>
      </div>
    );
  }

  // =========================
  // ERROR
  // =========================
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">
          {error}
        </h2>

        <Link
          to="/blogs"
          className="bg-blue-950 text-white px-6 py-3 rounded-lg"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  // =========================
  // NO BLOG
  // =========================
  if (!blog) {
    return null;
  }

  return (
    <main className="bg-white min-h-screen">
      {/* =========================
          HERO
      ========================== */}
      <section className="relative h-[450px]">
        <img
          src={blog.heroImage?.url}
          alt={blog.heroImage?.alt || blog.title}
          className="w-full h-full object-cover"
        />

        {/* BLUE OVERLAY */}
        <div className="absolute inset-0 bg-blue-950/70 flex items-center justify-center">
          <div className="max-w-4xl mx-auto w-full px-6 text-center">
            {/* TITLE */}
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {blog.title}
            </h1>

            {/* META */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-5 text-white/80 text-sm md:text-base">
              <span>{blog.category?.[0] || "Insights"}</span>

              {blog.publishedAt && (
                <>
                  <span>•</span>

                  <span>
                    {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </>
              )}

              {blog.author && (
                <>
                  <span>•</span>

                  <span>
                    By {blog.author.firstName} {blog.author.lastName}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          MAIN BLOG AREA
      ========================== */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* =========================
              BLOG CONTENT
          ========================== */}
          <article className="lg:col-span-2">
            {blog.blocks?.map((block, index) => {
              // TEXT
              if (block.type === "text") {
                return (
                  <div
                    key={index}
                    className="mb-8 prose prose-lg max-w-none text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: block.content || "",
                    }}
                  />
                );
              }

              // IMAGE
              if (block.type === "image") {
                return (
                  <div key={index} className="mb-10">
                    {block.image?.url && (
                      <img
                        src={block.image.url}
                        alt={block.image.caption || blog.title}
                        className="w-full rounded-2xl"
                      />
                    )}

                    {block.image?.caption && (
                      <p className="text-center text-gray-500 mt-3">
                        {block.image.caption}
                      </p>
                    )}
                  </div>
                );
              }

              // GALLERY
              if (block.type === "gallery") {
                return (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
                  >
                    {block.gallery?.filter(Boolean).map((image, imageIndex) => (
                      <div key={imageIndex}>
                        <img
                          src={image.url}
                          alt={image.caption || blog.title}
                          className="w-full h-72 object-cover rounded-xl"
                        />

                        {image.caption && (
                          <p className="text-center text-gray-500 mt-2">
                            {image.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                );
              }

              return null;
            })}
          </article>

          {/* =========================
    SIDEBAR
========================= */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-8">
              <div className="border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-blue-950 mb-4">
                  Search Blogs
                </h3>

                <input
                  type="text"
                  value={search}
                  onChange={handleSearch}
                  placeholder="Search blogs..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3
        outline-none focus:ring-2 focus:ring-blue-950"
                />

                {/* SEARCH RESULTS */}
                {search && (
                  <div className="mt-5 space-y-4">
                    {searchLoading && (
                      <p className="text-sm text-gray-500">Searching...</p>
                    )}

                    {!searchLoading && searchResults.length === 0 && (
                      <p className="text-sm text-gray-500">No blogs found.</p>
                    )}

                    {!searchLoading &&
                      searchResults.map((item) => (
                        <Link
                          key={item._id}
                          to={`/blogs/${item.slug}`}
                          className="block border-b border-gray-100 pb-3
                hover:text-blue-700 transition"
                        >
                          <p className="font-medium text-blue-950">
                            {item.title}
                          </p>

                          {item.publishedAt && (
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(item.publishedAt).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                },
                              )}
                            </p>
                          )}
                        </Link>
                      ))}
                  </div>
                )}
              </div>

              {/* =========================
        CATEGORIES
    ========================== */}
              <div className="border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-blue-950 mb-4">
                  Categories
                </h3>

                <div className="flex flex-wrap gap-2">
                  {categories.length === 0 ? (
                    <p className="text-sm text-gray-500">
                      No categories available.
                    </p>
                  ) : (
                    categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={`px-3 py-2 rounded-full text-sm
              transition ${
                selectedCategory === category
                  ? "bg-blue-950 text-white"
                  : "bg-blue-50 text-blue-950 hover:bg-blue-950 hover:text-white"
              }`}
                      >
                        {category}
                      </button>
                    ))
                  )}
                </div>

                {/* CATEGORY RESULTS */}
                {selectedCategory && (
                  <div className="mt-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-blue-950">
                        {selectedCategory}
                      </p>

                      <button
                        onClick={() => {
                          setSelectedCategory("");
                          setSearchResults([]);
                        }}
                        className="text-xs text-red-500 hover:underline"
                      >
                        Clear
                      </button>
                    </div>

                    {searchResults.map((item) => (
                      <Link
                        key={item._id}
                        to={`/blogs/${item.slug}`}
                        className="block border-b border-gray-100 pb-3
              text-blue-950 hover:text-blue-700 transition"
                      >
                        <p className="font-medium">{item.title}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* ALL BLOGS */}
              <div className="border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-blue-950 mb-5">
                  All Blogs
                </h3>

                {blogsLoading ? (
                  <p className="text-sm text-gray-500">Loading blogs...</p>
                ) : allBlogs.length === 0 ? (
                  <p className="text-sm text-gray-500">No blogs available.</p>
                ) : (
                  <div className="space-y-5">
                    {allBlogs.map((item) => (
                      <Link
                        key={item._id}
                        to={`/blogs/${item.slug}`}
                        className="flex gap-4 group"
                      >
                        {/* BLOG IMAGE */}
                        <div className="w-24 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                          <img
                            src={item.heroImage?.url}
                            alt={item.heroImage?.alt || item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          />
                        </div>

                        {/* BLOG INFO */}
                        <div className="min-w-0">
                          <h4 className="font-semibold text-blue-950 text-sm leading-snug group-hover:text-blue-700 transition">
                            {item.title}
                          </h4>

                          {/* PUBLISHED DATE */}
                          {item.publishedAt && (
                            <p className="text-xs text-gray-500 mt-2">
                              {new Date(item.publishedAt).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                },
                              )}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* VIEW ALL BLOGS BUTTON */}
                <div className="mt-7 pt-5 border-t border-gray-200">
                  <Link
                    to="/allblogs"
                    className="block w-full text-center bg-blue-950 text-white px-5 py-3 rounded-full
      hover:bg-blue-900 transition font-medium"
                  >
                    View All Blogs →
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* =========================
          COMMENTS
      ========================== */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-3xl font-bold text-blue-950 mb-8">Comments</h2>

          {/* EXISTING COMMENTS */}
          {commentsLoading ? (
            <p className="text-gray-500 mb-10">Loading comments...</p>
          ) : comments.length === 0 ? (
            <p className="text-gray-500 mb-10">
              No comments yet. Be the first to comment!
            </p>
          ) : (
            <div className="space-y-6 mb-12">
              {comments.map((comment) => (
                <div
                  key={comment._id}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="font-semibold text-blue-950">
                      {comment.name}
                    </h3>

                    <span className="text-sm text-gray-500">
                      {new Date(comment.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {comment.message}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* COMMENT FORM */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-2">
              Leave a Comment
            </h2>

            <p className="text-gray-500 mb-6">
              Your comment will be reviewed before it is published.
            </p>

            <form onSubmit={handleCommentSubmit} className="space-y-5">
              {/* NAME + EMAIL */}
              <div className="grid  grid-rows-2 gap-5">
                <input
                  type="text"
                  name="name"
                  value={commentForm.name}
                  onChange={handleCommentChange}
                  required
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3
                  focus:outline-none focus:ring-2 focus:ring-blue-950"
                />

                <input
                  type="email"
                  name="email"
                  value={commentForm.email}
                  onChange={handleCommentChange}
                  required
                  placeholder="Your email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3
                  focus:outline-none focus:ring-2 focus:ring-blue-950"
                />
              </div>

              {/* MESSAGE */}
              <textarea
                name="message"
                value={commentForm.message}
                onChange={handleCommentChange}
                required
                rows="6"
                placeholder="Write your comment..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3
                focus:outline-none focus:ring-2 focus:ring-blue-950
                resize-none"
              />
              {/* SUCCESS */}
              {commentMessage && (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-4">
                  {commentMessage}
                </div>
              )}
              {/* ERROR */}
              {commentError && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4">
                  {commentError}
                </div>
              )}
              {/* BUTTON */}
              <button
                type="submit"
                disabled={commentSubmitting}
                className="bg-blue-950 text-white px-7 py-3 rounded-full
                hover:bg-blue-900 transition
                disabled:opacity-50
                disabled:cursor-not-allowed"
              >
                {commentSubmitting ? "Submitting..." : "Post Comment"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =========================
          BACK TO BLOGS
      ========================== */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <Link
          to="/blogs"
          className="inline-block border border-blue-950 text-blue-950 px-6 py-3 rounded-full
          hover:bg-blue-950 hover:text-white transition"
        >
          ← Back to Blogs
        </Link>
      </div>
    </main>
  );
};

export default BlogDetails;
