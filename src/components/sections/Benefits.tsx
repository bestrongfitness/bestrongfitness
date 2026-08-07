import { Check } from 'lucide-react';

import { benefits } from '../../data/site-content';

export function Benefits() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--paper-strong)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[var(--amber-deep)]">Why Be Strong</p>
          <h2 className="font-display mt-5 text-4xl leading-none tracking-[-0.045em] sm:text-5xl">Feel welcome. Train seriously.</h2>
        </div>
        <div className="divide-y divide-[var(--line)] lg:col-span-7 lg:col-start-6">
          {benefits.map((benefit) => (
            <article key={benefit.id} className="flex gap-5 py-6 first:pt-0 last:pb-0">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[var(--amber)] text-[var(--ink)]"><Check size={16} strokeWidth={2.4} /></span>
              <div>
                <h3 className="text-lg font-bold tracking-[-0.025em]">{benefit.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-[var(--ink)]/65">{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
