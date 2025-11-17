'use client';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function Hero5003() {
  return (
    <div className="w-full relative bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/Hero5003_Bg_1.png"
          alt="Background"
          fill
          className="object-contain opacity-30"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Top Banner */}
          <div className="text-center mb-4 md:mb-6">
            <div className="inline-block bg-blue-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg mb-4 md:mb-6">
              <p className="text-sm md:text-base lg:text-lg font-semibold">
                あなたの<span className="text-yellow-200">課題にフィット</span>する
              </p>
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4">
              <span className="text-orange-500">テレアポ</span>
              <span className="text-black text-2xl md:text-3xl lg:text-4xl">から</span>
              <span className="text-orange-500">商談</span>
              <span className="text-black text-2xl md:text-3xl lg:text-4xl">まで</span>
            </h1>
            <p className="inline-block text-2xl md:text-4xl lg:text-5xl font-bold bg-blue-800 text-white p-2">
              ワンストップでご提供!
            </p>
          </div>

          {/* Business Professionals and Awards Section */}
          <div className="relative mb-12 md:mb-16">
            <div className="flex flex-col lg:flex-row items-center justify-center">
              {/* Left Group - People */}
              <div className="relative w-full h-48 md:h-64 lg:w-80 lg:h-80">
                <Image
                  src="/img/Hero5003_People_1.png"
                  alt="Business professionals group 1"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Center - Awards/Badges */}
              <div className="flex flex-col items-center gap-4">
                {/* Descriptive Text */}
                <p className=" text-center text-sm md:text-base lg:text-lg text-gray-700 mx-auto">
                  テレアポ代行・インサイドセールス代行・商談対応まで。<br />課題に合わせたオーダーメイド型営業代行サービスです。
                </p>
                {/* Three Badges */}
                <div className="flex flex-row gap-4 md:gap-6 items-center">
                  {/* Badge 1 - Blue with Icon */}
                  <div className="relative w-24 h-24 md:w-24 md:h-24 lg:w-32 lg:h-32 z-0">
                    <Image
                      src="/img/Hero5003_Badge_1.png"
                      alt="Award badge 1"
                      fill
                      className="object-contain"
                      priority
                    />
                    <div className=" absolute top-3 left-4 lg:top-8 lg:left-7 flex flex-col items-center justify-center z-10 text-white font-bold text-sm">
                      <p>アイミツ</p>
                      <p>AWARD</p>
                      <p>2023上期</p>
                    </div>
                  </div>

                  {/* Badge 2 - Gold Laurel Wreath */}
                  <div className="relative w-24 h-24 md:w-24 md:h-24 lg:w-32 lg:h-32">
                    <Image
                      src="/img/Hero5003_Badge_2.png"
                      alt="Award badge 2"
                      fill
                      className="object-contain"
                      priority
                    />
                    <div className=" absolute top-3 left-3 lg:top-8 lg:left-7 flex flex-col items-center justify-center z-10 text-black font-bold text-sm">
                      <p>お取引社数</p>
                      <p className=" text-amber-500">10000社</p>
                      <p>以上の実績</p>
                    </div>
                  </div>

                  {/* Badge 3 - Gold Laurel Wreath (using Badge_2 again or if there's a third, but we only have 2 badge images) */}
                  <div className="relative w-24 h-24 md:w-24 md:h-24 lg:w-32 lg:h-32">
                    <Image
                      src="/img/Hero5003_Badge_2.png"
                      alt="Award badge 3"
                      fill
                      className="object-contain"
                      priority
                    />
                    <div className=" absolute top-3 left-3 lg:top-8 lg:left-7 flex flex-col items-center justify-center z-10 text-black font-bold text-sm">
                      <p>最短</p>
                      <p className=" text-amber-500">15営業日で</p>
                      <p>稼働開始</p>
                    </div>
                  </div>
                </div>

                {/* Disclaimer Text */}
                <p className="text-xs md:text-sm text-gray-600 text-center max-w-2xl">
                  ※ネオキャリアグループの2021.10~2022.09のお取引社数合計
                </p>
              </div>

              {/* Right Group - People */}
              <div className="relative w-full h-48 md:h-64 lg:w-80 lg:h-80 hid lg:block">
                <Image
                  src="/img/Hero5003_People_2.png"
                  alt="Business professionals group 2"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 md:px-12 lg:px-16 py-4 md:py-5 lg:py-6 rounded-lg md:rounded-xl text-lg md:text-xl lg:text-2xl font-bold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg flex items-center gap-3 mx-auto">
              <span>お問い合わせはこちら</span>
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

