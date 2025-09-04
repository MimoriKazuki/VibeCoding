'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface FadeInContainerProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  once?: boolean;
}

export default function FadeInContainer({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true
}: FadeInContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });
  
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 30 };
      case 'down': return { opacity: 0, y: -30 };
      case 'left': return { opacity: 0, x: -30 };
      case 'right': return { opacity: 0, x: 30 };
      default: return { opacity: 0, y: 30 };
    }
  };
  
  const getFinalPosition = () => {
    return { opacity: 1, y: 0, x: 0 };
  };
  
  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? getFinalPosition() : getInitialPosition()}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}