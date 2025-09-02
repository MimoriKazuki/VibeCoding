'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function FutureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="future" className="py-32 px-6 bg-primary-50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-primary-600 mb-6">
            プログラミングの未来
          </h2>
          <div className="w-32 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white p-6 border-l-4 border-primary-500">
              <h3 className="text-2xl font-bold text-primary-700 mb-4">
                AIとの共創時代
              </h3>
              <p className="text-gray-600 leading-relaxed">
                プログラミングは、もはや専門家だけのものではありません。
                AIと協力することで、誰もがアイデアを形にできる時代が到来しています。
              </p>
            </div>

            <div className="bg-white p-6 border-l-4 border-primary-500">
              <h3 className="text-2xl font-bold text-primary-700 mb-4">
                創造性が最重要に
              </h3>
              <p className="text-gray-600 leading-relaxed">
                コードを書く技術よりも、何を作るか、どう問題を解決するかという
                創造的な思考がより重要になってきています。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[300px] w-full mb-8">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                alt="Future technology"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-primary-600 p-8 text-white">
              <h3 className="text-3xl font-bold mb-6">未来のスキル</h3>
              <ul className="space-y-4">
                {[
                  "問題解決能力",
                  "創造的思考",
                  "AIとのコミュニケーション",
                  "システム設計の理解",
                  "継続的な学習意欲"
                ].map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <motion.span
                      whileHover={{ scale: 1.2 }}
                      className="text-2xl"
                    >
                      ✨
                    </motion.span>
                    <span className="text-lg">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            バイブコーディングは、この新しい時代に最適な学習方法です。
            今すぐ始めて、未来のクリエイターになりましょう。
          </p>
        </motion.div>
      </div>
    </section>
  );
}