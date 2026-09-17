import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import CurrentlyLearning from "./sections/CurrentlyLearning";
import Certifications from "./sections/Certifications";
import RafaelDashboard from "./sections/RafaelDashboard";
import TechnologiesSection from "./sections/TechnologiesSection"
const App = () => (
  <>
    <Navbar />
    <Hero />
    <LogoShowcase />
    <FeatureCards />
    <Experience />
    <Skills />
    <Projects />
    <TechnologiesSection/>
    <Certifications />
    <Contact />
    <Footer />

  </>
);

export default App;
