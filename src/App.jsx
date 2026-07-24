import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
// import AboutMission from './components/AboutMission.jsx'; // "Our Story / Our Mission" strip removed per request — component kept in place, just no longer rendered
// import DedicatedSection from './components/DedicatedSection.jsx'; // "Dedicated to helping you heal, grow, and thrive" section removed per request — component kept in place, just no longer rendered
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import LeadForm from './components/LeadForm.jsx';
import SessionsBanner from './components/SessionsBanner.jsx';
import FAQ from './components/FAQ.jsx';
import Newsletter from './components/Newsletter.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        {/* <AboutMission /> removed per request */}
        {/* <DedicatedSection /> removed per request */}
        <WhyChooseUs />
        <Testimonials />
        <LeadForm />
        <SessionsBanner />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
