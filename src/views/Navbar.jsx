import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useHomeController } from '../controllers/useHomeController.js';
import ThemeToggle from './ThemeToggle.jsx';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Our Philosophy', href: '#philosophy' },
  { label: 'Wellness Areas', href: '#wellness-areas' },
  { label: 'Testimonials', href: '#testimonials' }
  // { label: 'Our Story', href: '#our-story' } // "Our Story" section removed per request
];

export default function Navbar({ onOpenLead }) {
  const { logo } = useHomeController();
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
        scrolled
          ? 'bg-white/95 backdrop-blur shadow-sm dark:bg-gray-900/95'
          : 'bg-white/80 backdrop-blur-sm dark:bg-gray-900/80'
      }`}
    >
      <nav className="w-full px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 min-w-0 shrink">
          <img
            src={logo}
            alt="NTYBL"
            className="h-9 w-9 object-contain shrink-0"
          />
          <span className="font-display font-semibold text-base sm:text-lg md:text-xl text-gray-900 dark:text-gray-100 truncate">
            NTYBL
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-brand-green transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button onClick={onOpenLead} className="hidden lg:inline-flex btn-primary text-sm py-2.5">
            Start Your Journey
          </button>

          <button
            className="lg:hidden p-2 text-gray-800 dark:text-gray-200"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900">
          <ul className="px-4 py-4 space-y-3 text-gray-700 dark:text-gray-300 font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-2">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => { setOpen(false); onOpenLead(); }}
                className="btn-primary w-full justify-center"
              >
                Start Your Journey
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
