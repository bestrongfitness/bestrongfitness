import { Dumbbell, HeartPulse, Weight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Separator } from '@/components/ui/separator';
import { revealUp, staggerContainer, viewportOnce } from '@/lib/motion';

const pillars = [
  { title: 'Build strength', body: 'Machines and progressive work for every major muscle group.', icon: Dumbbell },
  { title: 'Lift free weights', body: 'Dumbbells, racks, and benches for the sessions that count.', icon: Weight },
  { title: 'Move with cardio', body: 'Treadmills ready when you want pace, sweat, and endurance.', icon: HeartPulse },
];

export function TrainingExperience() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="bg-paper text-ink">
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
            description="Train with the freedom to start where you are—strength, free weights, or cardio."
          />
        </motion.div>

        <Separator className="mt-14" />
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
              whileHover={reduceMotion ? undefined : { y: -4 }}
              transition={{ type: 'spring', stiffness: 320, damping: 24 }}
              className="group border-line p-7 first:pl-0 max-md:border-b md:border-r md:p-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <span className="font-mono text-[0.62rem] tracking-[0.14em] text-amber-deep">0{index + 1}</span>
              <Icon className="mt-12 text-amber-deep transition-transform duration-500 group-hover:-translate-y-1" size={27} strokeWidth={1.4} />
              <h3 className="mt-6 text-xl font-bold tracking-[-0.03em]">{title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-ink/62">{body}</p>
            </motion.article>
          ))}
        </motion.div>
        <Separator />
      </Container>
    </section>
  );
}
