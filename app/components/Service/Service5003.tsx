'use client';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function Service5003() {
  return (
    <div className="w-full bg-[#f4f4f5] py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start gap-0 lg:gap-16">
          {/* Left Section: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8">
            {/* Main Title */}
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-[#1e3a5f] mb-4 md:mb-8 lg:mb-12">
              事業内容
            </h2>

            {/* Headline */}
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1e3a5f] leading-[30px] md:leading-[36px] lg:leading-[42px]">
              エンドユーザー発想で
              <br className=' hidden lg:block' />
              「行きたくなる」空間を日本全国に。
            </h1>

            {/* Body Paragraph */}
            <p className="text-sm lg:text-md text-[#1e3a5f] leading-[24px] md:leading-[28px] lg:leading-[32px]">
              70年以上にわたり全国に数多くの空間を作りあげてきた私たちは、空間の魅力を最大化するために考え抜き、ワンストップ&ワンチームでお客さまをサポートします。
            </p>

            {/* Call to Action Link */}
            <a
              href="#"
              className="flex items-center gap-3 md:gap-4 group mt-2 taget:none"
            >
              <span className="text-base md:text-lg lg:text-xl font-bold text-[#1e3a5f]">
                事業内容
              </span>
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border-1 border-red-600 rounded-full flex items-center justify-center group-hover:bg-red-600">
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-red-600 group-hover:text-white" />
              </div>
            </a>
          </div>

          {/* Right Section: Overlapping Images */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              {/* Primary Image - Group Photo (Top) */}
              <div className="absolute -top-10 -right-10 lg:top-0 lg:-right-40 w-3/5 h-3/5 md:h-full lg:w-full lg:h-full">
                <div className="relative w-full h-full">
                  <Image
                    src="/img/Service5003_Bg_1.jpg"
                    alt="Team of five professionals"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>

              {/* Secondary Image - Meeting Scene (Bottom Right, Overlapping) */}
              <div className="absolute bottom-20 md:-bottom-10 lg:-bottom-30 left-30 md:left-30 lg:-left-10 w-30 h-20 md:w-60 md:h-40 lg:w-60 lg:h-40 z-10">
                <div className="relative w-full h-full">
                  <Image
                    src="/img/Service5003_Bg_2.jpg"
                    alt="Three people collaborating around laptop"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

