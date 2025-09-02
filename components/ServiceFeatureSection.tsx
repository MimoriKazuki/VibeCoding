'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ServiceFeatureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });

  const features = [
    {
      title: "動画講座で24時間学習",
      description: "いつでもどこでも自分のペースで学習可能。通勤時間も有効活用",
      detail: "全100本以上の動画コンテンツ"
    },
    {
      title: "実演講習を定期配信",
      description: "実際のサービス開発をライブで解説。現場の生きた知識を習得",
      detail: "週2回のライブ配信"
    },
    {
      title: "環境構築からリリースまで",
      description: "つまずきやすい環境構築から本番リリースまで完全サポート",
      detail: "24時間チャットサポート"
    },
    {
      title: "未経験でも開発可能に",
      description: "プログラミング未経験者でも3ヶ月で実務レベルに到達",
      detail: "サポート体制が充実"
    }
  ];

  const curriculum = [
    "1ヶ月目：AI基礎とChatGPT活用法",
    "2ヶ月目：実践的な開発手法",
    "3ヶ月目：ポートフォリオ作成"
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-primary-600 font-semibold text-sm uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            選ばれる理由
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mt-4 mb-8 font-noto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            サービスの内容・特徴
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary-600 mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Left Column - Features */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                className="bg-transparent p-6 border-l-2 border-primary-400 hover:border-primary-600 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-primary-100 text-primary-700 flex items-center justify-center text-lg font-semibold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-secondary-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 text-sm mb-2 leading-relaxed">
                  {feature.description}
                </p>
                <p className="text-primary-600 font-semibold text-xs">
                  {feature.detail}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-[400px] lg:h-full overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940"
              alt="Students learning together"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent" />
          </motion.div>
        </div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          className="mt-12 text-center"
        >
          <p className="text-xl font-bold text-primary-600 mb-4">
            受講生満足度98%
          </p>
          <p className="text-lg text-gray-700">
            すでに500名以上が受講し、エンジニアとして活躍中
          </p>
        </motion.div>
      </div>
    </section>
  );
}