'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function IncomeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });

  const incomeData = [
    {
      title: "未経験エンジニア",
      income: "300-400万円",
      description: "従来の方法で学習",
      color: "bg-gray-100 text-gray-700"
    },
    {
      title: "AIエンジニア初級",
      income: "400-500万円",
      description: "AI活用ができる",
      color: "bg-primary-100 text-primary-700"
    },
    {
      title: "AIエンジニア中級",
      income: "500-700万円",
      description: "要件定義もできる",
      color: "bg-primary-200 text-primary-800",
      highlight: true
    },
    {
      title: "AIエンジニア上級",
      income: "700万円〜",
      description: "プロジェクトリード",
      color: "bg-primary-300 text-primary-900"
    }
  ];

  return (
    <section className="py-32 px-6 bg-white" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-green-600 font-medium text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            収入の変化
          </motion.span>
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-gray-900 mt-4 mb-6"
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : { scale: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            AI人材の収入
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-green-500 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {incomeData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`p-6 text-center ${data.color} ${data.highlight ? 'ring-4 ring-primary-400 transform scale-105' : ''}`}
            >
              {data.highlight && (
                <div className="bg-red-500 text-white text-sm font-bold px-3 py-1 inline-block mb-4">
                  おすすめ
                </div>
              )}
              <h3 className="text-lg font-bold mb-2">
                {data.title}
              </h3>
              <p className="text-3xl font-bold mb-2">
                {data.income}
              </p>
              <p className="text-sm">
                {data.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-gradient-to-r from-green-50 to-primary-50 p-8 border-l-4 border-green-500"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            スキルアップによる収入向上の事例
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            収入アップの参考事例：
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4">
              <p className="font-bold text-primary-600">事務職 → AIエンジニア</p>
              <p className="text-2xl font-bold">年収350万 → 500万円</p>
            </div>
            <div className="bg-white p-4">
              <p className="font-bold text-primary-600">営業職 → AI開発者</p>
              <p className="text-2xl font-bold">年収400万 → 550万円</p>
            </div>
            <div className="bg-white p-4">
              <p className="font-bold text-primary-600">フリーター → フリーランス</p>
              <p className="text-2xl font-bold">年収250万 → 400万円</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}