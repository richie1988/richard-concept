import React from "react";

function ProjectCard({ project, onBuy }) {
  const baseURL = import.meta.env.VITE_API_URL?.replace("/api", "");

  // No need to prepend /images/projects again
  const imagePath = `${baseURL}${project.image_url}`;

  return (
    <div className="project-card">
      <div className="project-image-wrap">
        <img
          src={imagePath}
          alt={project.title}
          loading="lazy"
        />
      </div>

      <div className="project-content">
        <span>{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.short_description}</p>
        <h4>${project.price}</h4>

        <button onClick={onBuy}>Buy</button>
      </div>
    </div>
  );
}

export default ProjectCard;