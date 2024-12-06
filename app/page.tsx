import { HeroSection } from "@/components/sections/hero";
import { CompaniesSection } from "@/components/sections/companies";
import { BonusSection } from "@/components/sections/bonus";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompaniesSection />
      <BonusSection />
      <Footer />
    </>
  );
}