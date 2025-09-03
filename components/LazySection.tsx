'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Loading component
const LoadingSection = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-pulse space-y-4 w-full max-w-4xl px-4">
      <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
    </div>
  </div>
);

// Lazy load heavy sections
export const LazyPricingSection = dynamic(
  () => import('@/components/PricingSection'),
  {
    loading: () => <LoadingSection />,
    ssr: true
  }
);

export const LazyFAQSection = dynamic(
  () => import('@/components/FAQSection'),
  {
    loading: () => <LoadingSection />,
    ssr: true
  }
);

export const LazyLineCTASection = dynamic(
  () => import('@/components/LineCTASection'),
  {
    loading: () => <LoadingSection />,
    ssr: true
  }
);