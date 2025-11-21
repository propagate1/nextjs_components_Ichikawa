'use client';
import Image from 'next/image';

export default function Features5002() {
  return (
    <div className="w-full relative">
      {/* Main Banner Container */}
      <div className="relative w-full flex flex-col md:flex-row min-h-[200px] md:min-h-[400px] lg:min-h-[400px]">
        {/* Left Side - Office Image Background (60%) */}
        <div className="relative w-full md:w-[50%] h-[200px] md:h-auto">
          <Image
            src="/img/Features5002_Bg_1.jpg"
            alt="Modern office space"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side - Dark Olive Green Background (40%) */}
        <div className="relative w-full md:w-[50%] bg-[#686135] h-[200px] md:h-auto flex items-center justify-center">
          {/* Background "Show Room" Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <span className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#6B8E23] outline-[#6B8E23] ">
              ShowRoom
            </span>
          </div>
        </div>

        {/* Text Overlays - Positioned Absolutely */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Top-Left Black Banner with Gold Text */}
          <div className="absolute top-10 md:top-32 left-4 md:left-[10%] bg-black px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5 transform -skew-x-12">
            <div className="transform skew-x-12">
              <span className="text-xl md:text-2xl lg:text-3xl font-bold text-[#DAA520]">
                実物を体感!
              </span>
            </div>
          </div>

          {/* Main White Text - Two Lines (Upper Middle) */}
          <div className="absolute top-24 md:top-32 left-4 md:left-[35%]">
            <div className="flex flex-col gap-2 md:gap-3">
              <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white drop-shadow-lg">
                東京本社・市ヶ谷ライブショールームや全国のショールームにてご確認いただけます
              </p>
            </div>
          </div>

          {/* Bottom Gold Banner with Dark Text */}
          <div className="absolute bottom-10 md:bottom-12 left-[10%] sm:left-[15%] md:left-[20%] md:max-w-3xl">
            <div className="bg-none md:bg-[#ac9e4c] rounded-bl-2xl rounded-tr-2xl p-4 md:p-6 lg:p-8">
              <p className="text-xl md:text-base lg:text-lg xl:text-xl font-bold text-white md:text-black leading-relaxed">
                実際に見て体験した上で検討する事が可能なので、お気軽にご来場ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

