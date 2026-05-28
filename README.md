# Accurate Consultancy — Premium Visa & Immigration SPA

A production-ready, SEO-friendly single-page application built with **React + Vite + Tailwind CSS** for Accurate Consultancy, a visa and immigration services firm based in Lahore, Pakistan.

---

## ✨ Features

- ⚡ **Vite** — lightning-fast dev server and optimised production build
- 🎨 **Tailwind CSS** — utility-first styling with a custom navy-gold design system
- ♿ **Accessible** — semantic HTML, ARIA labels, focus-visible styles, skip links
- 📱 **Mobile-first** — fully responsive across all screen sizes
- 🔍 **SEO-ready** — meta tags, Open Graph, JSON-LD structured data, canonical URL
- 🧩 **Component architecture** — 7 reusable, isolated components
- 🪝 **Custom hooks** — `useScrollEffect`, `useIntersectionObserver`
- 💨 **Scroll animations** — staggered entrance animations via Intersection Observer
- 🛡️ **Security headers** — CSP-ready Vercel config

---

## 📁 Project Structure

```
accurate-consultancy/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/              # Static assets (images, etc.)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Destinations.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── ConsultationForm.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   ├── useScrollEffect.js
│   │   └── useIntersectionObserver.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── .eslintrc.cjs
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.0.0
- **npm** ≥ 9.0.0

### Installation

```bash
# 1. Clone the repository (after pushing to GitHub)
git clone https://github.com/YOUR_USERNAME/accurate-consultancy.git
cd accurate-consultancy

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# → Opens at http://localhost:3000
```

### Available Scripts

| Command           | Description                              |
|-------------------|------------------------------------------|
| `npm run dev`     | Start local dev server (hot-reload)      |
| `npm run build`   | Build optimised production bundle        |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint checks                        |

---

## 📦 Production Build

```bash
npm run build
# Output: /dist folder — ready to deploy
```

The build produces:
- Minified JS chunks (vendor + icons split for caching)
- Optimised CSS with unused Tailwind utilities purged
- Hashed filenames for cache-busting

---

## 🐙 Push to GitHub

```bash
# Inside the project folder:
git init
git add .
git commit -m "Initial commit — Accurate Consultancy SPA"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/accurate-consultancy.git
git push -u origin main
```

> Replace `YOUR_USERNAME` with your actual GitHub username and create the repository
> on GitHub first (Settings → New repository).

---

## 🌐 Deploy to Vercel

### Option 1 — Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New → Project**
3. Import your `accurate-consultancy` repository
4. Vercel auto-detects **Vite** — keep default settings
5. Click **Deploy** — live in ~60 seconds ✅

Vercel will use the included `vercel.json` for SPA routing and caching headers automatically.

### Option 2 — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## 🌐 Deploy to Netlify (Alternative)

1. Push to GitHub (steps above)
2. Go to [netlify.com](https://netlify.com) → **Add new site → Import from Git**
3. Select your repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Add a `_redirects` file in `/public`:
   ```
   /* /index.html 200
   ```
7. Click **Deploy site**

---

## ✏️ Customisation Guide

### Branding
- **Colors** — defined in `tailwind.config.js` under `theme.extend.colors`
- **Fonts** — loaded via Google Fonts in `index.html`, configured in `tailwind.config.js`
- **Logo** — update the `<span>` in `Navbar.jsx` and `Footer.jsx`

### Content
| Section          | File                                |
|------------------|-------------------------------------|
| Navigation       | `src/components/Navbar.jsx`         |
| Hero / Banner    | `src/components/Hero.jsx`           |
| Services         | `src/components/Services.jsx`       |
| Destinations     | `src/components/Destinations.jsx`   |
| Why Choose Us    | `src/components/WhyChooseUs.jsx`    |
| Consultation Form| `src/components/ConsultationForm.jsx`|
| Footer           | `src/components/Footer.jsx`         |

### Form Integration
In `ConsultationForm.jsx`, replace the simulated `setTimeout` in `handleSubmit` with a real API call to your backend, Formspree, EmailJS, or any CRM webhook.

```js
// Example with Formspree:
const response = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

### SEO
Update `index.html` with:
- Real domain in `<link rel="canonical">`
- Real Open Graph image at `public/og-image.jpg`
- JSON-LD business details (phone, address, social profiles)

---

## 📄 License

© 2024 Accurate Consultancy. All rights reserved. This codebase is proprietary.

---

*Built with ❤️ using React, Vite & Tailwind CSS*
