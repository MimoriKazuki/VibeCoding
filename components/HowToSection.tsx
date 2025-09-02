'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function HowToSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "作りたいものを決める",
      description: "まず、自分が作りたいと思うものを明確にします。Webサイト、アプリ、ゲームなど、興味のあるものから始めましょう。",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80"
    },
    {
      number: "02",
      title: "AIと対話しながら作る",
      description: "ChatGPTやCopilotなどのAIツールを使って、作りたいものを説明し、コードを生成してもらいます。",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80"
    },
    {
      number: "03",
      title: "動かして確認",
      description: "生成されたコードを実際に動かしてみて、思い通りに動作するか確認します。",
      image: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=400&q=80"
    },
    {
      number: "04",
      title: "改善と学習",
      description: "動作を見ながら改善点を考え、AIと対話しながら修正。この過程で自然とコードの理解が深まります。",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&q=80"
    }
  ];

  return (
    <section id="howto" className="py-32 px-6 bg-primary-50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-primary-600 mb-6">
            バイブコーディングのやり方
          </h2>
          <div className="w-32 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            たった4つのステップで、今すぐプログラミングを始められます
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white border-2 border-primary-200 overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-primary-600"
                  >
                    {step.number}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 text-white px-8 py-4 text-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            実践ガイドを見る
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}