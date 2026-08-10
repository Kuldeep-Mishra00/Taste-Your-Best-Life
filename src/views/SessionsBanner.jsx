import { ArrowRight } from 'lucide-react';
import { useHomeController } from '../controllers/useHomeController.js';

export default function SessionsBanner({ onOpenLead }) {
  const { sessionsBanner } = useHomeController();
  return (
    <section id="sessions" className="relative overflow-hidden">
      <img
        src={sessionsBanner}
        alt="Woman meditating by a lake"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Same dark scrim as the Wellness Areas cards, for consistent
          image-with-text treatment across the site (home is left as-is). */}
      <div className="absolute inset-0 bg-black/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/55 to-black/25" />
      <div className="relative max-w-5xl mx-auto px-4 md:px-8 py-20 md:py-28 text-center text-white">
        <p className="font-display !text-white text-2xl md:text-4xl leading-snug font-medium [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
          One-on-one sessions with certified coaches to help you build routines,
          track progress, and develop a mindset that supports lasting balance.
        </p>
        <button
          onClick={onOpenLead}
          className="mt-8 inline-flex items-center gap-2 border border-white text-white px-7 py-3 rounded-full font-medium hover:bg-white hover:text-brand-teal transition"
        >
          Book now <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
