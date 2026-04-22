import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { logo } from '../utils/images.js';

const cols = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Our Story', href: '#our-story' },
      { label: 'Wellness Areas', href: '#wellness-areas' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Start Your Journey', href: '#lead' },
      { label: 'FAQs', href: '#faq' }
    ]
  },
  {
    title: 'We Help With',
    links: [
      { label: 'Weight Management', href: '#wellness-areas' },
      { label: 'Mindful Living', href: '#wellness-areas' },
      { label: 'Better Sleep', href: '#wellness-areas' },
      { label: 'Stress & Calm', href: '#wellness-areas' },
      { label: 'Everyday Nutrition', href: '#wellness-areas' }
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact', href: '#lead' },
      { label: 'FAQs', href: '#faq' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Taste Your Best Life"
              className="h-9 w-9 object-contain bg-white/10 p-1 rounded"
            />
            <span className="font-display text-lg text-white">Taste Your Best Life</span>
          </div>
          <p className="mt-4 text-sm text-gray-400 max-w-sm leading-relaxed">
            Smart wellness guided by human care — helping you heal, grow, and thrive
            through personalized holistic programs.
          </p>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-white font-semibold mb-4">{c.title}</h4>
            <ul className="space-y-2 text-sm">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white transition">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 grid place-items-center rounded-full border border-gray-700 hover:border-brand-green hover:text-white transition"
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© 2025 Taste Your Best Life. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
