import { ArrowRight } from 'lucide-react';
import { sessionsBanner } from '../utils/images.js';

export default function SessionsBanner() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={sessionsBanner}
        alt="Woman meditating by a lake"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: 'rgba(115, 161, 177, 0.6)' }} />
      <div className="relative max-w-5xl mx-auto px-4 md:px-8 py-20 md:py-28 text-center text-white">
        <p className="heading-display text-2xl md:text-4xl leading-snug font-medium">
          One-on-one sessions with certified coaches to help you build routines,
          track progress, and develop a mindset that supports lasting balance.
        </p>
        <a
          href="#lead"
          className="mt-8 inline-flex items-center gap-2 border border-white text-white px-7 py-3 rounded-full font-medium hover:bg-white hover:text-brand-teal transition"
        >
          Explore Wellness Areas <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
