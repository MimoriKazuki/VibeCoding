import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MediaCoverageSection from '@/components/MediaCoverageSection';
import MarketProblemSection from '@/components/MarketProblemSection';
import RequiredTalentSection from '@/components/RequiredTalentSection';
import VisionSection from '@/components/VisionSection';
import FutureSection from '@/components/FutureSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import ProblemsSection from '@/components/ProblemsSection';
import BenefitsSection from '@/components/BenefitsSection';
import LineCTASection from '@/components/LineCTASection';
import ModernCTASection from '@/components/ModernCTASection';
import Footer from '@/components/Footer';
import ClientWrapper from '@/components/ClientWrapper';

export default function Home() {
  return (
    <ClientWrapper>
      <Header />
      <main className="min-h-screen bg-white">
        <HeroSection />
        <MediaCoverageSection />
        <ModernCTASection />
        <ProblemsSection />
        <BenefitsSection />
        <FutureSection />
        <MarketProblemSection />
        <RequiredTalentSection />
        <VisionSection />
        <PricingSection />
        <LineCTASection />
        <FAQSection />
      </main>
      <Footer />
    </ClientWrapper>
  );
}