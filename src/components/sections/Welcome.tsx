import { ArrowDown } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { revealUp, staggerContainer, viewportOnce } from '@/lib/motion';

export function Welcome() {
  const reduceMotion = useReducedMotion();

  return (
    <Container
      as="section"
      className="grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:py-36"
    >
      <motion.div
        className="contents"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={reduceMotion ? undefined : staggerContainer}
      >
        <motion.div variants={reduceMotion ? undefined : revealUp} className="lg:col-span-3">
          <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-amber-deep">
            01 / A place to begin
          </p>
        </motion.div>
        <motion.div variants={reduceMotion ? undefined : revealUp} className="lg:col-span-8 lg:col-start-5">
          <p className="font-display text-4xl leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Training isn’t about fitting a certain mould. It’s about finding a space that makes you want to return.
          </p>
          <Button asChild variant="link" size="link" className="mt-10 gap-3">
            <a href="#experience">
              Explore your training space <ArrowDown size={16} />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </Container>
  );
}
