'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function LineCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });

  return (
    <section id="line-cta" className="py-32 px-6 bg-gradient-to-r from-primary-400 to-primary-500" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-6"
          >
            <div className="inline-block bg-yellow-400 text-primary-600 px-6 py-2 rounded-full font-bold text-lg mb-4">
              受講受付中
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 font-noto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            今すぐLINE登録で
            <br />
            <span className="text-yellow-300">詳細情報</span>を
            <br />
            お届け！
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm p-8 mb-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4 font-noto">
              LINE登録特典
            </h3>
            <div className="space-y-3 text-left max-w-md mx-auto">
              {[
                "講座詳細資料プレゼント",
                "無料体験講座（3本）視聴権",
                "AI活用ガイドブックプレゼント",
                "個別相談会への無料参加権"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="flex items-center space-x-3"
                >
                  <span className="text-white/80 text-xl">•</span>
                  <span className="text-lg font-noto">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <a 
              href="https://lin.ee/TLbJUF7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-500 px-12 py-6 text-2xl font-bold hover:bg-primary-50 transition-colors rounded-full font-noto"
            >
              LINE友だち追加はこちら
            </a>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
}