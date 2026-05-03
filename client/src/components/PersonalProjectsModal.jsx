import { useState } from "react";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import "../styles/personal-projects-modal.css";

const personalProjects = [
  {
    title: "Car Auto Dealership Website",
    image: "/images/personalprojects/project1.png",
    tech: "React, CSS, JavaScript",
    description: "A modern vehicle dealership website for listing and showcasing cars.",
    link: "https://www.linkedin.com/in/richard-sikaonga/details/featured/"
  },
  {
    title: "Trashinex Zambia Waste Management App",
    image: "/images/personalprojects/project2.png",
    tech: "Flutter, PostgreSQL, API",
    description: "A waste collection app for pickup requests, payments and recycling rewards.",
    link: "https://www.linkedin.com/in/richard-sikaonga/details/featured/"
  },
  {
    title: "Music Festival Website",
    image: "/images/personalprojects/project3.png",
    tech: "React, CSS, Framer Motion",
    description: "An event website for festival programs, tickets and artist promotion.",
    link: "https://www.linkedin.com/in/richard-sikaonga/details/featured/"
  },
  {
    title: "NGO Farmer Food Preservation RFP Website",
    image: "/images/personalprojects/project4.png",
    tech: "React, Node.js, PostgreSQL",
    description: "A proposal-focused site encouraging farmers to preserve food during drought.",
    link: "https://www.linkedin.com/in/richard-sikaonga/details/featured/"
  },
  {
    title: "Reusable Website Template",
    image: "/images/personalprojects/project5.png",
    tech: "React, Vite, CSS",
    description: "A reusable company website template for developers and businesses.",
    link: "https://www.linkedin.com/in/richard-sikaonga/details/featured/"
  },
  {
    title: "SpaceX Airspace Deployment Booking",
    image: "/images/personalprojects/project6.png",
    tech: "React, Express, PostgreSQL",
    description: "A booking platform for airspace deployment scheduling and cancellations.",
    link: "https://www.linkedin.com/in/richard-sikaonga/details/featured/"
  },
  {
    title: "Corporate Loan Company Website",
    image: "/images/personalprojects/project7.png",
    tech: "React, CSS, EmailJS",
    description: "A corporate website for a loan company with service and contact sections.",
    link: "https://www.linkedin.com/in/richard-sikaonga/details/featured/"
  },
  {
    title: "Video Editor & Digital Company Website",
    image: "/images/personalprojects/project8.png",
    tech: "React, CSS, Animation",
    description: "A digital media portfolio website for video editing and creative services.",
    link: "https://www.linkedin.com/in/richard-sikaonga/details/featured/"
  },
  {
    title: "Hotel & Lodge Website",
    image: "/images/personalprojects/project9.png",
    tech: "React, JavaScript, CSS",
    description: "A hospitality website for rooms, bookings, gallery and lodge services.",
    link: "https://www.linkedin.com/in/richard-sikaonga/details/featured/"
  },
  {
    title: "Logistics Company Website",
    image: "/images/personalprojects/project10.png",
    tech: "React, CSS, API",
    description: "A logistics business website for transport, freight and delivery services.",
    link: "https://www.linkedin.com/in/richard-sikaonga/details/featured/"
  }
];

function PersonalProjectsModal({ onClose }) {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? personalProjects
    : personalProjects.slice(0, 6);

  return (
    <div className="personal-modal-overlay">
      <div className="personal-modal">
        <div className="personal-modal-header">
          <div>
            <p className="section-mini-title">PERSONAL PROJECTS</p>
            <h2>Projects I Have Built</h2>
            <p>
              A collection of websites, apps and digital solutions I have worked on.
            </p>
          </div>

          <button className="personal-close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="personal-projects-grid">
          {visibleProjects.map((project, index) => (
            <div className="personal-project-card" key={index}>
              <div className="personal-project-image-wrap">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="personal-project-content">
                <span>{project.tech}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="personal-view-link"
                >
                  View Project <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="personal-modal-actions">
          <button
            className="primary-btn"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "View Less" : "View More Projects"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonalProjectsModal;