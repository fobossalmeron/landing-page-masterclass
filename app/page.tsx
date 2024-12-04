import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/sections/hero";
import { CompaniesSection } from "@/components/sections/companies";
import { BonusSection } from "@/components/sections/bonus";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CompaniesSection />
      <BonusSection />
      <Footer />
    </main>
  );
}