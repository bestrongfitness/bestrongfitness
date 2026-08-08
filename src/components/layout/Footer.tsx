import { MapPinned, Share2 } from 'lucide-react';

import { googleMapsUrl } from '@/data/site-content';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Container className="flex flex-col gap-10 py-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <a href="#top" className="inline-flex items-baseline gap-2">
            <span className="font-display text-3xl tracking-[-0.06em]">be strong</span>
            <span className="font-mono text-[0.55rem] uppercase tracking-[0.16em] text-paper/60">fitness</span>
          </a>
          <p className="mt-3 max-w-sm text-sm leading-6 text-paper/55">
            Be Strong Fitness — Beerumguda gym in Beeramguda, Hyderabad for strength, free weights, and cardio.
          </p>
        </div>
        <div className="flex gap-3">
          <Button asChild variant="outline" size="icon" className="border-paper/20 text-paper hover:bg-amber hover:text-ink">
            <a href={googleMapsUrl} target="_blank" rel="noreferrer" aria-label="Find Be Strong Fitness Beerumguda gym on Google Maps">
              <MapPinned size={18} />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="border-paper/20 text-paper hover:bg-amber hover:text-ink">
            <a href="#visit" aria-label="Visit Be Strong Fitness in Beeramguda">
              <Share2 size={18} />
            </a>
          </Button>
        </div>
      </Container>
      <Separator className="bg-paper/15" />
      <div className="px-5 py-4 text-center font-mono text-[0.55rem] uppercase tracking-[0.14em] text-paper/40">
        © {new Date().getFullYear()} Be Strong Fitness · Beeramguda / Beerumguda, Hyderabad
      </div>
    </footer>
  );
}
