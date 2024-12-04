"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { VideoPlayer } from "@/components/video/player";
import { ConsultingCTA } from "@/components/sections/consulting-cta";
import { Footer } from "@/components/sections/footer";
import { TopicsGuide } from "@/components/sections/topics-guide";
import { ExitIntentModal } from "@/components/modals/exit-intent-modal";

export default function MasterClassPage() {
  const [showCTA, setShowCTA] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const hasShownModal = useRef(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && !hasShownModal.current) {
        setShowExitModal(true);
        hasShownModal.current = true;
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownModal.current) {
        setShowExitModal(true);
        hasShownModal.current = true;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  
  return (
    <main className="min-h-screen">
      <div className="container max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="text-2xl font-bold mb-4">acueducto</div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            construye tu MVP en 3 horas:{" "}
            <span className="text-blue-600">web-app full stack</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Mira el tutorial completo y descubre cómo lanzar un MVP en tiempo récord.
          </p>
        </div>

        <VideoPlayer onTimeUpdate={(time) => {
          if (time >= 5) {
            setShowCTA(true);
          }
        }} />

        {showCTA && <ConsultingCTA />}
      </div>

      <div className="bg-gray-50">
        <div className="container max-w-5xl mx-auto px-4 py-16">
          <TopicsGuide />
        </div>
      </div>

      <Footer />

      <ExitIntentModal 
        open={showExitModal} 
        onOpenChange={setShowExitModal}
      />
    </main>
  );
}