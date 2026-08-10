import { useState } from 'react';
import Navbar from './views/Navbar.jsx';
import Hero from './views/Hero.jsx';
// import AboutMission from './views/AboutMission.jsx'; // "Our Story / Our Mission" strip removed per request — component kept in place, just no longer rendered
// import DedicatedSection from './views/DedicatedSection.jsx'; // "Dedicated to helping you heal, grow, and thrive" section removed per request — component kept in place, just no longer rendered
import OurPhilosophy from './views/OurPhilosophy.jsx';
import WhyChooseUs from './views/WhyChooseUs.jsx';
import Testimonials from './views/Testimonials.jsx';
import LeadForm from './views/LeadForm.jsx';
import LeadFormModal from './views/LeadFormModal.jsx';
import SessionsBanner from './views/SessionsBanner.jsx';
import FAQ from './views/FAQ.jsx';
import Footer from './views/Footer.jsx';
import WhatsAppFloat from './views/WhatsAppFloat.jsx';
import MobileLeadButton from './views/MobileLeadButton.jsx';
import FestiveBanner from './views/FestiveBanner.jsx';
import MetaPixel from './views/MetaPixel.jsx';

export default function App() {
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadPromotion, setLeadPromotion] = useState('');

  // Callers may pass a promotion name (from the festive banner) — but when
  // wired directly to onClick they'd pass the event, so only accept strings.
  const openLeadModal = (promotion) => {
    setLeadPromotion(typeof promotion === 'string' ? promotion : '');
    setLeadModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenLead={openLeadModal} />
      <main>
        <Hero />
        {/* <AboutMission /> removed per request */}
        {/* <DedicatedSection /> removed per request */}
        <OurPhilosophy onOpenLead={openLeadModal} />
        <WhyChooseUs onOpenLead={openLeadModal} />
        <Testimonials />
        <LeadForm />
        <SessionsBanner onOpenLead={openLeadModal} />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileLeadButton onOpenLead={openLeadModal} />
      <FestiveBanner onOpenLead={openLeadModal} />
      <MetaPixel />
      <LeadFormModal
        open={leadModalOpen}
        promotion={leadPromotion}
        onClose={() => setLeadModalOpen(false)}
      />
    </div>
  );
}
