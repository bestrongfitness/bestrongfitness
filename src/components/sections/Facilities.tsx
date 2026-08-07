import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { facilities } from '@/data/site-content';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { revealUp, staggerContainer, viewportOnce } from '@/lib/motion';

export function Facilities() {
  const reduceMotion = useReducedMotion();

  return (
    <Container as="section" id="facilities" className="py-20 sm:py-28 lg:py-36">
      <motion.div
        className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={reduceMotion ? undefined : staggerContainer}
      >
        <motion.div variants={reduceMotion ? undefined : revealUp}>
          <SectionHeading
            eyebrow="Room to work"
            title="The essentials, done well."
            description="Purposeful zones made for consistent training."
          />
        </motion.div>
        <motion.p variants={reduceMotion ? undefined : revealUp} className="max-w-xs text-sm leading-6 text-ink/60">
          Every corner is designed to support the work—not distract from it.
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-12 grid gap-5 md:grid-cols-12"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={reduceMotion ? undefined : staggerContainer}
      >
        {facilities.map((facility, index) => (
          <motion.article
            key={facility.id}
            variants={reduceMotion ? undefined : revealUp}
            className={index === 0 ? 'group md:col-span-7' : 'group md:col-span-5'}
          >
            <div className="relative aspect-[1.1] overflow-hidden rounded-[var(--radius-card)] bg-paper-strong">
              <img
                src={facility.image}
                alt={facility.imageAlt}
                className="size-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.14em]">
                0{index + 1}
              </span>
            </div>
            <div className="flex items-start justify-between gap-5 px-1 pt-5">
              <div>
                <h3 className="text-xl font-bold tracking-[-0.035em]">{facility.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-ink/62">{facility.description}</p>
              </div>
              <ArrowUpRight className="mt-1 shrink-0 text-amber-deep transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={20} />
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Container>
  );
}
