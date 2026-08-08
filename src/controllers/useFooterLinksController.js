import { useEffect, useState } from 'react';
import { fetchFooterLinks } from '../models/footerLinksModel.js';

// No placeholder links — the "Follow Us" section only renders once real
// links exist, so it stays hidden until they're added via the admin panel.
export function useFooterLinksController() {
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    fetchFooterLinks().then((data) => {
      if (Array.isArray(data) && data.length > 0) setSocialLinks(data);
    });
  }, []);

  return { socialLinks };
}
