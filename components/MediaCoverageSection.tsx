'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Newspaper, TrendingUp, Award } from 'lucide-react';

export default function MediaCoverageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-secondary-50" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            日本経済新聞に掲載されました
          </h2>
          <p className="text-base sm:text-lg text-secondary-600 max-w-3xl mx-auto">
            LandBridgeの三森社長が元警察官からIT企業を創業し、
            AI人材育成事業「VibeCoding」を通じて社会に挑戦する姿が紹介されました
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg border-2 border-primary-500 overflow-hidden max-w-5xl mx-auto"
        >
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
            <Image
              src="/nikkei.png"
              alt="日本経済新聞掲載記事"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <div className="p-6 sm:p-8 md:p-12 bg-primary-50">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2 mb-6 justify-center">
                <Newspaper className="w-6 h-6 text-secondary-700" />
                <span className="text-sm text-secondary-600 font-medium">2025年9月3日 日本経済新聞</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-4 text-center">
                元警察官、AI人材を育成
              </h3>
              
              <p className="text-sm sm:text-base text-secondary-700 mb-6 leading-relaxed text-center">
                警察官からIT企業の社長へ。従来の枠にとらわれない転身を果たし、
                企業向けのシステム開発などで活躍するのがLandBridge（埼玉県越谷市）の社長、
                三森一輝さんだ。時代の変化を見据えて人工知能（AI）を使いこなせる人材の
                育成事業にも挑戦しようとしている。
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-secondary-700">
                    システム開発が事業の主力、中でも新規事業に参入する企業向けの業務受託に注力
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-secondary-700">
                    スピード感を持った開発が強み、クライアントのニーズに柔軟に対応
                  </p>
                </div>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-primary-300">
                <div className="flex items-center gap-2 mb-2 justify-center">
                  <TrendingUp className="w-5 h-5 text-primary-600" />
                  <span className="text-sm font-semibold text-primary-900">VibeCodingへの想い</span>
                </div>
                <p className="text-xs sm:text-sm text-primary-700 leading-relaxed text-center">
                  「AI時代に必要なのは、技術を使いこなせる人材。
                  VibeCodingを通じて、多くの人にプログラミングとAIの可能性を届けたい」
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}