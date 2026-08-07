import { ArrowDown } from 'lucide-react';

export function Welcome() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:px-12 lg:py-36">
      <div className="lg:col-span-3">
        <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[var(--amber-deep)]">01 / A place to begin</p>
      </div>
      <div className="lg:col-span-8 lg:col-start-5">
        <p className="font-display text-4xl leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
          Training isn’t about fitting a certain mould. It’s about finding a space that makes you want to return.
        </p>
        <a href="#experience" className="mt-10 inline-flex items-center gap-3 border-b border-[var(--ink)] pb-2 text-sm font-bold transition hover:text-[var(--amber-deep)] hover:border-[var(--amber-deep)]">
          Explore your training space <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
