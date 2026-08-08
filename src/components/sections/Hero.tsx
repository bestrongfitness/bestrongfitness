import { ArrowDownRight, MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { heroImage } from '@/data/site-content';
import { heroMedia, revealItem, staggerContainer } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-paper sm:min-h-[860px]">
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(12,12,11,0.88)_6%,rgba(12,12,11,0.55)_48%,rgba(12,12,11,0.28)_100%)]" />
      <motion.img
        className="absolute inset-0 -z-10 size-full object-cover object-center"
        src={heroImage.src}
        alt={heroImage.alt}
        initial={reduceMotion ? false : 'hidden'}
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: 0.78,
                scale: [1.02, 1.08],
              }
        }
        variants={reduceMotion ? undefined : heroMedia}
        transition={
          reduceMotion
            ? undefined
            : {
                opacity: { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
                scale: { duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'linear' },
              }
        }
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />

      <Container className="relative flex min-h-[100svh] flex-col justify-end pb-10 pt-32 sm:min-h-[860px] sm:pb-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reduceMotion ? undefined : staggerContainer}
          className="max-w-4xl"
        >
          <motion.p
            variants={reduceMotion ? undefined : revealItem}
            className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-amber"
          >
            <span className="size-2 rounded-full bg-amber" /> Be Strong Fitness · Beerumguda Gym · Beeramguda
          </motion.p>
          <motion.h1
            variants={reduceMotion ? undefined : revealItem}
            className="font-display max-w-4xl text-6xl leading-[0.87] tracking-[-0.065em] sm:text-7xl md:text-8xl lg:text-[8.5rem]"
          >
            Stronger starts <em className="font-normal text-amber">here.</em>
          </motion.h1>
          <motion.div
            variants={reduceMotion ? undefined : revealItem}
            className="mt-8 flex max-w-xl flex-col gap-6 sm:mt-10 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="max-w-sm text-base leading-7 text-paper/72 sm:text-lg">
              Be Strong Fitness is a Beerumguda gym in Beeramguda, Hyderabad—strength, free weights, and cardio for day one or your next level.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary" className="group self-start">
                <a href="#visit">
                  Visit the gym{' '}
                  <ArrowDownRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-paper/35 text-paper hover:bg-paper hover:text-ink">
                <a href="#facilities">Explore zones</a>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-14 flex items-center gap-2 border-t border-paper/20 pt-5 text-xs font-medium text-paper/60"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <MapPin size={14} aria-hidden="true" />
          <span>Be Strong Fitness · Beerumguda · Beeramguda</span>
        </motion.div>
      </Container>
    </section>
  );
}
