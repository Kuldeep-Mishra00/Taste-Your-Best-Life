import { getJson } from './httpClient.js';

export const fetchFaq = () => getJson('/api/content/faq');
export const fetchFaqDisclaimer = () => getJson('/api/content/faq-disclaimer');
