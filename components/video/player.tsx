"use client";

import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function VideoPlayer() {
  const [showCTA, setShowCTA] = useState(false);
  const WAIT_TIME = 20 * 60 * 1000; // 20 minutos en milisegundos

  useEffect(() => {
    const lastClosedTime = localStorage.getItem("lastCTAClose");
    if (lastClosedTime) {
      const timeSinceClose = Date.now() - parseInt(lastClosedTime);
      if (timeSinceClose < WAIT_TIME) {
        setShowCTA(false);
      }
    }
  }, [WAIT_TIME]);

  const handleProgress = (state: { playedSeconds: number }) => {
    if (state.playedSeconds >= 5) {
      const lastClosedTime = localStorage.getItem("lastCTAClose");
      if (!lastClosedTime || Date.now() - parseInt(lastClosedTime) >= WAIT_TIME) {
        setShowCTA(true);
      }
    }
  };

  const handleContinueVideo = () => {
    setShowCTA(false);
    localStorage.setItem("lastCTAClose", Date.now().toString());
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
              className="pointer-events-auto rounded-lg bg-white px-7 py-7 text-center"
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
      <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 0.5 }}
      >
        <a
          href="https://calendly.com/acueducto/discovery-con-acueducto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="default" size="lg">
            ¡Hablemos!
          </Button>
        </a>
      </motion.div>
    </div>
  );
}
