'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, Cell, RadarChart, 
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar 
} from 'recharts';

export default function MarketProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });

  // Data for salary comparison chart
  const salaryData = [
    { country: '日本', salary: 550, color: '#EF4444' },
    { country: 'アメリカ', salary: 1200, color: '#3B82F6' },
    { country: 'シンガポール', salary: 800, color: '#10B981' },
    { country: '中国', salary: 650, color: '#F59E0B' },
    { country: 'インド', salary: 450, color: '#8B5CF6' }
  ];

  // Data for IT talent shortage prediction
  const shortageData = [
    { year: '2020', shortage: 30 },
    { year: '2022', shortage: 38 },
    { year: '2024', shortage: 45 },
    { year: '2026', shortage: 56 },
    { year: '2028', shortage: 68 },
    { year: '2030', shortage: 79 }
  ];

  // Data for technology update cycle
  const techUpdateData = [
    { name: 'フロントエンド', cycle: 2, fullMark: 5 },
    { name: 'AI/機械学習', cycle: 1.5, fullMark: 5 },
    { name: 'クラウド', cycle: 3, fullMark: 5 },
    { name: 'モバイル', cycle: 2.5, fullMark: 5 },
    { name: 'バックエンド', cycle: 4, fullMark: 5 },
    { name: 'データベース', cycle: 4.5, fullMark: 5 }
  ];

  return (
    <section id="market" className="pt-10 pb-24 overflow-x-hidden bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mt-4 mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            市場の課題
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary-600 mx-auto mb-4"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <p className="text-base sm:text-lg text-secondary-600 max-w-2xl mx-auto">
            日本のIT業界が直面している現実をデータで可視化
          </p>
        </motion.div>

        {/* Staggered Graph Layout */}
        <div className="space-y-16">
          {/* Salary Comparison Chart - Left aligned with right text */}
          <div className="flex flex-col lg:flex-row items-center gap-8 justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full lg:w-1/2 px-4 sm:px-0"
            >
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">エンジニア平均年収の国際比較</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={salaryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="country" />
                    <YAxis label={{ value: '年収（万円）', angle: -90, position: 'insideLeft' }} />
                    <Tooltip formatter={(value) => `${value}万円`} />
                    <Bar dataKey="salary" fill="#3B82F6">
                      {salaryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-xs sm:text-sm text-gray-600 mt-4">
                  日本のエンジニア年収は世界水準の半分以下
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full lg:w-1/3 space-y-4 px-4 lg:px-0"
            >
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800">給与格差の現実</h4>
              <p className="text-gray-600 leading-relaxed">
                日本のエンジニアの平均年収は550万円程度に留まり、アメリカの1,200万円と比較すると半分以下です。
              </p>
              <p className="text-gray-600 leading-relaxed">
                この格差は単純な為替レートの違いだけでなく、エンジニアに対する評価や市場価値の違いを反映しています。
              </p>
            </motion.div>
          </div>

          {/* IT Talent Shortage Chart - Right aligned with left text */}
          <div className="flex flex-col lg:flex-row items-center gap-8 justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full lg:w-1/3 space-y-4 px-4 lg:px-0 order-2 lg:order-1"
            >
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800">深刻化する人材不足</h4>
              <p className="text-gray-600 leading-relaxed">
                経済産業省の調査によると、2030年には最大79万人のIT人材が不足すると予測されています。
              </p>
              <p className="text-gray-600 leading-relaxed">
                デジタル化の加速により、あらゆる業界でIT人材の需要が急増していますが、供給が追いついていません。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full lg:w-1/2 px-4 sm:px-0 order-1 lg:order-2"
            >
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">IT人材不足の予測</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={shortageData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis label={{ value: '不足人数（万人）', angle: -90, position: 'insideLeft' }} />
                    <Tooltip formatter={(value) => `${value}万人`} />
                    <Line type="monotone" dataKey="shortage" stroke="#EF4444" strokeWidth={3} dot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-xs sm:text-sm text-gray-600 mt-4">
                  2030年には79万人のIT人材が不足する見込み
                </p>
              </div>
            </motion.div>
          </div>

          {/* Career Success by Age - Left aligned with right text */}
          <div className="flex flex-col lg:flex-row items-center gap-8 justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full lg:w-1/2 px-4 sm:px-0 order-1"
            >
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">年代別転職成功率（%）</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={[
                    { age: '20代', with: 85, without: 80 },
                    { age: '30代', with: 88, without: 65 },
                    { age: '40代', with: 82, without: 30 },
                    { age: '50代', with: 75, without: 15 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="age" />
                    <YAxis label={{ value: '成功率（%）', angle: -90, position: 'insideLeft' }} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Bar dataKey="with" name="継続学習あり" fill="#3B82F6" />
                    <Bar dataKey="without" name="継続学習なし" fill="#EF4444" />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-xs sm:text-sm text-gray-600 mt-4">
                  継続学習の有無で転職成功率に大きな差
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="w-full lg:w-1/3 space-y-4 px-4 lg:px-0 order-2"
            >
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800">学習習慣の重要性</h4>
              <p className="text-gray-600 leading-relaxed">
                継続的に学習している人は、年齢に関係なく高い転職成功率を維持しています。
              </p>
              <p className="text-gray-600 leading-relaxed">
                特に40代以降では、継続学習の有無で成功率に50%以上の差が生まれます。技術の変化に対応できるかが鍵となります。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}