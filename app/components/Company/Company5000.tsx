'use client';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function Company5000() {
  return (
    <section className="w-full bg-blue-500 py-2 sm:py-4 md:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-left px-4 sm:px-6 md:px-8 lg:px-12 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {/* Small Japanese Text */}
          <span className="text-white text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4">
            ◇ 企業情報
          </span>
          {/* Main Heading */}
          <h2 className="text-black text-4xl px-4 sm:px-6 md:px-8 lg:px-12 mb-8 sm:mb-10 md:mb-12 lg:mb-16 sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Company
          </h2>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-6 lg:gap-8">
          {/* Card 1: About */}
          <div className="flex-1 flex flex-col bg-blue-500">
            {/* Image Container with Overlay */}
            <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden">
              <Image
                src="/img/Company5000_Recruit_1.jpg"
                alt="About - Office workspace"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay with "About" text */}
              <div className="absolute inset-0 flex justify-center top-[16%]">
                <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">
                  About
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-row gap-6 py-5 sm:py-6 md:py-8">
              <div className="flex flex-col">
                {/* Title */}
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                  企業情報
                </h3>
                {/* Description */}
                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed flex-1">
                  資産運用総合アドバイジングカンパニーのパートナーズ。私たちの想いや企業情報についてご紹介します。
                </p>
              </div>
              {/* Navigation Button */}
              <div className="flex items-center justify-center">
                <button className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-500 rounded-full flex items-center justify-center transition-colors border-white border-solid border-1">
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Member */}
          <div className="flex-1 flex flex-col bg-blue-500">
            {/* Image Container with Overlay */}
            <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden">
              <Image
                src="/img/Company5000_Recruit_2.jpg"
                alt="Member - Team meeting"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay with "Member" text */}
              <div className="absolute inset-0 flex justify-center top-[16%]">
                <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">
                  Member
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-row gap-6 py-5 sm:py-6 md:py-8">
              <div className="flex flex-col">
                {/* Title */}
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                  メンバー紹介
                </h3>
                {/* Description */}
                <p className="text-white text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 leading-relaxed flex-1">
                  お客さまにとことん寄り添うパートナーである社員の専門や強み、仕事への想いなどをご覧ください。
                </p>
              </div>
              {/* Navigation Button */}
              <div className="flex items-center justify-end">
                <button className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-500 rounded-full flex items-center justify-center transition-colors border-white border-solid border-1">
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Recruit */}
          <div className="flex-1 flex flex-col bg-blue-500">
            {/* Image Container with Overlay */}
            <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden">
              <Image
                src="/img/Company5000_Recruit_3.jpg"
                alt="Recruit - Office collaboration"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay with "Recruit" text */}
              <div className="absolute inset-0 flex justify-center top-[16%]">
                <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">
                  Recruit
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-row gap-6 py-5 sm:py-6 md:py-8">
              <div className="flex flex-col">
                {/* Title */}
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                  採用情報
                </h3>
                {/* Description */}
                <p className="text-white text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 leading-relaxed flex-1">
                  パートナーズでは、私たちの価値観に共感し、一緒に働いてくれる仲間を募集しています。
                </p>
              </div>
              {/* Navigation Button */}
              <div className="flex items-center justify-end">
                <button className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-500 rounded-full flex items-center justify-center transition-colors border-white border-solid border-1">
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

