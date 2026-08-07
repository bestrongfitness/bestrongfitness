import { MapPinned, Share2 } from 'lucide-react';

import { googleMapsUrl } from '../../data/site-content';

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--paper)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div>
          <a href="#top" className="inline-flex items-baseline gap-2">
            <span className="font-display text-3xl tracking-[-0.06em]">be strong</span>
            <span className="font-mono text-[0.55rem] uppercase tracking-[0.16em] text-[var(--paper)]/60">fitness</span>
          </a>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--paper)]/55">A welcoming home for purposeful training in Hyderabad.</p>
        </div>
        <div className="flex gap-3">
          <a href={googleMapsUrl} target="_blank" rel="noreferrer" aria-label="Find Be Strong Fitness on Google Maps" className="grid size-10 place-items-center rounded-full border border-[var(--paper)]/20 transition hover:bg-[var(--amber)] hover:text-[var(--ink)]"><MapPinned size={18} /></a>
          <a href="#visit" aria-label="Visit Be Strong Fitness" className="grid size-10 place-items-center rounded-full border border-[var(--paper)]/20 transition hover:bg-[var(--amber)] hover:text-[var(--ink)]"><Share2 size={18} /></a>
        </div>
      </div>
      <div className="border-t border-[var(--paper)]/15 px-5 py-4 text-center font-mono text-[0.55rem] uppercase tracking-[0.14em] text-[var(--paper)]/40">© {new Date().getFullYear()} Be Strong Fitness</div>
    </footer>
  );
}
