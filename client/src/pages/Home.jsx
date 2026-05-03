import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Solutions from "../components/Solutions";
import ProjectsSection from "../components/ProjectsSection";
import Process from "../components/Process";
import Clients from "../components/Clients";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import ScrollToTop from "../components/ScrollToTop";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <ProjectsSection />
      <Process />
      <Clients />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
}

export default Home;