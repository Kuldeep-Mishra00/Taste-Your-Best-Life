import { useState } from 'react';
import { submitLead } from '../models/leadModel.js';

// Owns submission state/side-effects. Form field registration/validation
// (react-hook-form) stays in the view — that's presentation concern, not
// data access.
export function useLeadFormController() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  async function submit(data) {
    setServerError('');
    setSubmitting(true);
    const result = await submitLead(data);
    setSubmitting(false);

    if (result.ok) {
      // Report the conversion to Meta Ads so it shows up as a "Lead" event.
      // No-op if no Pixel ID is configured (fbq is never loaded).
      if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq('track', 'Lead');
      }
      setSubmitted(true);
    } else {
      setServerError(result.error || 'Submission failed. Please try again in a moment.');
    }
  }

  return { submitting, serverError, submitted, submit };
}
