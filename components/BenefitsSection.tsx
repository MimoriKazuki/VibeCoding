'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const benefits = [
    {
      number: "01",
      title: "自分のタイミングで",
      description: "動画講座で24時間自分のタイミングで学習可能"
    },
    {
      number: "02", 
      title: "作りたいものが作れる",
      description: "サービス開発の実演講習を定期配信"
    },
    {
      number: "03",
      title: "サポートも充実",
      description: "環境立ち上げからリリースまでサポート"
    },
    {
      number: "04",
      title: "未経験でもOK",
      description: "感覚的な操作で開発できるようになる"
    }
  ];

  return (
    <section id="benefits" className="pt-16 sm:pt-20 lg:pt-24 pb-12 overflow-x-hidden bg-white" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Card with border and dotted bottom */}
              <div className="relative border-2 border-primary-500 rounded-lg bg-white h-44 sm:h-48 flex items-center">
                {/* Number badge */}
                <div className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-base sm:text-lg">{benefit.number}</span>
                  </div>
                </div>
                
                {/* Content - centered vertically */}
                <div className="text-center px-4 sm:px-6 w-full">
                  <h3 className="text-lg sm:text-xl font-bold text-primary-600 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                
                {/* Dotted bottom border effect */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-2 border-b-2 border-dotted border-primary-300"
                  style={{ borderBottomStyle: 'dotted' }}
                />
              </div>
              
              {/* Connecting dotted line (except for last item) */}
              {index < benefits.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-6 transform -translate-y-1/2">
                  <div className="border-t-2 border-dotted border-primary-300 w-full" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Images section below cards */}
        <div className="mt-12 flex justify-center items-center gap-12 sm:gap-24 md:gap-40 flex-wrap">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
          >
            <Image
              src="/images/21598_color.svg"
              alt="学習サポート"
              fill
              className="object-contain"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
          >
            <Image
              src="/images/21654_color (1).svg"
              alt="成長サポート"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}