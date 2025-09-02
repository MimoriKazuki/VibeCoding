'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const capabilities = [
    {
      title: "Webサイト制作",
      description: "個人サイトやポートフォリオ、企業サイトまで自由自在に",
      icon: "🌐",
      examples: ["ランディングページ", "ブログサイト", "ECサイト"]
    },
    {
      title: "アプリ開発",
      description: "スマホアプリやWebアプリを思いのままに作成",
      icon: "📱",
      examples: ["ToDoアプリ", "チャットアプリ", "ゲームアプリ"]
    },
    {
      title: "自動化ツール",
      description: "日常の繰り返し作業を自動化するツールを作成",
      icon: "⚡",
      examples: ["データ処理", "ファイル整理", "レポート生成"]
    },
    {
      title: "データ分析",
      description: "データを可視化し、有益な情報を抽出",
      icon: "📊",
      examples: ["売上分析", "トレンド分析", "予測モデル"]
    },
    {
      title: "AI活用",
      description: "最新のAI技術を使った革新的なアプリケーション",
      icon: "🤖",
      examples: ["画像認識", "自然言語処理", "推薦システム"]
    },
    {
      title: "創造的表現",
      description: "アートやビジュアライゼーションで創造性を発揮",
      icon: "🎨",
      examples: ["ジェネラティブアート", "インタラクティブアート", "データビジュアライゼーション"]
    }
  ];

  return (
    <section id="capabilities" className="py-32 px-6 bg-white relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-[600px] -z-10">
        <Image
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80"
          alt="Code background"
          fill
          className="object-cover opacity-5"
        />
      </div>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-primary-600 mb-6">
            バイブコーディングで何ができる
          </h2>
          <div className="w-32 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            あなたのアイデアを形にする無限の可能性
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-primary-50 p-6 border-l-4 border-primary-500"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="text-5xl mb-4"
              >
                {capability.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">
                {capability.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {capability.description}
              </p>
              <div className="space-y-2">
                {capability.examples.map((example, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-primary-500">▸</span>
                    <span className="text-sm text-gray-600">{example}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}