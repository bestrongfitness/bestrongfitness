import type { Variants } from 'motion/react';

export const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

export const revealFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const heroMedia: Variants = {
  hidden: { scale: 1.12, opacity: 0.4 },
  visible: {
    scale: 1.02,
    opacity: 0.78,
    transition: { duration: 1.8, ease: easeOutExpo },
  },
};

export const imageCrossfade = {
  initial: { opacity: 0, scale: 1.04 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.02 },
  transition: { duration: 0.55, ease: easeOutExpo },
};

export const viewportOnce = { once: true, amount: 0.22 as const };
