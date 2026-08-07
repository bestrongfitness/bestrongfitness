export type Facility = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type Benefit = {
  id: string;
  title: string;
  description: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  trainingFocus: string;
  rating: 5;
  isSample: true;
};

export type ContactDetail = {
  label: string;
  value: string;
  href?: string;
};

export const gymCoordinates = {
  lat: 17.5085578,
  lng: 78.3016454,
} as const;

/** Official Google Maps place listing for Be Strong Fitness. */
export const googleMapsUrl =
  'https://www.google.com/maps/place/Be+Strong+Fitness/@17.5085578,78.3016454,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb933132a18ad1:0x18665c81ebe02226!8m2!3d17.5085578!4d78.3016454!16s%2Fg%2F11yjy03l8k';

/** Opens turn-by-turn directions to the gym place pin. */
export const googleMapsDirectionsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=Be+Strong+Fitness%2C+17.5085578%2C+78.3016454';

/** Hero media from Google Maps listing photos (saved locally). */
export const heroImage = {
  src: '/images/gym/hero.jpg',
  alt: 'Be Strong Fitness branded dumbbells lined up on a rack.',
} as const;

export const facilities: Facility[] = [
  {
    id: 'strength-floor',
    title: 'Strength floor',
    description: 'A focused space for compound lifts, progressive overload, and training that builds confidence.',
    image: '/images/gym/hero.jpg',
    imageAlt: 'Branded Be Strong Fitness dumbbells lined up on a rack.',
  },
  {
    id: 'machine-floor',
    title: 'Machine floor',
    description: 'Clean selectorized stations and open lanes so you can train with purpose at your own pace.',
    image: '/images/gym/facility-1.jpg',
    imageAlt: 'White-framed strength machines in the Be Strong Fitness gym.',
  },
  {
    id: 'training-racks',
    title: 'Training racks',
    description: 'Racks, benches, and room to move—built for consistent sessions and real progress.',
    image: '/images/gym/facility-2.jpg',
    imageAlt: 'Power racks and strength machines on the Be Strong Fitness training floor.',
  },
];

/** Exterior photo used in the visit section. */
export const visitImage = {
  src: '/images/gym/facility-3.jpg',
  alt: 'S&S Square building exterior with Be Strong Fitness signage on the top floor.',
} as const;

export const benefits: Benefit[] = [
  {
    id: 'beginner-ready',
    title: 'Beginner-ready',
    description: 'Start without needing to know every machine or movement on day one.',
  },
  {
    id: 'serious-equipment',
    title: 'Serious equipment',
    description: 'Train with purpose using the essentials that support real progress.',
  },
  {
    id: 'positive-culture',
    title: 'Positive culture',
    description: 'A respectful space where effort is noticed and every level belongs.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'review-1',
    quote: 'I felt comfortable from my very first session. The environment keeps me motivated to show up.',
    name: 'Sample member review',
    trainingFocus: 'Strength training',
    rating: 5,
    isSample: true,
  },
  {
    id: 'review-2',
    quote: 'It has the right mix of serious training energy and people who are genuinely helpful.',
    name: 'Sample member review',
    trainingFocus: 'Fitness journey',
    rating: 5,
    isSample: true,
  },
  {
    id: 'review-3',
    quote: 'A clean, focused gym that makes it easy to stay consistent week after week.',
    name: 'Sample member review',
    trainingFocus: 'Everyday fitness',
    rating: 5,
    isSample: true,
  },
];

export const contactDetails: ContactDetail[] = [
  {
    label: 'Location',
    value: 'Beeramguda Main Rd, Kakatiya Nagar, Hyderabad',
    href: googleMapsUrl,
  },
  { label: 'Hours', value: 'Open daily · 5 am–10 pm' },
  { label: 'Phone', value: '086867 07068', href: 'tel:+918686707068' },
];
