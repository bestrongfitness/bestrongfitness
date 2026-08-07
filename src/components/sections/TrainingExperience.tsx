import { Dumbbell, HeartPulse, UsersRound } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Separator } from '@/components/ui/separator';
import { revealUp, staggerContainer, viewportOnce } from '@/lib/motion';

const pillars = [
  { title: 'Build strength', body: 'From foundations to focused lifting, make each session count.', icon: Dumbbell },
  { title: 'Move with energy', body: 'Raise your fitness level with movement that works for your pace.', icon: HeartPulse },
  { title: 'Train with support', body: 'Get the encouragement and guidance to keep your momentum.', icon: UsersRound },
];

export function TrainingExperience() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="bg-ink text-paper">
      <Container className="py-20 sm:py-28 lg:py-36">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={reduceMotion ? undefined : revealUp}
        >
          <SectionHeading
            eyebrow="Built around your progress"
            title="One gym. Every kind of goal."
            description="Train with the freedom to start where you are and the structure to keep moving forward."
            inverted
          />
        </motion.div>

        <Separator className="mt-14 bg-paper/15" />
        <motion.div
          className="grid md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={reduceMotion ? undefined : staggerContainer}
        >
          {pillars.map(({ title, body, icon: Icon }, index) => (
            <motion.article
              key={title}
              variants={reduceMotion ? undefined : revealUp}
              className="group border-paper/15 p-7 first:pl-0 max-md:border-b md:border-r md:p-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <span className="font-mono text-[0.62rem] tracking-[0.14em] text-amber">0{index + 1}</span>
              <Icon className="mt-12 text-amber transition-transform duration-500 group-hover:-translate-y-1" size={27} strokeWidth={1.4} />
              <h3 className="mt-6 text-xl font-bold tracking-[-0.03em]">{title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-paper/62">{body}</p>
            </motion.article>
          ))}
        </motion.div>
        <Separator className="bg-paper/15" />
      </Container>
    </section>
  );
}
