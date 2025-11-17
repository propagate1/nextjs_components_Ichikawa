'use client';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function Hero5004() {
  return (
    <div className="w-full relative bg-gradient-to-b from-green-50 to-white ">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 bg-green-200 transform rotate-45"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="flex flex-col">
              {/* Top - Red Badge Only */}
              <div className="flex justify-end">
                {/* Red Badge with Award Information */}
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  <Image
                    src="/img/Hero5004_Icon_1.png"
                    alt="Award badge"
                    fill
                    className="object-contain"
                    priority
                  />
                  {/* Award Information Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-6">
                    <p className="text-white text-xs md:text-sm font-bold text-center mb-1">Welfare OEM</p>
                    <p className="text-red-600 text-xs md:text-sm font-bold text-center mb-1">Performance</p>
                    <p className="text-red-600 text-2xl md:text-3xl font-bold text-center">No 1</p>
                  </div>
                </div>
              </div>

              {/* Bottom - Massage (Base 3/4 size, bottom left), Wedding Ring (Equal intervals above), Ferris Wheel (Top right, overlapping) */}
              <div className="relative w-full h-64 md:h-80">
                {/* Massage - Base Image at Bottom Left (3/4 size) */}
                <div className="absolute -bottom-20 -left-50 w-36 h-36 md:w-100 md:h-100 rounded-full overflow-hidden">
                  <Image
                    src="/img/Hero5004_Bg_1.png"
                    alt="Massage"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Wedding Ring - Equal intervals above Massage */}
                <div className="absolute left-0 bottom-40 md:bottom-88 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                  <Image
                    src="/img/Hero5004_Icon_2.png"
                    alt="Wedding rings"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Ferris Wheel - Anchored to Top Right of Massage (overlapping slightly, extending outward) */}
                <div className="absolute bottom-24 left-36 md:left-48 -translate-x-1/4 -translate-y-1/4 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden z-10">
                  <Image
                    src="/img/Hero5004_Icon_3.png"
                    alt="Ferris wheel"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Center Column */}
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Top - Text, Speech Bubbles, Title */}
              <div className="flex flex-col items-center gap-4 md:gap-6">
                {/* Text */}
                <p className="text-sm md:text-base lg:text-lg text-black font-semibold text-center">
                  <button className=" bg-red-600 rounded-full p-1 text-white">全国</button><span className=" ">30,000以上</span>の施設で使える
                </p>

                {/* Green Speech Bubbles */}
                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                  <div className="bg-green-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base lg:text-lg font-semibold">
                    福利厚生
                  </div>
                  <div className="bg-green-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base lg:text-lg font-semibold">
                    サービスで
                  </div>
                </div>

                {/* Main Title */}
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-black mb-2 md:mb-4 relative inline-block">
                    収益UP!
                    <div className="absolute -bottom-2 left-0 right-0 h-2 md:h-3 bg-green-500 transform -skew-x-12"></div>
                  </h1>
                </div>

                {/* FC Club */}
                <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-green-600">
                  FCクラブ
                </p>
              </div>

              {/* Bottom - CTA Button */}
              <div className="flex items-end justify-center mt-auto">
                <button className="bg-green-600 text-white px-2 py-3 lg:py-4 rounded-lg md:rounded-xl text-base md:text-xl lg:text-lg font-bold hover:bg-green-700 transition-all shadow-lg flex items-center gap-2 w-full justify-center">
                  <span>お問い合わせ・資料ダウンロードはこちら</span>
                  <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative flex flex-col gap-4 md:gap-6">
              {/* Top - Hero5004_Bg_2 (Base 3/4 size, top right) and Swimming Pool (Anchored to Bottom Left, Extending Outward) */}
              <div className="relative w-full h-64 md:h-80">
                {/* Hero5004_Bg_2 - Base Image at Top Right (3/4 size) */}
                <div className="absolute -top-28 -right-60 w-36 h-36 md:w-120 md:h-120 rounded-full overflow-hidden">
                  <Image
                    src="/img/Hero5004_Bg_2.png"
                    alt="Service image"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Swimming Pool - Anchored to Bottom Left of Base Image (extending slightly outward) */}
                <div className="absolute top-36 md:top-48 right- md:right-24 -translate-x-1/4 translate-y-1/4 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden z-10">
                  <Image
                    src="/img/Hero5004_Icon_4.png"
                    alt="Swimming pool"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Bottom - Golf Icon */}
              <div className="absolute -bottom-20 left-40 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ml-auto">
                <Image
                  src="/img/Hero5004_Icon_5.png"
                  alt="Golf"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

