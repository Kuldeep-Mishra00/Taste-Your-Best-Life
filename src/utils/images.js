import brandLogo from './assets/logo.png';

import heroAvatar1 from './assets/hero-avatar-1.jpg';
import heroAvatar2 from './assets/hero-avatar-2.jpg';
import heroAvatar3 from './assets/hero-avatar-3.jpg';
import heroAvatar4 from './assets/hero-avatar-4.jpg';

// import heroPortraitImg from './assets/hero-portrait.jpg'; // no longer used — hero portrait now points to a stock URL below
import heroBackdropImg from './assets/hero-backdrop.jpg';
import dedicatedImg from './assets/dedicated.jpg';

import weightLossImg from './assets/weight-loss.jpg';
import weightGainImg from './assets/weight-gain.jpg';
import communityImg from './assets/community.jpg';

import sessionsBannerImg from './assets/sessions-banner.jpg';

import tPriya from './assets/testimonial-priya.jpg';
import tArjun from './assets/testimonial-arjun.jpg';
import tAnanya from './assets/testimonial-ananya.jpg';
import tRahul from './assets/testimonial-rahul.jpg';
import tMeera from './assets/testimonial-meera.jpg';
import tSneha from './assets/testimonial-sneha.jpg';
import tVikram from './assets/testimonial-vikram.jpg';
import tNeha from './assets/testimonial-neha.jpg';
import tKabir from './assets/testimonial-kabir.jpg';

export const logo = brandLogo;

export const heroAvatars = [heroAvatar1, heroAvatar2, heroAvatar3, heroAvatar4];

// export const heroPortrait = heroPortraitImg; // original local hero portrait — kept for reference, do not delete
// export const heroPortrait = 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=80&auto=format&fit=crop'; // yoga version — kept for reference, do not delete
export const heroPortrait = 'https://images.unsplash.com/photo-1550096141-7263640aa48c?w=900&q=80&auto=format&fit=crop';
export const heroBackdrop = heroBackdropImg;

export const dedicatedImage = dedicatedImg;

export const weightLossImage = weightLossImg;
export const weightGainImage = weightGainImg;
export const communityImage = communityImg;

// New Wellness Area topics (stock photos via Unsplash CDN).
// Swap these URLs for your own photography any time — just replace the string,
// no build step needed since they're plain hotlinked URLs, not bundled assets.
export const skinCareImage = 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?w=1200&q=80&auto=format&fit=crop';
export const kidNutritionImage = 'https://images.unsplash.com/photo-1595183241165-f6ba98b7d4eb?w=1200&q=80&auto=format&fit=crop';
export const eyeNutritionImage = 'https://images.unsplash.com/photo-1516220362602-dba5272034e7?w=1200&q=80&auto=format&fit=crop';

export const sessionsBanner = sessionsBannerImg;

export const testimonialAvatars = {
  priya: tPriya,
  arjun: tArjun,
  ananya: tAnanya,
  rahul: tRahul,
  meera: tMeera,
  sneha: tSneha,
  vikram: tVikram,
  neha: tNeha,
  kabir: tKabir
};
