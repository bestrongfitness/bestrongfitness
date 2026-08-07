import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

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
      <Container as="nav" aria-label="Primary navigation" className="flex items-center justify-between py-5">
        <a href="#top" className="group inline-flex items-baseline gap-2 text-paper" onClick={closeMenu}>
          <span className="font-display text-2xl leading-none tracking-[-0.06em]">be strong</span>
          <span className="font-mono text-[0.55rem] font-medium uppercase tracking-[0.16em] opacity-70">fitness</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-paper/80 transition hover:text-paper">
              {item.label}
            </a>
          ))}
          <Button asChild variant="secondary" size="sm">
            <a href="#visit">Visit the gym</a>
          </Button>
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          className="border-paper/25 text-paper md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} /> : <Menu size={20} />}
        </Button>
      </Container>

      {open ? (
        <div id="mobile-navigation" className="mx-5 rounded-[var(--radius-card)] bg-paper p-5 shadow-2xl md:hidden">
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="rounded-xl px-3 py-3 text-base font-semibold hover:bg-black/5" onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-2 w-full rounded-xl">
              <a href="#visit" onClick={closeMenu}>
                Visit the gym
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
