import { getJson } from './httpClient.js';

export const fetchFooterLinks = () => getJson('/api/content/footer-links');
