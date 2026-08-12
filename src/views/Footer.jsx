import { Facebook, Instagram, Twitter, Youtube, Link as LinkIcon } from 'lucide-react';
import { useFooterLinksController } from '../controllers/useFooterLinksController.js';
import { useHomeController } from '../controllers/useHomeController.js';
import { useTestimonialsController } from '../controllers/useTestimonialsController.js';
import { useWellnessAreasController } from '../controllers/useWellnessAreasController.js';
import FadeImage from './FadeImage.jsx';

const PLATFORM_ICONS = { facebook: Facebook, instagram: Instagram, twitter: Twitter, youtube: Youtube };

const STATIC_COLS = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '#home' },
      // { label: 'Our Story', href: '#our-story' }, // "Our Story" section removed per request
      { label: 'Wellness Areas', href: '#wellness-areas' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Start Your Journey', href: '#lead' },
      { label: 'FAQs', href: '#faq' }
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
  const { socialLinks } = useFooterLinksController();
  const { logo } = useHomeController();
  const { cards } = useWellnessAreasController();
  const { testimonials, loaded: testimonialsLoaded } = useTestimonialsController();

  // Mirrors whatever Wellness Areas currently exist — add/rename/remove a
  // card in the admin panel and this list updates on its own, no code change.
  const weHelpWithCol = cards.length > 0 && {
    title: 'We Help With',
    links: cards.map((c) => ({ label: c.kicker, href: '#wellness-areas' }))
  };

  // Drop the Testimonials link when that section has nothing to show, same
  // as the Navbar.
  const showTestimonialsLink = !testimonialsLoaded || testimonials.length > 0;
  const quickLinksCol = {
    ...STATIC_COLS[0],
    links: showTestimonialsLink
      ? STATIC_COLS[0].links
      : STATIC_COLS[0].links.filter((l) => l.href !== '#testimonials'),
  };
  const cols = weHelpWithCol ? [quickLinksCol, weHelpWithCol, STATIC_COLS[1]] : [quickLinksCol, STATIC_COLS[1]];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="w-full px-4 md:px-8 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <FadeImage
              src={logo}
              alt="NTYBL"
              className="h-9 w-9 object-contain bg-white/10 p-1 rounded"
              placeholderClassName="rounded"
            />
            <span className="font-display text-lg text-white">NTYBL</span>
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

        {socialLinks.length > 0 && (
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((link, i) => {
                const Icon = PLATFORM_ICONS[link.platform?.toLowerCase()] || LinkIcon;
                return (
                  <a
                    key={link.platform || i}
                    href={link.url || '#'}
                    target={link.url && link.url !== '#' ? '_blank' : undefined}
                    rel={link.url && link.url !== '#' ? 'noopener noreferrer' : undefined}
                    className="w-9 h-9 grid place-items-center rounded-full border border-gray-700 hover:border-brand-green hover:text-white transition"
                    aria-label={link.platform ? `Follow us on ${link.platform}` : 'Social link'}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-white/10">
        <div className="w-full px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© 2026 NTYBL. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
