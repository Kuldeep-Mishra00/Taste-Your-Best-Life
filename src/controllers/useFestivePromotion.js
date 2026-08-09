import { useEffect, useState } from 'react';
import { fetchActivePromotion } from '../models/festiveModel.js';

// Fetches the currently-active festive promotion (if any) once on mount.
// Returns null when nothing is live, so the banner simply doesn't render.
export function useFestivePromotion() {
  const [promo, setPromo] = useState(null);

  useEffect(() => {
    fetchActivePromotion()
      .then((data) => {
        if (data && data.name) setPromo(data);
      })
      .catch(() => {});
  }, []);

  return { promo };
}
