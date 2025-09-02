'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "プログラミング未経験でも大丈夫ですか？",
      answer: "はい、全く問題ありません。ほとんどの方がプログラミング未経験からスタートしています。AIを活用することで、従来よりもスピーディーに学習できるため、未経験でも短期間で実務レベルに到達可能です。"
    },
    {
      question: "仕事をしながらでも受講できますか？",
      answer: "もちろん可能です。動画講座は24時間いつでも視聴可能で、1日1〜2時間の学習時間が確保できれば十分です。実際に受講生の7割以上が働きながら受講されています。"
    },
    {
      question: "パソコンのスペックはどれくらい必要ですか？",
      answer: "特別なスペックは必要ありません。5年以内に購入したパソコンであれば問題なく受講できます。WindowsでもMacでも対応しています。"
    },
    {
      question: "他のプログラミングスクールとの違いは？",
      answer: "最大の違いはAI活用に特化している点です。ChatGPTなどのAIツールを使った開発手法を学ぶことで、従来の10倍速で開発できるようになります。また、価格も他社の半額以下でご提供しています。"
    }
  ];

  return (
    <section id="faq" className="py-32 px-6 bg-gray-50" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : { scale: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            よくある質問
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-primary-500 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-700 mb-6">
            その他ご不明な点がございましたら、お気軽にお問い合わせください
          </p>
          <motion.a
            href="https://lin.ee/TLbJUF7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block text-white px-8 py-4 text-lg font-semibold transition-all rounded-lg"
            style={{ 
              backgroundColor: '#06C755',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#05B04B';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#06C755';
            }}
          >
            LINE で質問する
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}