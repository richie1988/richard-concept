import { FaWhatsapp } from "react-icons/fa";
import "../styles/whatsapp-float.css";

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/+260762613963?text=Hello Richard, I would like to discuss a project."
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppFloat;