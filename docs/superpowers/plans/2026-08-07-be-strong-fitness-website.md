# Be Strong Fitness Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a professional, responsive React marketing website for Be Strong Fitness that showcases the gym, facilities, member reviews, and visit/contact details.

**Architecture:** A Vite React single-page route composes focused section components from typed local content modules. Tailwind owns the visual token system and responsive layout; Motion supplies limited, reduced-motion-safe reveal animations; Embla powers a manual review carousel.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS 4, React Router, Motion, Lucide React, Embla Carousel, Vitest, Testing Library.

## Global Constraints

- Use the warm athletic editorial direction: charcoal foundation, warm cream surfaces, and restrained amber accents.
- Build mobile-first and preserve a clear primary visit/enquiry action at every viewport.
- Use semantic landmarks, exactly one `h1`, visible keyboard focus, labelled controls, and WCAG AA-level color contrast.
- Respect `prefers-reduced-motion`; the review carousel must not autoplay.
- Keep homepage content in typed data modules; introduce no API, global-state, or form libraries before a concrete need exists.
- Use sample testimonials only and provide a destination link to the supplied Google Maps listing; do not reproduce unapproved customer reviews.
- Use Conventional Commits in the form `type(scope): imperative summary`, such as `feat(home): add member reviews carousel`.

---

## Planned file structure

- `package.json` — project scripts and pinned runtime/development dependencies.
- `vite.config.ts` — Vite and Tailwind plugin configuration.
- `src/main.tsx` — application bootstrap.
- `src/App.tsx` — route-level composition of the homepage.
- `src/index.css` — Tailwind import, font loading, design tokens, global accessibility styles.
- `src/data/site-content.ts` — typed facility, benefit, testimonial, and contact content.
- `src/components/layout/Header.tsx` — desktop/mobile navigation and primary CTA.
- `src/components/sections/*.tsx` — focused semantic homepage sections.
- `src/components/ui/SectionHeading.tsx` — reusable section title treatment.
- `src/lib/motion.ts` — reduced-motion-safe animation variants.
- `src/test/setup.ts` and `src/**/*.test.tsx` — component test setup and behavior coverage.
- `README.md` — local setup, scripts, technology decisions, and extension points.
- `.gitignore` — Vite, Node, editor, and environment-file exclusions.

## Task 1: Scaffold and configure the React foundation

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css`, `.gitignore`, `src/test/setup.ts`
- Modify: `README.md`
- Test: `src/App.test.tsx`

**Interfaces:**
- Produces: `App(): JSX.Element`, mounted by `src/main.tsx`.
- Consumes: no application-owned modules.

- [ ] **Step 1: Write the failing route-render test**

```tsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Be Strong Fitness homepage landmark', () => {
  render(<App />);
  expect(screen.getByRole('main')).toBeInTheDocument();
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- --run src/App.test.tsx`

Expected: FAIL because the Vite React project and test script do not yet exist.

- [ ] **Step 3: Scaffold Vite React TypeScript and add only needed UI dependencies**

```powershell
npm create vite@latest . -- --template react-ts
npm install tailwindcss @tailwindcss/vite react-router-dom motion lucide-react embla-carousel-react sonner
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

Configure `vite.config.ts` with the Tailwind Vite plugin and Vitest `jsdom` environment. Create an `App` component returning `<main aria-label="Be Strong Fitness homepage" />`, add test setup importing `@testing-library/jest-dom/vitest`, and add `test` and `test:watch` scripts using Vitest.

- [ ] **Step 4: Run the test and a production build**

Run: `npm test -- --run src/App.test.tsx; npm run build`

Expected: the test passes and Vite writes a production bundle to `dist`.

- [ ] **Step 5: Commit the foundation**

```powershell
git add package.json package-lock.json vite.config.ts tsconfig.json tsconfig.app.json index.html src .gitignore README.md
git commit -m "feat(app): scaffold Be Strong Fitness React site"
```

