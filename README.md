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
- `npm run build` — type-check and write static files to `build/`.

## Stack

React, TypeScript, Vite, Tailwind CSS, shadcn/ui primitives, Motion, Lucide React, Embla Carousel, and Sonner.

## Deploy (GitHub Pages)

Production output lives in the `build/` folder (Vite `base: '/be_strong_fitness/'`).

### Manual deploy

1. Run `npm run build`.
2. Upload / commit the contents of `build/` for GitHub Pages (or point Pages at that folder).
3. Site URL: `https://code-with-mk.github.io/be_strong_fitness/`

### Actions (optional)

`.github/workflows/static.yml` builds into `build/` and deploys from there on pushes to `main`.

## Content updates

Business copy, facilities, testimonials, and contact details live in `src/data/site-content.ts`. Member quotes on the site are taken from public Google reviews for Be Strong Fitness.

### Gym photos

Photos from the Google Maps listing are stored locally under `public/images/gym/`. Replace those files (keeping the same filenames) or update the paths in `site-content.ts` to swap imagery.
