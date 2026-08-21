import React, { useRef, useEffect } from 'react';

export default function RobotVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Autoplay once on page load / refresh
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Autoplay prevented by browser:', err);
      });
    }
  }, []);

  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="relative w-full max-w-[280px] md:max-w-[320px] lg:max-w-[340px] mx-auto flex items-center justify-center select-none">
      {/* Robot Video Box - NO SHADOW, NO REPLAY BUTTON */}
      <div className="relative w-full overflow-hidden bg-transparent border-0 shadow-none outline-none rounded-2xl">
        <video
          ref={videoRef}
          src="/assets/videos/2nd.mp4"
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
