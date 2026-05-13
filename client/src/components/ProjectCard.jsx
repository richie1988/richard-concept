import { useState } from "react";

function ProjectCard({ project, onBuy }) {
  const [loaded, setLoaded] = useState(false);

  // FIX: support ALL possible formats safely
  const imagePath =
    project.image ||
    project.image_url ||
    `/images/projects/${project.slug || project.title
      .toLowerCase()
      .replace(/\s/g, "-")}.jpg`;

  return (
    <div className="project-card">
      <div className="project-image-wrap">

        {!loaded && (
          <div className="image-spinner">
            <div className="spinner" />
          </div>
        )}

        <img
          src={imagePath}
          alt={project.title}
          className={`project-image ${loaded ? "loaded" : ""}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)} // IMPORTANT: prevents infinite spinner
        />
      </div>

      <div className="project-content">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.short_description}</p>
        <h4>${project.price}</h4>

        <button className="buy-btn" onClick={onBuy}>
          Buy
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;