import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Apple, Dumbbell, Droplets, Moon, Smile, Users, UserCheck } from 'lucide-react';

// Static by design — not admin-panel editable. Content sourced from
// tybl_our_philosophy.html — "Our Philosophy: The 7 Pillars of Good Health"
const intro =
  "True transformation isn't about quick shortcuts or crash diets — it's about building " +
  'long-lasting, healthy daily habits. Our holistic approach rests on seven foundational ' +
  'pillars designed to nourish your body, strengthen your mind, and support a vibrant lifestyle.';

const pillars = [
  {
    icon: Apple,
    title: 'Balanced Nutrition',
    body: 'Food is fuel, not the enemy. We focus on feeding your body the optimal balance of essential vitamins, minerals, quality protein, and wholesome nutrients it needs to thrive every single day — without sacrificing the joy of eating.'
  },
  {
    icon: Dumbbell,
    title: 'Daily Active Exercise',
    body: "Movement is life. Whether it's a quick 20-minute morning workout, a brisk daily walk, or structured fitness routines, keeping your body active boosts your metabolic health, energy levels, and overall vitality."
  },
  {
    icon: Droplets,
    title: 'Proper Hydration',
    body: 'Water is the essential foundation for every cellular function in your body. Adequate daily water intake improves digestion, flushes toxins, enhances skin radiance, and sustains peak energy throughout the day.'
  },
  {
    icon: Moon,
    title: 'Restorative Sleep',
    body: 'Recovery is where real physical and mental transformation happens. Quality sleep resets your focus, repairs muscle tissues, balances vital hormones, and ensures you wake up fully re-energized.'
  },
  {
    icon: Smile,
    title: 'Positive Mindset',
    body: 'A healthy body starts with a resilient mind. Developing a constructive, growth-oriented mindset helps you stay disciplined, handle daily stress, and remain consistent on your wellness journey.'
  },
  {
    icon: Users,
    title: 'Healthy Socialization',
    body: 'Transformation is easier and more inspiring when shared. Surrounding yourself with an encouraging, health-conscious community builds mutual accountability, keeps you motivated, and makes wellness fun.'
  },
  {
    icon: UserCheck,
    title: 'Personal Coaching & Guidance',
    body: 'Having a roadmap is good, but having a dedicated guide guarantees success. A personal wellness coach provides tailored guidance, monitors your daily progress, and keeps you accountable every step of the way.'
  }
];

export default function OurPhilosophy({ onOpenLead }) {
  const gridRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="philosophy" className="py-16 md:py-24 bg-brand-cream/40">
      <div className="w-full px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
          <span className="section-label justify-center">✦ Our Philosophy</span>
          <h2 className="heading-display mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold">
            The <em className="italic text-brand-green">7 Pillars</em> of Good Health
          </h2>
          <p className="mt-4 text-gray-600">{intro}</p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                style={{ transitionDelay: inView ? `${i * 90}ms` : '0ms' }}
                className={`group bg-white rounded-2xl border border-brand-sage/50 p-6 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1.5 hover:shadow-soft hover:border-brand-green/40 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 shrink-0 rounded-full bg-brand-green/10 text-brand-green grid place-items-center transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-brand-green group-hover:text-white">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand-green/70">
                      Pillar {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="font-display text-lg font-semibold text-gray-900 leading-snug">
                      {p.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{p.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 md:mt-14 rounded-3xl border border-dashed border-brand-green/40 bg-white px-6 py-8 md:py-10 text-center">
          <h3 className="heading-display text-xl md:text-2xl font-semibold">
            Ready to start your transformation?
          </h3>
          <p className="mt-2 text-gray-600">Connect with your personal wellness coach today.</p>
          <button onClick={onOpenLead} className="btn-primary mt-6 inline-flex">
            Start Your Journey <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
