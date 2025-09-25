'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ProblemsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="problems" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-secondary-50 overflow-x-hidden" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900">
            どんな人にむいてるの？
          </h2>
        </motion.div>

        {/* First Section with SVG on left and text on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          {/* Left side - SVG Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-64 sm:h-80 lg:h-96"
          >
            <Image
              src="/images/13485_color.svg"
              alt="どんな人にむいてるの？"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-10">
              <div className="relative">
                <h4 className="text-2xl font-bold text-secondary-900 mb-4 pb-2 border-b-2 border-primary-500 inline-block">
                  キャリアチェンジ希望者
                </h4>
                <div className="space-y-4 text-secondary-600 mt-4">
                  <div>
                    <p className="mb-2">
                      <span className="font-semibold text-blue-600" style={{ fontSize: '18px' }}>背景</span>
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="text-primary-500 mr-2">・</span>
                        <p>営業・販売・事務など非IT職からエンジニアに転職したい。</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="mb-2">
                      <span className="font-semibold text-blue-600" style={{ fontSize: '18px' }}>課題</span>
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="text-primary-500 mr-2">・</span>
                        <p>プログラミング学習を独学で始めたが挫折経験あり。情報が多すぎて何から学べばよいか分からない。</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary-500 mr-2">・</span>
                        <p>仕事終わりで疲れて集中できない。</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary-500 mr-2">・</span>
                        <p>パソコンを開く時間がない。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second Section with text on left and SVG on right (reversed) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          {/* Left side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div className="space-y-10">
              <div className="relative">
                <h4 className="text-2xl font-bold text-secondary-900 mb-4 pb-2 border-b-2 border-primary-500 inline-block">
                  スキルアップに取り組む人
                </h4>
                <div className="space-y-4 text-secondary-600 mt-4">
                  <div>
                    <p className="mb-2">
                      <span className="font-semibold text-blue-600" style={{ fontSize: '18px' }}>背景</span>
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="text-primary-500 mr-2">・</span>
                        <p>今の仕事にAIを取り入れ効率化を図りたい。新しい技術を習得したい。現状維持に満足できない人。</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="mb-2">
                      <span className="font-semibold text-blue-600" style={{ fontSize: '18px' }}>課題</span>
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="text-primary-500 mr-2">・</span>
                        <p>「明日やろう」の繰り返しで、先延ばしにしてしまう。</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary-500 mr-2">・</span>
                        <p>モチベーションの維持が難しい。</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary-500 mr-2">・</span>
                        <p>何の技術から勉強していいか分からない。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right side - SVG Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-64 sm:h-80 lg:h-96 order-1 lg:order-2"
          >
            <Image
              src="/images/7397_color.svg"
              alt="スキルアップに取り組む人"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="mt-4 text-lg sm:text-xl font-bold text-primary-600">
            そんな悩みを「AI人材養成所」で解決します！
          </p>
        </motion.div>
      </div>
    </section>
  );
}