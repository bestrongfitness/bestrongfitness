import { ArrowDownRight, MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { heroImage } from '@/data/site-content';
import { heroMedia, revealItem } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative isolate min-h-[760px] overflow-hidden bg-ink text-paper sm:min-h-[820px]">
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(12,12,11,0.9)_4%,rgba(12,12,11,0.6)_44%,rgba(12,12,11,0.16)_100%)]" />
      <motion.img
        className="absolute inset-0 -z-10 size-full object-cover object-[62%_center]"
        src={heroImage.src}
        alt={heroImage.alt}
        initial={reduceMotion ? false : 'hidden'}
        animate={reduceMotion ? undefined : 'visible'}
        variants={heroMedia}
      />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink to-transparent" />

      <Container className="relative flex min-h-[760px] flex-col justify-end pb-10 pt-32 sm:min-h-[820px] sm:pb-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-4xl"
        >
          <motion.p
            variants={reduceMotion ? undefined : revealItem}
            className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-amber"
          >
            <span className="size-2 rounded-full bg-amber" /> Hyderabad · Open to every beginning
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
              A focused, welcoming place to train with purpose—whether it’s day one or your next level.
            </p>
            <Button asChild variant="secondary" className="group self-start">
              <a href="#visit">
                Visit the gym{' '}
                <ArrowDownRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <div className="mt-14 flex items-center gap-2 border-t border-paper/20 pt-5 text-xs font-medium text-paper/60">
          <MapPin size={14} aria-hidden="true" />
          <span>Find your rhythm. Build your strength.</span>
        </div>
      </Container>
    </section>
  );
}
