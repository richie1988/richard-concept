import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaGlobe, FaEnvelope } from "react-icons/fa";
import PersonalProjectsModal from "./PersonalProjectsModal";
import "../styles/hero.css";

const colorSets = [
  ["bar-strong", "bar-mid", "bar-soft", "bar-light", "bar-muted"],
  ["bar-mid", "bar-soft", "bar-light", "bar-muted", "bar-strong"],
  ["bar-soft", "bar-light", "bar-muted", "bar-strong", "bar-mid"],
  ["bar-light", "bar-muted", "bar-strong", "bar-mid", "bar-soft"],
  ["bar-muted", "bar-strong", "bar-mid", "bar-soft", "bar-light"],
];

function Hero() {
  const [barSetIndex, setBarSetIndex] = useState(0);
  const [openProjects, setOpenProjects] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBarSetIndex((prev) => (prev + 1) % colorSets.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentBars = colorSets[barSetIndex];

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-bg-shape hero-shape-left"></div>
        <div className="hero-bg-shape hero-shape-right"></div>

        <div className="container hero-container">
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <p className="hero-intro">Hello, I&apos;m</p>

            <h1>
              Richard <span>Sikaonga</span>
            </h1>

            <p className="hero-text">
              I build modern, responsive and user-friendly websites that help
              businesses grow online.
            </p>

            <div className="hero-line-small"></div>

            <div className="hero-actions">
              <a href="#about" className="primary-btn">
                About Me →
              </a>

              <button
                type="button"
                className="secondary-btn"
                onClick={() => setOpenProjects(true)}
              >
                View Projects →
              </button>
            </div>

            <div className="hero-social-wrap">
              <p>Let&apos;s connect</p>

              <div className="hero-socials">
                <a
                  href="https://github.com/richie1988"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/richard-sikaonga"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://richardconcept.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Website"
                >
                  <FaGlobe />
                </a>

                <a
                  href="mailto:richiessikaonga@gmail.com"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className={`hero-line line-1 ${currentBars[0]}`}></div>
            <div className={`hero-line line-2 ${currentBars[1]}`}></div>
            <div className={`hero-line line-3 ${currentBars[2]}`}></div>
            <div className={`hero-line line-4 ${currentBars[3]}`}></div>
            <div className={`hero-line line-5 ${currentBars[4]}`}></div>

            <div className="hero-dots"></div>
          </motion.div>
        </div>
      </section>

      {openProjects && (
        <PersonalProjectsModal onClose={() => setOpenProjects(false)} />
      )}
    </>
  );
}

export default Hero;