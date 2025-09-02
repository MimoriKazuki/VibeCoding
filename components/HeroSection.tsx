'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Dot pattern background */}
      <div className="absolute inset-0">
        {/* Blue dots on right side */}
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <div 
            className="w-full h-full opacity-40"
            style={{
              backgroundImage: `radial-gradient(circle, #3B82F6 2px, transparent 2px)`,
              backgroundSize: '50px 50px',
              backgroundPosition: '0 0, 25px 25px'
            }}
          />
        </div>
        {/* Cyan dots on left side */}
        <div className="absolute left-0 bottom-0 w-1/3 h-1/2">
          <div 
            className="w-full h-full opacity-40"
            style={{
              backgroundImage: `radial-gradient(circle, #06B6D4 2px, transparent 2px)`,
              backgroundSize: '50px 50px',
              backgroundPosition: '0 0, 25px 25px'
            }}
          />
        </div>
      </div>
      
      <motion.div
        className="relative z-10 text-center px-6"
        style={{ y, opacity, scale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Main Text */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block"
            >
              誰でもエンジニアに。
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="block mt-4"
            >
              学びを次の次元に。
            </motion.span>
          </h1>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-px h-12 bg-primary-400 mb-2" />
          <span className="text-primary-600 text-sm font-medium">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}