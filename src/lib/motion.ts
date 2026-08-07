import type { Variants } from 'motion/react';

export const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutExpo },
  },
};

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOutExpo },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const heroMedia: Variants = {
  hidden: { scale: 1.08, opacity: 0.55 },
  visible: {
    scale: 1,
    opacity: 0.7,
    transition: { duration: 1.4, ease: easeOutExpo },
  },
};

export const viewportOnce = { once: true, amount: 0.2 as const };
