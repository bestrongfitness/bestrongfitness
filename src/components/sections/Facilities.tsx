import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';

import type { Facility } from '@/data/site-content';
import { facilities } from '@/data/site-content';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';
import { easeOutExpo, revealUp, staggerContainer, viewportOnce } from '@/lib/motion';

export function Facilities() {
  const reduceMotion = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    containScroll: 'trimSnaps',
    skipSnaps: false,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback((api: NonNullable<typeof emblaApi>) => {
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('reInit', onSelect);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const previous = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="facilities" className="overflow-hidden bg-ink text-paper">
      <Container className="py-20 sm:py-28 lg:py-36">
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={reduceMotion ? undefined : staggerContainer}
        >
          <motion.div variants={reduceMotion ? undefined : revealUp}>
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
              disabled={!canPrev}
              className="border-paper/25 text-paper hover:bg-paper hover:text-ink disabled:opacity-30"
              onClick={previous}
            >
              <ArrowLeft size={18} />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Next training zone"
              disabled={!canNext}
              className="border-paper/25 text-paper hover:bg-paper hover:text-ink disabled:opacity-30"
              onClick={next}
            >
              <ArrowRight size={18} />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10 overflow-hidden lg:hidden"
          ref={emblaRef}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={reduceMotion ? undefined : revealUp}
        >
          <div className="flex">
            {facilities.map((facility) => (
              <div key={facility.id} className="min-w-0 flex-[0_0_100%]">
                <ZoneCard facility={facility} reduceMotion={Boolean(reduceMotion)} />
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
          {facilities.map((facility) => (
            <motion.div key={facility.id} variants={reduceMotion ? undefined : revealUp}>
              <ZoneCard facility={facility} reduceMotion={Boolean(reduceMotion)} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function ZoneCard({
  facility,
  reduceMotion,
}: {
  facility: Facility;
  reduceMotion: boolean;
}) {
  return (
    <article className="relative isolate h-[26rem] overflow-hidden rounded-[var(--radius-card)] bg-ink-soft sm:h-[30rem] lg:h-[34rem]">
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
        <h3 className="text-2xl font-bold tracking-[-0.03em]">{facility.title}</h3>
        <p className={cn('mt-2 max-w-md text-sm leading-6 text-paper/80')}>{facility.description}</p>
      </div>
    </article>
  );
}
