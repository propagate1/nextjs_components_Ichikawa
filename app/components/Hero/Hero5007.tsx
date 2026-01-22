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
      <div className="relative z-10 flex-1 flex flex-col items-center max-w-7xl md:m-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20">
        <div className="flex flex-col items-center w-full">          
          {/* Top Blue Banner */}
          <div className="w-full max-w-2xl bg-gradient-to-r from-[#27469e] via-[#397ec0] to-[#27469e] px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 lg:py-5 rounded-tr-2xl rounded-bl-2xl lg:rounded-tr-4xl lg:rounded-bl-4xl">
            <div className="text-white text-center">
              <p className="text-lg md:text-xl lg:text-2xl font-bold tracking-widest">
                <span className=' border-b-5 border-amber-300'>情報セキュリティ対策専門企業</span><span className='text-md md:text-lg lg:text-xl'>に</span><span className='text-md md:text-lg lg:text-xl'><br className=' block sm:hidden'/>おまかせください</span>
              </p>              
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black text-center my-6">
            サイバー保険
          </h1>

          {/* Mobile/Tablet Layout: Vertical */}
          <div className="flex flex-col items-center w-full md:hidden">
            {/* Subtitle */}
            <div className="text-center mb-4 sm:mb-6 md:mb-8 text-md text-black leading-relaxed">
              <p>
                私たちは多くのサイバー保険を手掛ける
              </p>
              <p>
                東京海上日動の代理店です
              </p>
            </div>

            {/* Two Men Portraits */}
            <div className="flex flex-row items-end justify-center mb-4">
              {/* Left Man */}
              <div className="relative w-40 h-48">
                <Image
                  src="/img/Hero5007_Man_2.png"
                  alt="Businessman with red tie"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>

              {/* Right Man */}
              <div className="relative w-40 h-48">
                <Image
                  src="/img/Hero5007_Man_1.png"
                  alt="Businessman with blue tie"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>

            {/* Gray Banner */}
            <div className=" w-full bg-gray-200 text-[#68b6de] rounded-2xl px-4 py-2 -mt-10 z-50 shadow-2xl shadow-gray-300 mb-6">
              <p className=" text-center text-md font-bold tracking-widest">
                専門家による高度な支援
              </p>
            </div>

            {/* Three Circular divs */}
            <div className="flex flex-row items-center justify-center gap-4">
              {/* Insurance Design div */}
              <div className="w-20 h-20  rounded-full bg-[#68b6de]  flex items-center justify-center shadow-lg ">
                <span className="text-white text-md font-bold text-center px-1 ">
                  保険設計
                </span>
              </div>

              {/* Operation Support div */}
              <div className="w-20 h-20  rounded-full bg-[#68b6de]  flex items-center justify-center shadow-lg ">
                <span className="text-white text-md font-bold text-center px-1 ">
                  運用支援
                </span>
              </div>

              {/* Accident Response Advice div */}
              <div className="w-20 h-20  rounded-full bg-[#68b6de]  flex items-center justify-center shadow-lg ">
                <span className="text-white text-md font-bold text-center px-1  leading-5">
                  事故<br/>対応時の<br/>助言
                </span>
              </div>
            </div>
          </div>

          {/* PC Layout: Portraits with content between them */}
          <div className="hidden md:flex flex-row items-end justify-center gap-4 xl:gap-6 w-full max-w-6xl mt-10">
            {/* Left Man */}
            <div className="absolute w-120 h-100 xl:h-120 md:-left-48 xl:-left-56 bottom-0">
              <Image
                src="/img/Hero5007_Man_1.png"
                alt="Businessman with red tie"
                fill
                className="object-contain object-center"
                priority
              />
            </div>

            {/* Center Content: Subtitle, Gray Banner, Three divs */}
            <div className="flex flex-col items-center justify-center gap-4 xl:gap-6 flex-1 ">
              {/* Subtitle */}
              <div className="text-center text-lg lg:text-xl font-normal text-black leading-relaxed tracking-widest">
                <p>
                  私たちは多くのサイバー保険を手掛ける
                </p>
                <p>
                  東京海上日動の代理店です
                </p>
              </div>

              {/* Gray Banner */}
              <div className=" mx-auto bg-gray-200 rounded-xl xl:rounded-2xl px-4 xl:px-6 py-1 shadow-md shadow-gray-300 mt-2">
                <p className="text-[#68b6de] text-center text-lg lg:text-xl font-bold tracking-widest mx-12 lg:mx-20">
                  専門家による高度な支援
                </p>
              </div>

              {/* Three Circular divs */}
              <div className="flex flex-row items-center justify-center gap-3 xl:gap-4 w-full">
                {/* Insurance Design div */}
                <div className="w-24 h-24 xl:w-28 xl:h-28 rounded-full bg-[#68b6de]  flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg xl:text-xl text-center font-bold tracking-widest">
                    保険設計
                  </span>
                </div>

                {/* Operation Support div */}
                <div className="w-24 h-24 xl:w-28 xl:h-28 rounded-full bg-[#68b6de]  flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg xl:text-xl text-center font-bold tracking-widest">
                    運用支援
                  </span>
                </div>

                {/* Accident Response Advice div */}
                <div className="w-24 h-24 xl:w-28 xl:h-28 rounded-full bg-[#68b6de] flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg xl:text-xl font-bold text-center tracking-widest leading-6">
                    事故<br/>対応時の<br/>助言
                  </span>
                </div>
              </div>
            </div>

            {/* Right Man */}
            <div className="absolute w-120 h-100 xl:h-120 -right-48 xl:-right-56 bottom-0">
              <Image
                src="/img/Hero5007_Man_2.png"
                alt="Businessman with blue tie"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

