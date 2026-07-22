import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/axios";

const ProjectDetails = () => {
  const { slug } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await api.get(`/content/${slug}`);

        setProject(response.data.content);
      } catch (error) {
        console.error("Failed to fetch project:", error);

        setError(error.response?.data?.message || "Unable to load project.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-blue-950 text-lg">Loading project...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">{error}</h2>

        <Link to="/" className="bg-blue-950 text-white px-6 py-3 rounded-lg">
          Back Home
        </Link>
      </div>
    );
  }

  if (!project) {
    return null;
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Image */}
      <div className="relative h-112.5">
        <img
          src={project.heroImage?.url}
          alt={project.heroImage?.alt || project.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="max-w-6xl mx-auto w-full px-6 pb-12">
            <p className="text-white/80 mb-3">
              {project.type === "project" ? "Project" : "Blog"}
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-white max-w-4xl">
              {project.title}
            </h1>

            {project.publishedAt && (
              <p className="text-white/80 mt-4">
                {new Date(project.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        {project.blocks?.map((block, index) => {
          if (block.type === "text") {
            return (
              <div
                key={index}
                className="mb-8 prose prose-lg max-w-none text-slate-400"
                dangerouslySetInnerHTML={{
                  __html: block.content,
                }}
              />
            );
          }

          if (block.type === "image") {
            return (
              <div key={index} className="mb-8">
                <img
                  src={block.image?.url}
                  alt={block.image?.caption || project.title}
                  className="w-full rounded-2xl"
                />

                {block.image?.caption && (
                  <p className="text-center text-gray-500 mt-2">
                    {block.image.caption}
                  </p>
                )}
              </div>
            );
          }

          if (block.type === "gallery") {
            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              >
                {block.gallery?.filter(Boolean).map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image.url}
                    alt={image.caption || project.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                ))}
              </div>
            );
          }

          return null;
        })}
      </article>

      {/* Back */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <Link
          to="/"
          className="inline-block border border-blue-950 text-blue-950 px-6 py-3 rounded-full hover:bg-blue-950 hover:text-white transition"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
};

export default ProjectDetails;
