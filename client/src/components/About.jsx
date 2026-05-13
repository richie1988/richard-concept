import { motion } from "framer-motion";
import { FaCalendarAlt, FaCheckCircle, FaSmile, FaCode } from "react-icons/fa";
import cvFile from "../assets/Richard-Sikaonga-CV.pdf";
import "../styles/about.css";

const stats = [
  { icon: <FaCalendarAlt />, value: "3+", label: "Years Experience" },
  { icon: <FaCheckCircle />, value: "20+", label: "Projects Completed" },
  { icon: <FaSmile />, value: "15+", label: "Happy Clients" },
  { icon: <FaCode />, value: "100%", label: "Commitment to Quality" },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-container refined-about">
        <motion.div
          className="about-left"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="section-mini-title">ABOUT ME</p>
          <h2>
            A little about <span>me</span>
          </h2>
          <div className="about-line"></div>

          <p>
            I&apos;m Richard Sikaonga, a passionate developer and problem solver.
            I create high-quality digital solutions with clean design,
            smooth functionality and a focus on user experience.
          </p>

          <p>
            My goal is to help businesses establish a strong online presence
            through modern and effective digital solutions.
          </p>

          <a href={cvFile} className="primary-btn" download="Richard-Sikaonga-CV.pdf">
            Download CV ↓
          </a>
        </motion.div>

        <motion.div
          className="about-stats-grid"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon">{item.icon}</div>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;