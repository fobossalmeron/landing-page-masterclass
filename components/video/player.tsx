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
        url="https://youtu.be/53ClHJyf5Bc" 
        controls
        width="100%"
        height="100%"
        onProgress={handleProgress}
        light={"/img/video_background.jpg"}
      />
    </div>
    </div>
  );
}