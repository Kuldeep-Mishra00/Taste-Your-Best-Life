# NTYBL — Landing Page

A fully responsive React + Vite + Tailwind landing page for a health & wellness brand. Content (Home images, Philosophy, Wellness Areas, Testimonials, FAQ, Footer social links) and the lead form are backed by the API in [`/server`](./server) — a small CMS-style admin panel manages all of it. If the API isn't reachable, every section falls back to built-in default content so the page never breaks.

## Quick Start

```bash
npm install
npm run dev
```

Then open http://localhost:5173

To see live/editable content instead of the fallback defaults, also run the backend (see [`/server/README`](./server) — or `npm run dev:memdb` there for a zero-setup in-memory database) and copy `.env.example` to `.env.local` with `VITE_API_URL` pointing at it.

## Build

```bash
npm run build
npm run preview
```

## Lead Form Flow

1. Visitor fills in name, phone (country code + length validated per country), email, state, concern area, and problem details.
2. On submit, the form `POST`s straight to `${VITE_API_URL}/api/leads` (see `src/utils/leadService.js`).
3. Success shows a thank-you screen; failure shows the server's error message inline instead of losing the visitor's input.

Leads are stored in MongoDB and viewable (plus exportable as CSV) from the admin panel.

## Tech Stack

- React 18 (functional components + hooks)
- Vite
- Tailwind CSS (custom palette: `#708658`, `#D0D5CF`, `#F0E9E3`, `#73A1B1`)
- React Hook Form
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
│   ├── OurPhilosophy.jsx
│   ├── WhyChooseUs.jsx
│   ├── Testimonials.jsx
│   ├── LeadForm.jsx
│   ├── SessionsBanner.jsx
│   ├── FAQ.jsx
│   └── Footer.jsx
├── utils/
│   ├── assets/          ← locally-bundled images (fallback content only)
│   ├── contentApi.js    ← fetch wrappers for every public content endpoint
│   ├── leadService.js
│   └── images.js
├── App.jsx
├── main.jsx
└── index.css

server/                  ← Node/Express/MongoDB backend + admin API (see server/README)
```

## Responsive Breakpoints

Tested at 375px (mobile), 768px (tablet), 1280px (desktop). Navbar collapses into a hamburger menu under `lg`.
