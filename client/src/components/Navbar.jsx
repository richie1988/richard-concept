import { useState, useEffect } from "react";
import logo from "../assets/conceptlogo.png";
import ContactModal from "./ContactModal";
import "../styles/navbar.css";

function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only update when section is visible
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "-80px 0px 0px 0px", // adjust for sticky navbar height
      }
    );

    sections.forEach((section) => {
      if (section.id) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="container navbar-container">
          <div className="logo">
            <img src={logo} alt="Richard Concept Logo" className="logo-image" />
          </div>

          <nav className="nav-links">
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>

            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>

            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
            >
              Pricing
            </a>

            <a
              href="#process"
              className={activeSection === "process" ? "active" : ""}
            >
              Process
            </a>
          </nav>

          <button
            className="contact-btn-nav"
            onClick={() => setOpenModal(true)}
          >
            Contact Me
          </button>
        </div>
      </header>

      {openModal && <ContactModal onClose={() => setOpenModal(false)} />}
    </>
  );
}

export default Navbar;