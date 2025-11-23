'use client';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function About5001() {
  return (
    <div className="w-full bg-white py-8 md:py-12 lg:py-16 font-['Yu_Mincho','Hiragino_Mincho_ProN','MS_PMincho',serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 md:gap-8 lg:gap-12">
          {/* Left Section: Text Content */}
          <div className="flex-1 lg:w-[45%] space-y-6 md:space-y-8 z-10">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight">
              もの作りへの想い
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 md:space-y-6 text-sm md:text-base lg:text-lg text-black leading-relaxed">
              <p>
                中子製造は熱との戦いです。想像をこえた過酷な環境の中、私達は一つひとつの作業に細心の注意を払いながら製品を作り続けています。
              </p>
              <p>
                中子製造は、鋳造業界において裏方のような存在ですが、私達はその役割を十分に理解して、あらゆる鋳造を支えていきます。それが私達にとって大いなる喜びなのです。
              </p>
            </div>

            {/* Call-to-Action Button */}
            <div className="pt-2 md:pt-4">
              <button className="bg-[#8b6914] hover:bg-[#6b5010] text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 text-sm md:text-base lg:text-lg font-medium transition-colors flex items-center justify-center gap-2 md:gap-3 group w-full lg:w-1/2">
                <span>詳しく見る</span>
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-3" />
              </button>
            </div>
          </div>

          {/* Right Section: Image with Overlay */}
          <div className="flex-1 lg:w-[55%] relative z-20">
            {/* Main Image Container */}
            <div className="relative w-full aspect-[4/3] md:aspect-[3/2] overflow-hidden bg-gray-100">
              <Image
                src="/img/About5001_Bg_1.jpg"
                alt="Team of five men in workshop"
                fill
                className="object-cover object-center"
                priority
              />

              {/* Decorative Character Overlay */}
              <div className="absolute top-0 right-0 w-1/3 md:w-2/5 lg:w-1/3 h-2/3 md:h-3/4">
                <Image
                  src="/img/About5001_Letter_1.png"
                  alt="Decorative character 想"
                  fill
                  className="object-contain object-top-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

