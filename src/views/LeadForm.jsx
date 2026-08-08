import { useForm } from 'react-hook-form';
import { CheckCircle2, Lock, Leaf, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLeadFormController } from '../controllers/useLeadFormController.js';
import FormField from './FormField.jsx';
import {
  CONCERN_AREAS,
  COUNTRY_CODES,
  INDIAN_STATES,
  LEAD_FORM_DEFAULTS,
  isPhoneValidForCode,
  phoneMaxFor
} from '../utils/leadFormFields.js';

// --- Original 3-step wizard version of LeadForm (kept for reference, do not delete) ---
//
// export default function LeadForm() {
//   const [step, setStep] = useState(1);
//   const [submitting, setSubmitting] = useState(false);
//   const [serverError, setServerError] = useState('');
//
//   const {
//     register,
//     handleSubmit,
//     getValues,
//     watch,
//     setValue,
//     reset,
//     formState: { errors }
//   } = useForm({
//     mode: 'onTouched',
//     defaultValues: {
//       fullName: '',
//       countryCode: '+91',
//       phone: '',
//       email: '',
//       state: '',
//       concernArea: '',
//       problemDetails: ''
//     }
//   });
//
//   const selectedCode = watch('countryCode');
//   const maxDigits = phoneMaxFor(selectedCode);
//
//   const onStep1Submit = () => {
//     setServerError('');
//     setStep(2);
//   };
//
//   const onStep2Submit = async (data) => {
//     setServerError('');
//     setSubmitting(true);
//     const result = await sendLeadEmail({
//       fullName: data.fullName,
//       countryCode: data.countryCode,
//       phone: data.phone,
//       email: data.email,
//       state: data.state,
//       concernArea: data.concernArea,
//       problemDetails: data.problemDetails
//     });
//     setSubmitting(false);
//
//     if (result.ok) {
//       setStep(3);
//     } else {
//       setServerError('Submission failed. Please try again in a moment.');
//     }
//   };
//
//   const goBackToEdit = () => {
//     setServerError('');
//     setStep(1);
//   };
//
//   const name = getValues('fullName');
//
//   return (
//     <section id="lead" className="py-16 md:py-24 bg-white">
//       <div className="w-full px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-start">
//         <div className="lg:sticky lg:top-28"> ... intro copy + trust badges ... </div>
//
//         <div className="bg-white rounded-3xl shadow-soft border border-brand-sage/40 p-6 md:p-8">
//           <div className="flex items-center gap-2 mb-6">
//             {[1, 2, 3].map((n) => ( ... 1-2-3 progress indicator ... ))}
//           </div>
//
//           {step === 1 && (
//             <form onSubmit={handleSubmit(onStep1Submit)} className="space-y-4 fade-in" noValidate>
//               {/* Full Name, Phone Number, Email Address, State fields */}
//               <button type="submit" className="btn-primary w-full justify-center mt-2">
//                 Continue <ArrowRight size={16} />
//               </button>
//             </form>
//           )}
//
//           {step === 2 && (
//             <form onSubmit={handleSubmit(onStep2Submit)} className="space-y-4 fade-in" noValidate>
//               {/* Concern Area, Problem Details fields */}
//               <div className="flex gap-3 pt-2">
//                 <button type="button" onClick={goBackToEdit} className="btn-outline flex-1 justify-center">← Back</button>
//                 <button type="submit" disabled={submitting} className="btn-primary flex-1 justify-center disabled:opacity-70">
//                   {submitting ? 'Submitting…' : <>Submit <ArrowRight size={16} /></>}
//                 </button>
//               </div>
//             </form>
//           )}
//
//           {step === 3 && ( ... thank-you screen ... )}
//         </div>
//       </div>
//     </section>
//   );
// }
//
// --- End original 3-step wizard version ---

