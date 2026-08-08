import { ArrowDown } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { revealUp, viewportOnce } from '@/lib/motion';

export function Welcome() {
  const reduceMotion = useReducedMotion();
  const revealProps = reduceMotion
    ? {}
    : {
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: viewportOnce,
        variants: revealUp,
      };

  return (
    <Container as="section" className="grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:py-36">
      <motion.div {...revealProps} className="lg:col-span-3">
        <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-amber-deep">
          01 / Be Strong Fitness · Beerumguda
        </p>
      </motion.div>
      <motion.div {...revealProps} className="lg:col-span-8 lg:col-start-5">
        <p className="font-display text-4xl leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
          Looking for a Beerumguda gym? Be Strong Fitness in Beeramguda is built for people who want a space worth returning to.
        </p>
        <Button asChild variant="link" size="link" className="mt-10 gap-3">
          <a href="#experience">
            Explore your training space <ArrowDown size={16} />
          </a>
        </Button>
      </motion.div>
    </Container>
  );
}
