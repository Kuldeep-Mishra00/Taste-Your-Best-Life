import { Check, ArrowRight } from 'lucide-react';
import { weightLossImage, weightGainImage, communityImage } from '../utils/images.js';

const cards = [
  {
    image: weightLossImage,
    kicker: 'Weight Loss',
    title: 'Sustainable weight loss that fits Indian kitchens and real schedules.',
    tags: ['Cardio', 'Nutrition', 'Tracking']
  },
  {
    image: weightGainImage,
    kicker: 'Weight Gain',
    title: 'Build strength and healthy mass with guided training and meal plans.',
    tags: ['Strength', 'Protein', 'Recovery']
  },
  {
    image: communityImage,
    kicker: 'Healthy Community',
    title: 'Grow alongside a supportive community — accountability that actually lasts.',
    tags: ['Group Support', 'Coaching', 'Habits']
  }
];

export default function WhyChooseUs() {
  return (
    <section id="wellness-areas" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-10 md:mb-14">
          <span className="section-label">✦ Where We Help</span>
          <h2 className="heading-display mt-4 text-3xl md:text-4xl font-semibold">
            Wellness that fits <em className="italic text-brand-green">every journey</em>
          </h2>
          <p className="mt-4 text-gray-600">
            Three focus areas, one personalized plan — whether you want to lose weight,
            build strength, or simply live healthier with people who get it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <article
              key={c.kicker}
              className="relative rounded-3xl overflow-hidden min-h-[380px] group"
            >
              <img
                src={c.image}
                alt={c.kicker}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
              <div className="relative h-full flex flex-col justify-between p-7 text-white">
                <span className="self-start inline-block text-[11px] uppercase tracking-[0.22em] px-3 py-1 rounded-full bg-white/15 backdrop-blur border border-white/30">
                  {c.kicker}
                </span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl leading-snug">
                    {c.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-white/15 backdrop-blur rounded-full border border-white/25 inline-flex items-center gap-1"
                      >
                        <Check size={12} /> {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#lead"
                    className="mt-5 inline-flex items-center gap-2 font-medium hover:gap-3 transition-all"
                  >
                    Start now <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
