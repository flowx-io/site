import { HeroSection } from "@/components/sections/hero-section";
import { ChallengesSection } from "@/components/sections/challenges-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SolutionsSection } from "@/components/sections/solutions.section";
import { WhyFlowx } from "@/components/sections/why-flowx-section";
import { FeaturesSection } from "@/components/sections/features-section";

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
