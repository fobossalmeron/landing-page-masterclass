"use client";

import React from "react";
import ReactPlayer from 'react-player/youtube'
interface VideoPlayerProps {
  onTimeUpdate?: (currentTime: number) => void;
}

export function VideoPlayer({ onTimeUpdate }: VideoPlayerProps) {
  const handleProgress = (state: { playedSeconds: number }) => {
    if (onTimeUpdate) {
      onTimeUpdate(state.playedSeconds);
    }
  };

  return (
    <div>
    <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=zu-PoQ94a_Q" 
        controls
        width="100%"
        height="100%"
        onProgress={handleProgress}
      />
    </div>
    </div>
  );
}