import { Fragment, useState } from 'react';
import { Check, ArrowRight, ChevronDown, X, PlayCircle } from 'lucide-react';
import { useWellnessAreasController } from '../controllers/useWellnessAreasController.js';
import { youtubeId } from '../utils/youtube.js';

// --- Original Wellness Areas dataset (kept for reference, do not delete) ---
// const cards = [
//   {
//     image: weightLossImage,
//     kicker: 'Weight Loss',
//     title: 'Sustainable weight loss that fits Indian kitchens and real schedules.',
//     tags: ['Cardio', 'Nutrition', 'Tracking']
//   },
//   {
//     image: weightGainImage,
//     kicker: 'Weight Gain',
//     title: 'Build strength and healthy mass with guided training and meal plans.',
//     tags: ['Strength', 'Protein', 'Recovery']
//   },
//   {
//     image: communityImage,
//     kicker: 'Healthy Community',
//     title: 'Grow alongside a supportive community — accountability that actually lasts.',
//     tags: ['Group Support', 'Coaching', 'Habits']
//   }
// ];
// --- End original dataset ---

// --- Previous 6-topic dataset (kept for reference, do not delete) ---
// const cards = [
//   {
//     id: 'weight-loss',
//     image: weightLossImage,
//     kicker: 'Weight Loss',
//     title: 'Sustainable weight loss that fits Indian kitchens and real schedules.',
//     tags: ['Cardio', 'Nutrition', 'Tracking'],
//     videos: []
//   },
//   {
//     id: 'weight-gain',
//     image: weightGainImage,
//     kicker: 'Weight Gain',
//     title: 'Build strength and healthy mass with guided training and meal plans.',
//     tags: ['Strength', 'Protein', 'Recovery'],
//     videos: []
//   },
//   {
//     id: 'healthy-community',
//     image: communityImage,
//     kicker: 'Healthy Community',
//     title: 'Grow alongside a supportive community — accountability that actually lasts.',
//     tags: ['Group Support', 'Coaching', 'Habits'],
//     videos: []
//   },
//   {
//     id: 'skin-care',
//     image: skinCareImage,
//     kicker: 'Skin Care',
//     title: 'Radiant, healthy skin through nutrition, hydration, and the right daily habits.',
//     tags: ['Hydration', 'Diet', 'Skin Health'],
//     videos: []
//   },
//   {
//     id: 'kid-nutrition',
//     image: kidNutritionImage,
//     kicker: 'Kid Nutrition',
//     title: 'Balanced, kid-approved meal plans that support growth, focus, and immunity.',
//     tags: ['Growth', 'Immunity', 'Picky Eaters'],
//     videos: []
//   },
//   {
//     id: 'eye-nutrition',
//     image: eyeNutritionImage,
//     kicker: 'Eye Nutrition',
//     title: 'Nutrient-rich guidance to protect your vision and ease digital eye strain.',
//     tags: ['Vision Care', 'Antioxidants', 'Screen Health'],
//     videos: []
//   }
// ];
// --- End previous 6-topic dataset ---

// Fallback data + fetch/merge logic now live in useWellnessAreasController.

