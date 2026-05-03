import { useState } from "react";
import ContactModal from "./ContactModal";
import "../styles/projects.css";

function CTASection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="cta-section" id="contact">
        <div className="container cta-box">
          <div>
            <h2>Have a project in mind?</h2>
            <p>
              Let's turn your ideas into powerful digital solutions.
              I'm ready to help you succeed.
            </p>
          </div>

          <button className="primary-btn" onClick={() => setOpen(true)}>
            Email Me
          </button>
        </div>
      </section>

      {open && <ContactModal onClose={() => setOpen(false)} />}
    </>
  );
}

export default CTASection;