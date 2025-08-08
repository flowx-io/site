import { Header } from "../header";
import { Hero } from "../hero";

export const HeroSection = () => {
  return (
    <div className="mx-auto px-4 md:px-8">
      <div className="rounded-4xl md:bg-white md:bg-[linear-gradient(180deg,rgba(255,255,255,0.40)_0%,rgba(120,212,198,0.40)_100%)]">
        <Header />
        <Hero />
      </div>
    </div>
  );
};