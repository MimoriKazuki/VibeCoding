'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-white" ref={ref}>
      <motion.div className="container mx-auto max-w-6xl relative z-10" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-primary-600 mb-6"
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : { scale: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            バイブコーディングとは
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-primary-500 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-primary-600 mb-6">
              感覚的にプログラミングを始める
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              バイブコーディングは、従来の文法から学ぶ方法とは異なり、
              まず「作りたいもの」から始めるプログラミング学習法です。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              難しい概念や文法を覚える前に、実際に動くものを作りながら、
              自然とプログラミングの感覚を身につけていきます。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full mb-8">
              <Image
                src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=800&q=80"
                alt="Collaborative coding"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-primary-50 p-10">
            <div className="space-y-4">
              {[
                { icon: "🎯", title: "目的重視", desc: "作りたいものを最優先に" },
                { icon: "🚀", title: "即実践", desc: "理論より実践を重視" },
                { icon: "💡", title: "直感的", desc: "感覚で理解できる学習" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}