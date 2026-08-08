import { useEffect, useState } from 'react';
import { fetchTestimonials } from '../models/testimonialsModel.js';
import { testimonialAvatars as av } from '../utils/images.js';

const FALLBACK_TESTIMONIALS = [
  {
    name: 'Priya Ramesh',
    location: 'Mumbai, Maharashtra',
    avatar: av.priya,
    rating: 5,
    quote:
      'What changed was the whole rhythm of my day — cleaner food, better sleep, morning walks. Six months in, this feels like my life now, not a program.',
    tag: 'Lifestyle'
  },
  {
    name: 'Arjun Patel',
    location: 'Bengaluru, Karnataka',
    avatar: av.arjun,
    rating: 5,
    quote:
      'The mindfulness coaching reshaped how I handle stress. I sleep better, focus deeper, and no longer carry work anxiety into my evenings.',
    tag: 'Mental Wellness'
  },
  {
    name: 'Ananya Sharma',
    location: 'New Delhi',
    avatar: av.ananya,
    rating: 5,
    quote:
      'I used to skip breakfast and crash by 4 PM. Their nutritionist rebuilt my plate around Indian foods I actually eat — the energy shift was immediate.',
    tag: 'Nutrition'
  },
  {
    name: 'Rahul Mehta',
    location: 'Pune, Maharashtra',
    avatar: av.rahul,
    rating: 5,
    quote:
      'Down 14 kilos in five months without a crash diet. My coach kept the plan realistic around my travel schedule — that is why it finally stuck.',
    tag: 'Weight Loss'
  },
  {
    name: 'Meera Krishnan',
    location: 'Hyderabad, Telangana',
    avatar: av.meera,
    rating: 5,
    quote:
      'Postpartum recovery felt impossible until I joined. Gentle movement, hormone-aware nutrition, real check-ins. I feel like myself again.',
    tag: 'Women’s Health'
  },
  {
    name: 'Sneha Iyer',
    location: 'Chennai, Tamil Nadu',
    avatar: av.sneha,
    rating: 5,
    quote:
      'I had tried three diets before this. The difference here was the coach listening to me — to my hostel food, my exam stress, my family meals — and building around it.',
    tag: 'Nutrition'
  },
  {
    name: 'Vikram Joshi',
    location: 'Jaipur, Rajasthan',
    avatar: av.vikram,
    rating: 5,
    quote:
      'My sleep went from 4 broken hours to 7 solid ones in six weeks. The breathing routine alone was worth the entire program.',
    tag: 'Sleep'
  },
  {
    name: 'Neha Tripathi',
    location: 'Lucknow, Uttar Pradesh',
    avatar: av.neha,
    rating: 5,
    quote:
      'Honest, grounded, no gimmicks. My coach treated me like a person, not a checklist — and the results showed in my blood work too.',
    tag: 'Holistic'
  },
  {
    name: 'Kabir Ahmed',
    location: 'Kolkata, West Bengal',
    avatar: av.kabir,
    rating: 5,
    quote:
      'I was skeptical about online wellness, but the accountability was real. Weekly calls, tiny adjustments, compounding results. Highly recommend.',
    tag: 'Lifestyle'
  }
];

const FALLBACK_AVATARS = Object.values(av);

export function useTestimonialsController() {
  const [testimonials, setTestimonials] = useState(FALLBACK_TESTIMONIALS);

  useEffect(() => {
    fetchTestimonials().then((data) => {
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
    });
  }, []);

  return { testimonials };
}
