import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import api from "../api/axios";

function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/content?type=project&limit=3");

        setProjects(response.data.content);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
        setError("Unable to load projects.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
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
          Loading latest projects...
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="text-white text-center py-10">{error}</div>
      )}

      {/* No Projects */}
      {!loading && !error && projects.length === 0 && (
        <div className="text-white text-center py-10">
          No projects available yet.
        </div>
      )}

      {/* Projects */}
      {!loading && !error && projects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden group">
                <img
                  src={project.heroImage?.url}
                  alt={project.heroImage?.alt || project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-linear-to-t from-blue-950/95 via-blue-900/70 to-transparent
                  flex flex-col justify-end p-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  {project.excerpt && (
                    <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.excerpt}
                    </p>
                  )}

                  <p className="text-white/70 text-sm mb-4">
                    {project.publishedAt &&
                      new Date(project.publishedAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        },
                      )}
                  </p>

                  <Link to={`/projects/${project.slug}`}>
                    <button
                      className="border border-white text-white rounded-full px-6 py-2
                      hover:bg-white hover:text-blue-950 transition duration-300
                      font-medium"
                    >
                      READ MORE
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Project;
