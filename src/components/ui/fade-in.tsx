'use client';

import { type HTMLMotionProps, motion, useReducedMotion } from 'motion/react';
import type { PropsWithChildren } from 'react';

interface FadeInProps extends HTMLMotionProps<'div'> {
  delay?: number;
}

export function FadeIn({
  children,
  delay = 0,
  ...props
}: PropsWithChildren<FadeInProps>) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div {...(props as React.HTMLAttributes<HTMLDivElement>)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStagger({
  children,
  ...props
}: PropsWithChildren<HTMLMotionProps<'div'>>) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div {...(props as React.HTMLAttributes<HTMLDivElement>)}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ staggerChildren: 0.08 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInItem({
  children,
  ...props
}: PropsWithChildren<HTMLMotionProps<'div'>>) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
