import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    console.log('[Newsletter] subscribed', email);
    setDone(true);
    setEmail('');
    setTimeout(() => setDone(false), 4000);
  };

  return (
    <section className="bg-brand-green text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="heading-display text-3xl md:text-4xl font-semibold text-white">
            Get Our News And Updates
          </h2>
          <p className="mt-3 text-white/85 max-w-md">
            Monthly wellness tips, recipes, and program updates — no spam, unsubscribe anytime.
          </p>
        </div>

        <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 w-full">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/60"
          />
          <button
            type="submit"
            className="bg-white text-brand-green font-semibold px-6 py-3 rounded-full hover:bg-brand-cream transition"
          >
            {done ? 'Subscribed ✓' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  );
}
