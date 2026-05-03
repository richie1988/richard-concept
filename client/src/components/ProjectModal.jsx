import React, { useState } from 'react';
import ContactModal from './ContactModal';

function ProjectModal({ project, onClose }) {
  const [openContact, setOpenContact] = useState(false);

  const whatsappMessage = `Hello Richard, I am interested in the project: ${project.title}`;
  const whatsappLink = `https://wa.me/${project.whatsapp_number}?text=${encodeURIComponent(whatsappMessage)}`;

  // Construct the correct image URL for the modal
  const imagePath = `/images/projects/${project.image_url}`;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="project-modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={onClose}>×</button>

          {/* Add lazy loading for the modal image */}
          <img
            src={imagePath}
            alt={project.title}
            className="modal-image"
            loading="lazy"
          />

          <span className="project-category">{project.category}</span>
          <h2>{project.title}</h2>
          <p>{project.full_description}</p>
          <h3>${project.price}</h3>

          <div className="modal-info">
            <p><strong>Technologies:</strong> {project.technologies}</p>
            <p><strong>Features:</strong> {project.features}</p>
            <p><strong>Delivery Time:</strong> {project.delivery_time}</p>
            <p><strong>Support:</strong> {project.support_info}</p>
          </div>

          <div className="modal-actions">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              Chat on WhatsApp
            </a>

            <button
              className="contact-btn"
              onClick={() => setOpenContact(true)}
            >
              Email Me
            </button>
          </div>
        </div>
      </div>

      {openContact && <ContactModal onClose={() => setOpenContact(false)} />}
    </>
  );
}

export default ProjectModal;