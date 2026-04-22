import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { logo } from '../utils/images.js';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Wellness Areas', href: '#wellness-areas' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Our Story', href: '#our-story' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Taste Your Best Life"
            className="h-9 w-9 object-contain"
          />
          <span className="font-display font-semibold text-lg md:text-xl text-gray-900">
            Taste Your Best Life
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-brand-green transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#lead" className="hidden lg:inline-flex btn-primary text-sm py-2.5">
          Start Your Journey
        </a>

        <button
          className="lg:hidden p-2 text-gray-800"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <ul className="px-4 py-4 space-y-3 text-gray-700 font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-2">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#lead" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
                Start Your Journey
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
