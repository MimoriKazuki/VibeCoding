'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CurriculumSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const curriculumItems = [
    {
      type: 'foundation',
      title: '基礎講習動画',
      description: 'AIコーディングの基本から環境構築まで'
    },
    {
      type: 'practice',
      title: '実践動画 - ホームページ制作',
      description: 'ゼロから完成まで全工程を完全公開'
    },
    {
      type: 'practice',
      title: '実践動画 - LP制作',
      description: '成果の出るLPを感覚で作る'
    },
    {
      type: 'practice',
      title: '実践動画 - Webアプリ開発',
      description: '実際のサービス開発を体験'
    }
  ];

  return (
    <section id="curriculum" className="py-16 sm:py-20 lg:py-24 bg-white" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            カリキュラム
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary-600 mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p
            className="text-base sm:text-lg text-secondary-600 max-w-3xl mx-auto font-noto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            基礎講習で土台を作り、あとは全て実践動画で学習。
            <br />
            <span className="font-bold text-primary-600">
              従来のコーディング講座とは違い、感覚的な指示の出し方を全て公開
            </span>
          </motion.p>
        </motion.div>

        {/* Curriculum Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {curriculumItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`bg-white rounded-lg border-2 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer ${
                item.type === 'foundation' ? 'border-primary-500 hover:border-primary-600' : 'border-secondary-300 hover:border-primary-400'
              }`}
            >
              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    {item.type === 'foundation' ? (
                      <span className="text-xs px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-bold">
                        基礎
                      </span>
                    ) : (
                      <span className="text-xs px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full font-bold">
                        実践
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-2 font-noto">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600 text-sm sm:text-base font-noto">
                    {item.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Note - Unified Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 bg-secondary-50 rounded-lg p-8 sm:p-12"
        >
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold text-secondary-900 text-center mb-8 font-noto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            他にはない独自メソッド
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Point 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="bg-white rounded-lg p-6 border-2 border-primary-200 hover:border-primary-400 transition-colors"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <span className="text-xl font-bold">01</span>
                </div>
                <h4 className="text-lg font-bold text-secondary-900 mb-3 font-noto">
                  全工程を完全公開
                </h4>
                <p className="text-secondary-600 text-sm sm:text-base font-noto">
                  ホームページやLPを作る過程を
                  <span className="block font-bold text-primary-600 mt-2 text-base sm:text-lg">
                    一切カットなし
                  </span>
                  で全て動画公開
                </p>
              </div>
            </motion.div>
            
            {/* Point 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="bg-white rounded-lg p-6 border-2 border-primary-200 hover:border-primary-400 transition-colors"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <span className="text-xl font-bold">02</span>
                </div>
                <h4 className="text-lg font-bold text-secondary-900 mb-3 font-noto">
                  感覚的指示を体系化
                </h4>
                <p className="text-secondary-600 text-sm sm:text-base font-noto">
                  従来の講座では学べない
                  <span className="block font-bold text-primary-600 mt-2 text-base sm:text-lg">
                    「なんとなくこんな感じ」
                  </span>
                  という指示方法を完全マスター
                </p>
              </div>
            </motion.div>
            
            {/* Point 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="bg-white rounded-lg p-6 border-2 border-primary-200 hover:border-primary-400 transition-colors"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <span className="text-xl font-bold">03</span>
                </div>
                <h4 className="text-lg font-bold text-secondary-900 mb-3 font-noto">
                  実案件ベース
                </h4>
                <p className="text-secondary-600 text-sm sm:text-base font-noto">
                  実際のクライアント案件での
                  <span className="block font-bold text-primary-600 mt-2 text-base sm:text-lg">
                    リアルな思考プロセス
                  </span>
                  を余すことなく公開
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Bottom message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="mt-12 text-center"
          >
            <p className="text-secondary-600 text-sm mb-2">
              この方法を知れば、あなたも
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-primary-600">
              明日からエンジニア
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}