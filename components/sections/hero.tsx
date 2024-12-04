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
      <nav className="flex items-center justify-between mb-12 w-full">
        <div className="flex items-center">
          <Image 
            src="/img/logoblack.svg" 
            alt="Acueducto" 
            width={128} 
            height={18}
          />
        </div>
        <Button variant="default" onClick={() => setIsModalOpen(true)}>
          Ver clase gratuita
        </Button>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        <div className="space-y-4">
          <p className="text-primary bg-primary/10 inline p-3 font-bold">máster class gratuita</p>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-secondary">
            construye tu MVP en 3 horas:{" "}
            <span className="text-primary">web-app full stack</span>
          </h1>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-secondary">
            De 0 a 1 con IA: obtén resultados en tiempo récord.
          </h2>
          <ul className="space-y-3">
            <BulletPoint>
              <span className="text-primary">Valida</span> tu idea sin
              complicaciones.
            </BulletPoint>
            <BulletPoint>
              Sigue un proceso
              <span className="text-primary">probado y rápido</span>.
            </BulletPoint>
            <BulletPoint>
              Consigue feedback
              <span className="text-primary">en horas</span>.
            </BulletPoint>
          </ul>
          <Button variant="default" onClick={() => setIsModalOpen(true)}>
            Ver clase gratuita
          </Button>
        </div>
      </div>

      <div className="relative mt-20 w-full">
        <div className="relative">
          <div className="absolute inset-[-40px] rounded-[2rem] bg-primary/10" />
          <div className="relative aspect-video rounded-3xl overflow-hidden">
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src="/img/video_background.jpg"
                alt="Masterclass"
                fill
                style={{ objectFit: "cover" }}
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
        </div>
        <div className="absolute -z-10 top-0 right-0 w-48 h-48 bg-yellow-300 blur-3xl opacity-20" />
        <div className="absolute -z-10 bottom-0 left-0 w-48 h-48 bg-yellow-300 blur-3xl opacity-20" />
      </div>

      <LeadModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </SectionContainer>
  );
}
