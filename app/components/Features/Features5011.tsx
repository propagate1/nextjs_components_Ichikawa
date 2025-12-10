'use client';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function Features5011() {
  return (
    <div className="w-full relative py-8 md:py-12 lg:py-16 overflow-hidden min-h-screen">
      {/* Background */}
      <div className="absolute top-40  w-full h-full z-0 ">
        <div className="relative w-full h-1/7">
          <Image
            src="/img/Features5011_Bg_2.png"
            alt="bg"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="relative w-full h-2/7 bg-[#FFFAEB]"></div>
        <div className="relative w-full h-1/7">
          <Image
            src="/img/Features5011_Bg_2.png"
            alt="bg2"
            fill
            className="object-cover object-top rotate-180"
            priority
          />
        </div>
        <div className="relative w-full h-3/7 bg-white"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className=' flex flex-row items-center justify-center'>
            {/* Quick Teacher Logo and Title */}
            <div className="relative w-60 md:w-2/5 h-16 md:h-20 lg:h-24">
              <Image
                src="/img/Features5011_Letter_1.png"
                alt="Quick Teacher 3つの特徴"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
            <p className=' text-4xl lg:text-6xl pt-6 font-bold'>の</p>
          </div>
          <p className=' text-4xl lg:text-6xl font-bold mt-2 md:mt-4'>3つの特徴</p>
        </div>

        {/* Main Content Section 1*/}
        <div className="flex md:flex-row items-center justify-center md:items-end w-full mt-20 md:mt-0">
          {/* Left Side: Text Content */}
          <div className="flex-1 md:w-1/2">
            {/* POINT 01 Label */}
            <div className="mb-4 md:mb-6">
              <span className="text-amber-300 text-xl md:text-2xl lg:text-3xl font-bold italic">
                POINT <span className=' text-2xl md:text-3xl lg:text-4xl'>01</span>
              </span>
            </div>

            {/* Feature Title */}
            <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-8">
              圧倒的な<br className=' block md:hidden' />指導力
            </h2>

            {/* Descriptive Text */}
            <div className="space-y-3 md:space-y-4 mb-8 md:mb-10 leading-6 md:leading-10">
              <span className="text-black text-sm md:text-base lg:text-lg xl:text-2xl leading-relaxed">
                東大・京大・医学生などの講師陣が
                <br className="hidden md:block" />
                200名以上集結。
              </span><br />
              <span className="text-black text-sm md:text-base lg:text-lg xl:text-2xl leading-relaxed">
                講師陣は学歴だけでなく指導力や人間性も
                <br />
                重視され、
                <span className="border-b-yellow-300 border-b-4 px-1 font-semibold text-base md:text-lg lg:text-xl xl:text-3xl">
                  認定率10%を突破した精鋭たち
                </span><br className=' hidden md:block' />
                <span className="border-b-yellow-300 border-b-4 px-1 font-semibold text-base md:text-lg lg:text-xl xl:text-3xl">が所属</span>しています!
              </span>
            </div>

            {/* Call-to-Action Button */}
            <div className="flex justify-center md:justify-start">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 md:px-8 lg:px-10 py-3 md:py-4 rounded-full font-semibold text-lg lg:text-xl xl:text-2xl transition-colors flex items-center gap-2 ">
                <span>認定講師一覧</span>
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 -rotate-45" />
              </button>
            </div>
          </div>

          {/* Right Side: Background Image Collage */}
          <div className=" hidden md:block md:w-1/2">
            <div className="relative w-full h-64 md:h-100 lg:h-120 xl:h-150">
              <Image
                src="/img/Features5011_Bg_1.png"
                alt="Instructors and students collage"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </div>
        </div>

        {/* Main Content Section 2*/}
        <div className="flex md:flex-row items-center justify-center md:items-end w-full mt-40">
          {/* Left Side: Text Content */}
          <div className="flex-1 md:w-1/2">
            {/* POINT 01 Label */}
            <div className="mb-4 md:mb-6">
              <span className="text-amber-300 text-xl md:text-2xl lg:text-3xl font-bold italic">
                POINT <span className=' text-2xl md:text-3xl lg:text-4xl'>02</span>
              </span>
            </div>

            {/* Feature Title */}
            <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-8">
              最短3秒で<br className=' block md:hidden' />指導開始
            </h2>

            {/* Descriptive Text */}
            <div className="space-y-3 md:space-y-4 mb-8 md:mb-10 leading-6 md:leading-10 text-black text-sm md:text-base lg:text-lg xl:text-2xl">
              <span className="">
                質問を投稿後、<span className="border-b-yellow-300 border-b-4 px-1 font-semibold text-base md:text-lg lg:text-xl xl:text-3xl">最短3秒で指導開始、</span>
                <br className="hidden md:block" />
                <span className="border-b-yellow-300 border-b-4 px-1 font-semibold text-base md:text-lg lg:text-xl xl:text-3xl">平均25分以内に解決する</span>ことができるため、
              </span><br />
              <span className="">
                成績につながる<span className="border-b-yellow-300 border-b-4 px-1 font-semibold text-base md:text-lg lg:text-xl xl:text-3xl">自学自習の質が飛躍的に向上</span>します!
              </span><br />
              <span className="">さらに、独自開発の「クイックティーチャーAI Pro」も使えます！</span>
            </div>

            {/* Call-to-Action Button */}
            <div className="flex justify-center md:justify-start">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 md:px-8 lg:px-10 py-3 md:py-4 rounded-full font-semibold text-lg lg:text-xl xl:text-2xl transition-colors flex items-center gap-2 ">
                <span>AI Proについて</span>
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 -rotate-45" />
              </button>
            </div>
          </div>

          {/* Right Side: Background Image Collage */}
          <div className=" hidden md:block relative md:w-1/2 ml-6">
            <div className="relative w-full h-64 md:h-100 lg:h-120 xl:h-150">
              <Image
                src="/img/Features5011_Bg_3.png"
                alt="Instructors and students collage"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
            <div className=" absolute -top-10 -right-1/2 w-full h-50 lg:h-70">
              <Image
                src="/img/Features5011_Bg_4.png"
                alt="Instructors and students collage"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </div>
        </div>

        {/* sp image1 */}
        <div className=" block md:hidden absolute top-30 -right-15 w-full h-full">
          <div className="relative w-full h-48">
            <Image
              src="/img/Features5011_Bg_1.png"
              alt="Instructors and students collage"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>

        {/* sp image2 */}
        <div className=" block md:hidden absolute top-3/5 -right-15 w-full h-full">
          <div className="relative w-full h-30">
            <Image
              src="/img/Features5011_Bg_3.png"
              alt="Instructors and students collage"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
          <div className=" absolute -top-10 -right-1/4 w-full h-30">
            <Image
              src="/img/Features5011_Bg_4.png"
              alt="Instructors and students collage"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

