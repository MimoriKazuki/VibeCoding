'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-16 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('top')}
          >
            <Image
              src="/logo.svg"
              alt="AI人材養成所"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              AI人材養成所
            </h1>
          </motion.button>
          <div className="flex items-center gap-4 lg:gap-6">
            <ul className="hidden md:flex space-x-4 lg:space-x-6">
              {[
                { id: 'problems', label: '悩み' },
                { id: 'benefits', label: '特徴' },
                { id: 'market', label: '市場' },
                { id: 'vision', label: 'ビジョン' },
                { id: 'pricing', label: '料金' },
                { id: 'faq', label: 'FAQ' },
              ].map((item) => (
                <motion.li key={item.id} whileHover={{ scale: 1.05 }}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm lg:text-base text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
            <motion.a
              href="https://lin.ee/TLbJUF7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
              </svg>
              <span className="hidden sm:inline">LINE登録</span>
            </motion.a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}