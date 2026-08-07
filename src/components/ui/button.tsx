import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-ink text-paper hover:bg-ink-soft',
        secondary: 'bg-paper text-ink hover:bg-amber',
        outline: 'border border-line bg-transparent hover:bg-ink hover:text-paper',
        ghost: 'hover:bg-black/5',
        link: 'rounded-none border-b border-ink pb-1 hover:border-amber-deep hover:text-amber-deep',
        amber: 'bg-amber text-ink hover:bg-amber-deep hover:text-paper',
      },
      size: {
        default: 'h-11 rounded-full px-6',
        sm: 'h-9 rounded-full px-4 text-xs',
        lg: 'h-12 rounded-full px-7',
        icon: 'size-11 rounded-full',
        link: 'h-auto rounded-none px-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
