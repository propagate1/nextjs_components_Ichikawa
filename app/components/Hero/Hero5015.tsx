'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero5015() {
  const [activeBgIndex, setActiveBgIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);

  // Background slideshow images
  const backgrounds = [
    { id: 1, bg: '/img/Hero5015_Bg_1.jpg', badge: '/img/Hero5015_Icon_1.png', badge1: '/img/Hero5015_Icon_2.png' },
    { id: 2, bg: '/img/Hero5015_Bg_2.jpg', badge: '/img/Hero5015_Icon_3.png', badge1: '/img/Hero5015_Icon_4.png' },
    { id: 3, bg: '/img/Hero5015_Bg_3.jpg', badge: '/img/Hero5015_Icon_5.png', badge1: '/img/Hero5015_Icon_6.png' },
    { id: 4, bg: '/img/Hero5015_Bg_4.jpg', badge: '/img/Hero5015_Icon_7.png', badge1: '/img/Hero5015_Icon_8.png' },
  ];

  // Auto-rotate backgrounds with zoom effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Start zooming out and fading
      setIsZooming(true);
      // After zoom animation completes, switch to next image and reset zoom
      setTimeout(() => {
        setActiveBgIndex((prev) => (prev + 1) % backgrounds.length);
        // Reset zoom state immediately so new image appears at normal scale
        setIsZooming(false);
      }, 1); // Duration of zoom animation
    }, 7000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div className="w-full relative min-h-screen overflow-hidden bg-black">
      {/* Keyframes for continuous scale animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes continuous-scale {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.2);
            }
          }
        `
      }} />

      {/* Background Images - Slideshow with Continuous Scale and Zoom Effect */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {backgrounds.map((image, index) => {
          const isActive = index === activeBgIndex;
          return (
            <div key={index}>
              <div
                key={index}
                className={`absolute inset-0 w-full h-full ${isActive
                  ? isZooming
                    ? 'opacity-0 scale-[1.5] transition-all duration-1000 ease-in-out'
                    : 'opacity-100 animate-[continuous-scale_8s_ease-in-out_infinite]'
                  : 'opacity-0 scale-100'
                  }`}
              >
                <Image
                  src={image.bg}
                  alt={`Background ${index + 1}`}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                />
              </div>
              <div className=' absolute bottom-40 right-0 w-12 h-12 z-50'>
                <Image
                  src={image.badge}
                  alt='badge'
                  fill
                  className="object-contain object-center"
                  priority={index === 0}
                />
              </div>
            </div>
          );
        })}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* content */}
      <div className=' flex flex-col items-center justify-end min-h-screen gap-20 z-0'>
        {/* letter */}
        <div className=' relative flex items-center justify-center w-full h-60 lg:h-80 xl:h-100 mt-20'>
          <div className="relaive">
            <Image
              src='/img/Hero5015_Letter_1.png'
              alt='badge'
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>

        {/* letter2 */}
        <div className=' relative flex w-full h-25 md:h-35 items-start mt-20 bg-[#fbf9f3] '>
          <div className="relative w-full h-30">
            <Image
              src='/img/Hero5015_Letter_2.png'
              alt='badge'
              fill
              className="object-contain object-center"
              priority
            />
          </div>
          {/* bottom bage */}
          <div className=' absolute bottom-22 md:bottom-30 -left-10 md:left-0'>
            <div className="relaive w-40 h-10 md:w-60 lg:w-80 xl:w-100 md:h-15 lg:h-20 xl:h-25">
              <Image
                src='/img/Hero5015_Badge_1.png'
                alt='badge'
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
          <div className=' absolute bottom-22 md:bottom-30 -right-10 md:right-0'>
            <div className="relaive w-40 h-10 md:w-60 lg:w-80 xl:w-100 md:h-15 lg:h-20 xl:h-25">
              <Image
                src='/img/Hero5015_Badge_2.png'
                alt='badge'
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
