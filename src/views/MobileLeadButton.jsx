import { ArrowRight } from 'lucide-react';

// Floating "Start now" button, bottom-left, phone screens only — opens the
// lead form popup. Hidden on lg+ where the navbar's "Start Your Journey"
// button is always visible.
export default function MobileLeadButton({ onOpenLead }) {
  return (
    <button
      onClick={onOpenLead}
      className="lg:hidden fixed bottom-5 left-5 z-50 inline-flex items-center gap-2 rounded-full bg-brand-green text-white px-5 py-3 text-sm font-semibold shadow-lg hover:bg-[#5d7246] transition"
    >
      Start now <ArrowRight size={16} />
    </button>
  );
}
