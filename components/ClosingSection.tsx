'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ClosingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 bg-white" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-primary-600 mb-6">
            さいごに
          </h2>
          <div className="w-32 h-1 bg-primary-500 mx-auto mb-12"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary-50 p-8 md:p-12 border-l-4 border-primary-500"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              プログラミングを学ぶことは、もはや特別なことではありません。
              バイブコーディングを通じて、あなたも今日から
              デジタル世界のクリエイターになることができます。
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              難しく考える必要はありません。
              まずは小さな一歩から始めてみましょう。
              あなたのアイデアが、世界を変える第一歩になるかもしれません。
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-primary-600 p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">
                今すぐ始めよう！
              </h3>
              <p className="mb-6">
                バイブコーディングで、プログラミングの楽しさを体験してください
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
              >
                無料で始める →
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex justify-center space-x-6"
          >
            {['Twitter', 'GitHub', 'Discord'].map((social, index) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                {social}
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-sm text-gray-500"
          >
            © 2024 VibeCoding. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}