import React from 'react';

function ProjectCard({ project, onBuy }) {
  // Construct the correct image URL for the production environment
  const imagePath = `/images/projects/${project.image_url}`; // Assuming project.image_url contains image file name (e.g., 'ecommerce-app.jpg')

  return (
    <div className="project-card">
      <div className="project-image-wrap">
        {/* Add loading="lazy" to improve performance */}
        <img
          src={imagePath}
          alt={project.title}
          className="project-image"
          loading="lazy"
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