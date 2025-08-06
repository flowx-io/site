import { Header } from "./header";
import { Hero } from "./hero";

export const HeroSection = () => {
  return (
    <div className="px-8">
      <div className="md:bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat rounded-4xl">
        <Header />
        <Hero />
      </div>
    </div>
  );
};