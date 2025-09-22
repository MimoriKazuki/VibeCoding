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
                  {/* Course Title */}
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-2">
                      AI学び放題プラン
                    </h3>
                  </div>

                  {/* Original Price with Strikethrough */}
                  <div className="mb-2">
                    <span className="text-2xl sm:text-3xl text-gray-400 line-through">
                      20,000円
                    </span>
                  </div>

                  {/* Current Price */}
                  <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4">
                    <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary-900">
                      月額 10,000
                    </p>
                    <span className="text-lg sm:text-xl md:text-2xl text-secondary-600">円(税込)</span>
                  </div>
                  
                  {/* Discount Badge */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-4"
                  >
                    <span className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      今だけリリース特別価格
                    </span>
                  </motion.div>
                  
                  {/* Payment Options */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-3"
                  >
                    <p className="text-sm sm:text-base text-secondary-600">
                      月額制・いつでも解約可能
                    </p>
                    <p className="text-sm sm:text-base text-primary-600 font-bold mt-2">
                      年間契約なら10万円でさらにお得！
                    </p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Course Content Description */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-8 sm:mb-10"
              >
                <div className="bg-white rounded-lg p-6 border-2 border-primary-200">
                  <h3 className="text-lg sm:text-xl font-bold text-secondary-900 mb-4">
                    プラン内容
                  </h3>
                  <p className="text-secondary-700 text-sm sm:text-base leading-relaxed">
                    月額1万円で<span className="font-bold text-primary-600">AIを学び放題</span>の環境を提供。
                    ChatGPTやClaudeを使った最新のAI開発手法を
                    <span className="font-bold text-primary-600">完全網羅</span>。
                  </p>
                  <p className="text-secondary-700 text-sm sm:text-base leading-relaxed mt-3">
                    毎月更新される<span className="font-bold text-primary-600">最新コンテンツ</span>と
                    <span className="font-bold text-primary-600">実践的なプロジェクト</span>で、
                    常に最先端のスキルを身につけることができます。
                  </p>
                </div>
              </motion.div>

              {/* LINE CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center"
              >
                <motion.a
                  href="https://lin.ee/TLbJUF7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                  </svg>
                  LINE登録で今すぐ申し込む
                </motion.a>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-sm text-secondary-600 mt-3"
                >
                  ※LINEからのお申し込みで詳細をご案内します
                </motion.p>
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
                <p className="text-xl sm:text-2xl font-bold text-primary-600">月額1万円</p>
                <p className="text-xs sm:text-sm text-primary-600 mt-1">学び放題</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}