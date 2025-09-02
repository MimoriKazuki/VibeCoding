'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
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
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              誰でもエンジニア
            </h1>
          </motion.div>
          <ul className="hidden md:flex space-x-4 lg:space-x-8">
            {[
              { id: 'problems', label: '悩み' },
              { id: 'benefits', label: '特徴' },
              { id: 'market', label: '市場の課題' },
              { id: 'talent', label: '求められる人材' },
              { id: 'pricing', label: '料金' },
              { id: 'faq', label: 'FAQ' },
            ].map((item) => (
              <motion.li key={item.id} whileHover={{ scale: 1.1 }}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm lg:text-base text-gray-700 hover:text-primary-600 transition-colors"
                >
                  {item.label}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
}