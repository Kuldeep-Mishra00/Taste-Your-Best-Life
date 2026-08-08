import { postJson } from './httpClient.js';

// Same {ok, error?} shape LeadForm's controller expects.
export const submitLead = (data) => postJson('/api/leads', data);
