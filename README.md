## UrbanFit Gym Portfolio Website

UrbanFit is a modern, single‑page gym portfolio website built with **React** and styled using **Tailwind CSS–style utility classes**.  
It is designed as a high‑contrast, neon‑accented landing page to showcase a gym’s programs, pricing, and contact information, with built‑in WhatsApp contact links and an embedded Google Map.

---

### Features

- **Single‑page layout with smooth scrolling**
  - Top navigation bar with active‑section highlighting (`home`, `programs`, `pricing`, `contact`).
  - Smooth scroll behavior when clicking nav items and “Join Now” / “Get Started” buttons.

- **Hero section**
  - Bold headline and subheading targeted at students.
  - Primary CTA button that scrolls to the pricing section.
  - Secondary CTA to chat on WhatsApp (`https://wa.me/PhoneNumber`).

- **Programs section**
  - Four program cards (Strength Training, Cardio Training, Fat Loss, Muscle Building) with icons from `lucide-react`.

- **Testimonials section**
  - Three member success stories with highlight styling.

- **Pricing section**
  - Three plans (Basic, Standard, Pro) with a “Most Popular” highlight on the Standard plan.
  - “Get Started” buttons scroll to the contact section.

- **Contact section**
  - Simple inquiry form (UI‑only; currently shows an alert instead of submitting to a backend).
  - Contact details (address, timings, phone, email).
  - **Embedded Google Map** using an iframe pointing to the gym location:
    - If the map **loads successfully**, the map is shown.
    - If the map **fails to load**, the app falls back to a large `MapPin` icon and a message, controlled by the `isMapError` state in `App.jsx`.

- **WhatsApp floating button**
  - Fixed‑position button in the bottom‑right corner linking to WhatsApp (`https://wa.me/PhoneNumber`).

---

### Tech Stack

- **React** (functional components with hooks: `useState`, `useEffect`)
- **lucide-react** for icons (Dumbbell, Heart, Zap, Target, MapPin, Clock, Phone, Mail, etc.)
- **Utility‑first CSS classes** (Tailwind‑like classes used directly in `className`)

> Note: The repository root and tooling (Create React App, Vite, etc.) are not enforced in this README.  
> Use the commands appropriate for your chosen React toolchain.

---

### Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev      # or: npm start
   ```

3. Open your browser and navigate to the URL printed in the terminal  
   (commonly `http://localhost:5173` for Vite or `http://localhost:3000` for Create React App).

---

### Building for Production

Run:

```bash
npm run build
```

This will generate an optimized production build in the output directory used by your toolchain (for example, `dist/` or `build/`). You can then deploy these static files to any static hosting provider (Netlify, Vercel, GitHub Pages, etc.).

---

### Customization

- **Branding**
  - Update the text “UrbanFit” and logo usage in `App.jsx` to match your own gym or brand.
- **Contact details**
  - Edit the address, timings, phone number, email, and WhatsApp links in `App.jsx` to your real information.
- **Google Maps location**
  - Replace the `src` of the embedded Google Maps iframe in the contact section with your gym’s own embed URL.
- **Programs and pricing**
  - Modify the program cards and pricing plans arrays in `App.jsx` to reflect your actual offerings.

---

### Notes

- The inquiry form is currently **UI‑only** and does not submit data to a server.  
  To make it functional, connect the inputs to state and send the data to an API or service of your choice.
- The navigation highlighting relies on scroll position and section IDs (`home`, `programs`, `pricing`, `contact`), so keep those IDs in sync if you refactor sections.