export default function WhyChooseUs({ onOpenLead }) {
  const { cards } = useWellnessAreasController();
  const [openCardId, setOpenCardId] = useState(null);
  // When a card's dropdown is open, it starts on the "details" (h3) view.
  // Clicking the "Watch Testimonials" button inside the dropdown switches to this view.
  const [showVideos, setShowVideos] = useState(false);

  const toggleCard = (id) => {
    setOpenCardId((current) => (current === id ? null : id));
    setShowVideos(false);
  };

  return (
    <section id="wellness-areas" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="w-full px-4 md:px-8">
        <div className="max-w-2xl mb-10 md:mb-14">
          <span className="section-label">✦ Where We Help</span>
          <h2 className="heading-display mt-4 text-3xl md:text-4xl font-semibold">
            Wellness that fits <em className="italic text-brand-green">every journey</em>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Three focus areas, one personalized plan — whatever your goal, our specialists
            build a path that fits your body, your family, and your life. Tap a topic to
            watch real video testimonials.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => {
            const isOpen = openCardId === c.id;
            return (
              <Fragment key={c.id}>
                {/*
                  --- Original card markup (kept for reference, do not delete) ---
                  <article className="relative rounded-3xl overflow-hidden min-h-[380px] group">
                    <img src={c.image} alt={c.kicker} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
                    <div className="relative h-full flex flex-col justify-between p-7 text-white">
                      <span className="self-start inline-block text-[11px] uppercase tracking-[0.22em] px-3 py-1 rounded-full bg-white/15 backdrop-blur border border-white/30">
                        {c.kicker}
                      </span>
                      <div>
                        <h3 className="font-display text-xl md:text-2xl leading-snug">{c.title}</h3>
                        <div className="mt-4 flex flex-wrap gap-2 text-xs">
                          {c.tags.map((t) => (
                            <span key={t} className="px-3 py-1 bg-white/15 backdrop-blur rounded-full border border-white/25 inline-flex items-center gap-1">
                              <Check size={12} /> {t}
                            </span>
                          ))}
                        </div>
                        <a href="#lead" className="mt-5 inline-flex items-center gap-2 font-medium hover:gap-3 transition-all">
                          Start now <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  </article>
                  --- End original card markup ---
                */}
                {/*
                  --- Card markup before the "Read More" redesign (kept for reference, do not delete) ---
                  <article role="button" tabIndex={0} aria-expanded={isOpen} onClick={() => toggleCard(c.id)} className="relative rounded-3xl overflow-hidden min-h-[380px] group cursor-pointer">
                    <img src={c.image} alt={c.kicker} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                    <div className="absolute inset-0 bg-black/35" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />
                    <div className="relative h-full flex flex-col justify-between p-7 text-white">
                      <div className="flex items-center justify-between gap-2">
                        <span>{c.kicker}</span>
                        <ChevronDown size={18} />
                      </div>
                      <div className="bg-black/45 backdrop-blur-sm rounded-2xl p-4 -mx-1">
                        <h3 className="font-display text-xl md:text-2xl leading-snug">{c.title}</h3>
                        <div className="mt-4 flex flex-wrap gap-2 text-xs">
                          {c.tags.map((t) => (<span key={t}><Check size={12} /> {t}</span>))}
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-3">
                          <a href="#lead" onClick={(e) => e.stopPropagation()}>Start now <ArrowRight size={16} /></a>
                          <span><PlayCircle size={14} /> {isOpen ? 'Hide' : 'Watch'} testimonials</span>
                        </div>
                      </div>
                    </div>
                  </article>

                  {isOpen && (
                    <div className="col-span-full rounded-3xl border border-brand-sage/50 bg-brand-cream/40 p-6 md:p-8">
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div>
                          <span className="section-label">▶ Video Testimonials</span>
                          <h4 className="font-display text-lg md:text-xl text-gray-900 mt-1">{c.kicker} — real stories from real clients</h4>
                        </div>
                        <button onClick={() => setOpenCardId(null)}><X size={18} /></button>
                      </div>
                      {c.videos.length > 0 ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                          {c.videos.map((videoId) => (
                            <div key={videoId} className="aspect-video rounded-2xl overflow-hidden shadow-soft bg-black">
                              <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${videoId}`} title={`${c.kicker} video testimonial`} allowFullScreen />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p>No video testimonials for {c.kicker} yet. ...</p>
                      )}
                    </div>
                  )}
                  --- End card markup before "Read More" redesign ---
                */}
                <article
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onClick={() => toggleCard(c.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleCard(c.id);
                    }
                  }}
                  className={`relative rounded-3xl overflow-hidden min-h-[380px] group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand-green transition ${
                    isOpen ? 'ring-2 ring-brand-green' : ''
                  }`}
                >
                  <img
                    src={c.image}
                    alt={c.kicker}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  {/* Stronger, full-bleed scrim so card text stays fully readable no matter how bright the photo is */}
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />
                  <div className="relative h-full flex flex-col justify-between p-7 text-white">
                    <div className="flex items-center justify-between gap-2">
                      <span className="self-start inline-block text-[11px] uppercase tracking-[0.22em] px-3 py-1 rounded-full bg-black/40 backdrop-blur border border-white/30 [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">
                        {c.kicker}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 transition-transform duration-300 drop-shadow ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </div>
                    <div className="bg-black/45 backdrop-blur-sm rounded-2xl p-4 -mx-1">
                      <div className="flex flex-wrap gap-2 text-xs">
                        {c.tags.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 bg-black/40 backdrop-blur rounded-full border border-white/30 inline-flex items-center gap-1 [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]"
                          >
                            <Check size={12} /> {t}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5 flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); onOpenLead(); }}
                          className="inline-flex items-center gap-2 font-medium hover:gap-3 transition-all"
                        >
                          Start now <ArrowRight size={16} />
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 text-xs font-medium text-white/90 hover:text-white transition"
                        >
                          {isOpen ? 'Close' : 'Read More'}
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>

                {isOpen && (
                  <div className="col-span-full rounded-3xl border border-brand-sage/50 dark:border-gray-700 bg-brand-cream/40 dark:bg-gray-800 p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div>
                        <span className="section-label">
                          {showVideos ? '▶ Video Testimonials' : '✦ Full Details'}
                        </span>
                        {showVideos ? (
                          <h4 className="font-display text-lg md:text-xl text-gray-900 dark:text-gray-100 mt-1">
                            {c.kicker} — real stories from real clients
                          </h4>
                        ) : (
                          <h3 className="font-display text-lg md:text-xl text-gray-900 dark:text-gray-100 mt-1 leading-snug">
                            {c.title}
                          </h3>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => setOpenCardId(null)}
                        aria-label="Close details"
                        className="shrink-0 p-2 rounded-full hover:bg-black/5 text-gray-500"
                      >
                        <X size={18} />
                      </button>
                    </div>

                    {!showVideos ? (
                      <div className="space-y-4">
                        {c.detailImage && (
                          <div className="rounded-2xl overflow-hidden shadow-soft max-w-2xl">
                            <img
                              src={c.detailImage}
                              alt={`${c.kicker} product`}
                              className="w-full max-h-80 object-cover"
                            />
                          </div>
                        )}
                        {c.detailVideo && (
                          <div className="rounded-2xl overflow-hidden shadow-soft bg-black max-w-2xl aspect-video">
                            <iframe
                              className="w-full h-full"
                              src={`https://www.youtube.com/embed/${youtubeId(c.detailVideo)}`}
                              title={`${c.kicker} product video`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            />
                          </div>
                        )}
                        <button
                          type="button"
                          onClick={() => setShowVideos(true)}
                          className="btn-primary"
                        >
                          <PlayCircle size={16} /> Watch Testimonials
                        </button>
                      </div>
                    ) : (
                      <>
                        {c.videos.length > 0 ? (
                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {c.videos.map((videoId) => (
                              <div key={videoId} className="aspect-video rounded-2xl overflow-hidden shadow-soft bg-black">
                                <iframe
                                  className="w-full h-full"
                                  src={`https://www.youtube.com/embed/${youtubeId(videoId)}`}
                                  title={`${c.kicker} video testimonial`}
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  referrerPolicy="strict-origin-when-cross-origin"
                                  allowFullScreen
                                />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xl">
                            No video testimonials for {c.kicker} yet. Upload a video to YouTube, copy its
                            video ID (the part after <code className="px-1 py-0.5 bg-black/5 rounded">v=</code> in
                            the URL), then add it to this Wellness Area from the admin panel — it will show
                            up here automatically.
                          </p>
                        )}
                        <button
                          type="button"
                          onClick={() => setShowVideos(false)}
                          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-green hover:gap-2 transition-all"
                        >
                          ← Back to details
                        </button>
                      </>
                    )}
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
