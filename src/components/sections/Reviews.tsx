import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { useCallback } from 'react';

import { googleMapsUrl, testimonials } from '../../data/site-content';
import { SectionHeading } from '../ui/SectionHeading';

export function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true });
  const previous = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="reviews" aria-label="Member reviews" className="overflow-hidden bg-[var(--paper)] py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Member reviews" title="A good feeling to come back to." description="A few words from people building their routine with us." />
          <div className="flex items-center gap-2">
            <button type="button" aria-label="Previous review" onClick={previous} className="grid size-11 place-items-center rounded-full border border-[var(--line)] transition hover:bg-[var(--ink)] hover:text-[var(--paper)]">
              <ArrowLeft size={18} />
            </button>
            <button type="button" aria-label="Next review" onClick={next} className="grid size-11 place-items-center rounded-full border border-[var(--line)] transition hover:bg-[var(--ink)] hover:text-[var(--paper)]">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {testimonials.map((review) => (
              <article key={review.id} className="min-w-0 flex-[0_0_92%] pl-4 sm:flex-[0_0_68%] lg:flex-[0_0_48%]">
                <div className="flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--line)] bg-[#fbf8f1] p-7 sm:p-9">
                  <div className="flex gap-1 text-[var(--amber-deep)]" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: review.rating }).map((_, index) => <Star key={index} size={15} fill="currentColor" aria-hidden="true" />)}
                  </div>
                  <blockquote className="font-display mt-9 text-2xl leading-[1.15] tracking-[-0.035em] sm:text-3xl">“{review.quote}”</blockquote>
                  <footer className="mt-10 border-t border-[var(--line)] pt-4">
                    <p className="text-sm font-bold">{review.name}</p>
                    <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[var(--ink)]/55">{review.trainingFocus} · Sample review</p>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </div>

        <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex border-b border-[var(--ink)] pb-1 text-sm font-bold transition hover:border-[var(--amber-deep)] hover:text-[var(--amber-deep)]">
          Read more on Google
        </a>
      </div>
    </section>
  );
}
