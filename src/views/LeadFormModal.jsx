import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, X, ArrowRight } from 'lucide-react';
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

export default function LeadFormModal({ open, onClose, promotion = '' }) {
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
  const name = getValues('fullName');

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

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
      problemDetails: data.problemDetails,
      promotion // hidden — set only when opened from a festive banner
    });

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} aria-hidden />

      <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-soft border border-brand-sage/40 dark:border-gray-700 w-full max-w-md max-h-[90vh] overflow-y-auto p-6 fade-in">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            <div>
              <span className="section-label">✦ Begin Today</span>
              <h3 className="heading-display text-xl font-semibold mt-2">Start Your Wellness Journey</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Share a few details and a specialist will reach out within 24 hours.
              </p>
              {promotion && (
                <span className="inline-flex items-center gap-1 mt-3 text-xs font-medium px-3 py-1 rounded-full bg-brand-green/10 text-brand-green">
                  🎉 {promotion} applied
                </span>
              )}
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
                  className="!w-20 input shrink-0 text-sm"
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
                  placeholder="e.g. 172 cm"
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
                rows={3}
                placeholder="e.g. I've been struggling with low energy and want to lose weight."
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
          <div className="text-center py-6 fade-in">
            <div className="mx-auto w-16 h-16 rounded-full bg-brand-green/10 grid place-items-center">
              <CheckCircle2 size={40} className="text-brand-green" />
            </div>
            <h3 className="heading-display text-2xl font-semibold mt-5">
              Thank you, {name || 'friend'}!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              Our wellness specialist will contact you within 24 hours with a personalized plan.
            </p>
            <button onClick={onClose} className="btn-primary mt-6">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
