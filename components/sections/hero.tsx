"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BulletPoint } from "@/components/ui/bullet-point";
import { SectionContainer } from "@/components/ui/section-container";
import { LeadModal } from "@/components/modals/lead-modal";
import { useState } from "react";
import { Skewed } from "@/components/ui/skewed";
import { PlayButton } from "@/components/ui/play-button";

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SectionContainer className="pt-8 lg:pt-16">
      <nav className="mb-16 flex w-full items-center justify-between">
        <div className="flex items-center">
          <Image src="/img/logoblack.svg" alt="Acueducto" width={128} height={18} />
        </div>
        <Button variant="default" onClick={() => setIsModalOpen(true)}>
          Ver clase gratuita
        </Button>
      </nav>

      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <Skewed>máster class gratuita</Skewed>
          <h1 className="max-w-[560px] text-4xl font-bold !leading-tight text-secondary lg:text-[3.5rem]">
            construye tu MVP en 3 horas:
            <span className="text-primary"> web-app full stack</span>
          </h1>
        </div>

        <div className="ml-auto mt-44 flex max-w-[500px] flex-col justify-end space-y-6">
          <h2 className="text-3xl font-semibold text-secondary">
            De 0 a 1 con IA: obtén resultados en tiempo récord.
          </h2>
          <ul className="space-y-3 text-lg">
            <BulletPoint>
              <span className="font-medium text-primary">Valida{` `}</span>
              tu idea sin complicaciones.
            </BulletPoint>
            <BulletPoint>
              Sigue un proceso
              <span className="font-medium text-primary">{` `}probado y rápido</span>.
            </BulletPoint>
            <BulletPoint>
              Consigue feedback
              <span className="font-medium text-primary"> en horas</span>.
            </BulletPoint>
          </ul>
          <Button variant="default" onClick={() => setIsModalOpen(true)} className="mt-10 w-fit">
            Ver clase gratuita
          </Button>
        </div>
      </div>

      <div className="relative mt-24 w-full">
        <div className="relative">
          <div className="absolute inset-[-40px] -z-20 rounded-[3rem] bg-primary/10" />
          <div className="relative aspect-video overflow-hidden rounded-3xl">
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
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
        <div className="absolute -left-32 -top-20 -z-10">
          <Image
            src="/img/start.svg"
            width={400}
            height={395}
            style={{ objectFit: "cover" }}
            alt="decorative"
            role="presentation"
          />
        </div>
        <div className="absolute -bottom-24 -right-36 -z-10">
          <Image
            src="/img/start.svg"
            width={500}
            height={494}
            style={{ objectFit: "cover" }}
            alt="decorative"
            role="presentation"
          />
        </div>
      </div>

      <LeadModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </SectionContainer>
  );
}
