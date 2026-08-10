import { useEffect, useState } from 'react';
import { fetchHome } from '../models/homeModel.js';
import {
  heroPortrait as fallbackPortrait,
  heroBackdrop as fallbackBackdrop,
  logo as fallbackLogo,
  sessionsBanner as fallbackSessionsBanner
} from '../utils/images.js';

const FALLBACK_PORTRAIT_ALT = 'A supportive wellness community gathered together';
const FALLBACK_WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '';
const FALLBACK_WHATSAPP_MESSAGE = "Hi! I'd like to know more about your wellness programs.";

// Fetch the home content ONCE per page load and share it across every
// component that needs it (Hero, Navbar, Footer, SessionsBanner, …), instead
// of each firing its own request. Resolves to the server doc, or null if the
// API is unreachable (so the bundled fallbacks kick in).
let homePromise = null;
function loadHomeOnce() {
  if (!homePromise) homePromise = fetchHome().catch(() => null);
  return homePromise;
}

export function useHomeController() {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let alive = true;
    loadHomeOnce().then((d) => {
      if (!alive) return;
      setData(d);
      setLoaded(true);
    });
    return () => { alive = false; };
  }, []);

  // Before the fetch resolves, image URLs are null so consumers show a neutral
  // placeholder rather than flashing the bundled/previous image. Once loaded,
  // use the admin-set image — or the bundled fallback only if none is set.
  const pick = (serverUrl, fallback) => (loaded ? serverUrl || fallback : null);

  return {
    loaded,
    heroPortrait: pick(data?.heroPortrait?.url, fallbackPortrait),
    heroPortraitAlt: data?.heroPortrait?.altText || FALLBACK_PORTRAIT_ALT,
    heroBackdrop: pick(data?.heroBackdrop?.url, fallbackBackdrop),
    logo: pick(data?.logo?.url, fallbackLogo),
    sessionsBanner: pick(data?.sessionsBanner?.url, fallbackSessionsBanner),
    whatsappNumber: data?.whatsapp?.number || FALLBACK_WHATSAPP_NUMBER,
    whatsappMessage: data?.whatsapp?.message || FALLBACK_WHATSAPP_MESSAGE,
    metaPixelId: data?.metaPixelId || '',
  };
}
