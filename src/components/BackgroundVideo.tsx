import React, { useState, useRef, useEffect } from 'react';
import { VIDEO_SCENES } from '../data/salonData';

interface BackgroundVideoProps {
  currentSceneId?: string;
  onSceneChange?: (sceneId: string) => void;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  currentSceneId = 'atelier',
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeScene = VIDEO_SCENES.find((s) => s.id === currentSceneId) || VIDEO_SCENES[0];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy fallback
        });
      }
    }
  }, [activeScene.videoUrl]);

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none select-none">
      {/* Fallback & Poster Image */}
      <img
        src={activeScene.posterImage}
        alt="Rishaara Salon Cinematic Atmosphere"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded && !videoError ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Primary Cinematic Video (Autoplays, loops continuously, muted) */}
      {!videoError && (
        <video
          ref={videoRef}
          key={activeScene.videoUrl}
          src={activeScene.videoUrl}
          poster={activeScene.posterImage}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ objectFit: 'cover' }}
        />
      )}

      {/* Atmospheric Vignette & Darkness Layer */}
      <div className="absolute inset-0 transition-all duration-700 pointer-events-none bg-gradient-to-b from-[#080808]/80 via-[#080808]/70 to-[#080808]/85" />

      {/* Subtle Grain & Champagne Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#080808]/40 to-[#080808]/90" />
    </div>
  );
};
