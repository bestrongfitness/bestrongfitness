import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navigation = [
  { label: 'The gym', href: '#experience' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Reviews', href: '#reviews' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav aria-label="Primary navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a href="#top" className="group inline-flex items-baseline gap-2 text-[var(--paper)]" onClick={closeMenu}>
          <span className="font-display text-2xl leading-none tracking-[-0.06em]">be strong</span>
          <span className="font-mono text-[0.55rem] font-medium uppercase tracking-[0.16em] opacity-70">fitness</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-[var(--paper)]/80 transition hover:text-[var(--paper)]">
              {item.label}
            </a>
          ))}
          <a href="#visit" className="rounded-full bg-[var(--paper)] px-5 py-2.5 text-sm font-bold text-[var(--ink)] transition hover:bg-[var(--amber)]">
            Visit the gym
          </a>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          className="grid size-10 place-items-center rounded-full border border-[var(--paper)]/25 text-[var(--paper)] md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div id="mobile-navigation" className="mx-5 rounded-[var(--radius-card)] bg-[var(--paper)] p-5 shadow-2xl md:hidden">
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="rounded-xl px-3 py-3 text-base font-semibold hover:bg-black/5" onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a href="#visit" className="mt-2 rounded-xl bg-[var(--ink)] px-4 py-3 text-center text-sm font-bold text-[var(--paper)]" onClick={closeMenu}>
              Visit the gym
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
