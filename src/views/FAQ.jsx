import { Disclosure, Transition } from '@headlessui/react';
import { Plus, Minus } from 'lucide-react';
import { useFaqController } from '../controllers/useFaqController.js';

export default function FAQ() {
  const { faqs, disclaimer } = useFaqController();

  return (
    <section id="faq" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="w-full px-4 md:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <span className="section-label">• Faq</span>
          <h2 className="heading-display mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold">
            Got Questions? <em className="italic text-brand-green">We've Got Answers.</em>
          </h2>
          <p className="mt-5 text-gray-600 dark:text-gray-300 max-w-md">
            Everything you need to know before starting your wellness journey with us.
            Can't find an answer? Reach out and we'll help.
          </p>
        </div>

        <div>
          <div className="divide-y divide-brand-sage/70 dark:divide-gray-800">
            {faqs.map((f, i) => (
              <Disclosure key={i} defaultOpen={i === 0}>
                {({ open }) => (
                  <div className="py-5">
                    <Disclosure.Button className="flex w-full items-start justify-between gap-4 text-left">
                      <span className="font-medium text-gray-900 dark:text-gray-100 md:text-lg">{f.q}</span>
                      <span className="mt-1 text-brand-green shrink-0">
                        {open ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-200 ease-out"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition duration-150 ease-in"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Disclosure.Panel className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed pr-6">
                        {f.a}
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
          {disclaimer && (
            <p className="mt-6 text-xs text-gray-500 leading-relaxed">{disclaimer}</p>
          )}
        </div>
      </div>
    </section>
  );
}
