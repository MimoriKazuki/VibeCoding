'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ModernCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden bg-white">
      {/* Dot pattern background similar to hero */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-1/4 h-full">
          <div 
            className="w-full h-full opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, #3B82F6 2px, transparent 2px)`,
              backgroundSize: '40px 40px',
              backgroundPosition: '0 0, 20px 20px'
            }}
          />
        </div>
        <div className="absolute left-0 bottom-0 w-1/4 h-full">
          <div 
            className="w-full h-full opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, #06B6D4 2px, transparent 2px)`,
              backgroundSize: '40px 40px',
              backgroundPosition: '0 0, 20px 20px'
            }}
          />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Main headline */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-primary-600">超実践型</span>
            <br className="sm:hidden" />
            AIコーディングを学べる
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-secondary-600 mb-8 sm:mb-10 max-w-3xl mx-auto font-noto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            今すぐ始められる買い切り型講座でAIエンジニアに
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Primary CTA Button */}
            <motion.a
              href="https://lin.ee/TLbJUF7"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-primary-500 text-white rounded-full font-bold text-base sm:text-lg shadow-lg overflow-hidden transition-all duration-300 hover:bg-primary-600 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Content */}
              <span className="relative flex items-center gap-3">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                </svg>
                LINE登録で特典を受け取る
                <motion.svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </motion.svg>
              </span>
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-8 sm:mt-10 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-secondary-600"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 sm:w-5 h-4 sm:h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-noto">即日アクセス可能</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 sm:w-5 h-4 sm:h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-noto">月額10,000円</span>
            </div>
          </motion.div>

          {/* Urgency indicator */}
          <motion.div
            className="mt-6 sm:mt-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 border border-accent-200 rounded-full">
              <motion.div
                className="w-2 h-2 bg-accent-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-accent-600 font-medium font-noto text-sm">今すぐ受講可能</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}