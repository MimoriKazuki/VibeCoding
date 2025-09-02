'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 overflow-x-hidden bg-white" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            受講料金
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary-600 mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Price Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-t-4 border-primary-600 bg-secondary-50"
          >
            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="text-center mb-6 sm:mb-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4">
                    <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary-900">
                      50,000
                    </p>
                    <span className="text-lg sm:text-xl md:text-2xl text-secondary-600">円(税込)</span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-4 mb-6 sm:mb-8"
              >
                <h3 className="text-lg sm:text-xl font-bold text-secondary-900 mb-4 sm:mb-6 border-b border-secondary-200 pb-2">
                  含まれるもの
                </h3>
                {[
                  "動画講座（アーカイブあり）",
                  "ライブ配信講座",
                  "チャットサポート",
                  "専用コミュニティへの参加権"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    className="flex items-center space-x-3 pl-3 sm:pl-4 border-l-2 border-primary-300"
                  >
                    <span className="text-sm sm:text-base text-secondary-700">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 sm:mt-16 text-center"
          >
            <p className="text-lg sm:text-xl text-secondary-600 mb-6 sm:mb-8">
              他のプログラミングスクールと比較
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 max-w-3xl mx-auto border-t-2 border-b-2 border-secondary-200">
              <div className="p-4 sm:p-6 border-r border-secondary-200 sm:border-b-0 border-b last:border-b-0 sm:last:border-r-0">
                <p className="font-medium text-secondary-600 text-xs sm:text-sm mb-2">A社</p>
                <p className="text-xl sm:text-2xl font-bold text-secondary-800">70万円</p>
                <p className="text-xs sm:text-sm text-secondary-500 mt-1">6ヶ月</p>
              </div>
              <div className="p-4 sm:p-6 border-r border-secondary-200 sm:border-b-0 border-b last:border-b-0 sm:last:border-r-0">
                <p className="font-medium text-secondary-600 text-xs sm:text-sm mb-2">B社</p>
                <p className="text-xl sm:text-2xl font-bold text-secondary-800">55万円</p>
                <p className="text-xs sm:text-sm text-secondary-500 mt-1">4ヶ月</p>
              </div>
              <div className="p-4 sm:p-6 bg-primary-50">
                <p className="font-bold text-primary-600 text-xs sm:text-sm mb-2">当講座</p>
                <p className="text-xl sm:text-2xl font-bold text-primary-600">5万円</p>
                <p className="text-xs sm:text-sm text-primary-600 mt-1">3ヶ月</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}