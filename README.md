# The Smoking Bear

Next.js 14+ project with App Router, TypeScript, TailwindCSS, shadcn/ui, and framer-motion.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/(site)/` - Site routes (Home, Menu, Reserve, Experience, Contact)
- `components/site/` - Site-specific components
- `components/ui/` - shadcn/ui components
- `lib/` - Utilities
- `public/assets/` - Static assets

## Tech Stack

- **Next.js 14+** - App Router
- **TypeScript**
- **TailwindCSS** - Styling
- **shadcn/ui** - UI components
- **framer-motion** - Animations
- **Absolute imports** - `@/` alias configured

## Dark Theme

The app uses a global dark theme baseline. The `dark` class is applied to the root `html` element in `app/layout.tsx`, and CSS variables for dark mode are defined in `app/globals.css`.
