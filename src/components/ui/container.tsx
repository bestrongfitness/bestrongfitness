import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

type ContainerProps = ComponentProps<'div'> & {
  as?: 'div' | 'section' | 'nav' | 'footer' | 'header';
};

export function Container({ as: Comp = 'div', className, ...props }: ContainerProps) {
  return <Comp className={cn('mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12', className)} {...props} />;
}
