import { motion } from "framer-motion";
import { FaUser, FaFileAlt, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import "../styles/process.css";

const steps = [
  {
    number: "01",
    title: "Discuss",
    text: "We discuss your ideas, goals and requirements.",
    icon: <FaUser />
  },
  {
    number: "02",
    title: "Plan",
    text: "I plan the structure, design and features.",
    icon: <FaFileAlt />
  },
  {
    number: "03",
    title: "Design",
    text: "I design a modern and user-friendly interface.",
    icon: <FaPencilRuler />
  },
  {
    number: "04",
    title: "Develop",
    text: "I develop the website with clean code.",
    icon: <FaCode />
  },
  {
    number: "05",
    title: "Deliver",
    text: "I test, optimize and deliver the final product.",
    icon: <FaRocket />
  }
];

function Process() {
  return (
    <section className="process-section" id="process">
      <div className="container">
        <motion.p
          className="section-mini-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          MY PROCESS
        </motion.p>

        <motion.h2
          className="process-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How I Work
        </motion.h2>

        <div className="process-flow">
          {steps.map((step, index) => (
            <div className="process-flow-item" key={step.number}>
              <motion.div
                className="process-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="process-icon">{step.icon}</div>
                <span className="process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>

              {index < steps.length - 1 && (
                <div className="process-arrow">
                  <HiArrowLongRight />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;