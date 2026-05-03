import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact-modal.css";

function ContactModal({ onClose }) {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await emailjs.sendForm(
        "service_efdwlnc",
        "template_czhq8hw",
        formRef.current,
        "122C-A8fwULaNARAl"
      );

      setMessage("Your message has been sent successfully.");
      formRef.current.reset();
    } catch (error) {
      setMessage("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="contact-modal-close" onClick={onClose}>×</button>
        <h2>Email Me</h2>
        <p>Send your project details and I will get back to you by email.</p>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="user_name" placeholder="Your name" required />
          <input type="email" name="user_email" placeholder="Your email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            name="message"
            placeholder="Tell me about your project"
            rows="5"
            required
          />

          <button type="submit" className="primary-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Email"}
          </button>

          {message && <p className="form-status">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default ContactModal;