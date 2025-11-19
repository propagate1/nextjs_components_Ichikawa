'use client';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function Hero5001() {
  const productIcons = [
    { src: '/img/Hero5001_Icon_1.png', alt: 'Product Icon 1' },
    { src: '/img/Hero5001_Icon_2.png', alt: 'Product Icon 2' },
    { src: '/img/Hero5001_Icon_3.png', alt: 'Product Icon 3' },
    { src: '/img/Hero5001_Icon_4.png', alt: 'Product Icon 4' },
    { src: '/img/Hero5001_Icon_5.png', alt: 'Product Icon 5' },
    { src: '/img/Hero5001_Icon_6.png', alt: 'Product Icon 6' },
    { src: '/img/Hero5001_Icon_7.png', alt: 'Product Icon 7' },
    { src: '/img/Hero5001_Icon_8.png', alt: 'Product Icon 8' },
    { src: '/img/Hero5001_Icon_9.png', alt: 'Product Icon 9' },
    { src: '/img/Hero5001_Icon_10.png', alt: 'Product Icon 10' },
  ];

  return (
    <div className="w-full relative">
      {/* Upper Section - Light Beige Background */}
      <div className="relative bg-[#fffbe7] pt-8 md:pt-12 lg:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative">
          {/* Product Icons - Single Row at Top */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-6 mb-8 md:mb-12 lg:mb-16">
            {productIcons.map((icon, index) => (
              <div key={index} className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex-shrink-0">
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  fill
                  className="object-contain opacity-80"
                />
              </div>
            ))}
          </div>

          {/* Main Content - Two Men and Slogan */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Two Men */}
            <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
              {/* Left Man */}
              <div className="relative w-32 h-40 md:w-56 md:h-72 lg:w-72 lg:h-80">
                <Image
                  src="/img/Hero5001_Man_1.png"
                  alt="Man pointing"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Center Slogan */}
              <div className="flex flex-col items-center text-center px-4 md:px-6 gap-5">
                <p className="text-lg md:text-3xl lg:text-4xl text-gray-800 font-bold">
                  それ、<span className="text-xl md:text-4xl lg:text-5xl">バイセル</span>なら
                </p>
                <p className=" text-2xl md:text-4xl lg:text-5xl font-bold tracking-[4px]">
                  <span className="text-amber-800">高く</span>
                  <span className="text-gray-800">買い取れます。</span>
                </p>
                {/* Green Oval Labels */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-8">
                  {/* Left Oval - Cumulative Purchase Count */}
                  <div className="relative bg-green-600 rounded-full px-8 md:px-12 py-4 md:py-5 text-center text-white whitespace-nowrap">
                    <p className="text-lg md:text-xl lg:text-2xl font-bold "><span className="text-2xl md:text-3xl lg:text-4xl">4,300</span>万点以上</p>
                    <span
                      className="absolute -top-4 right-[20%] md:right-[25%] text-[75px] md:text-xl lg:text-2xl text-white font-bold text-center [-webkit-text-stroke-width:1.5px]
[-webkit-text-stroke-color:green]">累計買取点数</span>
                  </div>

                  {/* Right Oval - Stock Exchange */}
                  <div className="bg-green-600 rounded-full px-8 md:px-12 py-4 md:py-5 text-center flex items-center justify-center whitespace-nowrap">
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white">東証上場</p>
                  </div>
                </div>

                {/* Disclaimer Text */}
                <p className="text-xs md:text-sm text-gray-600">
                  ※2015~2024年の合計買取数(当社調べ)
                </p>
              </div>

              {/* Right Man */}
              <div className="relative w-32 h-40 md:w-56 md:h-72 lg:w-72 lg:h-80">
                <Image
                  src="/img/Hero5001_Man_2.png"
                  alt="Man pointing"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section - Dark Green Background */}
      <div className="bg-green-800 py-4 md:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Call to Action Text */}
          <p className="text-white text-center text-lg md:text-xl lg:text-2xl font-semibold mb-6 md:mb-8">
            お問い合わせ・無料相談はこちら
          </p>

          {/* Contact Information Box */}
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 max-w-4xl mx-auto">
            {/* Top Text */}
            <p className="text-xs md:text-sm text-gray-600 text-center mb-4 md:mb-6">
              <span className=" text-red-600">通話料無料</span>・24時間365日受付中
            </p>

            {/* Phone Number and Email */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              {/* Phone Number */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs md:text-sm font-bold">B</span>
                </div>
                <a
                  href="tel:0120-612-773"
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 hover:text-green-600 transition-colors"
                >
                  0120-612-773
                </a>
              </div>

              {/* Email Link */}
              <a
                href="mailto:info@example.com"
                className="flex items-center gap-2 text-sm md:text-base text-blue-600 hover:text-green-600 transition-colors underline"
              >
                <span>メールでのお申し込みはこちら</span>
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 font-bold text-blue-800 hover:text-white" />
                <span className="text-lg md:text-xl"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

