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

export function useHomeController() {
  const [heroPortrait, setHeroPortrait] = useState(fallbackPortrait);
  const [heroPortraitAlt, setHeroPortraitAlt] = useState(FALLBACK_PORTRAIT_ALT);
  const [heroBackdrop, setHeroBackdrop] = useState(fallbackBackdrop);
  const [logo, setLogo] = useState(fallbackLogo);
  const [sessionsBanner, setSessionsBanner] = useState(fallbackSessionsBanner);
  const [whatsappNumber, setWhatsappNumber] = useState(FALLBACK_WHATSAPP_NUMBER);
  const [whatsappMessage, setWhatsappMessage] = useState(FALLBACK_WHATSAPP_MESSAGE);
  const [metaPixelId, setMetaPixelId] = useState('');

  useEffect(() => {
    fetchHome().then((data) => {
      if (data?.heroPortrait?.url) {
        setHeroPortrait(data.heroPortrait.url);
        if (data.heroPortrait.altText) setHeroPortraitAlt(data.heroPortrait.altText);
      }
      if (data?.heroBackdrop?.url) setHeroBackdrop(data.heroBackdrop.url);
      if (data?.logo?.url) setLogo(data.logo.url);
      if (data?.sessionsBanner?.url) setSessionsBanner(data.sessionsBanner.url);
      if (data?.whatsapp?.number) setWhatsappNumber(data.whatsapp.number);
      if (data?.whatsapp?.message) setWhatsappMessage(data.whatsapp.message);
      if (data?.metaPixelId) setMetaPixelId(data.metaPixelId);
    });
  }, []);

  return { heroPortrait, heroPortraitAlt, heroBackdrop, logo, sessionsBanner, whatsappNumber, whatsappMessage, metaPixelId };
}
