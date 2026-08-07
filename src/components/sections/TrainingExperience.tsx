import { Dumbbell, HeartPulse, UsersRound } from 'lucide-react';

import { SectionHeading } from '../ui/SectionHeading';

const pillars = [
  { title: 'Build strength', body: 'From foundations to focused lifting, make each session count.', icon: Dumbbell },
  { title: 'Move with energy', body: 'Raise your fitness level with movement that works for your pace.', icon: HeartPulse },
  { title: 'Train with support', body: 'Get the encouragement and guidance to keep your momentum.', icon: UsersRound },
];

export function TrainingExperience() {
  return (
    <section id="experience" className="bg-[var(--ink)] text-[var(--paper)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <SectionHeading eyebrow="Built around your progress" title="One gym. Every kind of goal." description="Train with the freedom to start where you are and the structure to keep moving forward." inverted />
        <div className="mt-14 grid divide-y divide-[var(--paper)]/15 border-y border-[var(--paper)]/15 md:grid-cols-3 md:divide-x md:divide-y-0">
          {pillars.map(({ title, body, icon: Icon }, index) => (
            <article key={title} className="group p-7 first:pl-0 md:p-8 md:first:pl-0 md:last:pr-0">
              <span className="font-mono text-[0.62rem] tracking-[0.14em] text-[var(--amber)]">0{index + 1}</span>
              <Icon className="mt-12 text-[var(--amber)]" size={27} strokeWidth={1.4} />
              <h3 className="mt-6 text-xl font-bold tracking-[-0.03em]">{title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--paper)]/62">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
