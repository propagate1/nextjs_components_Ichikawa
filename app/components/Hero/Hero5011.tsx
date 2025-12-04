'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Header5011 from '../Header/Header5011';

export default function Hero5011() {
  const [activeBgIndex, setActiveBgIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // PC backgrounds
  const backgroundsPC = [
    '/img/Hero5011_Bg_1.jpg',
    '/img/Hero5011_Bg_2.jpg',
    '/img/Hero5011_Bg_3.jpg',
    '/img/Hero5011_Bg_4.jpg',
  ];

  // SP backgrounds
  const backgroundsSP = [
    '/img/Hero5011_Bg_5.jpg',
    '/img/Hero5011_Bg_6.jpg',
    '/img/Hero5011_Bg_7.jpg',
    '/img/Hero5011_Bg_8.jpg',
  ];

  // Auto-rotate backgrounds every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBgIndex((prev) => (prev + 1) % backgroundsPC.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundsPC.length]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full relative min-h-screen overflow-hidden bg-black font-['Yu_Mincho','Hiragino_Mincho_ProN','MS_PMincho',serif]">
      {/* Background Images - Main Display (PC) */}
      <div className="hidden md:block absolute inset-0 w-full h-full z-0">
        {backgroundsPC.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === activeBgIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={bg}
              alt={`Background ${index + 1}`}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Background Images - Main Display (SP) */}
      <div className="md:hidden absolute inset-0 w-full h-full z-0">
        {backgroundsSP.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === activeBgIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={bg}
              alt={`Background ${index + 1}`}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Background Images - Letter */}
      <div className="absolute inset-0 left-0 top-[20%] w-full h-1/2 md:h-2/3 z-0">
        <Image
          src="/img/Hero5011_Letter_1.png"
          alt="Company Logo"
          fill
          className="object-contain object-center"
          priority
        />
      </div>

      <Header5011
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      {/* Scroll Indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-white text-xs md:text-sm font-medium tracking-widest">SCROLL</span>
        <ChevronDown className="w-8 h-8 md:w-12 md:h-12 text-white animate-bounce" />
      </div>

      {/* Carousel Dots Indicator - Left Side */}
      <div className="absolute left-4 md:left-6 lg:left-8 bottom-1/7 transform translate-y-1/2 z-20 flex flex-col gap-4">
        {Array.from({ length: backgroundsPC.length }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveBgIndex(index)}
            className={`w-4 h-4 rounded-full transition-all ${index === activeBgIndex ? 'bg-white' : 'bg-gray-500'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

