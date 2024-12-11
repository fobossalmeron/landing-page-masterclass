"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BulletPoint } from "@/components/ui/bullet-point";
import { SectionContainer } from "@/components/ui/section-container";
import { LeadModal } from "@/components/modals/lead-modal";
import { useState } from "react";
import { Skewed } from "@/components/ui/skewed";
import { PlayButton } from "@/components/ui/play-button";
import { Nav } from "@/components/ui/nav";

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SectionContainer className="pt-2 md:pt-8 lg:pt-16 overflow-hidden sm:overflow-visible pb-10 sm:pb-0">
      <Nav 
        showButton 
        onButtonClick={() => setIsModalOpen(true)} 
      />

      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <Skewed>masterclass gratuita</Skewed>
          <h1 className="max-w-[300px] md:max-w-[560px] text-3xl font-bold !leading-tight text-secondary md:text-5xl lg:text-[3.5rem]">
            construye tu MVP en 3 horas:
            <span className="text-primary"> web-app full stack</span>
          </h1>
        </div>

        <div className="ml-auto lg:mt-44 flex max-w-[340px] md:max-w-[400px] lg:max-w-[500px] flex-col justify-end space-y-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-secondary">
            De 0 a 1 con IA: obtén resultados en tiempo récord
          </h2>
          <ul className="space-y-3 text-base md:text-lg">
            <BulletPoint>
              <span className="font-bold text-primary">Valida{` `}</span>
              tu idea sin complicaciones.
            </BulletPoint>
            <BulletPoint>
              Sigue un proceso
              <span className="font-bold text-primary">{` `}probado y rápido</span>.
            </BulletPoint>
            <BulletPoint>
              Consigue feedback
              <span className="font-bold text-primary"> en horas</span>.
            </BulletPoint>
          </ul>
          <Button onClick={() => setIsModalOpen(true)} className="mt-10 w-fit">
            Ver clase gratuita
          </Button>
        </div>
      </div>

      <div className="relative mt-16 md:mt-24 w-full">
        <div className="relative m-2 md:m-0">
          <div className="absolute inset-[-10px] rounded-3xl sm:inset-[-20px] md:inset-[-30px] lg:inset-[-40px] z-10 md:rounded-[3rem] bg-primary/10" />
          <div className="relative aspect-video overflow-hidden rounded-3xl z-30">
            <div className="relative w-full h-full">
              <Image
                src="/img/video_background.jpg"
                alt="Masterclass"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <PlayButton onClick={() => setIsModalOpen(true)} />
            </div>
          </div>
        </div>
        <div className="absolute -left-[10%] -top-[10%] z-20 h-[58%] w-[33%]">
          <Image
            src="/img/start.svg"
            fill
            style={{ objectFit: "contain" }}
            alt="decorative"
            role="presentation"
          />
        </div>
        <div className="absolute -bottom-[18%] md:-bottom-[10%] -right-[10%] z-20 h-[58%] w-[33%]">
          <Image
            src="/img/start.svg"
            fill
            style={{ objectFit: "contain" }}
            alt="decorative"
            role="presentation"
          />
        </div>
      </div>

      <LeadModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </SectionContainer>
  );
}
