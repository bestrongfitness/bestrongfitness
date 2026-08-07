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

export const googleMapsUrl =
  'https://www.google.com/maps/search/?api=1&query=17.5085578%2C78.3016454';

export const facilities: Facility[] = [
  {
    id: 'strength-floor',
    title: 'Strength floor',
    description: 'A focused space for compound lifts, progressive overload, and training that builds confidence.',
    image:
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Athlete preparing for a barbell lift in a gym.',
  },
  {
    id: 'cardio-zone',
    title: 'Cardio zone',
    description: 'Build endurance at your own pace with room to move, reset, and keep going.',
    image:
      'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Person training on gym equipment in a bright fitness studio.',
  },
  {
    id: 'coaching',
    title: 'Guided training',
    description: 'Get practical support, safer form, and a plan that meets you where you are.',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Trainer guiding a member through a workout.',
  },
];

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
  { label: 'Location', value: 'Be Strong Fitness, Hyderabad', href: googleMapsUrl },
  { label: 'Hours', value: 'Hours available at the gym' },
  { label: 'Enquiries', value: 'Visit us to get started' },
];
