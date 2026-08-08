export const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
  'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
  'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
  'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Jammu & Kashmir',
  'Ladakh', 'Puducherry', 'Chandigarh', 'Andaman & Nicobar', 'Dadra & Nagar Haveli',
  'Daman & Diu', 'Lakshadweep', 'Other'
];

export const COUNTRY_CODES = [
  { code: '+91',  label: 'IN', length: 10 },
  { code: '+1',   label: 'US', length: 10 },
  { code: '+44',  label: 'UK', range: [10, 11] },
  { code: '+61',  label: 'AU', length: 9 },
  { code: '+971', label: 'AE', length: 9 }
];

export const CONCERN_AREAS = [
  'Weight Loss',
  'Weight Gain',
  'Mindful Living / Stress',
  'Better Sleep',
  'Everyday Nutrition',
  'Healthy Community / Lifestyle',
  'Something else'
];

export const phoneRuleFor = (code) => COUNTRY_CODES.find((c) => c.code === code) || COUNTRY_CODES[0];

export const isPhoneValidForCode = (phone, code) => {
  if (!/^[0-9]+$/.test(phone)) return false;
  const rule = phoneRuleFor(code);
  if (rule.length) return phone.length === rule.length;
  if (rule.range) return phone.length >= rule.range[0] && phone.length <= rule.range[1];
  return false;
};

export const phoneMaxFor = (code) => {
  const rule = phoneRuleFor(code);
  return rule.length ?? rule.range[1];
};

export const LEAD_FORM_DEFAULTS = {
  fullName: '',
  countryCode: '+91',
  phone: '',
  email: '',
  state: '',
  concernArea: '',
  height: '',
  weight: '',
  problemDetails: ''
};
