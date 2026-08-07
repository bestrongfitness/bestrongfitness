import { ArrowUpRight, Clock3, MapPin } from 'lucide-react';

import { contactDetails, googleMapsUrl } from '../../data/site-content';

export function VisitContact() {
  return (
    <section id="visit" className="relative overflow-hidden bg-[var(--amber)]">
      <div className="absolute -right-24 -top-24 size-80 rounded-full border-[38px] border-[var(--paper)]/20 sm:size-[30rem]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:px-12 lg:py-36">
        <div className="lg:col-span-7">
          <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[var(--ink)]/70">Come as you are</p>
          <h2 className="font-display mt-5 max-w-3xl text-5xl leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-8xl">Your next session is waiting.</h2>
          <p className="mt-7 max-w-md text-base leading-7 text-[var(--ink)]/72 sm:text-lg">Drop in, see the space, and find out how Be Strong Fitness can fit your routine.</p>
          <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--ink)] px-6 py-3.5 text-sm font-bold text-[var(--paper)] transition hover:bg-[var(--ink-soft)]">
            Get directions <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        <div className="self-end rounded-[var(--radius-card)] bg-[var(--paper)] p-6 sm:p-8 lg:col-span-4 lg:col-start-9">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--amber-deep)]">Find us</p>
          <div className="mt-6 space-y-5">
            {contactDetails.map((detail, index) => {
              const Icon = index === 1 ? Clock3 : MapPin;
              return (
                <div key={detail.label} className="flex gap-3">
                  <Icon size={18} className="mt-0.5 shrink-0 text-[var(--amber-deep)]" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--ink)]/45">{detail.label}</p>
                    {detail.href ? <a href={detail.href} target="_blank" rel="noreferrer" className="mt-1 inline-block text-sm font-semibold hover:text-[var(--amber-deep)]">{detail.value}</a> : <p className="mt-1 text-sm font-semibold">{detail.value}</p>}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-8 border-t border-[var(--line)] pt-5 text-xs leading-5 text-[var(--ink)]/55">Contact number and full opening hours will be added after confirmation from the gym.</p>
        </div>
      </div>
    </section>
  );
}
