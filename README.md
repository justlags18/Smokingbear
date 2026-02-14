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

## Menu Configuration

Edit `config/menu.ts` to add, remove, or reorder menu items. Changes appear on the site automatically in the order defined in the config.

## Deployment

### Push to GitHub / GitLab

1. Create a new repository on [GitHub](https://github.com/new) or GitLab (leave it empty, no README).
2. Add the remote and push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/TheSmokingBear.git
git branch -M main
git push -u origin main
```

Replace the URL with your actual repository URL.

### Build for production

```bash
npm run build
npm start
```

### Deploy to Vercel (recommended)

1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel will auto-detect Next.js and deploy.

### Deploy to Pelican Panel

1. In Pelican Admin Panel, go to **Eggs** → **Import Egg**.
2. Upload or paste the contents of `pelican-egg.json` from this repo.
3. Create a new server using the Next.js egg.
4. Set **Git Repository URL** to `https://github.com/justlags18/smokingbear.git` and **Branch** to `main`.
5. Start the server — it will clone, build, and run your Next.js app.

### Deploy to your own server

1. On the server: `git clone` your repo, then `npm install && npm run build`.
2. Run with `npm start` (or use PM2: `pm2 start npm --name "smoking-bear" -- start`).
3. Use a reverse proxy (nginx, Caddy) to serve the app on port 3000.
