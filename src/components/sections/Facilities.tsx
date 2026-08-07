import { ArrowUpRight } from 'lucide-react';

import { facilities } from '../../data/site-content';
import { SectionHeading } from '../ui/SectionHeading';

export function Facilities() {
  return (
    <section id="facilities" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="Room to work" title="The essentials, done well." description="Purposeful zones made for consistent training." />
        <p className="max-w-xs text-sm leading-6 text-[var(--ink)]/60">Every corner is designed to support the work—not distract from it.</p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-12">
        {facilities.map((facility, index) => (
          <article key={facility.id} className={index === 0 ? 'group md:col-span-7' : 'group md:col-span-5'}>
            <div className="relative aspect-[1.1] overflow-hidden rounded-[var(--radius-card)] bg-[var(--paper-strong)]">
              <img src={facility.image} alt={facility.imageAlt} className="size-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
              <span className="absolute left-4 top-4 rounded-full bg-[var(--paper)]/90 px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.14em]">0{index + 1}</span>
            </div>
            <div className="flex items-start justify-between gap-5 px-1 pt-5">
              <div>
                <h3 className="text-xl font-bold tracking-[-0.035em]">{facility.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--ink)]/62">{facility.description}</p>
              </div>
              <ArrowUpRight className="mt-1 shrink-0 text-[var(--amber-deep)]" size={20} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
