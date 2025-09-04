'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  showUnderline?: boolean;
  titleSize?: 'small' | 'medium' | 'large';
}

export default function SectionHeader({
  title,
  subtitle,
  showUnderline = true,
  titleSize = 'medium'
}: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const titleSizes = {
    small: 'text-xl sm:text-2xl md:text-3xl',
    medium: 'text-2xl sm:text-3xl md:text-4xl',
    large: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
  };
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 sm:mb-16"
    >
      <motion.h2 
        className={`${titleSizes[titleSize]} font-bold text-gray-900 mb-4 sm:mb-6`}
        initial={{ scale: 0.9 }}
        animate={isInView ? { scale: 1 } : { scale: 0.9 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      {showUnderline && (
        <motion.div 
          className="w-24 sm:w-32 h-1 bg-primary-500 mx-auto"
          initial={{ width: 0 }}
          animate={isInView ? { width: 'auto' } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      )}
      {subtitle && (
        <motion.p 
          className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}