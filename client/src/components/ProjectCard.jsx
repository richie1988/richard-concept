import React from "react";

function ProjectCard({ project, onBuy }) {
  // Backend base URL (Render)
  const baseURL = import.meta.env.VITE_API_URL?.replace("/api", "");

  // Ensure no double slashes or duplicated paths
  const imagePath = project.image_url.startsWith("http")
    ? project.image_url
    : `${baseURL}${project.image_url.startsWith("/") ? "" : "/"}${project.image_url}`;

  return (
    <div className="project-card">
      <div className="project-image-wrap">
        <img
          src={imagePath}
          alt={project.title}
          className="project-image"
          loading="lazy"
          onError={(e) => {
            e.target.src = "/fallback-image.jpg";
          }}
        />
      </div>

      <div className="project-content">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.short_description}</p>
        <h4>${project.price}</h4>

        <button className="buy-btn" onClick={onBuy}>
          Buy This Project
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;