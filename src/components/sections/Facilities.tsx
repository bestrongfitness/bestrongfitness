import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import { facilities } from '@/data/site-content';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';
import { imageCrossfade, revealUp, staggerContainer, viewportOnce } from '@/lib/motion';

export function Facilities() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(facilities[0]?.id ?? '');
  const active = facilities.find((facility) => facility.id === activeId) ?? facilities[0];

  return (
    <section id="facilities" className="bg-ink text-paper">
      <Container className="py-20 sm:py-28 lg:py-36">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={reduceMotion ? undefined : revealUp}
        >
          <SectionHeading
            eyebrow="Training zones at Be Strong Fitness"
            title="Strength. Weights. Cardio."
            description="A Beerumguda gym floor done properly—pick a zone and see the Beeramguda training space."
            inverted
          />
        </motion.div>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-10 lg:items-stretch">
          <motion.div
            className="flex flex-col gap-2 lg:col-span-4"
            role="tablist"
            aria-label="Gym training zones"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={reduceMotion ? undefined : staggerContainer}
          >
            {facilities.map((facility, index) => {
              const selected = facility.id === active?.id;
              return (
                <motion.button
                  key={facility.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  id={`zone-tab-${facility.id}`}
                  aria-controls="zone-panel"
                  variants={reduceMotion ? undefined : revealUp}
                  onClick={() => setActiveId(facility.id)}
                  className={cn(
                    'group rounded-[var(--radius-card)] border px-5 py-5 text-left transition duration-300',
                    selected
                      ? 'border-amber bg-paper/5'
                      : 'border-paper/15 hover:border-paper/35 hover:bg-paper/5',
                  )}
                >
                  <span className="font-mono text-[0.62rem] tracking-[0.14em] text-amber">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-bold tracking-[-0.03em]">{facility.title}</h3>
                  <p
                    className={cn(
                      'mt-2 text-sm leading-6 transition-colors',
                      selected ? 'text-paper/75' : 'text-paper/50 group-hover:text-paper/70',
                    )}
                  >
                    {facility.description}
                  </p>
                </motion.button>
              );
            })}
          </motion.div>

          <motion.div
            id="zone-panel"
            role="tabpanel"
            aria-labelledby={active ? `zone-tab-${active.id}` : undefined}
            className="relative min-h-[22rem] overflow-hidden rounded-[var(--radius-card)] bg-ink-soft sm:min-h-[28rem] lg:col-span-8 lg:min-h-[36rem]"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={reduceMotion ? undefined : revealUp}
          >
            <AnimatePresence mode="wait">
              {active ? (
                <motion.img
                  key={active.id}
                  src={active.image}
                  alt={active.imageAlt}
                  className="absolute inset-0 size-full object-cover"
                  {...(reduceMotion
                    ? {}
                    : {
                        initial: imageCrossfade.initial,
                        animate: imageCrossfade.animate,
                        exit: imageCrossfade.exit,
                        transition: imageCrossfade.transition,
                      })}
                />
              ) : null}
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            {active ? (
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-amber">{active.title}</p>
                <p className="mt-2 max-w-md text-sm leading-6 text-paper/80 sm:text-base">{active.description}</p>
              </div>
            ) : null}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
