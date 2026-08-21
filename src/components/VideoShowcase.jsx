import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Video } from 'lucide-react';

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasVideoError, setHasVideoError] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => setHasVideoError(true));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 relative z-10">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 text-red-400 text-xs font-bold uppercase tracking-wider border border-red-800/40">
            <Video size={14} />
            <span>Product Demo & Video Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Outfit'] tracking-tight">
            See Kanta in Action
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-medium">
            Upload your custom demo video to <code className="text-red-400 font-mono bg-slate-800 px-2 py-0.5 rounded text-sm">/public/assets/videos/demo.mp4</code> to showcase your platform features in action.
          </p>
        </div>

        {/* Video Player Box */}
        <div className="relative max-w-4xl mx-auto bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden group">
          {/* Top Window Bar */}
          <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-xs font-mono text-slate-400 ml-2">demo.mp4</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">1080p 60fps</span>
            </div>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video bg-slate-950 flex items-center justify-center overflow-hidden">
            {!hasVideoError ? (
              <video
                ref={videoRef}
                src="/assets/videos/demo.mp4"
                poster="/assets/images/video-poster.jpg"
                onError={() => setHasVideoError(true)}
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />
            ) : null}

            {/* Fallback Display if video file is not uploaded yet */}
            {hasVideoError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
                <div className="w-16 h-16 rounded-2xl bg-red-950/80 border border-red-500/30 text-[#D83025] flex items-center justify-center mb-4 shadow-lg animate-pulse">
                  <Video size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-['Outfit']">
                  MP4 Video Placeholder Ready
                </h3>
                <p className="text-slate-400 text-sm max-w-md mb-6 leading-relaxed">
                  Drop your MP4 file into <code className="text-red-400 font-mono bg-slate-800 px-2 py-1 rounded">public/assets/videos/demo.mp4</code> and it will instantly play here!
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300 font-mono">
                  <span>File path: public/assets/videos/demo.mp4</span>
                </div>
              </div>
            )}

            {/* Overlay Play Controls (When paused) */}
            {!isPlaying && !hasVideoError && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-opacity group-hover:bg-slate-950/20"
              >
                <div className="w-20 h-20 rounded-full bg-[#D83025] hover:bg-[#C0261D] text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110 active:scale-95">
                  <Play size={32} className="transform translate-x-0.5 fill-current" />
                </div>
              </div>
            )}
          </div>

          {/* Bottom Video Controls Bar */}
          {!hasVideoError && (
            <div className="bg-slate-900/90 border-t border-slate-800 px-6 py-3 flex items-center justify-between">
              <button
                onClick={togglePlay}
                className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                <span>{isPlaying ? 'Pause' : 'Play Video'}</span>
              </button>

              <div className="flex items-center gap-4 text-slate-400">
                <button
                  onClick={toggleMute}
                  className="hover:text-white transition-colors"
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
