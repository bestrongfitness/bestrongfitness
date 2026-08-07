import { Check } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { benefits } from '@/data/site-content';
import { Container } from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';
import { revealUp, staggerContainer, viewportOnce } from '@/lib/motion';

export function Benefits() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-y border-line bg-paper-strong">
      <Container className="grid gap-10 py-20 sm:py-24 lg:grid-cols-12">
        <motion.div
          className="lg:col-span-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={reduceMotion ? undefined : revealUp}
        >
          <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-amber-deep">Why Be Strong</p>
          <h2 className="font-display mt-5 text-4xl leading-none tracking-[-0.045em] sm:text-5xl">
            Feel welcome. Train seriously.
          </h2>
        </motion.div>

        <motion.div
          className="lg:col-span-7 lg:col-start-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={reduceMotion ? undefined : staggerContainer}
        >
          {benefits.map((benefit, index) => (
            <motion.article key={benefit.id} variants={reduceMotion ? undefined : revealUp}>
              {index > 0 ? <Separator /> : null}
              <div className="flex gap-5 py-6 first:pt-0 last:pb-0">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-amber text-ink">
                  <Check size={16} strokeWidth={2.4} />
                </span>
                <div>
                  <h3 className="text-lg font-bold tracking-[-0.025em]">{benefit.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-ink/65">{benefit.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
