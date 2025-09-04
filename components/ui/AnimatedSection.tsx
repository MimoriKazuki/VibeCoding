'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  viewportMargin?: string;
  once?: boolean;
}

export default function AnimatedSection({ 
  children, 
  className = "py-16 sm:py-24 lg:py-32 overflow-x-hidden bg-white",
  id,
  viewportMargin = "-200px",
  once = true
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: viewportMargin as any });
  
  return (
    <motion.section 
      id={id}
      ref={ref} 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
}