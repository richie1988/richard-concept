function ProjectCard({ project, onBuy }) {
  return (
    <div className="project-card">
      <div className="project-image-wrap">
        <img
          src={project.image_url}
          alt={project.title}
          className="project-image"
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