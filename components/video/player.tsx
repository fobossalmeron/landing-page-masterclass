"use client";

import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function VideoPlayer() {
  const [showCTA, setShowCTA] = useState(false);

  const handleProgress = (state: { playedSeconds: number }) => {
    if (state.playedSeconds >= 5) {
      setShowCTA(true);
    }
  };

  const handleContinueVideo = () => {
    setShowCTA(false);
  };

  return (
    <div>
      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-900">
        <ReactPlayer
          url="https://youtu.be/53ClHJyf5Bc"
          controls
          width="100%"
          height="100%"
          onProgress={handleProgress}
        />
        {showCTA && (
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg bg-white px-7 py-7 text-center"
            >
              <h2 className="mb-2 text-2xl font-bold">¿Necesitas ayuda para construir tu MVP?</h2>
              <p className="mb-5 text-xl">Agenda una llamada con nosotros</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://calendly.com/acueducto/discovery-con-acueducto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default" size="lg">
                    ¡Hablemos!
                  </Button>
                </a>
                <Button variant="outline" size="lg" onClick={handleContinueVideo}>
                  Continuar video
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
