import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";
import { useState } from "react";

function ContactPage() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Navbar />
      <div style={{ minHeight: "60vh", padding: "80px 0" }}>
        {open && <ContactModal onClose={() => setOpen(false)} />}
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;