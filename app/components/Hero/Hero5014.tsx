'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Header5014 from '../Header/Header5014';

export default function Hero5014() {
  const [activeBgIndex, setActiveBgIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Background slideshow images
  const backgrounds = [
    '/img/Hero5014_Bg_1.jpg',
    '/img/Hero5014_Bg_2.jpg',
    '/img/Hero5014_Bg_3.jpg',
  ];

  
  // Auto-rotate backgrounds every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full relative bg-black font-['Yu_Mincho','Hiragino_Mincho_ProN','MS_PMincho',serif]">
      {/* Background Images - Slideshow */}
      <div className="absolute inset-0 w-full h-full z-0">
        {backgrounds.map((bg, index) => (
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

      {/* Header Section */}
            <Header5014
              isMobileMenuOpen={isMobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
            />

      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Hero Content Section */}
        <div className="relative z-10 w-full flex items-center justify-center mb-8">
          {/* letter */}
          <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
            <div className="flex-shrink-0">
              <div className="relative w-40 md:w-44 lg:w-64 h-80 lg:h-[500px]">
                <Image
                  src="/img/Hero5014_Letter_1.png"
                  alt="朱宮神仏具店"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
          </div>
          {/* image */}
          <div className=" hidden md:block absolute bottom-0 right-30 xl:right-80">
            <div className="flex-shrink-0">
              <div className="relative w-40 h-20 lg:w-60 lg:h-30">
                <Image
                  src="/img/Hero5014_Icon_1.png"
                  alt="朱宮神仏具店"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
              <div className="relative w-40 h-20 lg:w-60 lg:h-30">
                <Image
                  src="/img/Hero5014_Icon_2.png"
                  alt="朱宮神仏具店"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className=' bg-black w-full h-full flex flex-col md:flex-row items-center justify-center text-sm lg:text-md xl:text-xl text-white gap-6 py-12'>
          <p className=' text-2xl lg:text-3xl xl:text-4xl'>
            12月の定休日
          </p>
          <p className=' flex flex-col md:flex-row items-center justify-center'>
            <span className=' text-center border-1 border-white p-1 mr-0 md:mr-4'>甲府本店</span><br className=' block md:hidden' /><span>4日、11日、18日</span>
          </p>
          <p className=' flex flex-col md:flex-row items-center justify-center'>
            <span className=' border-1 border-white p-1 mr-4'>石和店・開国橋店</span><br className=' block md:hidden' /><span>3日、10日、17日</span>
          </p>
        </div>
      </div>
    </div>
  );
}

