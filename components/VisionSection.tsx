'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });

  return (
    <section id="vision" className="py-16 sm:py-24 lg:py-32 overflow-x-hidden bg-gradient-to-b from-primary-50 to-white" ref={ref}>
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : { scale: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            「AI人材養成所」で目指す姿
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-primary-500 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <Image
                src="/images/20970_color.svg"
                alt="AI人材養成所で目指す姿"
                width={400}
                height={400}
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              バイブコーディングで体感的にプログラミングを学び、頭ではなく感覚で理解する新しいスタイルのエンジニアになれます。
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              動画により、直感的なコーディング能力と創造性を身につけ、ユーザーの心に響くプロダクトを作れる感性豊かなエンジニアへ成長。
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              自然口語で感覚的にプログラミングが可能。
            </p>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 space-y-3"
            >
              {[
                '感覚で理解する新しい学習スタイル',
                '直感的なコーディング能力の獲得',
                '作りたいものをすぐに作れる柔軟なプロダクト開発力',
                '革新的で最先端な技術の習得'
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <span className="text-primary-500 text-xl">✓</span>
                  <span className="text-gray-700">{point}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}