export default function LeadForm() {
  const { submitting, serverError, submitted, submit } = useLeadFormController();

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    setValue,
    formState: { errors }
  } = useForm({
    mode: 'onTouched',
    defaultValues: LEAD_FORM_DEFAULTS
  });

  const selectedCode = watch('countryCode');
  const maxDigits = phoneMaxFor(selectedCode);

  const onSubmit = (data) =>
    submit({
      fullName: data.fullName,
      countryCode: data.countryCode,
      phone: data.phone,
      email: data.email,
      state: data.state,
      concernArea: data.concernArea,
      height: data.height,
      weight: data.weight,
      problemDetails: data.problemDetails
    });

  const name = getValues('fullName');

  return (
    <section id="lead" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="w-full px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div className="lg:sticky lg:top-28">
          <span className="section-label">✦ Begin Today</span>
          <h2 className="heading-display mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold">
            Start Your <em className="italic text-brand-green">Wellness Journey</em> Today
          </h2>
          <p className="mt-5 text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
            Share a little about yourself and what you're hoping to work on — one of our
            wellness specialists will reach out to you within 24 hours with a personalized plan.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            {[
              { icon: Lock, label: '100% Private' },
              { icon: ShieldCheck, label: 'Certified Specialists' },
              { icon: Leaf, label: 'Personalized Plans' }
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cream dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-brand-sage/60 dark:border-gray-700"
              >
                <Icon size={14} className="text-brand-green" /> {label}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-soft border border-brand-sage/40 dark:border-gray-700 p-6 md:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 fade-in" noValidate>
              <div>
                <h3 className="heading-display text-xl font-semibold">Tell us about yourself</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Fill in your details below and a specialist will reach out with a personalized plan.
                </p>
              </div>

              <FormField label="Full Name" error={errors.fullName?.message}>
                <input
                  type="text"
                  placeholder="e.g. Ananya Sharma"
                  autoComplete="name"
                  className="input"
                  {...register('fullName', {
                    required: 'Full name is required',
                    minLength: { value: 2, message: 'Enter a valid name' },
                    pattern: {
                      value: /^[A-Za-zÀ-ɏऀ-ॿ\s.'-]+$/,
                      message: 'Name can only contain letters'
                    }
                  })}
                />
              </FormField>

              <FormField label="Phone Number" error={errors.phone?.message}>
                <div className="flex items-stretch gap-3 w-full">
                  <select
                    className=" !w-20 input shrink-0 text-sm"
                    aria-label="Country code"
                    {...register('countryCode', {
                      required: true,
                      onChange: () => setValue('phone', '')
                    })}
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    placeholder={`${maxDigits}-digit mobile number`}
                    maxLength={maxDigits}
                    className="input flex-1 min-w-0 tracking-wide"
                    {...register('phone', {
                      required: 'Phone number is required',
                      validate: (v) =>
                        isPhoneValidForCode(v, getValues('countryCode')) ||
                        `Enter a valid ${maxDigits}-digit number`,
                      onChange: (e) => {
                        const digits = e.target.value.replace(/\D/g, '').slice(0, maxDigits);
                        if (digits !== e.target.value) {
                          setValue('phone', digits, { shouldValidate: false });
                        }
                      }
                    })}
                  />
                </div>
              </FormField>

              <FormField label="Email Address (optional)" error={errors.email?.message}>
                <input
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="input"
                  {...register('email', {
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Enter a valid email'
                    }
                  })}
                />
              </FormField>

              <FormField label="State" error={errors.state?.message}>
                <select
                  className="input"
                  {...register('state', { required: 'Please select your state' })}
                >
                  <option value="">Select your state</option>
                  {INDIAN_STATES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </FormField>

              <FormField label="Area you'd like help with" error={errors.concernArea?.message}>
                <select
                  className="input"
                  {...register('concernArea', { required: 'Please pick an area' })}
                >
                  <option value="">Select an area</option>
                  {CONCERN_AREAS.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </FormField>

              <div className="grid grid-cols-2 gap-3">
                <FormField label="Height" error={errors.height?.message}>
                  <input
                    type="text"
                    placeholder="e.g. 5'8&quot; or 172 cm"
                    className="input"
                    {...register('height')}
                  />
                </FormField>
                <FormField label="Weight" error={errors.weight?.message}>
                  <input
                    type="text"
                    placeholder="e.g. 72 kg"
                    className="input"
                    {...register('weight')}
                  />
                </FormField>
              </div>

              <FormField
                label="What's going on? (optional)"
                error={errors.problemDetails?.message}
              >
                <textarea
                  rows={4}
                  placeholder="e.g. I've been struggling with low energy, irregular sleep, and want to lose about 8 kg over 6 months. I work long hours and eat mostly home-cooked meals."
                  className="input resize-y"
                  {...register('problemDetails', {
                    maxLength: { value: 1000, message: 'Please keep it under 1000 characters' }
                  })}
                />
              </FormField>

              {serverError && (
                <p className="text-sm text-red-600">{serverError}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full justify-center mt-2 disabled:opacity-70"
              >
                {submitting ? 'Submitting…' : <>Submit <ArrowRight size={16} /></>}
              </button>
            </form>
          ) : (
            <div className="fade-in text-center py-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-brand-green/10 grid place-items-center">
                <CheckCircle2 size={40} className="text-brand-green" />
              </div>
              <h3 className="heading-display text-2xl font-semibold mt-5">
                Thank you, {name || 'friend'}!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-sm mx-auto">
                Our wellness specialist will contact you within 24 hours with a personalized plan.
              </p>
              <a href="#wellness-areas" className="btn-primary mt-6">
                Explore Our Programs <ArrowRight size={16} />
              </a>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #D0D5CF;
          border-radius: 0.75rem;
          background: #fff;
          color: #1f2937;
          font-size: 0.95rem;
          transition: border-color .15s, box-shadow .15s, background-color .15s, color .15s;
        }
        html.dark .input {
          background: #1a1d23;
          border-color: #374151;
          color: #e5e7eb;
        }
        html.dark .input::placeholder { color: #9ca3af; }
        html.dark .input option { background: #1a1d23; color: #e5e7eb; }
        .input:focus {
          outline: none;
          border-color: #708658;
          box-shadow: 0 0 0 3px rgba(112,134,88,0.15);
        }
        textarea.input { min-height: 120px; }
      `}</style>
    </section>
  );
}
