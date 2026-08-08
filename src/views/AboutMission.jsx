export default function AboutMission() {
  const tabs = ['About Us', '+ Our Mission', 'Our Vision'];
  return (
    <section id="our-story" className="border-t border-brand-sage/60">
      <div className="w-full px-4 md:px-8 py-6 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-gray-700">
        {tabs.map((t, i) => (
          <span key={t} className={`flex items-center gap-2 ${i === 1 ? 'font-semibold text-gray-900' : ''}`}>
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
