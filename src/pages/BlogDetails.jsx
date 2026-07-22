import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api/axios";

const BlogDetails = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);

        const response = await api.get(`/content/${slug}`);

        setBlog(response.data.content);
      } catch (error) {
        console.error("Failed to fetch blog:", error);

        setError(error.response?.data?.message || "Unable to load blog.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-blue-950 text-lg">Loading blog...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">
          {error}
        </h2>

        <Link to="/" className="bg-blue-950 text-white px-6 py-3 rounded-lg">
          Back Home
        </Link>
      </div>
    );
  }

  if (!blog) {
    return null;
  }

  return (
    <main className="bg-white min-h-screen">
      {/* HERO */}
      {/* HERO */}
      <section className="relative h-[450px]">
        {/* Hero Image */}
        <img
          src={blog.heroImage?.url}
          alt={blog.heroImage?.alt || blog.title}
          className="w-full h-full object-cover"
        />

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-blue-950/70 flex items-center justify-center">
          <div className="max-w-4xl mx-auto w-full px-6 text-center">
            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {blog.title}
            </h1>

            {/* Category • Date • Author */}
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

      {/* BLOG CONTENT */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        {blog.blocks?.map((block, index) => {
          {
            /* TEXT BLOCK */
          }
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

          {
            /* IMAGE BLOCK */
          }
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

          {
            /* GALLERY BLOCK */
          }
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

      {/* BACK TO BLOGS */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <Link
          to="/"
          className="inline-block border border-blue-950 text-blue-950 px-6 py-3 rounded-full
          hover:bg-blue-950 hover:text-white transition"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
};

export default BlogDetails;
