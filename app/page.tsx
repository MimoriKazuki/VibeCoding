'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import SplashScreen from '@/components/SplashScreen';
import HeroSection from '@/components/HeroSection';
import MarketProblemSection from '@/components/MarketProblemSection';
import RequiredTalentSection from '@/components/RequiredTalentSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import CustomCursor from '@/components/CustomCursor';
import ProblemsSection from '@/components/ProblemsSection';
import BenefitsSection from '@/components/BenefitsSection';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <SplashScreen />
      <Header />
      <main className="min-h-screen bg-white">
        <HeroSection />
        <ProblemsSection />
        <BenefitsSection />
        <MarketProblemSection />
        <RequiredTalentSection />
        <PricingSection />
        <FAQSection />
      </main>
    </>
  );
}