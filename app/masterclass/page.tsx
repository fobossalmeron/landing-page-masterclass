"use client";

import { useState } from "react";
import Image from "next/image";
import { VideoPlayer } from "@/components/video/player";
import { ConsultingCTA } from "@/components/sections/consulting-cta";
import { Footer } from "@/components/sections/footer";
import { TopicsGuide } from "@/components/sections/topics-guide";

export default function MasterClassPage() {
  const [showCTA, setShowCTA] = useState(false);

  return (
    <main className="min-h-screen">
      <div className="container max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center mb-8">
            <Image
              src="/img/logoblack.svg"
              alt="Acueducto"
              width={128}
              height={18}
            />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-secondary">
            construye tu MVP en 3 horas:
            <br />
            <span className="text-primary">web-app full stack</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-sm">
            Mira el tutorial completo y descubre cómo lanzar un MVP en tiempo
            récord.
          </p>
        </div>

        <VideoPlayer
          onTimeUpdate={(time) => { 
            if (time >= 5) {
              setShowCTA(true);
            }
          }}
        />

        {showCTA && <ConsultingCTA />}
      </div>

      <div className="bg-gray-50">
        <div className="container max-w-5xl mx-auto px-4 py-16">
          <TopicsGuide />
        </div>
      </div>

      <Footer />
    </main>
  );
}
