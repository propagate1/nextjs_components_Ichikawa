'use client';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

export default function Hero5002() {
  const problems = [
    '肩こり\n首こり',
    '頭痛\n腰痛',
    'いびき\n無呼吸',
    '不眠症',
    'ストレートネック',
  ];

  return (
    <div className="w-full bg-white relative font-['Yu_Mincho','Hiragino_Mincho_ProN','MS_PMincho',serif] overflow-hidden">
      {/* Woman Image - Full Right Side */}
      <div className="absolute top-0 -right-[20%] w-full  h-full z-0">
        <div className="relative w-full h-full">
          <Image
            src="/img/Hero5002_Bg_1.png"
            alt="Woman stretching"
            fill
            className="object-contain opacity-[80%]"
            priority
          />
        </div>
      </div>

      {/* Header Section */}
      <div className="relative bg-transparent py-4 md:py-6 lg:py-8 shadow-xl z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-row items-center justify-between gap-2 md:gap-6">
            {/* Left Side - Company Logo */}
            <div className="flex flex-col">
              <p className="text-[8px] md:text-sm text-gray-600 mb-1">
                大阪のオーダーメイド枕は「整体や雅」
              </p>
              <div className="relative w-24 h-6 md:w-32 md:h-8 lg:w-40 lg:h-12">
                <Image
                  src="/img/Hero5002_Logo_1.png"
                  alt="整体や雅"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="flex flex-row items-center justify-center md:items-end gap-2 md:gap-3">
              {/* Free Trial Button */}
              <button className="bg-red-600 text-white  md:px-8 py-2 md:py-3 rounded-lg font-bold text-[8px] md:text-base hover:bg-red-700 transition-colors">
                無料体験<br />受付中!!
              </button>

              {/* Phone and Email */}
              <div className="flex flex-col">
                <a
                  href="tel:06-6556-6557"
                  className="text-red-600 text-[8px] md:text-2xl lg:text-3xl font-bold hover:text-red-700 transition-colors flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 md:w-5 md:h-5" />
                  06-6556-6557
                </a>

                <a
                  href="mailto:seitaiya@ray.ocn.ne.jp"
                  className="text-[8px] md:text-base text-red-400 hover:text-red-600 transition-colors flex items-center gap-1 tracking-normal md:tracking-widest"
                >
                  <Mail className="w-3 h-3 md:w-5 md:h-5" />
                  seitaiya@ray.ocn.ne.jp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Promotional Area */}
      <div className=" text-left relative py-8 md:py-12 lg:py-16 z-10 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Large Slogan */}
          <div className="mb-6 md:mb-8 text-orange-500">
            <p className="text-2xl md:text-3xl lg:text-4xl ">
              「世界で一つだけの枕」<span className="text-xl md:text-2xl lg:text-3xl">が</span>
            </p>
            <p className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span >あなた</span><span className="text-2xl md:text-3xl lg:text-4xl">を </span><span>変える。</span>
            </p>
          </div>

          {/* Product Name */}
          <div className="flex items-center justify-start gap-3 md:gap-4">
            <p className="text-lg md:text-2xl lg:text-3xl text-amber-900 font-semibold">
              大阪のオーダーメイド枕 <span className="text-3xl md:text-4xl lg:text-5xl">みやび</span>
            </p>
            {/* Small Pillow Icon */}
            <div className="relative w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
              <Image
                src="/img/Hero5002_Icon_1.png"
                alt="Pillow icon"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Problem/Solution Section */}
      <div className="relative py-8 md:py-12 lg:py-16 z-10 bg-transparent">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Left Side - Man with Pillow and Speech Bubble */}
          <div className="flex flex-col items-center lg:items-start">
            {/* Man with Pillow */}
            <div className="relative w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72">
              {/* Circular Dotted Border */}
              <div className="absolute -inset-2 rounded-full border-5 border-dashed border-orange-500"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/img/Hero5002_Avatar_1.png"
                  alt="Man with pillow"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {/* Speech Bubble */}
              <div className="absolute -top-16 -left-8">
                <div className="relative w-40 h-24 lg:w-40 lg:h-36">
                  <Image
                    src="/img/Hero5002_Icon_2.png"
                    alt="Speech bubble"
                    fill
                    className="object-contain"
                    priority
                  />
                  {/* Text overlay */}
                  <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6 lg:px-8">
                    <p className=" text-center text-xs md:text-sm lg:text-base text-gray-800 leading-tight">
                      1ミリ単位で<br />枕の高さを<br />調整します。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Problem/Solution Content */}
          <div className="flex flex-col items-center justify-center">
            {/* Question */}
            <p className="text-xl md:text-2xl lg:text-3xl text-amber-950 flex items-center text-center  mb-8 md:mb-12">
              あなたのお悩みは<span className="text-2xl md:text-3xl lg:text-5xl">「枕が原因」</span>かも?
            </p>

            {/* Problem Bubbles */}
            <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4 mb-12 md:mb-16">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="relative w-20 h-20 md:w-20 md:h-20 lg:w-28 lg:h-28 flex-shrink-0"
                >
                  <Image
                    src="/img/Hero5002_Icon_3.png"
                    alt="Problem bubble"
                    fill
                    className="object-contain"
                    priority
                  />
                  {/* Text overlay */}
                  <div className="absolute inset-0 flex items-center justify-center px-2 md:px-3">
                    <p className="text-xs md:text-sm lg:text-base text-gray-800 font-medium text-center leading-tight whitespace-pre-line">
                      {problem}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Solution Slogan */}
            <p className="text-lg md:text-xl lg:text-2xl text-amber-600 text-center leading-relaxed">
              プロの整体師<span className=" text-amber-950">が</span>あなたの身体にあわせて作る<span className=" text-amber-950">から</span>
            </p>
            <div className="relative text-2xl md:text-4xl lg:text-6xl text-amber-950 font-bold text-center flex items-center leading-relaxed">
              <span className="z-10">理想</span><span className="text-lg md:text-2xl lg:text-4xl z-10">の</span><span className="z-10">睡眠姿勢</span><span className="text-lg md:text-2xl lg:text-4xl z-10">を</span><span className="z-10">実現!</span>
              <div className=" absolute bottom-1 lg:bottom-3 w-full border-t-10 lg:border-t-20 border-amber-300 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

