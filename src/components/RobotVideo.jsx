import React, { useRef, useEffect, useState } from 'react';

export default function RobotVideo() {
  const videoRef = useRef(null);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Autoplay once on page load / refresh
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Autoplay prevented by browser:', err);
      });
    }

    // Show the speech bubble after a short delay (while robot is walking)
    const bubbleTimer = setTimeout(() => {
      setShowBubble(true);
    }, 800);

    return () => clearTimeout(bubbleTimer);
  }, []);

  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="relative w-full max-w-[280px] md:max-w-[320px] lg:max-w-[340px] mx-auto flex items-center justify-center select-none">
      {/* "Hi, I'm Kanta!" Speech Bubble Overlay */}
      <div
        className={`absolute -top-2 left-1/2 -translate-x-1/2 z-30 transition-all duration-700 ease-out ${
          showBubble
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4'
        }`}
        style={{ pointerEvents: 'none' }}
      >
        <div className="bg-white rounded-2xl px-5 py-4 shadow-lg border border-slate-200/90 text-left min-w-[220px] max-w-[280px] relative">
          {/* Bubble pointer tail pointing down toward robot */}
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-white drop-shadow-xs"></div>

          {/* Title */}
          <div className="flex items-center gap-2 mb-1.5">
            <img
              src="/assets/logo/Iconic-Color@2x.png"
              alt="Kanta Icon"
              className="w-5 h-5 object-contain"
            />
            <h3 className="font-extrabold text-slate-900 text-sm sm:text-base font-['Outfit']">
              Hi, I'm Kanta!
            </h3>
          </div>

          {/* Body text */}
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            I can read, understand, and process your documents. What would you like to do today?
          </p>
        </div>
      </div>

      {/* Robot Video Box */}
      <div className="relative w-full overflow-visible bg-transparent border-0 shadow-none outline-none rounded-2xl">
        <video
          ref={videoRef}
          src="/assets/videos/white.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleEnded}
          className="w-full h-auto object-contain bg-transparent border-0 shadow-none outline-none focus:outline-none"
          style={{ boxShadow: 'none', filter: 'none' }}
        />
      </div>
    </div>
  );
}
