import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialAvatars as av } from '../utils/images.js';

const testimonials = [
  {
    name: 'Priya Ramesh',
    location: 'Mumbai, Maharashtra',
    avatar: av.priya,
    rating: 5,
    quote:
      'What changed was the whole rhythm of my day — cleaner food, better sleep, morning walks. Six months in, this feels like my life now, not a program.',
    tag: 'Lifestyle'
  },
  {
    name: 'Arjun Patel',
    location: 'Bengaluru, Karnataka',
    avatar: av.arjun,
    rating: 5,
    quote:
      'The mindfulness coaching reshaped how I handle stress. I sleep better, focus deeper, and no longer carry work anxiety into my evenings.',
    tag: 'Mental Wellness'
  },
  {
    name: 'Ananya Sharma',
    location: 'New Delhi',
    avatar: av.ananya,
    rating: 5,
    quote:
      'I used to skip breakfast and crash by 4 PM. Their nutritionist rebuilt my plate around Indian foods I actually eat — the energy shift was immediate.',
    tag: 'Nutrition'
  },
  {
    name: 'Rahul Mehta',
    location: 'Pune, Maharashtra',
    avatar: av.rahul,
    rating: 5,
    quote:
      'Down 14 kilos in five months without a crash diet. My coach kept the plan realistic around my travel schedule — that is why it finally stuck.',
    tag: 'Weight Loss'
  },
  {
    name: 'Meera Krishnan',
    location: 'Hyderabad, Telangana',
    avatar: av.meera,
    rating: 5,
    quote:
      'Postpartum recovery felt impossible until I joined. Gentle movement, hormone-aware nutrition, real check-ins. I feel like myself again.',
    tag: 'Women\u2019s Health'
  },
  {
    name: 'Sneha Iyer',
    location: 'Chennai, Tamil Nadu',
    avatar: av.sneha,
    rating: 5,
    quote:
      'I had tried three diets before this. The difference here was the coach listening to me — to my hostel food, my exam stress, my family meals — and building around it.',
    tag: 'Nutrition'
  },
  {
    name: 'Vikram Joshi',
    location: 'Jaipur, Rajasthan',
    avatar: av.vikram,
    rating: 5,
    quote:
      'My sleep went from 4 broken hours to 7 solid ones in six weeks. The breathing routine alone was worth the entire program.',
    tag: 'Sleep'
  },
  {
    name: 'Neha Tripathi',
    location: 'Lucknow, Uttar Pradesh',
    avatar: av.neha,
    rating: 5,
    quote:
      'Honest, grounded, no gimmicks. My coach treated me like a person, not a checklist — and the results showed in my blood work too.',
    tag: 'Holistic'
  },
  {
    name: 'Kabir Ahmed',
    location: 'Kolkata, West Bengal',
    avatar: av.kabir,
    rating: 5,
    quote:
      'I was skeptical about online wellness, but the accountability was real. Weekly calls, tiny adjustments, compounding results. Highly recommend.',
    tag: 'Lifestyle'
  }
];

export default function Testimonials() {
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
    <section id="testimonials" className="py-16 md:py-24 bg-brand-cream/60">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <span className="section-label">★ What Our Community Says</span>
            <h2 className="heading-display mt-4 text-3xl md:text-4xl font-semibold">
              Real Stories, <em className="italic text-brand-green">Real Transformations</em>
            </h2>
            <p className="mt-4 text-gray-600">
              Thousands have transformed their lives through our personalized wellness programs.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollByCard(-1)}
              aria-label="Previous"
              className="w-11 h-11 rounded-full border border-brand-sage hover:border-brand-green hover:text-brand-green grid place-items-center transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollByCard(1)}
              aria-label="Next"
              className="w-11 h-11 rounded-full border border-brand-sage hover:border-brand-green hover:text-brand-green grid place-items-center transition"
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
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brand-cream/60 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brand-cream/60 to-transparent z-10" />

        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto scroll-smooth px-4 md:px-8 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`
            .testimonial-track::-webkit-scrollbar { display: none; }
          `}</style>
          {loop.map((t, idx) => (
            <article
              key={idx}
              className="shrink-0 w-[300px] md:w-[340px] bg-white rounded-2xl border border-brand-sage/60 shadow-sm hover:shadow-soft transition p-6 flex flex-col"
            >
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.location}</p>
                </div>
              </div>
              <div className="flex mt-4 text-amber-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-700 leading-relaxed flex-1">"{t.quote}"</p>
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
