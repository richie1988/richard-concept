import React, { useState } from "react";

function ProjectCard({ project, onBuy }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="project-card">
      <div className="project-image-wrap">
        
        {!loaded && (
          <>
            <div className="image-skeleton" />
            <div className="image-spinner"></div>
          </>
        )}

        <img
          src={project.image_url}
          alt={project.title}
          className={`project-image ${loaded ? "loaded" : ""}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
        />
      </div>

      <div className="project-content">
        <span className="project-category">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.short_description}</p>

        <h4>
          ${project.price.toLocaleString()}
        </h4>

        <button
          className="buy-btn"
          onClick={onBuy}
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;