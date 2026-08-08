import { useEffect, useState } from 'react';
import { fetchHome } from '../models/homeModel.js';
import { heroPortrait as fallbackPortrait, heroBackdrop as fallbackBackdrop } from '../utils/images.js';

const FALLBACK_PORTRAIT_ALT = 'A supportive wellness community gathered together';

export function useHomeController() {
  const [heroPortrait, setHeroPortrait] = useState(fallbackPortrait);
  const [heroPortraitAlt, setHeroPortraitAlt] = useState(FALLBACK_PORTRAIT_ALT);
  const [heroBackdrop, setHeroBackdrop] = useState(fallbackBackdrop);

  useEffect(() => {
    fetchHome().then((data) => {
      if (data?.heroPortrait?.url) {
        setHeroPortrait(data.heroPortrait.url);
        if (data.heroPortrait.altText) setHeroPortraitAlt(data.heroPortrait.altText);
      }
      if (data?.heroBackdrop?.url) setHeroBackdrop(data.heroBackdrop.url);
    });
  }, []);

  return { heroPortrait, heroPortraitAlt, heroBackdrop };
}
