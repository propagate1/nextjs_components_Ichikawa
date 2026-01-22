'use client';

import Image from 'next/image';
import { useState } from 'react';
import Header5008 from '../Header/Header5008';

export default function Hero5008() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <div className="w-full relative bg-[#faf7e5] min-h-screen overflow-hidden">
      {/* Background Pattern - Dotted Grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, #a2a1a1 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>

      {/* Header */}
      <Header5008
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      {/* Main Content Section */}
      {!isMobileMenuOpen && (
        <div className="relative z-10 py-8 md:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Left Section: Text Content */}
              <div className="flex-1 flex flex-col gap-0 md:gap-2 w-full">
                {/* Text Lines */}
                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-bold">
                    学びを止めない。
                  </p>
                  <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-bold">
                    諦めない。
                  </p>
                </div>

                {/* Text Image - Main Headline */}
                <div className=" text-5xl lg:text-7xl font-medium leading-16 lg:leading-24">
                  <p>
                    今日から
                  </p>
                  <p className=' text-amber-500 whitespace-nowrap'>
                    分からない<span className=' text-black'>を</span>
                  </p>
                  <p>
                    ゼロにする。
                  </p>
                </div>
                {/* Student 3 - Student with tablet (middle-right) */}
                <div className="block md:hidden absolute top-0 right-0">
                  <div className="relative w-28 h-36 md:w-44 md:h-44 lg:w-60 lg:h-72">
                    <Image
                      src="/img/Hero5008_Student_3.png"
                      alt="Student with tablet"
                      fill
                      className="object-contain animate-bounce [animation-duration:10s] [animation-timing-function:ease-in-out]"
                    />
                  </div>
                </div>
                {/* Tool 2 - Pens (near laptop student) */}
                <div className="block md:hidden absolute top-10 right-30">
                  <div className="relative w-8 h-8">
                    <Image
                      src="/img/Hero5008_Tool_2.png"
                      alt="Pens"
                      fill
                      className="object-contain animate-bounce [animation-duration:10s] [animation-timing-function:ease-in-out]"
                    />
                  </div>
                </div>

                {/* Statistics Section - Bottom */}
                <div className=' hidden md:block'>
                  <div className="flex flex-row gap-4">
                    {/* Badge 1 - Shortest Matching Time */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32">
                      <Image
                        src="/img/Hero5008_Badge_1.png"
                        alt="Golden laurel wreath badge"
                        fill
                        className="object-cover"
                      />
                      {/* Text Overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                        <p className="text-xs md:text-xs text-gray-800 font-bold text-center">最短</p>
                        <p className="text-xs md:text-xs text-gray-800 font-bold text-center">マッチング時間</p>
                        <p className="text-xl md:text-2xl lg:text-3xl text-orange-500 font-bold">3秒</p>
                      </div>
                    </div>

                    {/* Badge 2 - Average Resolution Time */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32">
                      <Image
                        src="/img/Hero5008_Badge_1.png"
                        alt="Golden laurel wreath badge"
                        fill
                        className="object-cover"
                      />
                      {/* Text Overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                        <p className="text-xs md:text-xs text-gray-800 font-bold text-center">平均</p>
                        <p className="text-xs md:text-xs text-gray-800 font-bold text-center">解決時間</p>
                        <p className="text-xl md:text-2xl lg:text-3xl text-orange-500 font-bold">25分</p>
                      </div>
                    </div>

                    {/* Badge 3 - Satisfaction Rate */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32">
                      <Image
                        src="/img/Hero5008_Badge_1.png"
                        alt="Golden laurel wreath badge"
                        fill
                        className="object-cover"
                      />
                      {/* Text Overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                        <p className="text-xs md:text-sm text-gray-800 font-bold text-center">満足度</p>
                        <p className="text-xl md:text-2xl lg:text-3xl text-orange-500 font-bold">95%</p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              {/* Right Section: Characters and Tools */}
              <div className="flex-1 relative w-full mb-20 md:mb-0">
                <div className="relative min-h-[200px] md:min-h-[300px] lg:min-h-[500px]">
                  {/* Student 1 - Teacher with smartphone (center-left) */}
                  <div className="absolute -top-10 lg:top-20 left-0 md:-left-35 z-0 md:z-20">
                    <div className="relative w-50 h-70 md:w-80 md:h-90 lg:w-100 lg:h-120">
                      <Image
                        src="/img/Hero5008_Student_1.png"
                        alt="Teacher with smartphone"
                        fill
                        className="object-contain animate-bounce [animation-duration:10s] [animation-timing-function:ease-in-out]"
                        priority
                      />
                      
                    </div>
                  </div>

                  {/* Tool 1 - Ruler (near teacher, bottom-left) */}
                  <div className="absolute top-30 md:top-40 lg:top-70 ieft-0 md:-left-20 z-30">
                    <div className="relative w-12 h-12 lg:w-20 lg:h-20">
                      <Image
                        src="/img/Hero5008_Tool_1.png"
                        alt="Ruler"
                        fill
                        className="object-contain animate-bounce [animation-duration:10s] [animation-timing-function:ease-in-out]"
                      />
                    </div>
                  </div>

                  {/* Student 2 - Student with laptop (top-right) */}
                  <div className="absolute -top-10 lg:top-10 right-10 md:left-10 lg:left-20 z-20">
                    <div className="relative w-32 h-40 md:w-40 md:h-48 lg:w-48 lg:h-60">
                      <Image
                        src="/img/Hero5008_Student_2.png"
                        alt="Student with laptop"
                        fill
                        className="object-contain animate-bounce [animation-duration:10s] [animation-timing-function:ease-in-out]"
                      />
                    </div>
                  </div>

                  {/* Tool 2 - Pens (near laptop student) */}
                  <div className="hidden md:block absolute -top-5 lg:top-10 right-0 lg:-right-10 z-10">
                    <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                      <Image
                        src="/img/Hero5008_Tool_2.png"
                        alt="Pens"
                        fill
                        className="object-contain animate-bounce [animation-duration:10s] [animation-timing-function:ease-in-out]"
                      />
                    </div>
                  </div>

                  {/* Student 3 - Student with tablet (middle-right) */}
                  <div className="hidden md:block absolute -top-10 right-10 z-10">
                    <div className="relative w-28 h-36 md:w-44 md:h-44 lg:w-60 lg:h-72">
                      <Image
                        src="/img/Hero5008_Student_3.png"
                        alt="Student with tablet"
                        fill
                        className="object-contain animate-bounce [animation-duration:10s] [animation-timing-function:ease-in-out]"
                      />
                    </div>
                  </div>

                  {/* Student 4 - Student celebrating (bottom-right) */}
                  <div className="absolute bottom-0 lg:bottom-8 -right-10 lg:-right-20 z-20">
                    <div className="relative w-36 h-44 md:w-60 md:h-72 lg:w-88 lg:h-88">
                      <Image
                        src="/img/Hero5008_Student_4.png"
                        alt="Student celebrating"
                        fill
                        className="object-contain animate-bounce [animation-duration:10s] [animation-timing-function:ease-in-out]"
                      />
                    </div>
                  </div>

                  {/* Tool 3 - Notebook (near celebrating student, bottom-center) */}
                  <div className="absolute -top-10 md:bottom-24 right-0 lg:-right-10 z-10">
                    <div className="relative w-12 h-12 lg:w-20 lg:h-20">
                      <Image
                        src="/img/Hero5008_Tool_3.png"
                        alt="Notebook"
                        fill
                        className="object-contain animate-bounce [animation-duration:10s] [animation-timing-function:ease-in-out]"
                      />
                    </div>
                  </div>
                  {/* Statistics Section - Bottom */}
                  <div className=' block md:hidden w-full mx-auto z-50'>
                    <div className=" relative top-50 flex flex-row items-center justify-center gap-4">
                      {/* Badge 1 - Shortest Matching Time */}
                      <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32">
                        <Image
                          src="/img/Hero5008_Badge_1.png"
                          alt="Golden laurel wreath badge"
                          fill
                          className="object-cover"
                        />
                        {/* Text Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                          <p className="text-xs md:text-xs text-gray-800 font-bold text-center">最短</p>
                          <p className="text-xs md:text-xs text-gray-800 font-bold text-center">マッチング時間</p>
                          <p className="text-xl md:text-2xl lg:text-3xl text-orange-500 font-bold">3秒</p>
                        </div>
                      </div>

                      {/* Badge 2 - Average Resolution Time */}
                      <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32">
                        <Image
                          src="/img/Hero5008_Badge_1.png"
                          alt="Golden laurel wreath badge"
                          fill
                          className="object-cover"
                        />
                        {/* Text Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                          <p className="text-xs md:text-xs text-gray-800 font-bold text-center">平均</p>
                          <p className="text-xs md:text-xs text-gray-800 font-bold text-center">解決時間</p>
                          <p className="text-xl md:text-2xl lg:text-3xl text-orange-500 font-bold">25分</p>
                        </div>
                      </div>

                      {/* Badge 3 - Satisfaction Rate */}
                      <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32">
                        <Image
                          src="/img/Hero5008_Badge_1.png"
                          alt="Golden laurel wreath badge"
                          fill
                          className="object-cover"
                        />
                        {/* Text Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                          <p className="text-xs md:text-sm text-gray-800 font-bold text-center">満足度</p>
                          <p className="text-xl md:text-2xl lg:text-3xl text-orange-500 font-bold">95%</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>)}

    </div>
  );
}

