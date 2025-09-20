'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user has already visited
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      setIsVisible(false);
      return;
    }

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem('hasVisited', 'true');
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-14 h-14 mx-auto mb-6"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <motion.path
                  d="M 20,50 L 50,20 L 80,50 L 50,80 Z"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="35"
                  fill="none"
                  stroke="#93c5fd"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
            
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-3"
            >
              AI人材養成所
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-gray-500 text-base mb-10"
            >
              AIと一緒に学ぶプログラミング
            </motion.p>
            
            <div className="w-64 mx-auto">
              <div className="bg-gray-200 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  className="bg-primary-400 h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-gray-400 text-xs mt-2"
              >
                Loading... {progress}%
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}