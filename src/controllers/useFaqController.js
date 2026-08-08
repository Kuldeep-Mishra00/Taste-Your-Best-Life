import { useEffect, useState } from 'react';
import { fetchFaq, fetchFaqDisclaimer } from '../models/faqModel.js';

const FALLBACK_FAQS = [
  {
    q: 'What makes your wellness programs personalized?',
    a: 'Every plan begins with a detailed assessment of your health history, goals, lifestyle, and preferences. Our certified coaches then design a program — nutrition, movement, mindfulness, and sleep — that is built specifically for you, not a template.'
  },
  {
    q: 'Are your wellness programs safe?',
    a: 'Yes. Our programs are guidance-based, designed by certified nutritionists, wellness coaches, and mindfulness specialists following evidence-based practices. We support — not replace — medical care, and we always encourage you to loop in your doctor where relevant.'
  },
  {
    q: 'How long does it take to see results?',
    a: 'Most members notice meaningful shifts in sleep, energy, and mood within 2–4 weeks. Sustainable body-composition changes typically emerge between week 6 and week 12, depending on the program and your starting point.'
  },
  {
    q: 'Can I combine multiple wellness programs?',
    a: 'Absolutely. Many members pair weight-management with mindfulness or sleep optimization. Your coach will sequence them so they support — not overwhelm — each other.'
  },
  {
    q: 'Is there a refund or cancellation policy?',
    a: 'Yes. We offer a 7-day satisfaction window on most programs, and flexible cancellation on ongoing plans. Full policy details are shared at checkout.'
  },
  {
    q: 'Do you offer plans for men and women separately?',
    a: 'Our programs are tailored to individual physiology and goals regardless of gender, with specialized tracks available for hormonal, postpartum, and age-specific needs when relevant.'
  }
];

const FALLBACK_DISCLAIMER = '';

export function useFaqController() {
  const [faqs, setFaqs] = useState(FALLBACK_FAQS);
  const [disclaimer, setDisclaimer] = useState(FALLBACK_DISCLAIMER);

  useEffect(() => {
    fetchFaq().then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        setFaqs(data.map((item) => ({ q: item.question, a: item.answer })));
      }
    });
    fetchFaqDisclaimer().then((data) => {
      if (data?.disclaimer) setDisclaimer(data.disclaimer);
    });
  }, []);

  return { faqs, disclaimer };
}
