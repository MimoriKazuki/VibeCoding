'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const ref = useRef(null);

  return (
    <section ref={ref} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-white">
      {/* Dot pattern background */}
      <div className="absolute inset-0">
        {/* Blue dots on right side */}
        <div className="absolute right-0 top-0 w-1/3 sm:w-2/5 md:w-1/2 h-full">
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
        <div className="absolute left-0 bottom-0 w-1/4 sm:w-1/3 h-1/3 sm:h-2/5 md:h-1/2">
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
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto"
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
          <h1 className="sr-only">VibeCoding（バイブコーディング）- AI時代の新しいプログラミング教材で学ぶ</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900 leading-tight">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block"
            >
              誰でもエンジニア。
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="block mt-2 sm:mt-3 md:mt-4"
            >
              学びを次の次元に。
            </motion.span>
          </h1>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 transform -translate-x-1/2"
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