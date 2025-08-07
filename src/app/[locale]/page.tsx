import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { SolutionsSection } from "@/components/solutions.section";

export default function Home() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <ServicesSection />
      <SolutionsSection />
    </div>
  );
}
