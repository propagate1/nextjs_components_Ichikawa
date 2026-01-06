'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Header5013 from '../Header/Header5013';


export default function Hero5013() {
  const [activeBgIndex, setActiveBgIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // PC backgrounds (slideshow)
  const backgroundsPC = [
    '/img/Hero5013_Bg_1.jpg',
    '/img/Hero5013_Bg_2.jpg',
    '/img/Hero5013_Bg_3.jpg',
    '/img/Hero5013_Bg_4.jpg',
  ];

  // SP backgrounds (slideshow)
  const backgroundsSP = [
    '/img/Hero5013_Bg_5.jpg',
    '/img/Hero5013_Bg_6.jpg',
    '/img/Hero5013_Bg_7.jpg',
    '/img/Hero5013_Bg_8.jpg',
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
    <div className="w-full relative min-h-screen overflow-hidden bg-black">
      {/* Background Images - PC Version (Slideshow) */}
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
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Background Images - SP Version (Slideshow) */}
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
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Header Section */}
      <Header5013
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {/* Hero Content Section */}
        <div className=" absolute bottom-0 z-10 w-full p-6">
          <div className="mx-auto w-full flex flex-col lg:flex-row items-start lg:items-end justify-between">
            {/* Main Slogan Text */}
            <div className="relative w-full h-24 md:h-32 mb-12 lg:mb-0">
              <Image
                src="/img/Hero5013_Letter_1.png"
                alt="大学生と社会がもっと近くなる"
                fill
                className=" hidden lg:block object-contain object-left"
                priority
              /><Image
                src="/img/Hero5013_Letter_2.png"
                alt="大学生と社会がもっと近くなる"
                fill
                className=" block lg:hidden object-contain object-left"
                priority
              />
            </div>

            {/* Call to Action Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <button className="bg-white hover:bg-gray-100 text-black px-6 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base lg:text-lg transition-colors whitespace-nowrap">
                企業のみなさまへ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

