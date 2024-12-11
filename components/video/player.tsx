"use client";

import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function VideoPlayer() {
  const [showCTA, setShowCTA] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const WAIT_TIME = 10 * 60; // 10 minutos en segundos
  const WAIT_TIME_DEV = 10; // 10 segundos

  const activeWaitTime = process.env.NODE_ENV === 'production' ? WAIT_TIME : WAIT_TIME_DEV;

  useEffect(() => {
    const hasInteracted = localStorage.getItem("hasInteractedWithCTA");
    if (hasInteracted === "true") {
      setShowButton(true);
      setShowCTA(false);
    }
  }, []);

  const handleProgress = (state: { playedSeconds: number }) => {
    const hasInteracted = localStorage.getItem("hasInteractedWithCTA");
    if (hasInteracted !== "true" && state.playedSeconds >= activeWaitTime) {
      setShowCTA(true);
    }
  };

  const handleContinueVideo = () => {
    setShowCTA(false);
    localStorage.setItem("hasInteractedWithCTA", "true");
    setTimeout(() => {
      setShowButton(true);
    }, 2000); // Muestra el botón después de 2 segundos
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
          <div className="pointer-events-none absolute left-0 top-0 flex h-full w-full items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pointer-events-auto rounded-lg bg-white/95 px-2 py-3 sm:px-7 sm:py-7 text-center flex flex-col items-center"
            >
              <h2 className="mb-0 sm:mb-2 text-xl font-bold max-w-[300px] leading-tight sm:leading-normal">¿Necesitas ayuda para construir tu MVP?</h2>
              <p className="mb-3 sm:mb-5 text-sm sm:max-w-[unset] sm:text-base">Agenda una llamada con nosotros</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://calendly.com/acueducto/mvp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default">
                    ¡Hablemos!
                  </Button>
                </a>
                <Button variant="outline" onClick={handleContinueVideo}>
                  Continuar video
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
      {showButton && (
        <motion.div
          className="flex justify-center mt-10 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://calendly.com/acueducto/mvp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" size="lg">
              ¡Hablemos!
            </Button>
          </a>
        </motion.div>
      )}
    </div>
  );
}
