import { useEffect, useState } from 'react';
import { fetchTestimonials } from '../models/testimonialsModel.js';
import { testimonialAvatars as av } from '../utils/images.js';

// Used only to fill in a missing avatar photo on a real, admin-submitted
// testimonial — not as placeholder/sample testimonial content. The section
// itself only shows real written feedback; see Testimonials.jsx, which
// hides the whole section when there's none.
const FALLBACK_AVATARS = Object.values(av);

// Shared across every component that needs testimonials (the section itself,
// the Navbar link) so they don't each fire their own request.
let testimonialsPromise = null;
function loadTestimonialsOnce() {
  if (!testimonialsPromise) testimonialsPromise = fetchTestimonials().catch(() => null);
  return testimonialsPromise;
}

export function useTestimonialsController() {
  const [testimonials, setTestimonials] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let alive = true;
    loadTestimonialsOnce().then((data) => {
      if (!alive) return;
      if (Array.isArray(data) && data.length > 0) {
        setTestimonials(data.map((item, i) => ({
          name: item.name,
          location: item.location || '',
          avatar: item.avatar?.url || FALLBACK_AVATARS[i % FALLBACK_AVATARS.length],
          rating: item.rating || 5,
          quote: item.quote,
          tag: item.tag || '',
        })));
      }
      setLoaded(true);
    });
    return () => { alive = false; };
  }, []);

  return { testimonials, loaded };
}
