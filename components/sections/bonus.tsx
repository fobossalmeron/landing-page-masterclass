"use client";

import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import { BulletPoint } from "@/components/ui/bullet-point";
import { Skewed } from "@/components/ui/skewed";
import { SectionContainer } from "@/components/ui/section-container";
import { LeadModal } from "@/components/modals/lead-modal";
import { useState } from "react";
import Image from "next/image";

export function BonusSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SectionContainer className="py-16">
      <div className="lg:grid lg:grid-cols-2 items-center">
        <div className="space-y-6 mb-8 lg:mb-0 max-w-[460px]">
            <Skewed>
              <Gift className="h-5 w-5" />
              <span className="inline font-bold">regalo extra</span>
            </Skewed>

          <h2 className="text-5xl leading-[125%] font-bold text-secondary">
            diseña productos digitales exitosos, <span className="text-blue-600">gratis</span>
          </h2>

          <p className="text-gray-600 text-lg">
            Te regalamos una guía esencial que incluye todo lo que necesitas para diseñar productos
            que venden.
          </p>

          <ul className="space-y-3 text-lg max-w-[410px]">
            <BulletPoint>
              <span className="text-primary font-medium">Aprende</span> a diseñar productos que los
              usuarios amen.
            </BulletPoint>
            <BulletPoint>
              <span className="text-primary font-medium">Optimiza</span> tu creatividad y enfócate
              en lo que importa.
            </BulletPoint>
            <BulletPoint>
              <span className="text-primary font-medium">Crea</span> productos digitales que dejan
              huella.
            </BulletPoint>
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
          <Image
            src="/img/regalo-extra.png"
            alt="Regalo extra: Design digital products like a pro"
            width={650}
            height={543}
            className="drop-shadow-2xl"
          />
        </div>
      </div>

      <LeadModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </SectionContainer>
  );
}
