"use client";

import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import Image from "next/image";
import { BulletPoint } from "@/components/ui/bullet-point";
import { SectionContainer } from "@/components/ui/section-container";
import { LeadModal } from "@/components/modals/lead-modal";
import { useState } from "react";

export function BonusSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SectionContainer className="py-16">
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-6 mb-8 lg:mb-0">
          <div className="flex items-center gap-2 text-blue-600">
            <Gift className="h-5 w-5" />
            <span>regalo extra</span>
          </div>
          
          <h2 className="text-4xl font-bold">
            diseña productos digitales exitosos,{" "}
            <span className="text-blue-600">gratis</span>
          </h2>
          
          <p className="text-gray-600">
            Te regalamos una guía esencial que incluye todo lo que necesitas para diseñar productos que venden.
          </p>
          
          <ul className="space-y-3">
            <BulletPoint>Aprende a diseñar productos que los usuarios aman.</BulletPoint>
            <BulletPoint>Optimiza tu creatividad y enfócate en lo que importa.</BulletPoint>
            <BulletPoint>Crea productos digitales que dejan huella.</BulletPoint>
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
          <div className="relative aspect-square max-w-md mx-auto">
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=1974"
                alt="Design guide preview"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <div className="absolute -right-4 -top-4 bg-blue-600 text-white px-4 py-2 rounded-full">
              Regalo extra
            </div>
          </div>
          <div className="absolute -z-10 top-0 right-0 w-48 h-48 bg-yellow-300 blur-3xl opacity-20" />
        </div>
      </div>

      <LeadModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </SectionContainer>
  );
}