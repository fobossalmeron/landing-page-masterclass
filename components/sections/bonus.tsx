"use client";

import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import { Regalo } from "@/components/ui/regalo";
import { BulletPoint } from "@/components/ui/bullet-point";
import { SectionContainer } from "@/components/ui/section-container";
import { LeadModal } from "@/components/modals/lead-modal";
import { useState } from "react";

export function BonusSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SectionContainer className="py-16">
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-6 mb-8 lg:mb-0 max-w-[460px]">
          <div className="flex items-center gap-2 bg-primary/10 p-3 max-w-fit text-primary">
            <Gift className="h-5 w-5" />
            <span className="inline font-bold">regalo extra</span>
          </div>
          
          <h2 className="text-5xl leading-[125%] font-bold text-secondary">
            diseña productos digitales exitosos,{" "}
            <span className="text-blue-600">gratis</span>
          </h2>
          
          <p className="text-gray-600 text-lg">
            Te regalamos una guía esencial que incluye todo lo que necesitas para diseñar productos que venden.
          </p>
          
          <ul className="space-y-3 text-lg">
            <BulletPoint><span className="text-primary font-medium mr-1 inline">Aprende</span> a diseñar productos que los usuarios aman.</BulletPoint>
            <BulletPoint><span className="text-primary font-medium mr-1 inline">Optimiza</span> tu creatividad y enfócate en lo que importa.</BulletPoint>
            <BulletPoint><span className="text-primary font-medium mr-1 inline">Crea</span> productos digitales que dejan huella.</BulletPoint>
          </ul>
          
          <Button 
            variant="default" 
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => setIsModalOpen(true)}
          >
            Ver clase gratuita
          </Button>
        </div>

        <div className="relative">
          <Regalo />
        </div>
      </div>

      <LeadModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </SectionContainer>
  );
}