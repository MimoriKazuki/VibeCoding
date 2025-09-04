'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, rotate: -180 }}
          animate={{ 
            scale: 1, 
            rotate: 0,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20
            }
          }}
          exit={{ 
            scale: 0, 
            rotate: 180,
            transition: { duration: 0.2 }
          }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 20px 30px rgba(0,0,0,0.15)"
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          aria-label="トップへ戻る"
        >
          {/* Arrow icon with animation */}
          <motion.div
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            {/* Double arrow design for pop effect */}
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3"
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-gray-900"
            >
              <path d="M12 19V5M12 5l-7 7M12 5l7 7"/>
            </svg>
            {/* Shadow arrow for depth */}
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-gray-400 absolute top-1 left-0 opacity-30"
            >
              <path d="M12 19V5M12 5l-7 7M12 5l7 7"/>
            </svg>
          </motion.div>
          
          {/* Pulse effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-gray-900"
            initial={{ scale: 1, opacity: 0 }}
            whileHover={{
              scale: [1, 1.3, 1.5],
              opacity: [0, 0.3, 0],
              transition: {
                duration: 1,
                repeat: Infinity,
                ease: "easeOut"
              }
            }}
          />
          
          {/* Text popup on hover */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute right-16 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none"
          >
            TOP
            <div className="absolute right-[-6px] top-1/2 transform -translate-y-1/2">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-900"></div>
            </div>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}