import { HeroSection } from "@/components/hero-section";
import { ChallengesSection } from "@/components/challenges-section";
import { ServicesSection } from "@/components/services-section";
import { SolutionsSection } from "@/components/solutions.section";
import { WhyFlowx } from "@/components/why-flowx";
import { FeaturesSection } from "@/components/features-section";

export default function Home() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <ServicesSection />
      <SolutionsSection />
      <ChallengesSection />
      <WhyFlowx />
      <FeaturesSection />
    </div>
  );
}
