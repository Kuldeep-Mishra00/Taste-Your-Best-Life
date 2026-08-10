import { useState } from 'react';

// Renders an image that fades in once its bytes have actually decoded. While
// `src` is falsy (home content still loading) it shows a neutral pulsing
// placeholder instead of flashing the previously-bundled image. This is what
// stops the "old image for ~1s, then the new one" swap on the landing page.
export default function FadeImage({ src, alt = '', className = '', placeholderClassName = '' }) {
  const [decoded, setDecoded] = useState(false);

  if (!src) {
    return (
      <div
        className={`${className} ${placeholderClassName} bg-brand-cream dark:bg-gray-800 animate-pulse`}
        aria-hidden
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onLoad={() => setDecoded(true)}
      className={`${className} transition-opacity duration-500 ${decoded ? 'opacity-100' : 'opacity-0'}`}
    />
  );
}
