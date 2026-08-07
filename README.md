# Be Strong Fitness

A professional, responsive marketing site for Be Strong Fitness, built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173/be_strong_fitness/`).

## Scripts

- `npm run dev` — start the development server.
- `npm test -- --run` — run the test suite once.
- `npm run build` — type-check and build the production app.

## Stack

React, TypeScript, Vite, Tailwind CSS, shadcn/ui primitives, Motion, Lucide React, Embla Carousel, and Sonner.

## Deploy (GitHub Pages)

The site uses Vite `base: '/be_strong_fitness/'` and deploys via `.github/workflows/deploy-pages.yml`.

1. Push to `main` or `feature-be-strong-fitness-website`.
2. In the repo open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. After the workflow succeeds, visit:
   `https://code-with-mk.github.io/be_strong_fitness/`

## Content updates

Business copy, facilities, testimonials, and contact details live in `src/data/site-content.ts`. Member quotes on the site are taken from public Google reviews for Be Strong Fitness.

### Gym photos

Photos from the Google Maps listing are stored locally under `public/images/gym/`. Replace those files (keeping the same filenames) or update the paths in `site-content.ts` to swap imagery.
