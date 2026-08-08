// Shared low-level fetch helper every model builds on. Not a model itself —
// just the transport plumbing (base URL, JSON parsing, silent-fail-to-null
// so a down/undeployed API degrades to each view's fallback content instead
// of throwing).
const API_URL = import.meta.env.VITE_API_URL || '';

export async function getJson(path) {
  try {
    const res = await fetch(`${API_URL}${path}`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function postJson(path, body) {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      return { ok: false, error: data.error || `Request failed (${res.status})` };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err.message || 'Network error' };
  }
}
