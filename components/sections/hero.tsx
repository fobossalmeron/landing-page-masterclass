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
      <nav className="flex items-center justify-between mb-16 w-full">
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
          <p className="text-primary bg-primary/5 inline py-3 px-4 font-bold text-lg">
            máster class gratuita
          </p>
          <h1 className="text-4xl !leading-tight lg:text-[3.5rem] font-bold text-secondary max-w-[560px]">
            construye tu MVP en 3 horas:{" "}
            <span className="text-primary">web-app full stack</span>
          </h1>
        </div>

        <div className="flex flex-col justify-end space-y-6 mt-44 max-w-[500px] ml-auto">
          <h2 className="text-3xl font-semibold text-secondary">
            De 0 a 1 con IA: obtén resultados en tiempo récord.
          </h2>
          <ul className="space-y-3 text-lg">
            <BulletPoint>
              <span className="text-primary font-medium mr-1">Valida</span>
              tu idea sin complicaciones.
            </BulletPoint>
            <BulletPoint>
              Sigue un proceso
              <span className="text-primary font-medium ml-1">
                probado y rápido
              </span>
              .
            </BulletPoint>
            <BulletPoint>
              Consigue feedback
              <span className="text-primary font-medium ml-1">en horas</span>.
            </BulletPoint>
          </ul>
          <Button
            variant="default"
            onClick={() => setIsModalOpen(true)}
            className="w-fit mt-10"
          >
            Ver clase gratuita
          </Button>
        </div>
      </div>

      <div className="relative mt-24 w-full">
        <div className="relative">
          <div className="absolute inset-[-40px] rounded-[3rem] bg-primary/10 -z-20" />
          <div className="relative aspect-video rounded-3xl overflow-hidden">
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
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
        <div className="absolute -z-10 -top-20 -left-20">
          <Image
            src="/img/start.svg"
            width={400}
            height={395}
            style={{ objectFit: "cover" }}
            alt="decorative"
            role="presentation"
          />
        </div>
        <div className="absolute -z-10 -bottom-24 -right-20">
          <Image
            src="/img/start.svg"
            width={400}
            height={395}
            style={{ objectFit: "cover" }}
            alt="decorative"
            role="presentation"
          />
        </div>      </div>

      <LeadModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </SectionContainer>
  );
}
