import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import api from "../api/axios";

function Project() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLatestProject = async () => {
      try {
        const response = await api.get(
          "/content?type=project&status=published&sort=newest&limit=1",
        );

        setProject(response.data.content?.[0] || null);
      } catch (error) {
        console.error("Failed to fetch latest project:", error);
        setError("Unable to load project.");
      } finally {
        setLoading(false);
      }
    };

    fetchLatestProject();
  }, []);

  return (
    <section className="bg-blue-950 py-16 px-4 md:px-10">
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-white mb-10"
      >
        Latest Projects
      </motion.h3>

      {/* Loading */}
      {loading && (
        <div className="text-white text-center py-10">
          Loading latest project...
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="text-white text-center py-10">{error}</div>
      )}

      {/* No Project */}
      {!loading && !error && !project && (
        <div className="text-white text-center py-10">
          No projects available yet.
        </div>
      )}

      {/* Project */}
      {!loading && !error && project && (
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-white w-full max-w-5xl rounded-2xl shadow-lg overflow-hidden"
          >
            {/* IMAGE CONTAINER */}
            <div className="relative h-96 overflow-hidden group">
              {/* Image */}
              <img
                src={project.heroImage?.url}
                alt={project.heroImage?.alt || project.title}
                className="w-full h-full object-cover transition-all duration-700
                           group-hover:scale-110 group-hover:blur-sm"
              />

              {/* Dark Blue Overlay */}
              <div
                className="absolute inset-0 bg-linear-to-t
                           from-blue-950/95
                           via-blue-900/70
                           to-transparent
                           flex flex-col justify-end p-8
                           opacity-0 group-hover:opacity-100
                           transition-all duration-500"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  {/* Category */}
                  {project.category?.[0] && (
                    <p className="text-blue-200 text-sm uppercase tracking-widest font-medium">
                      {project.category[0]}
                    </p>
                  )}

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  {/* Description */}
                  {project.excerpt && (
                    <p className="text-white/90 text-[16px] max-w-xl leading-relaxed line-clamp-3">
                      {project.excerpt}
                    </p>
                  )}

                  {/* Date */}
                  {project.publishedAt && (
                    <p className="text-white/70 text-sm">
                      {new Date(project.publishedAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        },
                      )}
                    </p>
                  )}

                  {/* Read More */}
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-block"
                  >
                    <button
                      className="border border-white text-white rounded-full px-6 py-2
                                 hover:bg-white hover:text-blue-950
                                 transition duration-300 h-12 w-46
                                 font-medium"
                    >
                      READ MORE
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Project;
