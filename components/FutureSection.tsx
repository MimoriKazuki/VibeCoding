'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function FutureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const showcases = [
    {
      title: "モダンなランディングページ",
      time: "30分",
      description: "洗練されたデザインのLP制作",
      url: "https://figma7-lovat.vercel.app/",
      image: "/Aサイト.png"
    },
    {
      title: "プロフェッショナルサイト",
      time: "1時間",
      description: "企業サイトレベルの品質",
      url: "https://figma6-tan.vercel.app/",
      image: "/Bサイト.png"
    },
    {
      title: "本格的なWebアプリケーション",
      time: "半日",
      description: "複雑な機能を持つWebサイト",
      url: "https://cake1-black.vercel.app/contact",
      image: "/Cサイト.png"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-secondary-50 overflow-hidden" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            講座を受けた後の未来
          </h2>
          <p className="text-base sm:text-lg text-secondary-600 max-w-3xl mx-auto">
            VibeCodingで学んだ後、あなたもこれらのサイトを短時間で作れるようになります
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {showcases.map((showcase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-lg border-2 border-primary-500 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                {/* Time Badge */}
                <div className="bg-primary-50 p-4 border-b-2 border-primary-200">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-primary-600">{showcase.time}</span>
                    <p className="text-secondary-600 text-sm mt-1">で作成可能</p>
                  </div>
                </div>

                {/* Preview Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={showcase.image}
                    alt={showcase.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-secondary-900 mb-2">
                    {showcase.title}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4 flex-grow">
                    {showcase.description}
                  </p>

                  {/* CTA Button */}
                  <a
                    href={showcase.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 px-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
                  >
                    実際のサイトを見る
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg sm:text-xl font-bold text-primary-600">
            講座を受ければこのレベルのサイトが100%作れるようになります
          </p>
        </motion.div>
      </div>
    </section>
  );
}