## Task 2: Establish content contracts, tokens, and shared primitives

**Files:**
- Create: `src/data/site-content.ts`, `src/components/ui/SectionHeading.tsx`, `src/lib/motion.ts`, `src/components/ui/SectionHeading.test.tsx`
- Modify: `src/index.css`

**Interfaces:**
- Produces: `Facility`, `Benefit`, `Testimonial`, `ContactDetail` types; `facilities`, `benefits`, `testimonials`, `contactDetails` arrays; `SectionHeading({ eyebrow, title, description? })`; `revealItem` animation variant.
- Consumes: no homepage section modules.

- [ ] **Step 1: Write the failing shared-heading test**

```tsx
render(<SectionHeading eyebrow="Built for progress" title="Train with purpose" />);
expect(screen.getByText('Built for progress')).toBeInTheDocument();
expect(screen.getByRole('heading', { name: 'Train with purpose' })).toHaveAttribute('data-size', 'section');
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- --run src/components/ui/SectionHeading.test.tsx`

Expected: FAIL because `SectionHeading` does not exist.

- [ ] **Step 3: Create typed content and editorial design tokens**

Define the interfaces as `id`, `title`, `description`, and image/metadata fields appropriate to each collection. Populate sample testimonials with `isSample: true` and a `googleMapsUrl` constant holding the provided map destination. In `index.css`, define named CSS variables for `--ink`, `--paper`, `--amber`, `--line`, and `--radius-card`; set global focus styles and reduced-motion overrides. Implement `SectionHeading` with a semantic `h2` and `data-size="section"`. Export Motion variants only when reduced motion is not requested by the consuming component.

- [ ] **Step 4: Run tests**

Run: `npm test -- --run src/components/ui/SectionHeading.test.tsx`

Expected: PASS.

- [ ] **Step 5: Commit content and design system**

```powershell
git add src/data/site-content.ts src/components/ui/SectionHeading.tsx src/components/ui/SectionHeading.test.tsx src/lib/motion.ts src/index.css
git commit -m "feat(design): add editorial tokens and content contracts"
```

## Task 3: Build navigation, hero, story, facilities, and benefits

**Files:**
- Create: `src/components/layout/Header.tsx`, `src/components/sections/Hero.tsx`, `src/components/sections/Welcome.tsx`, `src/components/sections/TrainingExperience.tsx`, `src/components/sections/Facilities.tsx`, `src/components/sections/Benefits.tsx`, `src/components/sections/Hero.test.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `facilities`, `benefits`, `SectionHeading`, `revealItem`.
- Produces: navigable `#facilities`, `#reviews`, and `#visit` anchors, and one homepage `h1`.

- [ ] **Step 1: Write the failing hero and primary-CTA test**

```tsx
render(<App />);
expect(screen.getByRole('heading', { level: 1, name: /stronger starts here/i })).toBeInTheDocument();
expect(screen.getByRole('link', { name: /visit the gym/i })).toHaveAttribute('href', '#visit');
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- --run src/components/sections/Hero.test.tsx`

Expected: FAIL because the hero is absent.

- [ ] **Step 3: Implement the main editorial showcase sections**

Build a sticky-or-static responsive header with anchor navigation and a primary visit link. Build `Hero` with the sole `h1` text “Stronger starts here.”, a short inclusive description, and `#visit` / `#facilities` links. Render typed facility and benefit arrays as semantic article lists with descriptive image alt text. Use responsive grid layouts and only entrance/hover animations that defer to the reduced-motion setting.

- [ ] **Step 4: Run focused tests and build**

Run: `npm test -- --run src/components/sections/Hero.test.tsx; npm run build`

Expected: PASS and successful production build.

- [ ] **Step 5: Commit showcase sections**

```powershell
git add src/App.tsx src/components/layout/Header.tsx src/components/sections src/index.css
git commit -m "feat(home): add gym showcase sections"
```

