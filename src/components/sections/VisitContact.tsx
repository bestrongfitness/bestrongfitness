import { ArrowUpRight, Clock3, MapPin, Phone } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { contactDetails, googleMapsDirectionsUrl, visitImage } from '@/data/site-content';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';
import { revealUp, staggerContainer, viewportOnce } from '@/lib/motion';

const contactIcons = [MapPin, Clock3, Phone] as const;

export function VisitContact() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="visit" className="relative overflow-hidden bg-amber">
      <div className="absolute -right-24 -top-24 size-80 rounded-full border-[38px] border-paper/20 sm:size-[30rem]" />
      <Container className="relative grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:py-36">
        <motion.div
          className="lg:col-span-7"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={reduceMotion ? undefined : staggerContainer}
        >
          <motion.p variants={reduceMotion ? undefined : revealUp} className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ink/70">
            Come as you are
          </motion.p>
          <motion.h2
            variants={reduceMotion ? undefined : revealUp}
            className="font-display mt-5 max-w-3xl text-5xl leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-8xl"
          >
            Your next session is waiting.
          </motion.h2>
          <motion.p variants={reduceMotion ? undefined : revealUp} className="mt-7 max-w-md text-base leading-7 text-ink/72 sm:text-lg">
            Visit Be Strong Fitness on Beeramguda Main Rd—your local Beerumguda gym for strength, free weights, and cardio.
          </motion.p>
          <motion.div variants={reduceMotion ? undefined : revealUp}>
            <Button asChild className="group mt-10" size="lg">
              <a href={googleMapsDirectionsUrl} target="_blank" rel="noreferrer">
                Get directions{' '}
                <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="self-end space-y-5 lg:col-span-4 lg:col-start-9"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={reduceMotion ? undefined : revealUp}
        >
          <div className="overflow-hidden rounded-[var(--radius-card)]">
            <img src={visitImage.src} alt={visitImage.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-[var(--radius-card)] bg-paper p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-deep">Find us</p>
            <div className="mt-6 space-y-5">
              {contactDetails.map((detail, index) => {
                const Icon = contactIcons[index] ?? MapPin;
                return (
                  <div key={detail.label} className="flex gap-3">
                    <Icon size={18} className="mt-0.5 shrink-0 text-amber-deep" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/45">{detail.label}</p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          {...(detail.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                          className="mt-1 inline-block text-sm font-semibold hover:text-amber-deep"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-semibold">{detail.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <Separator className="mt-8" />
            <p className="mt-5 text-xs leading-5 text-ink/55">
              Above Karthikeya Silks · Kakatiya Nagar, Beeramguda (Beerumguda), Hyderabad.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
