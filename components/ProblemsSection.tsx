'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ProblemsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const problems = [
    {
      message: "みんなについていけない...",
      imageUrl: "/images/20953_color.svg",
      alt: "困っている人",
      position: "left"
    },
    {
      message: "時間の無駄遣いしてるだけかも...",
      imageUrl: "/images/17038_color.svg",
      alt: "悩んでいる人",
      position: "center"
    },
    {
      message: "一人でやってると心が折れる...",
      imageUrl: "/images/18491_color.svg",
      alt: "落ち込んでいる人",
      position: "right"
    }
  ];

  return (
    <section id="problems" className="py-20 px-6 bg-gradient-to-b from-white to-secondary-50" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            こんな悩みありませんか？
          </h2>
          <p className="text-lg text-secondary-600">
            プログラミング学習でよくある悩み
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="flex flex-col items-center"
            >
              {/* Speech Bubble */}
              <div className="relative mb-10 w-full max-w-[360px]">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + index * 0.15,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                  className="relative"
                >
                  {/* Speech bubble using SVG background */}
                  <div 
                    className="relative w-full h-24"
                    style={{
                      backgroundImage: `url('/images/e1563_1.svg')`,
                      backgroundSize: '100% 100%',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="h-full w-full flex items-center justify-center px-4" style={{ paddingBottom: '20px' }}>
                      <p className="text-base md:text-lg text-gray-800 font-medium text-center leading-relaxed">
                        {problem.message}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Character Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                className="relative w-40 h-40 md:w-48 md:h-48"
              >
                <Image
                  src={problem.imageUrl}
                  alt={problem.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 160px, 192px"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Solution Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <svg className="w-12 h-12 text-primary-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
          <p className="mt-4 text-xl font-bold text-primary-600">
            そんな悩みを解決します！
          </p>
        </motion.div>
      </div>
    </section>
  );
}