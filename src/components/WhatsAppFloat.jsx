import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '919999999999';
const DEFAULT_MESSAGE =
  "Hi! I'd like to know more about your wellness programs.";

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 rounded-2xl shadow-soft border border-brand-sage/50 bg-white overflow-hidden fade-in">
          <div className="flex items-center justify-between px-4 py-3 bg-[#25D366] text-white">
            <div className="flex items-center gap-2">
              <WhatsAppIcon className="w-5 h-5" />
              <span className="font-semibold text-sm">Chat with us</span>
            </div>
            <button
              aria-label="Close chat popup"
              onClick={() => setOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 transition"
            >
              <X size={16} />
            </button>
          </div>

          <div className="p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              Hi there! 👋 Have a question about our wellness programs?
              Tap below to chat with a specialist on WhatsApp.
            </p>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] text-white text-sm font-semibold py-2.5 transition"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Start Chat
            </a>
          </div>
        </div>
      )}

      <button
        aria-label={open ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white shadow-lg grid place-items-center transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 wa-pulse"
      >
        {open ? <MessageCircle size={26} /> : <WhatsAppIcon className="w-7 h-7" />}
      </button>

      <style>{`
        .wa-pulse::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: #25D366;
          opacity: 0.6;
          animation: wa-ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
          z-index: -1;
        }
        @keyframes wa-ping {
          0%   { transform: scale(1);   opacity: 0.6; }
          80%  { transform: scale(1.6); opacity: 0;   }
          100% { transform: scale(1.6); opacity: 0;   }
        }
      `}</style>
    </div>
  );
}

function WhatsAppIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.277.13-.31.13-.62.093-.945-.058-.132-.157-.2-.33-.287zm-2.45 7.99h-.014c-1.963 0-3.866-.53-5.525-1.546l-.397-.233-4.096 1.074 1.09-3.99-.26-.41a10.405 10.405 0 0 1-1.59-5.545c.003-5.75 4.682-10.43 10.435-10.43 2.785 0 5.404 1.086 7.372 3.058a10.35 10.35 0 0 1 3.054 7.375c-.002 5.75-4.68 10.427-10.43 10.427h-.014zm8.88-19.305A12.475 12.475 0 0 0 16.66 2.22C9.77 2.22 4.165 7.826 4.162 14.717c0 2.2.575 4.35 1.668 6.245L4.057 27.78l6.962-1.825a12.49 12.49 0 0 0 5.973 1.52h.005c6.89 0 12.495-5.605 12.498-12.496a12.43 12.43 0 0 0-3.65-8.843z" />
    </svg>
  );
}
