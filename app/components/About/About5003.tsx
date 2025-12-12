'use client';
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function About5003() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    setShowFirst(true);

    const timer = setTimeout(() => {
      setShowSecond(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <p className="text-sm md:text-base text-[#1e3a5f] mb-2 md:mb-3 font-bold">私たちについて</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1e3a5f] leading-[30px] md:leading-[70px] mb-4 md:mb-6">
            胸高鳴る空間を、<br />
            バウハウス丸栄とともに。
          </h1>

          {/* Graphic */}
          <div className="relative w-full h-8 md:h-12 lg:h-16 mt-6 md:mt-8">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 100"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 0 70 L 670 70 L 670 5 L 690 50 L 710 0 L 710 100 L 730 70 L 790 70"
                stroke="#c00c06"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="790" cy="70" r="4" fill="#c00c06" />
            </svg>
          </div>
        </div>

        {/* Content Block 1 */}
        <div className="mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-6 lg:gap-8">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full h-60 md:h-[200px] lg:h-[300px]">
                <div className="absolute -left-15 bottom-0 w-4/5 h-4/5">
                  <div
                    className={`
                      relative w-full h-full 
                      transition-all duration-1200 ease-out
                      transform
                      ${showSecond ? "translate-x-0 translate-y-0 opacity-100" : "-translate-x-100 translate-y-40 opacity-0"}
                      `}>
                    <Image
                      src="/img/About5003_Bg_2.jpg"
                      alt="Smiling man with smartphone"
                      fill
                      className="object-contain  -rotate-[8deg]"
                    />
                  </div>
                </div>
                <div className="absolute right-0 top-0 w-4/5 h-4/5 z-10">
                  <div className={`
                      relative w-full h-full 
                      transition-all duration-900 ease-out
                      transform
                      ${showFirst ? "translate-x-0 translate-y-0 opacity-100" : "-translate-x-100 translate-y-40 opacity-0"}
                      `}>
                    <Image
                      src="/img/About5003_Bg_1.jpg"
                      alt="Smiling woman looking up"
                      fill
                      className="object-contain  -rotate-[4deg]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col gap-2 md:gap-3">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1e3a5f]">
                移動する。
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1e3a5f]">
                それは
                <span className="bg-[#1e3a5f] text-white text-xl md:text-2xl lg:text-3xl font-bold ml-2 pl-2">
                  人が本能的に求める。
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Content Block 2 */}
        <div className="mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-4 md:gap-6 lg:gap-8">
            {/* Image Section - Overlapping Images */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full h-60 md:h-[200px] lg:h-[300px]">
                {/* Background Image - Smiling Man */}
                <div className="absolute left-0 top-0 w-4/5 h-4/5 z-10">
                  <div className={`
                      relative w-full h-full 
                      transition-all duration-900 ease-out
                      transform
                      ${showFirst ? "translate-x-0 translate-y-0 opacity-100" : "translate-x-100 translate-y-40 opacity-0"}
                      `}>
                    <Image
                      src="/img/About5003_Bg_3.jpg"
                      alt="Smiling man with smartphone"
                      fill
                      className="object-contain  rotate-[4deg]"
                    />
                  </div>
                </div>
                {/* Foreground Image - Smiling Woman */}
                <div className="absolute -right-15 bottom-0 w-4/5 h-4/5">
                  <div className={`
                      relative w-full h-full 
                      transition-all duration-1200 ease-out
                      transform
                      ${showSecond ? "translate-x-0 translate-y-0 opacity-100" : "translate-x-100 translate-y-40 opacity-0"}
                      `}>
                    <Image
                      src="/img/About5003_Bg_4.jpg"
                      alt="Smiling woman looking up"
                      fill
                      className="object-contain  rotate-[8deg]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col gap-2 md:gap-3">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1e3a5f]">
                だからこそバウハウス丸栄は
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1e3a5f]">
                人々が
                <span className="bg-[#1e3a5f] text-white text-xl md:text-2xl lg:text-3xl font-bold ml-2">
                  「行きたい」
                </span>
              </p>
              <p className="inline-block text-xl md:text-2xl lg:text-3xl font-bold text-[#1e3a5f]">
                <span className="bg-[#1e3a5f] text-white text-xl md:text-2xl lg:text-3xl font-bold">
                  「行ってよかった」
                </span>
                <span>と</span>
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1e3a5f]">
                思える空間を作りたい。
              </p>
            </div>
          </div>
        </div>

        {/* Content Block 3 */}
        <div className="mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-6 lg:gap-8">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full h-60 md:h-[200px] lg:h-[300px]">
                <div className="absolute -left-15 bottom-0 w-4/5 h-4/5">
                  <div className={`
                      relative w-full h-full 
                      transition-all duration-1200 ease-out
                      transform
                      ${showSecond ? "translate-x-0 translate-y-0 opacity-100" : "-translate-x-100 translate-y-40 opacity-0"}
                      `}>
                    <Image
                      src="/img/About5003_Bg_6.jpg"
                      alt="Smiling man with smartphone"
                      fill
                      className="object-contain  -rotate-[8deg]"
                    />
                  </div>
                </div>
                <div className="absolute right-0 top-0 w-4/5 h-4/5 z-10">
                  <div className={`
                      relative w-full h-full 
                      transition-all duration-900 ease-out
                      transform
                      ${showFirst ? "translate-x-0 translate-y-0 opacity-100" : "-translate-x-100 translate-y-40 opacity-0"}
                      `}>
                    <Image
                      src="/img/About5003_Bg_5.jpg"
                      alt="Smiling woman looking up"
                      fill
                      className="object-contain  -rotate-[4deg]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col gap-2 md:gap-3">
              <p className="inline-block text-xl md:text-2xl lg:text-3xl font-bold text-[#1e3a5f]">
                <span className="bg-[#1e3a5f] text-white text-xl md:text-2xl lg:text-3xl font-bold px-2">
                  その喜びを最大化
                </span>
                <span>して</span>
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1e3a5f]">
                にぎわいを生みだしたい。
              </p>
            </div>
          </div>
        </div>

        {/* Content Block 4 */}
        <div className="mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-4 md:gap-6 lg:gap-8">
            {/* Image Section - Overlapping Images */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full h-60 md:h-[200px] lg:h-[300px]">
                <div className="absolute left-0 top-0 w-4/5 h-4/5 z-10">
                  <div className={`
                      relative w-full h-full 
                      transition-all duration-900 ease-out
                      transform
                      ${showFirst ? "translate-x-0 translate-y-0 opacity-100" : "translate-x-100 translate-y-40 opacity-0"}
                      `}>
                    <Image
                      src="/img/About5003_Bg_7.jpg"
                      alt="Smiling man with smartphone"
                      fill
                      className="object-contain  rotate-[4deg]"
                    />
                  </div>
                </div>
                <div className="absolute -right-15 bottom-0 w-4/5 h-4/5">
                  <div className={`
                      relative w-full h-full 
                      transition-all duration-1200 ease-out
                      transform
                      ${showSecond ? "translate-x-0 translate-y-0 opacity-100" : "translate-x-100 translate-y-40 opacity-0"}
                      `}>
                    <Image
                      src="/img/About5003_Bg_8.jpg"
                      alt="Smiling woman looking up"
                      fill
                      className="object-contain  rotate-[8deg]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col gap-2 md:gap-3">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1e3a5f]">
                嬉しい行き先を作りたいと願う
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1e3a5f]">
                <span className="bg-[#1e3a5f] text-white text-xl md:text-2xl lg:text-3xl font-bold pl-2">
                  お客さまとともに。
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

