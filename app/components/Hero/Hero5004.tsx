'use client';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function Hero5004() {
  return (
    <div className="w-full relative bg-gradient-to-b from-green-50 to-white  overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 bg-green-200 transform rotate-45"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col gap-6 md:gap-8">
            {/* Top Section - Badge and Four Images */}
            <div className="flex items-start justify-between mb-4">
              {/* Left - No.1 Badge */}
              <div className="relative w-40 h-40 flex-shrink-0">
                <Image
                  src="/img/Hero5004_Icon_1.png"
                  alt="Award badge"
                  fill
                  className="object-contain"
                  priority
                />
                {/* Award Information Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-3 py-4">
                  <p className="text-white text-[10px] font-bold text-center mb-0.5">福利厚生OEM</p>
                  <p className="text-red-600 text-[10px] font-bold text-center mb-0.5">実績</p>
                  <p className="text-red-600 text-xl font-bold text-center">No.1</p>
                </div>
                {/* Disclaimer */}
                <p className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-[9px] text-gray-600 whitespace-nowrap">
                  ※当社調べ
                </p>
              </div>

              {/* Right - Four Circular Images in Cluster */}
              <div className="relative w-48 h-48 flex-shrink-0">
                {/* Family - Top Left */}
                <div className="absolute -top-20 -right-10 w-60 h-60 rounded-full overflow-hidden">
                  <Image
                    src="/img/Hero5004_Bg_2.png"
                    alt="Family"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
               
                {/* Pool - Bottom Left */}
                <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src="/img/Hero5004_Icon_4.png"
                    alt="Swimming pool"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              
              </div>
            </div>

            {/* Middle Section */}
            <div className="flex flex-col items-center gap-4 md:gap-6">
              {/* Text */}
              <p className="text-sm md:text-base text-black font-semibold text-center">
                <span className="bg-red-600 rounded-full px-2 py-1 text-white text-xs">全国</span>
                <span className="ml-2 text-base md:text-lg font-bold">30,000以上</span>の施設で使える
              </p>

              {/* Green Speech Bubbles */}
              <div className="flex flex-row gap-2 justify-center">
                <div className="bg-green-500 text-white px-2 py-2 rounded-lg text-sm md:text-base font-semibold border-2 border-green-600">
                  福利厚生
                </div>
                <div className="bg-green-500 text-white px-2 py-2 rounded-lg text-sm md:text-base font-semibold border-2 border-green-600">
                  優待サービス
                </div>
              </div>

              {/* Main Title */}
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-black mb-2 md:mb-4 relative inline-block">
                  収益UP!
                  <div className="absolute -bottom-2 left-0 right-0 h-2 md:h-3 bg-green-500 transform -skew-x-12"></div>
                </h1>
              </div>

              {/* FC Club */}
              <p className="text-2xl md:text-4xl font-bold text-green-600 text-center">
                FCクラブ
              </p>
            </div>

            {/* Bottom Section - Four Circular Images in a Row */}
            <div className="relative flex justify-center gap-3 md:gap-4 mb-6 h-[300px]">
              {/* Wedding Rings */}
              <div className="absolute top-0 left-0 w-20 h-20 rounded-full overflow-hidden">
                <Image
                  src="/img/Hero5004_Icon_2.png"
                  alt="Wedding rings"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Massage */}
              <div className=" absolute top-25 -left-10 w-50 h-50 rounded-full overflow-hidden">
                <Image
                  src="/img/Hero5004_Bg_1.png"
                  alt="Massage"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Ferris Wheel */}
              <div className=" absolute top-30 left-30 w-20 h-20 rounded-full overflow-hidden">
                <Image
                  src="/img/Hero5004_Icon_3.png"
                  alt="Ferris wheel"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Golf */}
              <div className=" absolute bottom-0 right-0 w-20 h-20 rounded-full overflow-hidden">
                <Image
                  src="/img/Hero5004_Icon_5.png"
                  alt="Golf"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* CTA Button - Mobile */}
            <div className="flex justify-center">
              <button className="bg-green-600 text-white px-6 py-3 rounded-full text-base font-bold hover:bg-green-700 transition-all shadow-lg flex items-center gap-2 w-full max-w-md justify-center">
                <span className=' text-xl'>お問い合わせ・資料ダウンロードはこちら</span>
                <ChevronRight className="w-6 h-6 flex-shrink-0" />
              </button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="flex flex-col">
              {/* Top - Red Badge Only */}
              <div className="flex justify-end -mr-20">
                {/* Red Badge with Award Information */}
                <div className="relative w-56 h-56">
                  <Image
                    src="/img/Hero5004_Icon_1.png"
                    alt="Award badge"
                    fill
                    className="object-contain"
                    priority
                  />
                  {/* Award Information Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-6">
                    <p className="text-white text-[10px] font-bold text-center mb-1">福利厚生OEM</p>
                    <p className="text-red-600 text-sm font-bold text-center mb-1">実績</p>
                    <p className="text-red-600 text-3xl font-bold text-center">No 1</p>
                  </div>
                </div>
              </div>

              {/* Bottom - Massage (Base 3/4 size, bottom left), Wedding Ring (Equal intervals above), Ferris Wheel (Top right, overlapping) */}
              <div className="relative w-full h-80">
                {/* Massage - Base Image at Bottom Left (3/4 size) */}
                <div className="absolute -bottom-20 -left-50 w-100 h-100 rounded-full overflow-hidden">
                  <Image
                    src="/img/Hero5004_Bg_1.png"
                    alt="Massage"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Wedding Ring - Equal intervals above Massage */}
                <div className="absolute left-0 bottom-88 w-32 h-32 rounded-full overflow-hidden">
                  <Image
                    src="/img/Hero5004_Icon_2.png"
                    alt="Wedding rings"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Ferris Wheel - Anchored to Top Right of Massage (overlapping slightly, extending outward) */}
                <div className="absolute bottom-24 left-48 -translate-x-1/4 -translate-y-1/4 w-40 h-40 rounded-full overflow-hidden z-10">
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
            <div className="flex flex-col gap-8">
              {/* Top - Text, Speech Bubbles, Title */}
              <div className="flex flex-col items-center gap-6">
                {/* Text */}
                <p className="text-lg text-black font-semibold text-center">
                  <span className="bg-red-600 rounded-full px-2 py-1 text-white text-sm">全国</span>
                  <span className="ml-2 text-lg font-bold">30,000以上</span>の施設で使える
                </p>

                {/* Green Speech Bubbles */}
                <div className="flex flex-row gap-4">
                  <div className="bg-green-500 text-white px-4 py-3 rounded-lg text-lg font-semibold border-2 border-green-600">
                    福利厚生
                  </div>
                  <div className="bg-green-500 text-white px-4 py-3 rounded-lg text-lg font-semibold border-2 border-green-600">
                    優待サービス
                  </div>
                </div>

                {/* Main Title */}
                <div className="text-center">
                  <h1 className="text-8xl font-bold text-black mb-4 relative inline-block">
                    収益UP!
                    <div className="absolute -bottom-3 left-0 right-0 h-3 bg-green-500 transform -skew-x-12"></div>
                  </h1>
                </div>

                {/* FC Club */}
                <p className="text-5xl font-bold text-green-600">
                  FCクラブ
                </p>
              </div>

              {/* Bottom - CTA Button */}
              <div className="flex items-end justify-center mt-auto">
                <button className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-700 transition-all shadow-lg flex items-center gap-3 justify-center">
                  <span className="whitespace-nowrap">お問い合わせ・資料ダウンロードはこちら</span>
                  <ChevronRight className="w-8 h-8 flex-shrink-0" />
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative flex flex-col gap-6">
              {/* Top - Hero5004_Bg_2 (Base 3/4 size, top right) and Swimming Pool (Anchored to Bottom Left, Extending Outward) */}
              <div className="relative w-full h-80">
                {/* Hero5004_Bg_2 - Base Image at Top Right (3/4 size) */}
                <div className="absolute -top-28 -right-60 w-120 h-120 rounded-full overflow-hidden">
                  <Image
                    src="/img/Hero5004_Bg_2.png"
                    alt="Service image"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Swimming Pool - Anchored to Bottom Left of Base Image (extending slightly outward) */}
                <div className="absolute top-48 right-24 -translate-x-1/4 translate-y-1/4 w-40 h-40 rounded-full overflow-hidden z-20">
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
              <div className="absolute -bottom-15 left-40 w-40 h-40 rounded-full overflow-hidden ml-auto">
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

