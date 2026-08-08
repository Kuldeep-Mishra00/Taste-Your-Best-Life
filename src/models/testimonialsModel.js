import { getJson } from './httpClient.js';

export const fetchTestimonials = () => getJson('/api/content/testimonials');
