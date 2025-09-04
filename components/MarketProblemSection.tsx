'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, Cell, RadarChart, 
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ComposedChart 
} from 'recharts';

export default function MarketProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });

  // Data for IT talent supply and demand gap (based on METI data - 2020年以降)
  // 出典: 経済産業省「IT人材需給に関する調査」
  const talentGapData = [
    { 
      year: '2020', 
      traditional: 93,   // 従来型IT人材（万人）
      advanced: 19,      // 先端IT人材（万人）
      reSkillRate: 3.3   // Reスキル率（%）
    },
    { 
      year: '2021', 
      traditional: 90, 
      advanced: 24,
      reSkillRate: 4.1
    },
    { 
      year: '2022', 
      traditional: 86, 
      advanced: 29,
      reSkillRate: 4.8
    },
    { 
      year: '2023', 
      traditional: 82, 
      advanced: 35,
      reSkillRate: 5.3
    },
    { 
      year: '2024', 
      traditional: 77, 
      advanced: 41,
      reSkillRate: 5.7
    },
    { 
      year: '2025', 
      traditional: 71, 
      advanced: 48,
      reSkillRate: 5.8
    },
    { 
      year: '2026', 
      traditional: 65, 
      advanced: 54,
      reSkillRate: 5.5
    },
    { 
      year: '2027', 
      traditional: 60, 
      advanced: 64,
      reSkillRate: 4.8
    },
    { 
      year: '2028', 
      traditional: 55, 
      advanced: 66,
      reSkillRate: 3.6
    },
    { 
      year: '2029', 
      traditional: 52, 
      advanced: 64,
      reSkillRate: 2.6
    },
    { 
      year: '2030', 
      traditional: 51, 
      advanced: 66,
      reSkillRate: 2.0
    }
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
            市場の現状
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
          {/* IT Talent Shortage Chart - Now First */}
          <div className="flex flex-col lg:flex-row items-center gap-8 justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full lg:w-1/2 px-4 sm:px-0"
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
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full lg:w-1/3 space-y-4 px-4 lg:px-0"
            >
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800">深刻化する人材不足</h4>
              <p className="text-gray-600 leading-relaxed">
                経済産業省の調査によると、2030年には最大79万人のIT人材が不足すると予測されています。
              </p>
              <p className="text-gray-600 leading-relaxed">
                デジタル化の加速により、あらゆる業界でIT人材の需要が急増していますが、供給が追いついていません。
              </p>
            </motion.div>
          </div>

          {/* IT Skills Gap Chart - Now Second */}
          <div className="flex flex-col lg:flex-row items-center gap-8 justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full lg:w-1/3 space-y-4 px-4 lg:px-0 order-2 lg:order-1"
            >
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800">スキルギャップの拡大</h4>
              <p className="text-gray-600 leading-relaxed">
                従来型ITスキル人材は供給過剰となる一方、AIなど先端技術人材は大幅に不足すると予測されます。
              </p>
              <p className="text-gray-600 leading-relaxed">
                JavaやC言語での単純実装や保守といった業務需要は縮小し、市場で活躍するにはリスキリングによる新技術習得が不可欠です。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full lg:w-1/2 px-4 sm:px-0 order-1 lg:order-2"
            >
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">IT関連市場の構造変化と構造変化に対応した場合のReスキル率の推移</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <ComposedChart data={talentGapData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="year"
                      tick={{ fontSize: 11 }}
                      interval={1}
                    />
                    <YAxis 
                      yAxisId="left"
                      domain={[0, 140]}
                    />
                    <YAxis 
                      yAxisId="right" 
                      orientation="right"
                      domain={[0, 7]}
                    />
                    <Tooltip 
                      formatter={(value, name) => {
                        if (name === 'Reスキル率') return `${value}%`;
                        return `${value}万人`;
                      }}
                      labelFormatter={(label) => `${label}年`}
                    />
                    <Bar dataKey="traditional" name="従来型IT人材" stackId="a" fill="#93C5FD" yAxisId="left" />
                    <Bar dataKey="advanced" name="先端IT人材" stackId="a" fill="#FCA5A5" yAxisId="left" />
                    <Line 
                      type="monotone" 
                      dataKey="reSkillRate" 
                      name="Reスキル率"
                      stroke="#EF4444" 
                      strokeWidth={2}
                      yAxisId="right"
                      dot={{ r: 4 }}
                    />
                    <Legend 
                      content={(props) => {
                        const { payload } = props;
                        if (!payload) return null;
                        const reorderedPayload = [
                          ...payload.filter(p => p.value !== 'Reスキル率'),
                          ...payload.filter(p => p.value === 'Reスキル率')
                        ];
                        return (
                          <ul className="flex justify-center items-center gap-6 mt-2">
                            {reorderedPayload.map((entry, index) => (
                              <li key={`item-${index}`} className="flex items-center">
                                <span
                                  className="inline-block w-3 h-3 mr-2"
                                  style={{ 
                                    backgroundColor: entry.type === 'line' ? 'transparent' : entry.color,
                                    border: entry.type === 'line' ? `2px solid ${entry.color}` : 'none'
                                  }}
                                />
                                <span className="text-sm">{entry.value}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
                <p className="text-xs sm:text-sm text-gray-600 mt-4">
                  先端IT人材は増加傾向、従来型は減少。リスキルが市場変化の鍵
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  ※出典：経済産業省情報技術利用促進課「IT人材需給に関する調査（概要）」
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