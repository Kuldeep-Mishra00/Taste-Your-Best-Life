// Accepts a bare YouTube video ID or any common YouTube URL (watch, youtu.be
// share links with ?si=, embed, shorts) and returns just the 11-char video ID.
// Falls back to the trimmed input so a plain ID passes through unchanged.
export function youtubeId(input) {
  if (!input) return '';
  const s = String(input).trim();

  // Already a bare id — no URL punctuation.
  if (!/[/?=&]/.test(s)) return s;

  const patterns = [
    /youtu\.be\/([\w-]{11})/,
    /youtube\.com\/embed\/([\w-]{11})/,
    /youtube\.com\/shorts\/([\w-]{11})/,
    /[?&]v=([\w-]{11})/,
  ];
  for (const re of patterns) {
    const m = s.match(re);
    if (m) return m[1];
  }

  // Last resort: first 11-char token that looks like an id.
  const generic = s.match(/([\w-]{11})/);
  return generic ? generic[1] : s;
}
