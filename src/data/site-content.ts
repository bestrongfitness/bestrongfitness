import { asset } from '../lib/assets';

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
  source: string;
  rating: 5;
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

/** Full-floor cover shot for the homepage hero. */
export const heroImage = {
  src: asset('images/gym/cover.jpg'),
  alt: 'Wide view of the Be Strong Fitness training floor with white machines and overhead lighting.',
} as const;

/** Normal gym training zones — no recovery suite. */
export const facilities: Facility[] = [
  {
    id: 'strength-zone',
    title: 'Strength zone',
    description:
      'Selectorized machines and open lanes covering every major muscle group—built for focused, progressive sessions.',
    image: asset('images/gym/facility-1.jpg'),
    imageAlt: 'White-framed strength machines in the Be Strong Fitness gym.',
  },
  {
    id: 'free-weights',
    title: 'Free weights',
    description:
      'Dumbbells, racks, and benches on rubber flooring for heavy lifts and the work that builds real confidence.',
    image: asset('images/gym/hero.jpg'),
    imageAlt: 'Branded Be Strong Fitness dumbbells lined up on a rack.',
  },
  {
    id: 'cardio-zone',
    title: 'Cardio zone',
    description:
      'Treadmills lined up for endurance work—train at your own pace with room to settle in and keep going.',
    image: asset('images/gym/cardio.jpg'),
    imageAlt: 'Row of treadmills in the Be Strong Fitness cardio zone.',
  },
];

/** Exterior photo used in the visit section. */
export const visitImage = {
  src: asset('images/gym/facility-3.jpg'),
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
    id: 'review-sai-kumar',
    quote:
      'Be Strong Fitness in Beeramguda is an excellent gym with a great atmosphere and top-quality equipment. The owner, Osman, is extremely friendly, motivating, and genuinely supportive of everyone’s fitness journey.',
    name: 'Sai Kumar',
    source: 'Google review',
    rating: 5,
  },
  {
    id: 'review-manikanta',
    quote:
      'Be Strong Fitness is one of the best gyms for fitness lovers who want a motivating and positive environment. Modern equipment, spacious workout areas, proper ventilation, and a clean atmosphere.',
    name: 'Manikanta',
    source: 'Google review',
    rating: 5,
  },
  {
    id: 'review-abdul-khalim',
    quote:
      'I have been training under Vivek for the past three months, and the experience has been truly amazing. He is very knowledgeable, supportive, and always motivates me to push my limits.',
    name: 'Abdul Khalim',
    source: 'Google review',
    rating: 5,
  },
  {
    id: 'review-teja-sai',
    quote:
      'The best gym near Beeramguda kaman and best trainers with good knowledge. I will suggest this to most beginners.',
    name: 'Teja Sai',
    source: 'Google review',
    rating: 5,
  },
  {
    id: 'review-ravinder-reddy',
    quote:
      'Be Strong Fitness join karne ke baad mujhe workout ka real maza samajh aaya. Perfect gym for beginners and advanced lifters—I never saw this type of gym.',
    name: 'Ravinder Reddy',
    source: 'Google review',
    rating: 5,
  },
  {
    id: 'review-nikhila',
    quote:
      'Vivek is an excellent trainer! Very supportive, knowledgeable, and always motivates me to push my limits. Highly recommended!',
    name: 'Nikhila Nikki',
    source: 'Google review',
    rating: 5,
  },
  {
    id: 'review-phanindra',
    quote:
      'This gym completely changed my fitness journey. The trainers are very supportive and knowledgeable. The equipment is modern, the atmosphere is energetic, and it truly feels like a second home.',
    name: 'Vs Phanindra Cherukuri',
    source: 'Google review',
    rating: 5,
  },
  {
    id: 'review-naveen',
    quote:
      'Very disciplined and result-oriented gym. High-quality equipment, friendly staff, and expert trainers make it ideal for both beginners and advanced fitness enthusiasts.',
    name: 'Naveen Mudhiraj',
    source: 'Google review',
    rating: 5,
  },
  {
    id: 'review-venkat-chandu',
    quote:
      'This is hands down the best gym I’ve ever joined! The equipment is modern, clean, and well-maintained. The trainers are super friendly, professional, and always ready to help.',
    name: 'Venkat Chandu',
    source: 'Google review',
    rating: 5,
  },
];

export const contactDetails: ContactDetail[] = [
  {
    label: 'Location',
    value: 'Be Strong Fitness, Beeramguda (Beerumguda), Hyderabad',
    href: googleMapsUrl,
  },
  { label: 'Hours', value: 'Open daily · 5 am–10 pm' },
  { label: 'Phone', value: '086867 07068', href: 'tel:+918686707068' },
];