## Task 4: Add accessible reviews and visit/contact conversion sections

**Files:**
- Create: `src/components/sections/Reviews.tsx`, `src/components/sections/VisitContact.tsx`, `src/components/layout/Footer.tsx`, `src/components/sections/Reviews.test.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `testimonials`, `contactDetails`, `googleMapsUrl`, and Embla Carousel.
- Produces: `#reviews` and `#visit` landmarks; labelled carousel controls; external Google Maps destination.

- [ ] **Step 1: Write the failing review behavior test**

```tsx
render(<Reviews />);
expect(screen.getByRole('region', { name: /member reviews/i })).toBeInTheDocument();
expect(screen.getByRole('link', { name: /read more on google/i })).toHaveAttribute('href', googleMapsUrl);
expect(screen.getByRole('button', { name: /next review/i })).toBeEnabled();
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- --run src/components/sections/Reviews.test.tsx`

Expected: FAIL because `Reviews` does not exist.

- [ ] **Step 3: Implement conversion sections and manual review carousel**

Render testimonials in an Embla carousel with `Previous review` and `Next review` buttons, no autoplay, keyboard-operable buttons, sample-review disclosure, star icons with screen-reader labels, and an external `Read more on Google` link. Add a visit section with the supplied Maps destination, compact contact cards, hours, and `tel:` / WhatsApp-ready placeholder links. Add a footer with anchor navigation.

- [ ] **Step 4: Run focused tests and build**

Run: `npm test -- --run src/components/sections/Reviews.test.tsx; npm run build`

Expected: PASS and successful production build.

- [ ] **Step 5: Commit engagement sections**

```powershell
git add src/App.tsx src/components/sections/Reviews.tsx src/components/sections/VisitContact.tsx src/components/layout/Footer.tsx src/components/sections/Reviews.test.tsx
git commit -m "feat(home): add reviews and visit contact sections"
```

## Task 5: Final responsive, accessibility, and delivery pass

**Files:**
- Modify: `README.md`, `src/index.css`, any section files revealed by verification.

**Interfaces:**
- Consumes: all prior homepage components.
- Produces: documented, production-buildable project.

- [ ] **Step 1: Write a failing accessibility regression test**

```tsx
render(<App />);
expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
expect(screen.getByRole('link', { name: /visit the gym/i })).toBeVisible();
```

- [ ] **Step 2: Run the regression test to verify the condition before final fixes**

Run: `npm test -- --run src/App.test.tsx`

Expected: the assertion identifies any duplicate `h1` or missing primary CTA before the final update.

- [ ] **Step 3: Complete documentation and correct verified issues**

Document prerequisites, `npm install`, `npm run dev`, `npm test`, `npm run build`, library rationale, and where to replace sample copy/contact information in `README.md`. Correct any detected responsiveness, focus, heading-order, or reduced-motion issue without adding extra dependencies.

- [ ] **Step 4: Run complete verification**

Run: `npm test -- --run; npm run build; git diff --check`

Expected: all tests pass, the production build succeeds, and Git reports no whitespace errors.

- [ ] **Step 5: Commit final polish**

```powershell
git add README.md src
git commit -m "docs: document Be Strong Fitness website setup"
```

## Plan self-review

- **Spec coverage:** Tasks 2–4 implement all required homepage sections, typed local content, accessibility, mobile behavior, sample reviews, and Google Maps destination. Tasks 1 and 5 cover tooling, documentation, and verification.
- **Dependency scope:** Only Tailwind, React Router, Motion, Lucide, Embla, and Sonner are installed for the initial release. Deferred packages remain absent.
- **Placeholder scan:** The plan contains no unassigned implementation steps. Initial business values are intentionally represented as replaceable typed content because no approved phone number, hours, or imagery was supplied.
- **Type consistency:** `site-content.ts` defines all data contracts used by Tasks 3 and 4; shared components and their property names are declared before use.
