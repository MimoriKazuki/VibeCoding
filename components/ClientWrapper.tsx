'use client';

import { ReactNode } from 'react';
import CustomCursor from '@/components/CustomCursor';
import SplashScreen from '@/components/SplashScreen';
import FloatingCTAButton from '@/components/FloatingCTAButton';

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <CustomCursor />
      <SplashScreen />
      <FloatingCTAButton />
      {children}
    </>
  );
}