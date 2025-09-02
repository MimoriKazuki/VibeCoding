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
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2"
          >
            {/* Code icon */}
            <div className="text-primary-500">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
                <line x1="12" y1="2" x2="12" y2="22" transform="rotate(15 12 12)"></line>
              </svg>
            </div>
            {/* Text logo */}
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              誰でもエンジニア
            </span>
          </motion.div>
          <ul className="hidden md:flex space-x-8">
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
                  className="text-gray-700 hover:text-primary-600 transition-colors"
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