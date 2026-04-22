import { ArrowRight } from 'lucide-react';
import { dedicatedImage } from '../utils/images.js';

export default function DedicatedSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-soft aspect-square">
            <img
              src={dedicatedImage}
              alt="Woman practicing mindful movement"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <span className="section-label">◆ Mindfulness & Healing</span>
          <h2 className="heading-display mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold">
            Dedicated to helping you <em className="italic text-brand-green">heal, grow, and thrive</em>
            {' '}through personalized, holistic wellness support systems.
          </h2>
          <p className="mt-5 text-gray-600 leading-relaxed max-w-xl">
            We blend evidence-based science with compassionate coaching — so every plan reflects
            your body, your lifestyle, and your long-term goals. From mindful breathing to sustainable
            nutrition, our specialists walk alongside you at every step.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <div>
              <p className="font-display text-3xl text-gray-900">20K+</p>
              <p className="text-gray-500">Established</p>
            </div>
            <div className="h-10 w-px bg-brand-sage" />
            <div>
              <p className="font-display text-3xl text-gray-900">50K+</p>
              <p className="text-gray-500">Wellness Sessions</p>
            </div>
          </div>

          <a href="#lead" className="inline-flex items-center gap-2 mt-8 text-brand-green font-medium hover:gap-3 transition-all">
            Explore more <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
