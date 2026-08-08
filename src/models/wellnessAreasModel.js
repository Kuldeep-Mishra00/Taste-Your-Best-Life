import { getJson } from './httpClient.js';

export const fetchWellnessAreas = () => getJson('/api/content/wellness-areas');
