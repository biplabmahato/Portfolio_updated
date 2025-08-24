import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AnimatedDownloadButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleDownload = () => {
    setIsAnimating(true);
    
    // Trigger download after animation completes (adjust timing to match your Lottie)
    setTimeout(() => {
    //   window.open(
    //     'https://drive.google.com/file/d/1_pLl2wjYVCU-wnqXIhjhYr0YC0SJXvwv/view?usp=sharing',
    //     '_blank'
    //   );
      setIsAnimating(false);
    }, 2000); // Match this duration to your Lottie animation length
  };

  return (
    <div className="flex flex-col items-center justify-center relative">
      {/* Lottie Animation - Only visible when animating */}
      <div 
        className={`transition-all duration-500 ${isAnimating ? 'opacity-100 h-24' : 'opacity-0 h-0'}`}
        style={{ minHeight: isAnimating ? '6rem' : '0' }}
      >
        <DotLottieReact
          src="https://lottie.host/92e17734-a93f-4b4c-93eb-92139004ff29/cXBbImo6Q6.lottie"
          loop={false}
          autoplay={isAnimating}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 relative z-10"
        style={{
          background: 'linear-gradient(90deg, #8245ec, #a855f7)',
          boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
        }}
      >
        DOWNLOAD CV
      </button>

      {/* Optional glow effect when animating */}
      {isAnimating && (
        <div className="absolute -inset-4 bg-purple-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
      )}
    </div>
  );
};

export default AnimatedDownloadButton;