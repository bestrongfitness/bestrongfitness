import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useCallback } from 'react';

import type { Facility } from '@/data/site-content';
import { facilities } from '@/data/site-content';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { easeOutExpo, revealUp, staggerContainer, viewportOnce } from '@/lib/motion';

export function Facilities() {
  const reduceMotion = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true });
  const previous = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="facilities" className="overflow-hidden bg-ink text-paper">
      <Container className="py-20 sm:py-28 lg:py-36">
        <motion.div
          className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={reduceMotion ? undefined : staggerContainer}
        >
          <motion.div className="max-w-2xl" variants={reduceMotion ? undefined : revealUp}>
            <SectionHeading
              eyebrow="Training zones at Be Strong Fitness"
              title="Strength. Weights. Cardio."
              description="A Beerumguda gym floor done properly—pick a zone and see the Beeramguda training space."
              inverted
            />
          </motion.div>
          <motion.div variants={reduceMotion ? undefined : revealUp} className="flex items-center gap-2 lg:hidden">
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Previous training zone"
              className="border-paper/25 text-paper hover:bg-paper hover:text-ink"
              onClick={previous}
            >
              <ArrowLeft size={18} />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Next training zone"
              className="border-paper/25 text-paper hover:bg-paper hover:text-ink"
              onClick={next}
            >
              <ArrowRight size={18} />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 lg:hidden"
          ref={emblaRef}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={reduceMotion ? undefined : revealUp}
        >
          <div className="-ml-4 flex">
            {facilities.map((facility, index) => (
              <div key={facility.id} className="min-w-0 flex-[0_0_88%] pl-4 sm:flex-[0_0_72%]">
                <ZoneCard facility={facility} index={index} reduceMotion={Boolean(reduceMotion)} />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 hidden gap-5 lg:grid lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={reduceMotion ? undefined : staggerContainer}
        >
          {facilities.map((facility, index) => (
            <motion.div key={facility.id} variants={reduceMotion ? undefined : revealUp}>
              <ZoneCard facility={facility} index={index} reduceMotion={Boolean(reduceMotion)} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function ZoneCard({
  facility,
  index,
  reduceMotion,
}: {
  facility: Facility;
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <article className="group relative isolate h-[26rem] overflow-hidden rounded-[var(--radius-card)] bg-ink-soft sm:h-[30rem] lg:h-[34rem]">
      <motion.img
        src={facility.image}
        alt={facility.imageAlt}
        className="absolute inset-0 size-full object-cover"
        initial={reduceMotion ? false : { scale: 1.12, opacity: 0.55 }}
        whileInView={reduceMotion ? undefined : { scale: 1.02, opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.5, ease: easeOutExpo }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-amber">0{index + 1}</p>
        <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em]">{facility.title}</h3>
        <p className="mt-2 max-w-md text-sm leading-6 text-paper/80">{facility.description}</p>
      </div>
    </article>
  );
}
