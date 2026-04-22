# Taste Your Best Life — Landing Page

A fully responsive React + Vite + Tailwind landing page for a health & wellness brand, with a multi-step lead form that submits directly via EmailJS (no backend required).

## Quick Start

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Lead Form Flow

The form runs in **three steps**:

1. **Personal info** — name, phone (with country code + length validation), email, state.
2. **Problem details** — program-area dropdown and a free-text textarea describing what the user needs help with.
3. **Success** — thank-you screen with a CTA back into the page.

On submit, the payload is sent straight from the browser to EmailJS — no backend server is involved.

## EmailJS Configuration

The form ships its submission via [EmailJS](https://www.emailjs.com/). To enable real email delivery:

1. Create a free account at emailjs.com.
2. Add an **Email Service** (Gmail, Outlook, SMTP, etc.) — note the **Service ID**.
3. Create an **Email Template** with the following variables:
   - `{{name}}`
   - `{{phone}}`
   - `{{email}}`
   - `{{state}}`
   - `{{concern_area}}`
   - `{{problem_details}}`
   - `{{timestamp}}`
   Note the **Template ID**.
4. Grab your **Public Key** from Account → API Keys.
5. Copy `.env.example` to `.env` and fill in:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Restart `npm run dev`.

Without credentials configured, the form simulates submission and logs the payload to the browser console.

## Tech Stack

- React 18 (functional components + hooks)
- Vite
- Tailwind CSS (custom palette: `#708658`, `#D0D5CF`, `#F0E9E3`, `#73A1B1`)
- React Hook Form
- EmailJS
- Headless UI (FAQ accordion)
- Lucide React (icons)
- Google Fonts: Inter + Playfair Display

## Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── AboutMission.jsx
│   ├── DedicatedSection.jsx
│   ├── WhyChooseUs.jsx
│   ├── Testimonials.jsx
│   ├── LeadForm.jsx
│   ├── SessionsBanner.jsx
│   ├── FAQ.jsx
│   ├── Newsletter.jsx
│   └── Footer.jsx
├── utils/
│   ├── assets/          ← locally-bundled images
│   ├── emailService.js
│   └── images.js
├── App.jsx
├── main.jsx
└── index.css
```

## Responsive Breakpoints

Tested at 375px (mobile), 768px (tablet), 1280px (desktop). Navbar collapses into a hamburger menu under `lg`.
