# The Berlinery

A Next.js site with a Turkish landing page and a menu, deployed on Firebase Hosting.

## Tech Stack
- Next.js 14 (App Router)
- React 18
- Tailwind CSS 4 (via `@tailwindcss/postcss`)
- pnpm
- Firebase Hosting (Web Frameworks integration)

## Project Structure
- `app/page.tsx` — Landing page (hero, featured, testimonials, visit section)
- `app/menu/page.tsx` — Menu (categories, with grouped sections for Donuts & Berlinery, Tea & Coffee)
- `app/global.css` — Global design tokens and utilities
- `components/ui/` — Small UI primitives (`card`, `button`)
- `public/` — Static assets
  - `Tea/` — Herbal tea images
  - `berlinery & donut images/` — Product images
  - `berlinery-logo.png` — Logo used on the landing page

## Scripts
```bash
pnpm dev     # Start dev server on http://localhost:3000
pnpm build   # Production build
pnpm start   # Start the built app locally
pnpm lint    # Lint
```

## Development
1) Install deps
```bash
pnpm install
```
2) Run locally
```bash
pnpm dev
```
3) Edit content
- Landing sections and copy: `app/page.tsx`
- Menu items and grouping: `app/menu/page.tsx`

## Images
- Place images in `public/` so they are served from `/<filename>`.
- To bust cache in production, rename the file and update the path (e.g., `berlinery-logo.png` → `berlinery-logo-v2.png`).

## Deploy (Firebase Hosting)
The repo is pre-configured to deploy to project `the-berlinery`.

```bash
# Optional: build locally first
pnpm run build

# Deploy hosting (will also build)
pnpm dlx firebase-tools deploy --only hosting --project the-berlinery
```

Notes:
- `.firebaserc` sets the default project to `the-berlinery`.
- `firebase.json` is configured for Next.js Web Frameworks with backend region `europe-west1`.

## Troubleshooting
- Stale assets after deploy: hard refresh (Cmd/Ctrl+Shift+R) or open in Private window.
- Logo not updating: rename the file and update the import path, then redeploy.
- Build hiccup related to `/_not-found`: clear cache and rebuild
```bash
rm -rf .next && pnpm run build
```

---
Maintained by The Berlinery.
