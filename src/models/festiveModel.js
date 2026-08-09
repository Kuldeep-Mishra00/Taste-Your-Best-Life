import { getJson, postJson } from './httpClient.js';

export const fetchActivePromotion = () => getJson('/api/content/festive-promotions/active');

export const registerPromotionClick = (id) =>
  postJson(`/api/content/festive-promotions/${id}/click`, {});
