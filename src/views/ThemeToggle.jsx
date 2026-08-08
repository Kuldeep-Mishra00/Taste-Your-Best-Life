import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../controllers/useTheme.js';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`grid place-items-center w-10 h-10 rounded-full border border-gray-300 text-gray-700 hover:border-brand-green hover:text-brand-green transition dark:border-gray-600 dark:text-gray-300 dark:hover:border-brand-green dark:hover:text-brand-green ${className}`}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
