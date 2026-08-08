import { useEffect, useState } from 'react';
import { fetchWellnessAreas } from '../models/wellnessAreasModel.js';
import { weightLossImage, skinCareImage, kidNutritionImage } from '../utils/images.js';

// Each card carries an `id` (used to track which card is expanded) and a
// `videos` array of YouTube video IDs. Add real videos via the admin panel
// — they show up as embedded players when a visitor expands that card.
const FALLBACK_CARDS = [
  {
    id: 'weight-management',
    image: weightLossImage,
    kicker: 'Weight Management',
    title: 'Personalized weight management — whether your goal is to lose, gain, or simply feel stronger, built around real Indian kitchens and schedules.',
    tags: ['Weight Loss', 'Weight Gain'],
    videos: []
  },
  {
    id: 'skin-care',
    image: skinCareImage,
    kicker: 'Skin Care',
    title: 'Radiant, healthy skin through nutrition, hydration, and the right daily habits.',
    tags: ['Hydration', 'Nutrition', 'Skin Health'],
    videos: []
  },
  {
    id: 'child-nutrition',
    image: kidNutritionImage,
    kicker: 'Child Nutrition',
    title: 'Balanced, kid-approved meal plans that support growth, focus, and everyday wellness.',
    tags: ['Growth', 'Wellness', 'Picky Eaters'],
    videos: []
  }
];

export function useWellnessAreasController() {
  const [cards, setCards] = useState(FALLBACK_CARDS);

  useEffect(() => {
    fetchWellnessAreas().then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        setCards(data.map((item, i) => ({
          id: item._id,
          image: item.image?.url || FALLBACK_CARDS[i % FALLBACK_CARDS.length].image,
          kicker: item.kicker || '',
          title: item.title,
          tags: item.tags || [],
          videos: item.videos || [],
        })));
      }
    });
  }, []);

  return { cards };
}
