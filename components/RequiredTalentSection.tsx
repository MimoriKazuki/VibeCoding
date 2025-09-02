'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function RequiredTalentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });

  const talents = [
    {
      title: "AIプロンプトエンジニア",
      image: "/images/20101_color (1).svg",
      skills: [
        "ChatGPT/Claude/Geminiなど複数のAIツールを使い分ける能力",
        "効果的なプロンプト設計で期待通りの出力を得るスキル",
        "AI連携開発によるシステム構築とワークフロー自動化"
      ],
      description: "AIツールを最大限活用し、業務効率を飛躍的に向上させる新世代のエンジニア",
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-500"
    },
    {
      title: "AI活用スキル",
      image: "/images/17561_color.svg",
      skills: [
        "AIツールを効果的に使いこなせる能力",
        "プロンプトエンジニアリング - AIに適切な指示を出して期待する結果を得る技術",
        "AIが生成したコードの品質評価と改善ができる能力"
      ],
      description: "技術の進化に柔軟に対応し、AIと協働できる実践的なスキルセット",
      color: "from-green-50 to-green-100",
      borderColor: "border-green-500"
    },
    {
      title: "継続学習・適応力",
      image: "/images/18974_color.svg",
      skills: [
        "新しい技術やAIツールへの適応力",
        "変化の激しい技術環境に対する柔軟性",
        "自律的な学習習慣"
      ],
      description: "常に学び続け、変化を楽しみながら成長できるマインドセット",
      color: "from-purple-50 to-purple-100",
      borderColor: "border-purple-500"
    }
  ];

  return (
    <section id="talent" className="py-16 sm:py-24 lg:py-32 overflow-x-hidden bg-primary-50" ref={ref}>
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
            今求められている人材
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-primary-500 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            バイブコーディングができる人材こそ、これからの時代に必要
          </p>
        </motion.div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20 mb-16">
          {talents.map((talent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:flex-1">
                <Image
                  src={talent.image}
                  alt={talent.title}
                  width={300}
                  height={300}
                  className="w-full h-auto max-w-xs sm:max-w-sm mx-auto"
                />
              </div>
              <div className="w-full lg:flex-1 space-y-4 sm:space-y-6 px-4 lg:px-0">
                <h3 className={`text-2xl sm:text-3xl font-bold text-gray-900 pb-3 border-b-2 sm:border-b-3 ${talent.borderColor}`}>
                  {talent.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600">
                  {talent.description}
                </p>
                <ul className="space-y-3">
                  {talent.skills.map((skill, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 + i * 0.05 }}
                      className="flex items-start space-x-3"
                    >
                      <span className={`text-lg sm:text-2xl mt-1 ${talent.borderColor.replace('border-', 'text-')}`}>•</span>
                      <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}