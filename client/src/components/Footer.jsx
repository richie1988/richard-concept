import logo from "../assets/conceptlogo.png";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img src={logo} alt="Richard Concept Logo" className="footer-logo" />
          <p>
            Building modern digital solutions that help businesses grow
            and succeed online.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4>Solutions</h4>
          <ul>
            <li>Websites</li>
            <li>Web Apps</li>
            <li>Mobile Apps</li>
            <li>E-Commerce</li>
            <li>ERPs</li>
            <li>CRMs & HRPMS</li>
          </ul>
        </div>

        <div>
          <h4>Let's Connect</h4>
          <ul>
            <li>+260 76 261 3963</li>
            <li>richiessikaonga@gmail.com</li>
            <li>Lusaka, Zambia</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2025 Richard Concept. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;