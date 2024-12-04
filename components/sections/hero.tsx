"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { BulletPoint } from "@/components/ui/bullet-point";
import { SectionContainer } from "@/components/ui/section-container";
import { LeadModal } from "@/components/modals/lead-modal";
import { useState } from "react";

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SectionContainer className="pt-8 lg:pt-16">
      <nav className="flex items-center justify-between mb-12">
        <div className="text-2xl font-bold">acueducto</div>
        <Button 
          variant="primary" 
          className="bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => setIsModalOpen(true)}
        >
          Ver clase gratuita
        </Button>
      </nav>

      <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-6 mb-8 lg:mb-0">
          <p className="text-blue-600">máster class gratuita</p>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            construye tu MVP en 3 horas:{" "}
            <span className="text-blue-600">web-app full stack</span>
          </h1>
          
          <div className="space-y-4 mt-8">
            <h2 className="text-2xl font-semibold">
              De 0 a 1 con IA: obtén resultados en tiempo récord.
            </h2>
            <ul className="space-y-3">
              <BulletPoint>Valida tu idea sin complicaciones.</BulletPoint>
              <BulletPoint>Sigue un proceso probado y rápido.</BulletPoint>
              <BulletPoint>Consigue feedback en horas.</BulletPoint>
            </ul>
            <Button 
              variant="primary" 
              className="bg-blue-600 hover:bg-blue-700 text-white mt-4"
              onClick={() => setIsModalOpen(true)}
            >
              Ver clase gratuita
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070"
                alt="People working"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-16 h-16 bg-white/20 border-white text-white hover:bg-white/30"
                onClick={() => setIsModalOpen(true)}
              >
                <Play className="h-8 w-8" />
              </Button>
            </div>
          </div>
          <div className="absolute -z-10 top-0 right-0 w-48 h-48 bg-yellow-300 blur-3xl opacity-20" />
          <div className="absolute -z-10 bottom-0 left-0 w-48 h-48 bg-yellow-300 blur-3xl opacity-20" />
        </div>
      </div>

      <LeadModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </SectionContainer>
  );
}