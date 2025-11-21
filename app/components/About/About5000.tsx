'use client';
import Image from 'next/image';

export default function About5000() {
  return (
    <div className="w-full bg-[#686135] relative overflow-hidden min-h-screen">
      {/* Background Image Container - Full background */}
      <div className="absolute inset-0">
        <Image
          src="/img/About5000_Bg_1.jpg"
          alt="MAXHUB meeting room with display screen"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Olive-green overlay */}
      <div className="absolute inset-0 bg-[#686135]/70 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 w-full min-h-screen">
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
          {/* "About MAXHUB" text in upper left - Semi-transparent outline */}
          <div className="absolute top-8 md:top-12 lg:top-16 z-30 pointer-events-none">
            <span className=" text-center text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white/15 leading-none tracking-wide">
              About MAXHUB
            </span>
          </div>

          {/* Dark Banner - "MAXHUB (マックスハブ)とは?" - Centered near top */}
          <div className="relative z-30 mt-20 md:mt-24 lg:mt-32 mb-12 md:mb-16 lg:mb-20 flex justify-center">
            <div className="bg-black/90 px-6 md:px-10 lg:px-12 py-3 md:py-4 lg:py-5" style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}>
              <h1 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#ac9e4c] whitespace-nowrap">
                MAXHUB (マックスハブ)とは?
              </h1>
            </div>
          </div>

          {/* Main Content Area - Display Screen and Text */}
          <div className="relative z-30">
            {/* Display Screen Container - Slightly left of center */}
            <div className="relative w-full max-w-4xl mx-auto lg:mx-0 lg:ml-8 mb-8 md:mb-12 lg:mb-16">
              {/* Display Screen Frame */}
              <div className="relative w-full ">
         
                {/* Text Overlay on Screen - Centered */}
                <div className=" flex flex-col justify-center items-center px-4 md:px-6 lg:px-8 z-10">
                  {/* First line of text */}
                  <p className="text-white text-xs md:text-sm lg:text-base xl:text-lg font-medium text-center mb-2 md:mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    会議に必要な機能をすべて搭載、オールインワンで会議室を美しく
                  </p>
                  {/* Second line - Larger text with quotation marks */}
                  <p className="text-white text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    『次世代型コミュニケーションボード』
                  </p>
                </div>
              </div>
            </div>

            {/* Descriptive Text Section - Below the screen */}
            <div className="w-full max-w-5xl mx-auto lg:mx-0 lg:ml-8 text-center flex flex-col gap-3 md:gap-4 lg:gap-5">
              <p className="text-white text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed">
                従来の会議が抱える問題点を解決するために設計されたMAXHUB製品は、
              </p>
              <p className="text-white text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed">
                既存業務の置き換えだけではない、新しい価値を生み出すDXを実現いたします。
              </p>
              <p className="text-white text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed">
                直感的でシンプルな操作性でありながら、同時にあらゆる機能を持つことで、WEB会議や研修だけでなく、
              </p>
              <p className="text-white text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed">
                時には災害対策や演奏会に至るまで、業種やシーンを問わず幅広くご活用いただけます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

