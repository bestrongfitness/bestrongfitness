# Be Strong Fitness Website — Design Specification

## Purpose

Create a professional, mobile-first React website that showcases Be Strong Fitness and makes it easy for prospective members to visit or contact the gym. The first release is a marketing site; memberships, bookings, and member accounts are explicitly out of scope.

## Audience and voice

The audience is anyone looking for a gym, from first-time members to experienced trainees. The voice is premium, friendly, encouraging, and inclusive. It should communicate serious training standards without appearing exclusive or intimidating.

## Visual direction

The chosen direction is **warm athletic editorial**:

- Dark charcoal foundation, warm cream surfaces, and restrained amber accents.
- Editorial display typography paired with a legible modern sans-serif.
- Full-bleed fitness imagery, deliberate grid breaks, and compact copy.
- Purposeful entrance and hover motion that respects `prefers-reduced-motion`.

## Information architecture

The initial route is a single homepage with these ordered sections:

1. **Hero:** brand, concise promise, primary visit/enquiry CTA, and an anchor to facilities.
2. **Welcome:** a short message affirming that beginners and experienced trainees are both welcome.
3. **Training experience:** strength, cardio, coaching, and supportive environment highlights.
4. **Facilities:** responsive gym-gallery cards.
5. **Why Be Strong:** concise value and amenity cards.
6. **Member reviews:** a horizontal testimonial carousel using clearly labelled sample content, ratings, names, and a link to the supplied Google Maps listing. Real review content is added only when approved/provided by the business.
7. **Visit and contact:** address, contact and opening-hours placeholders, prominent enquiry CTA, and a Google Maps link.
8. **Footer:** brand, anchors, and social placeholders.

## Architecture

- **Runtime:** Vite, React, TypeScript.
- **Styling:** Tailwind CSS with design tokens expressed as CSS custom properties.
- **Navigation:** React Router, even though release one contains one public route, to keep future pages additive.
- **UI:** Lucide React icons and Motion for small, meaningful transitions.
- **Reviews:** Embla carousel, configured with keyboard-accessible controls and without automatic motion.
- **Feedback:** Sonner reserved for future form submission feedback.
- **Content boundaries:** typed, data-driven arrays for facilities, benefits, and testimonials; page sections remain presentational components.

Libraries including React Query, Zustand, Axios, React Hook Form, Zod, date-fns, Lenis, Magic UI, Aceternity UI, and Origin UI are deliberately deferred until a concrete API, form, or interaction justifies them.

## Accessibility and responsive behavior

- Semantic landmarks, one logical `h1`, labelled controls, visible focus states, and contrast at WCAG AA or above.
- All motion will reduce or stop for users requesting reduced motion.
- Mobile is the base layout; facility grids collapse cleanly, text remains readable, and CTAs stay prominent.
- The carousel exposes descriptive previous/next controls and does not depend on drag gestures.

## Error handling and testing

The static first release has no remote data dependency. If an image fails, meaningful alt text remains. External map and contact links open safely. Verification will include type checking, production build, and a manual responsive/accessibility pass.

## Future extensions

Future work may add a validated enquiry form, trainer profiles, class schedules, memberships, and live API-backed data without changing the homepage section contracts.
