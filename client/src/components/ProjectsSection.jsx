import { useState } from "react";
import projectsData from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import "../styles/projects.css";
import { motion } from "framer-motion";

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <div className="container">

        <motion.p
          className="section-mini-title"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          PROJECTS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Projects Marketplace
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Explore my ready-to-use solutions. You can buy and deploy them.
        </motion.p>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
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