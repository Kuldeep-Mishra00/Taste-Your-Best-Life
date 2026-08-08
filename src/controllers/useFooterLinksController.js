import { useEffect, useState } from 'react';
import { fetchFooterLinks } from '../models/footerLinksModel.js';

const FALLBACK_SOCIAL_LINKS = [
  { platform: 'facebook', url: '#' },
  { platform: 'instagram', url: '#' },
  { platform: 'twitter', url: '#' },
  { platform: 'youtube', url: '#' },
];

export function useFooterLinksController() {
  const [socialLinks, setSocialLinks] = useState(FALLBACK_SOCIAL_LINKS);

  useEffect(() => {
    fetchFooterLinks().then((data) => {
      if (Array.isArray(data) && data.length > 0) setSocialLinks(data);
    });
  }, []);

  return { socialLinks };
}
