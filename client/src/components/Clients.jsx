import comingSoonBg from "../assets/clientcominsoon.png";
import microverseLogo from "../assets/microverse2.png";
import "../styles/clients.css";

const placeholders = [
  "Microverse",
  "Github Client",
  "Enterprise Client",
  "Business Brand",
  "Organization",
  "Corporate Client",
  "Future Partner",
  "Richard Concept",
];

function Clients() {
  return (
    <section className="clients-section">
      <div className="container">
        <p className="section-mini-title">CLIENTS</p>
        <h2 className="center-title">Clients</h2>

        <div
          className="clients-coming-box"
          style={{ backgroundImage: `url(${comingSoonBg})` }}
        >
          <div className="clients-overlay">
            <h3>Client Portfolio Coming Soon</h3>
            <p>This section will be updated soon.</p>
          </div>
        </div>

        <div className="clients-marquee-wrapper">
          <div className="clients-marquee-track">
            {[...placeholders, ...placeholders].map((item, index) => (
              <div
                className="client-placeholder-card"
                key={index}
                style={{ backgroundImage: `url(${microverseLogo})` }}
              >
                <div className="client-placeholder-overlay">
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;