export type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
};

export function SectionHeading({ eyebrow, title, description, inverted = false }: SectionHeadingProps) {
  return (
    <div className={inverted ? 'max-w-2xl text-paper' : 'max-w-2xl'}>
      <p
        className={
          inverted
            ? 'mb-4 text-xs font-bold uppercase tracking-[0.22em] text-amber'
            : 'mb-4 text-xs font-bold uppercase tracking-[0.22em] text-amber-deep'
        }
      >
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-[0.96] tracking-[-0.045em] sm:text-5xl lg:text-6xl" data-size="section">
        {title}
      </h2>
      {description ? <p className="mt-5 max-w-xl text-base leading-7 opacity-75 sm:text-lg">{description}</p> : null}
    </div>
  );
}
