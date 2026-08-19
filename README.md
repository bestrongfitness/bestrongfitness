# Be Strong Fitness

A professional, responsive marketing site for Be Strong Fitness, built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173/bestrongfitness/`).

## Scripts

- `npm run dev` — start the development server.
- `npm test -- --run` — run the test suite once.
- `npm run build` — type-check and write static files to `dist/`.

## Stack

React, TypeScript, Vite, Tailwind CSS, shadcn/ui primitives, Motion, Lucide React, Embla Carousel, and Sonner.

## Deploy (GitHub Pages)

**Do not** use Jekyll or “Static HTML” / “Deploy from a branch”.

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. On every push to `main`, `.github/workflows/deploy.yml` installs, builds to `dist/`, and deploys.
3. Live site: `https://bestrongfitness.github.io/bestrongfitness/`

Vite `base` must stay `/bestrongfitness/` (repo name) so CSS, JS, and images resolve correctly.

## Content updates

Business copy, facilities, testimonials, and contact details live in `src/data/site-content.ts`. Member quotes on the site are taken from public Google reviews for Be Strong Fitness.

### Gym photos

Photos from the Google Maps listing are stored locally under `public/images/gym/`. Replace those files (keeping the same filenames) or update the paths in `site-content.ts` to swap imagery.
