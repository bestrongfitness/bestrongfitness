import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useCallback } from 'react';

import { googleMapsUrl, testimonials } from '@/data/site-content';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Separator } from '@/components/ui/separator';
import { revealUp, staggerContainer, viewportOnce } from '@/lib/motion';

export function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true });
  const previous = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const reduceMotion = useReducedMotion();

  return (
    <section id="reviews" aria-label="Member reviews" className="overflow-hidden bg-paper py-20 sm:py-28 lg:py-36">
      <Container>
        <motion.div
          className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={reduceMotion ? undefined : staggerContainer}
        >
          <motion.div variants={reduceMotion ? undefined : revealUp}>
            <SectionHeading
              eyebrow="Member reviews"
              title="A good feeling to come back to."
              description="A few words from people building their routine with us."
            />
          </motion.div>
          <motion.div variants={reduceMotion ? undefined : revealUp} className="flex items-center gap-2">
            <Button type="button" variant="outline" size="icon" aria-label="Previous review" onClick={previous}>
              <ArrowLeft size={18} />
            </Button>
            <Button type="button" variant="outline" size="icon" aria-label="Next review" onClick={next}>
              <ArrowRight size={18} />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 overflow-hidden"
          ref={emblaRef}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={reduceMotion ? undefined : revealUp}
        >
          <div className="-ml-4 flex">
            {testimonials.map((review) => (
              <article key={review.id} className="min-w-0 flex-[0_0_92%] pl-4 sm:flex-[0_0_68%] lg:flex-[0_0_48%]">
                <div className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-[#fbf8f1] p-7 sm:p-9">
                  <div className="flex gap-1 text-amber-deep" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star key={index} size={15} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="font-display mt-9 text-2xl leading-[1.15] tracking-[-0.035em] sm:text-3xl">
                    “{review.quote}”
                  </blockquote>
                  <footer className="mt-10">
                    <Separator className="mb-4" />
                    <p className="text-sm font-bold">{review.name}</p>
                    <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ink/55">
                      {review.trainingFocus} · Sample review
                    </p>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </motion.div>

        <Button asChild variant="link" size="link" className="mt-8">
          <a href={googleMapsUrl} target="_blank" rel="noreferrer">
            Read more on Google
          </a>
        </Button>
      </Container>
    </section>
  );
}
