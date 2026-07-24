import { ArrowRight } from 'lucide-react';
import { heroPortrait, heroBackdrop } from '../utils/images.js';
// import { heroAvatars as avatars } from '../utils/images.js'; // was used by the removed avatar-stack stat line below

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 md:pt-28 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-white to-brand-cream/60"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            `url(${heroBackdrop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'lighten'
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="fade-in">
          <span className="section-label">✦ Wellness Reimagined</span>
          <h1 className="heading-display mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold">
            Smart Wellness <br className="hidden sm:block" />
            Guided By <em className="italic text-brand-green">Human Care</em>
          </h1>
          <p className="mt-5 text-gray-600 text-base md:text-lg max-w-xl leading-relaxed">
            Track, breathe, and rediscover your calm self with trusted wellness programs
            that bring balance back to your everyday living.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#lead" className="btn-primary">
              Explore Sessions <ArrowRight size={16} />
            </a>
            <a href="#wellness-areas" className="btn-outline">
              Learn More
            </a>
          </div>

          {/*
            --- Removed per request: avatar stack + "10K+ Established | 50K+ Wellness
            Sessions" stat line (kept for reference, do not delete) ---
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-700">
                <span className="font-semibold text-gray-900">10K+ Established</span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="font-semibold text-gray-900">50K+ Wellness Sessions</span>
              </div>
            </div>
          */}
        </div>

        <div className="relative fade-in">
          <div className="relative rounded-[2rem] overflow-hidden shadow-soft aspect-[4/5] max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <img
              src={heroPortrait}
              alt="A supportive wellness community gathered together"
              className="w-full h-full object-cover"
            />
          </div>
          {/*
            --- Removed per request: "Today's Calm Score 92%" floating card
            (kept for reference, do not delete) ---
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-soft px-5 py-4 border border-brand-sage/40">
              <p className="text-xs text-gray-500">Today's Calm Score</p>
              <p className="font-display text-2xl text-brand-green">92%</p>
            </div>
          */}
        </div>
      </div>
    </section>
  );
}
