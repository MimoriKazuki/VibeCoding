'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });

  return (
    <section id="pricing" className="py-24 px-6 bg-white" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-8"
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
            <div className="p-10 md:p-12">
              <div className="text-center mb-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="flex items-center justify-center space-x-4">
                    <p className="text-5xl md:text-6xl font-bold text-secondary-900">
                      50,000
                    </p>
                    <span className="text-xl md:text-2xl text-secondary-600">円(税込)</span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-4 mb-8"
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-6 border-b border-secondary-200 pb-2">
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
                    className="flex items-center space-x-3 pl-4 border-l-2 border-primary-300"
                  >
                    <span className="text-base text-secondary-700">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-xl text-secondary-600 mb-8">
              他のプログラミングスクールと比較
            </p>
            <div className="grid md:grid-cols-3 gap-0 max-w-3xl mx-auto border-t-2 border-b-2 border-secondary-200">
              <div className="p-6 border-r border-secondary-200 last:border-r-0">
                <p className="font-medium text-secondary-600 text-sm mb-2">A社</p>
                <p className="text-2xl font-bold text-secondary-800">70万円</p>
                <p className="text-sm text-secondary-500 mt-1">6ヶ月</p>
              </div>
              <div className="p-6 border-r border-secondary-200 last:border-r-0">
                <p className="font-medium text-secondary-600 text-sm mb-2">B社</p>
                <p className="text-2xl font-bold text-secondary-800">55万円</p>
                <p className="text-sm text-secondary-500 mt-1">4ヶ月</p>
              </div>
              <div className="p-6 bg-primary-50">
                <p className="font-bold text-primary-600 text-sm mb-2">当講座</p>
                <p className="text-2xl font-bold text-primary-600">5万円</p>
                <p className="text-sm text-primary-600 mt-1">3ヶ月</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}