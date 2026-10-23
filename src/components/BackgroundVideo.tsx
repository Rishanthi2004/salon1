import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Sliders, Film } from 'lucide-react';
import { VIDEO_SCENES } from '../data/salonData';

interface BackgroundVideoProps {
  currentSceneId?: string;
  onSceneChange?: (sceneId: string) => void;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  currentSceneId = 'atelier',
  onSceneChange,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [dimmerLevel, setDimmerLevel] = useState<'cinematic' | 'balanced' | 'focus'>('balanced');
  const [controlsOpen, setControlsOpen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const activeScene = VIDEO_SCENES.find((s) => s.id === currentSceneId) || VIDEO_SCENES[0];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = isMuted;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Browser autoplay policy caught, stay muted
            setIsPlaying(false);
          });
      }
    }
  }, [activeScene.videoUrl, isMuted]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleSound = () => {
    if (!videoRef.current) return;
    const newMuted = !isMuted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  // Overlay opacity configurations
  const overlayClass = {
    cinematic: 'bg-[#080808]/55 backdrop-blur-[0.5px]',
    balanced: 'bg-gradient-to-b from-[#080808]/80 via-[#080808]/70 to-[#080808]/85',
    focus: 'bg-[#080808]/85 backdrop-blur-[1px]',
  }[dimmerLevel];

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

      {/* Primary Cinematic Video */}
      {!videoError && (
        <video
          ref={videoRef}
          key={activeScene.videoUrl}
          src={activeScene.videoUrl}
          poster={activeScene.posterImage}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ objectFit: 'cover' }}
        />
      )}

      {/* Atmospheric Vignette & Darkness Layer */}
      <div className={`absolute inset-0 transition-all duration-700 pointer-events-none ${overlayClass}`} />

      {/* Subtle Grain & Champagne Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#080808]/40 to-[#080808]/90" />

      {/* Ambient Video Control Dock (Floating, Subtle Luxury UI) */}
      <div className="fixed bottom-6 right-6 z-40 pointer-events-auto">
        <div className="relative">
          {controlsOpen && (
            <div className="absolute bottom-12 right-0 mb-3 w-72 p-4 bg-[#080808]/95 border border-[#C6A878]/30 backdrop-blur-xl shadow-2xl rounded-sm text-xs text-[#F5F1EB] space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#242424]">
                <span className="font-serif tracking-widest uppercase text-[#C6A878] text-[11px]">
                  Atmosphere Reel
                </span>
                <span className="text-[10px] text-[#F5F1EB]/60">Cinematic Engine</span>
              </div>

              {/* Scene Switcher */}
              <div className="space-y-1.5">
                <p className="text-[10px] uppercase tracking-wider text-[#F5F1EB]/50">Select Scene</p>
                <div className="grid grid-cols-1 gap-1">
                  {VIDEO_SCENES.map((scene) => (
                    <button
                      key={scene.id}
                      onClick={() => onSceneChange && onSceneChange(scene.id)}
                      className={`text-left px-2.5 py-1.5 text-[11px] transition-colors rounded-sm flex items-center justify-between ${
                        scene.id === currentSceneId
                          ? 'bg-[#C6A878] text-[#080808] font-medium'
                          : 'hover:bg-white/10 text-[#F5F1EB]'
                      }`}
                    >
                      <span>{scene.title}</span>
                      <span className="text-[9px] opacity-75">{scene.subtitle}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dimmer Level Switcher */}
              <div className="space-y-1.5 pt-1 border-t border-[#242424]">
                <p className="text-[10px] uppercase tracking-wider text-[#F5F1EB]/50">Video Presence</p>
                <div className="grid grid-cols-3 gap-1 text-[10px]">
                  {(['cinematic', 'balanced', 'focus'] as const).map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setDimmerLevel(lvl)}
                      className={`py-1 text-center capitalize transition-colors rounded-sm ${
                        dimmerLevel === lvl
                          ? 'bg-[#C6A878]/30 border border-[#C6A878] text-[#F5F1EB]'
                          : 'bg-white/5 border border-transparent hover:bg-white/10 text-[#F5F1EB]/70'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Persistent Mini Controller Pills */}
          <div className="flex items-center gap-1.5 bg-[#080808]/80 border border-[#C6A878]/30 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
            <button
              onClick={togglePlay}
              title={isPlaying ? 'Pause Background Video' : 'Play Background Video'}
              aria-label={isPlaying ? 'Pause Background Video' : 'Play Background Video'}
              className="p-1 hover:text-[#C6A878] transition-colors text-[#F5F1EB]/80"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <div className="w-[1px] h-3 bg-white/20" />
            <button
              onClick={toggleSound}
              title={isMuted ? 'Unmute Video' : 'Mute Video'}
              aria-label={isMuted ? 'Unmute Video' : 'Mute Video'}
              className="p-1 hover:text-[#C6A878] transition-colors text-[#F5F1EB]/80"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
            <div className="w-[1px] h-3 bg-white/20" />
            <button
              onClick={() => setControlsOpen(!controlsOpen)}
              title="Ambiance Settings"
              aria-label="Ambiance Settings"
              className={`p-1 transition-colors flex items-center gap-1 text-[11px] ${
                controlsOpen ? 'text-[#C6A878]' : 'hover:text-[#C6A878] text-[#F5F1EB]/80'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span className="hidden sm:inline font-sans text-[10px] tracking-wider uppercase">Ambiance</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
