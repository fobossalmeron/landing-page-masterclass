"use client";

import { useRef, useEffect } from "react";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  onTimeUpdate?: (currentTime: number) => void;
}

export function VideoPlayer({ onTimeUpdate }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTimeUpdate = () => {
    if (videoRef.current && onTimeUpdate) {
      onTimeUpdate(videoRef.current.currentTime);
    }
  };

  return (
    <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden" ref={containerRef}>
      <video
        ref={videoRef}
        className="w-full h-full"
        controls
        onTimeUpdate={handleTimeUpdate}
        poster="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070"
      >
        <source src="/record.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
}