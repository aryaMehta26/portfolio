'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  once?: boolean;
  stagger?: number;
  as?: 'div' | 'section' | 'article';
};

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

export default function ScrollReveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 40,
  threshold = 0.15,
  once = true,
  as = 'div',
}: ScrollRevealProps) {
  const offset = offsets[direction];
  const scale = distance / 40;

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x * scale,
      y: offset.y * scale,
      filter: 'blur(6px)',
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionComponent = motion[as];

  return (
    <MotionComponent
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

/* Stagger container — wrap children in ScrollRevealItem */
type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
};

export function StaggerContainer({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  threshold = 0.1,
  once = true,
}: StaggerContainerProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type ScrollRevealItemProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  duration?: number;
};

export function ScrollRevealItem({
  children,
  className,
  direction = 'up',
  duration = 0.55,
}: ScrollRevealItemProps) {
  const offset = offsets[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
