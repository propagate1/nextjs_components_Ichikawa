'use client';
import { ChevronRight} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Header5012 from '../Header/Header5012';

export default function Hero5012() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full relative mx-auto min-h-screen overflow-hidden bg-white z-20">
      {/* Background Images - PC Version */}
      <div className="absolute inset-0 -top-28 md:-top-36 xl:-top-48 w-full min-h-screen z-0 mx-auto flex items-center justify-center">
        <div className=" hidden md:block relative max-w-[1920px] min-w-[1920px] h-full ">
          <Image
            src="/img/Hero5012_Bg_1.png"
            alt="ALSOK recruitment background PC"
            fill
            className="object-contain object-top"
            priority
          />
        </div>
        <div className=" block md:hidden relative max-w-[640px] min-w-[640px] h-full ">
          <Image
            src="/img/Hero5012_Bg_2.png"
            alt="ALSOK recruitment background PC"
            fill
            className="object-contain object-top"
            priority
          />
        </div>
      </div>

      {/* Header Section */}
      <Header5012
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      {/* Content */}
      <div className="relative w-full z-20">

        {/* Hero Content Section */}
        <div className="relative z-10 w-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 mt-32 md:mt-16 lg:mt-8 xl:mt-6">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
            {/* Top Text with Yellow Underline */}
            <div className=" relative">
              <div className=" absolute -bottom-5 -left-5 w-60 md:w-70 lg:w-90 h-full -z-10">
                <Image
                  src="/img/Hero5012_Icon_1.png"
                  alt="icon"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
              <div className=" absolute -top-3 md:-top-5 right-4 lg:right-10 w-5 h-5 md:w-10 md:h-10 -z-10">
                <Image
                  src="/img/Hero5012_Icon_3.png"
                  alt="icon"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
              <span className="text-indigo-900 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold z-20">
                内定<span className='text-sm md:text-lg lg:text-xl'>まで</span>最短<span className='text-4xl md:text-5xl lg:text-7xl'>2</span>週間
                {/* Yellow decorative underline */}
              </span>
            </div>

            {/* Main Title - ALSOK */}
            <h1 className="text-indigo-900 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-2 md:mb-6 leading-tight">
              ALSOK
            </h1>

            {/* Subtitle */}
            <p className="text-indigo-900 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2 md:mb-10 lg:mb-12">
              2025<span className=' text-lg md:text-xl lg:text-2xl xl:text-3xl'>年度</span>新卒採用
            </p>

            {/* Entry Button */}
            <button className="flex items-center justify-center w-full md:w-auto gap-2 bg-[#fff301] hover:bg-amber-400 text-indigo-900 px-4 lg:px-12 py-2 xl:py-3 rounded-lg font-semibold text-xl md:text-2xl lg:text-3xl  transition-colors">
              <span>エントリー</span>
              <ChevronRight className="w-6 h-6 bg-indigo-900 rounded-full text-white font-bold p-1" />
            </button>

            {/* Benefits Section - Bottom */}
            <div className="relative z-10 w-full py-1 md:py-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-6">
                {/* Benefit 1 */}
                <div className="relative w-64 md:w-40 h-8 md:h-40 flex items-center justify-center">
                  <div className="absolute inset-0 z-0">
                    <div className="  relative w-full h-full">
                      <Image
                        src="/img/Hero5012_Icon_2.png"
                        alt="ALSOK Logo"
                        fill
                        className="hidden md:block object-contain object-center"
                        priority
                      />
                      <Image
                        src="/img/Hero5012_Icon_4.png"
                        alt="ALSOK Logo"
                        fill
                        className="block md:hidden object-contain object-center"
                        priority
                      />
                    </div>
                  </div>
                  <p className="text-indigo-900 text-center text-xs md:text-base lg:text-lg font-semibold px-4 z-30">
                    ワークライフ<br className="hidden md:block" />バランスを<br className="hidden md:block" />重視して働ける
                  </p>
                </div>
                {/* Benefit 2 */}
                <div className="relative w-64 md:w-40 h-8  md:h-40 flex items-center justify-center">
                  <div className="absolute inset-0">
                    <div className=" relative w-full h-full">
                      <Image
                        src="/img/Hero5012_Icon_2.png"
                        alt="ALSOK Logo"
                        fill
                        className="hidden md:block object-contain object-center"
                        priority
                      />
                      <Image
                        src="/img/Hero5012_Icon_4.png"
                        alt="ALSOK Logo"
                        fill
                        className=" block md:hidden object-contain object-center"
                        priority
                      />
                    </div>
                  </div>
                  <p className="text-indigo-900 text-center text-sm md:text-base lg:text-lg font-semibold px-4 z-50">
                    業界大手の<br className="hidden md:block" />将来性・安定性
                  </p>
                </div>
                {/* Benefit 3 */}
                <div className="relative w-64 md:w-40 h-8 md:h-40 flex items-center justify-center">
                  <div className="absolute inset-0">
                    <div className=" relative w-full h-full">
                      <Image
                        src="/img/Hero5012_Icon_2.png"
                        alt="ALSOK Logo"
                        fill
                        className="hidden md:block object-contain object-center"
                        priority
                      />
                      <Image
                        src="/img/Hero5012_Icon_4.png"
                        alt="ALSOK Logo"
                        fill
                        className="block md:hidden object-contain object-center"
                        priority
                      />
                    </div>
                  </div>
                  <p className="text-indigo-900 text-center text-sm md:text-base lg:text-lg font-semibold px-4 z-50">
                    充実した<br className="hidden md:block" />待遇・福利厚生
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

