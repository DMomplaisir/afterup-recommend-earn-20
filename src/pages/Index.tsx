import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PartnersSection } from "@/components/PartnersSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhyProfessionalsSection } from "@/components/WhyProfessionalsSection";
import { ChewyPartnershipSection } from "@/components/ChewyPartnershipSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <PartnersSection />
      <WhyProfessionalsSection />
      <ChewyPartnershipSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
