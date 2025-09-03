'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FloatingCTAButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // ヒーローセクションの高さを超えたら表示
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      setIsVisible(scrollPosition > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初回チェック

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          <motion.div
            className="relative"
          >
            {/* Pulsing animation background */}
            <motion.div
              className="absolute inset-0 bg-green-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Main button - always expanded */}
            <motion.a
              href="https://lin.ee/TLbJUF7"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 px-4 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div>
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                </svg>
              </div>
              
              <div className="pr-2 whitespace-nowrap">
                <div className="font-bold text-sm">LINE登録で詳細確認</div>
                <div className="text-xs opacity-90">特別価格 20,000円</div>
              </div>
            </motion.a>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}