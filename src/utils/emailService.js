import emailjs from 'emailjs-com';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xxx';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xxx';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_xxx';

export async function sendLeadEmail(data) {
  const payload = {
    name: data.fullName,
    phone: `${data.countryCode} ${data.phone}`,
    email: data.email,
    state: data.state,
    concern_area: data.concernArea || '',
    problem_details: data.problemDetails || '',
    timestamp: new Date().toLocaleString()
  };

  if (
    SERVICE_ID === 'service_xxx' ||
    TEMPLATE_ID === 'template_xxx' ||
    PUBLIC_KEY === 'public_key_xxx'
  ) {
    console.warn('[EmailJS] Credentials not configured. Payload:', payload);
    return { ok: true, simulated: true };
  }

  try {
    const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY);
    return { ok: true, res };
  } catch (err) {
    console.error('[EmailJS] send failed', err);
    return { ok: false, err };
  }
}
