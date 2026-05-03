import { motion } from "framer-motion";
import {
  FaGlobe,
  FaCode,
  FaMobileAlt,
  FaRocket,
  FaSearch,
  FaTools
} from "react-icons/fa";
import "../styles/solutions.css";

const services = [
  {
    icon: <FaGlobe />,
    title: "Web Design",
    text: "Clean, modern UI design."
  },
  {
    icon: <FaCode />,
    title: "Web Development",
    text: "Fast and scalable websites."
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    text: "Smooth mobile experiences."
  },
  {
    icon: <FaRocket />,
    title: "Performance",
    text: "Optimized for speed."
  },
  {
    icon: <FaSearch />,
    title: "SEO Friendly",
    text: "Better visibility online."
  },
  {
    icon: <FaTools />,
    title: "Maintenance",
    text: "Ongoing support & updates."
  }
];

function Solutions() {
  return (
    <section className="solutions" id="pricing">
      <div className="container services-layout">
        
        {/* LEFT SIDE */}
        <motion.div
          className="services-left"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-mini-title">WHAT I DO</p>

          <h2>
            Skills & <span>Services</span>
          </h2>

          <div className="about-line"></div>

          <p>
            I provide modern web solutions that are fast, responsive
            and built with best practices.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="services-right-grid">
          {services.map((item, index) => (
            <motion.div
              key={index}
              className="service-mini-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="service-mini-icon">{item.icon}</div>

              <div className="service-mini-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Solutions;