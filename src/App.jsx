import Navbar from './views/Navbar.jsx';
import Hero from './views/Hero.jsx';
// import AboutMission from './views/AboutMission.jsx'; // "Our Story / Our Mission" strip removed per request — component kept in place, just no longer rendered
// import DedicatedSection from './views/DedicatedSection.jsx'; // "Dedicated to helping you heal, grow, and thrive" section removed per request — component kept in place, just no longer rendered
import OurPhilosophy from './views/OurPhilosophy.jsx';
import WhyChooseUs from './views/WhyChooseUs.jsx';
import Testimonials from './views/Testimonials.jsx';
import LeadForm from './views/LeadForm.jsx';
import SessionsBanner from './views/SessionsBanner.jsx';
import FAQ from './views/FAQ.jsx';
import Footer from './views/Footer.jsx';
import WhatsAppFloat from './views/WhatsAppFloat.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        {/* <AboutMission /> removed per request */}
        {/* <DedicatedSection /> removed per request */}
        <OurPhilosophy />
        <WhyChooseUs />
        <Testimonials />
        <LeadForm />
        <SessionsBanner />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
