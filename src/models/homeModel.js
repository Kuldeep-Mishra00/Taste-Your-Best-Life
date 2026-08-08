import { getJson } from './httpClient.js';

export const fetchHome = () => getJson('/api/content/home');
