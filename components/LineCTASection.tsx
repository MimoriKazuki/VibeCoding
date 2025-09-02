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
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="bg-white rounded-full p-4">
              <svg className="w-16 h-16 text-primary-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.86.5 3.59 1.38 5.08L2 22l4.92-1.38C8.41 21.5 10.14 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.21-.43-4.56-1.17l-.33-.17-3.42.96.96-3.42-.17-.33C3.43 15.21 3 13.66 3 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
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
            <span className="text-white/90">特別割引クーポン</span>
            <br />
            プレゼント！
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
                "特別割引クーポン（先着順）",
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8"
          >
            <div className="bg-white/20 backdrop-blur text-white inline-block px-6 py-3 font-medium text-lg rounded-full font-lato">
              残り枠わずか
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-lg font-noto text-white/90"
          >
            ※LINEアカウントをお持ちでない方は、
            <br />
            まずLINEアプリをダウンロードしてください
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}