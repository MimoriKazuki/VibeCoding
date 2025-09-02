'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(mousePosition.x, mousePosition.y);
      if (hoveredElement) {
        const isClickable = 
          hoveredElement.tagName === 'A' ||
          hoveredElement.tagName === 'BUTTON' ||
          (hoveredElement as HTMLElement).onclick !== null ||
          hoveredElement.closest('a') !== null ||
          hoveredElement.closest('button') !== null ||
          window.getComputedStyle(hoveredElement).cursor === 'pointer';
        
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousemove', updateCursorType);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousemove', updateCursorType);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mousePosition.x, mousePosition.y, isVisible]);

  // Hide on mobile devices
  useEffect(() => {
    const checkDevice = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) setIsVisible(false);
    };
    
    checkDevice();
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot - instant tracking */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-gray-900 rounded-full pointer-events-none z-[9999]"
        style={{
          transform: `translate(${mousePosition.x - 6}px, ${mousePosition.y - 6}px)`,
        }}
      />
      
      {/* Smooth following circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-gray-400 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.3 : 1,
          borderWidth: isPointer ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 0.5,
        }}
      />
    </>
  );
}