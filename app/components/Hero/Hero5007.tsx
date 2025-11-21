'use client';
import Image from 'next/image';

export default function Hero5007() {
  return (
    <div className="w-full relative overflow-hidden min-h-screen flex flex-col">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/img/Hero5007_Bg_1.png"
          alt="Cityscape Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-transparent to-white/90"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex flex-col items-center w-full">
          
          {/* Top Blue Banner */}
          <div className="w-full max-w-5xl bg-blue-900 px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 lg:py-5 mb-3 sm:mb-4 md:mb-6 lg:mb-8 rounded-tr-2xl rounded-bl-2xl lg:rounded-tr-4xl lg:rounded-bl-4xl">
            <div className="text-white text-center">
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font- bold leading-relaxed">
                <span className=' border-b-5 border-amber-300'>情報セキュリティ対策専門企業</span><span className='text-xs sm:text-sm md:text-lg lg:text-xl'><br className=' block sm:hidden'/>におまかせください</span>
              </p>              
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black text-center mb-2 sm:mb-3 md:mb-4 lg:mb-6 leading-tight">
            サイバー保険
          </h1>

          {/* Mobile/Tablet Layout: Vertical */}
          <div className="flex flex-col items-center w-full lg:hidden">
            {/* Subtitle */}
            <div className="text-center mb-4 sm:mb-6 md:mb-8">
              <p className="text-xs sm:text-sm md:text-base text-black leading-relaxed mb-1">
                私たちは多くのサイバー保険を手掛ける
              </p>
              <p className="text-xs sm:text-sm md:text-base text-black leading-relaxed">
                東京海上日動の代理店です
              </p>
            </div>

            {/* Two Men Portraits */}
            <div className="flex flex-row items-end justify-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
              {/* Left Man */}
              <div className="relative w-28 h-36 sm:w-36 sm:h-44 md:w-44 md:h-56">
                <Image
                  src="/img/Hero5007_Man_1.png"
                  alt="Businessman with red tie"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>

              {/* Right Man */}
              <div className="relative w-28 h-36 sm:w-36 sm:h-44 md:w-44 md:h-56">
                <Image
                  src="/img/Hero5007_Man_2.png"
                  alt="Businessman with blue tie"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>

            {/* Gray Banner */}
            <div className="w-full max-w-3xl bg-gray-200 text-sky-500 rounded-lg sm:rounded-xl md:rounded-2xl px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 mb-4 sm:mb-6 md:mb-8">
              <p className=" text-center text-xs sm:text-sm md:text-base font-medium">
                専門家による高度な支援
              </p>
            </div>

            {/* Three Circular Buttons */}
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 w-full max-w-5xl">
              {/* Insurance Design Button */}
              <button className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-sky-500  flex items-center justify-center shadow-lg hover:shadow-xl">
                <span className="text-white text-[10px] sm:text-xs md:text-sm font-medium text-center px-1 sm:px-2">
                  保険設計
                </span>
              </button>

              {/* Operation Support Button */}
              <button className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-sky-500  flex items-center justify-center shadow-lg hover:shadow-xl">
                <span className="text-white text-[10px] sm:text-xs md:text-sm font-medium text-center px-1 sm:px-2">
                  運用支援
                </span>
              </button>

              {/* Accident Response Advice Button */}
              <button className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-sky-500  flex items-center justify-center shadow-lg hover:shadow-xl">
                <span className="text-white text-[9px] sm:text-[10px] md:text-xs font-medium text-center px-1 sm:px-2 leading-tight">
                  事故<br/>対応時の<br/>助言
                </span>
              </button>
            </div>
          </div>

          {/* PC Layout: Portraits with content between them */}
          <div className="hidden lg:flex flex-row items-end justify-center gap-4 xl:gap-6 w-full max-w-6xl">
            {/* Left Man */}
            <div className="relative w-52 h-64 xl:w-60 xl:h-72 flex-shrink-0">
              <Image
                src="/img/Hero5007_Man_1.png"
                alt="Businessman with red tie"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* Center Content: Subtitle, Gray Banner, Three Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 xl:gap-6 flex-1 max-w-md xl:max-w-lg">
              {/* Subtitle */}
              <div className="text-center text-lg lg:text-xl xl:text-2xl font-bold text-black leading-relaxed">
                <p className=" mb-1">
                  私たちは多くのサイバー保険を手掛ける
                </p>
                <p className="">
                  東京海上日動の代理店です
                </p>
              </div>

              {/* Gray Banner */}
              <div className="w-full bg-gray-200 rounded-xl xl:rounded-2xl px-4 xl:px-6 py-2 xl:py-3 shadow-md shadow-gray-300">
                <p className="text-sky-500 text-center text-sm lg:text-base xl:text-lg font-medium">
                  専門家による高度な支援
                </p>
              </div>

              {/* Three Circular Buttons */}
              <div className="flex flex-row items-center justify-center gap-3 xl:gap-4 w-full">
                {/* Insurance Design Button */}
                <button className="w-24 h-24 xl:w-28 xl:h-28 rounded-full bg-sky-500  flex items-center justify-center shadow-lg hover:shadow-xl">
                  <span className="text-white text-xs xl:text-sm font-medium text-center px-1">
                    保険設計
                  </span>
                </button>

                {/* Operation Support Button */}
                <button className="w-24 h-24 xl:w-28 xl:h-28 rounded-full bg-sky-500  flex items-center justify-center shadow-lg hover:shadow-xl">
                  <span className="text-white text-xs xl:text-sm font-medium text-center px-1">
                    運用支援
                  </span>
                </button>

                {/* Accident Response Advice Button */}
                <button className="w-24 h-24 xl:w-28 xl:h-28 rounded-full bg-sky-500 flex items-center justify-center shadow-lg hover:shadow-xl">
                  <span className="text-white text-[10px] xl:text-xs font-medium text-center px-1 leading-tight">
                    事故<br/>対応時の<br/>助言
                  </span>
                </button>
              </div>
            </div>

            {/* Right Man */}
            <div className="relative w-52 h-64 xl:w-60 xl:h-72 flex-shrink-0">
              <Image
                src="/img/Hero5007_Man_2.png"
                alt="Businessman with blue tie"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

