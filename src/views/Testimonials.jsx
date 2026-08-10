import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTestimonialsController } from '../controllers/useTestimonialsController.js';
import FadeImage from './FadeImage.jsx';

export default function Testimonials() {
  const { testimonials, loaded } = useTestimonialsController();
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let rafId;
    let last = performance.now();
    const speed = 40;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!paused && el) {
        el.scrollLeft += speed * dt;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [paused]);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: 'smooth' });
  };

  const loop = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-brand-cream/60 dark:bg-gray-900">
      <div className="w-full px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <span className="section-label">★ What Our Community Says</span>
            <h2 className="heading-display mt-4 text-3xl md:text-4xl font-semibold">
              Real Stories, <em className="italic text-brand-green">Real Transformations</em>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Thousands have transformed their lives through our personalized wellness programs.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollByCard(-1)}
              aria-label="Previous"
              className="w-11 h-11 rounded-full border border-brand-sage dark:border-gray-600 dark:text-gray-300 hover:border-brand-green hover:text-brand-green grid place-items-center transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollByCard(1)}
              aria-label="Next"
              className="w-11 h-11 rounded-full border border-brand-sage dark:border-gray-600 dark:text-gray-300 hover:border-brand-green hover:text-brand-green grid place-items-center transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brand-cream/60 dark:from-gray-900 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brand-cream/60 dark:from-gray-900 to-transparent z-10" />

        <div
          ref={trackRef}
          className="testimonial-track flex gap-5 overflow-x-auto scroll-smooth px-4 md:px-8 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`
            .testimonial-track::-webkit-scrollbar { display: none; }
          `}</style>
          {loop.map((t, idx) => (
            <article
              key={idx}
              className="shrink-0 w-[300px] md:w-[340px] bg-white dark:bg-gray-800 rounded-2xl border border-brand-sage/60 dark:border-gray-700 shadow-sm hover:shadow-soft transition p-6 flex flex-col"
            >
              <div className="flex items-center gap-3">
                <FadeImage src={loaded ? t.avatar : null} alt={t.name} className="w-12 h-12 rounded-full object-cover" placeholderClassName="rounded-full" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{t.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t.location}</p>
                </div>
              </div>
              <div className="flex mt-4 text-amber-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex-1">"{t.quote}"</p>
              <span className="inline-block mt-5 self-start text-xs px-3 py-1 rounded-full bg-brand-green/10 text-brand-green font-medium">
                {t.tag}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
