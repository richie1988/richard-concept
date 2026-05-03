import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../services/api";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import "../styles/projects.css";

function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Failed to load projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <motion.p
          className="section-mini-title"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          PROJECTS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects Marketplace
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Explore my ready-to-use solutions. You can buy and deploy them for your business.
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <ProjectCard
                project={project}
                onBuy={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default ProjectsSection;