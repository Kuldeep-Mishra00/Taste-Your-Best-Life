import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { useFestivePromotion } from '../controllers/useFestivePromotion.js';
import { registerPromotionClick } from '../models/festiveModel.js';
import FadeImage from './FadeImage.jsx';

// Shows an entry flyer when a festive promotion is live (its time window is
// active). Clicking it records a click and opens the lead form pre-tagged
// with the promotion name.
export default function FestiveBanner({ onOpenLead }) {
  const { promo } = useFestivePromotion();
  const [dismissed, setDismissed] = useState(false);

  if (!promo || dismissed) return null;

  function grab() {
    registerPromotionClick(promo._id);
    onOpenLead(promo.name);
    setDismissed(true);
  }

  return (
    <div className="fixed inset-0 z-[90] grid place-items-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setDismissed(true)}
        aria-hidden
      />
      <div className="relative w-full max-w-md max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl fade-in bg-white dark:bg-gray-900 border border-brand-sage/40 dark:border-gray-700">
        <button
          onClick={() => setDismissed(true)}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 grid place-items-center w-8 h-8 rounded-full bg-black/40 text-white hover:bg-black/60 transition"
        >
          <X size={18} />
        </button>

        {promo.image?.url ? (
          <button onClick={grab} className="block w-full" aria-label={promo.name}>
            {/* h-auto + full width shows the whole flyer at its true ratio —
                identical on every device (the modal scrolls if it's tall). */}
            <FadeImage src={promo.image.url} alt={promo.name} className="block w-full h-auto" />
          </button>
        ) : (
          <button onClick={grab} className="block w-full bg-gradient-to-br from-brand-green to-brand-teal p-10 text-center text-white">
            <p className="text-xs uppercase tracking-[0.2em] font-medium opacity-90">Limited-time offer</p>
            <p className="font-display text-3xl font-semibold mt-2 text-white">{promo.name}</p>
          </button>
        )}

        <div className="p-6 text-center">
          {promo.message && <p className="text-gray-700 dark:text-gray-300">{promo.message}</p>}
          <button onClick={grab} className="btn-primary mt-5 inline-flex">
            Grab the offer <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
