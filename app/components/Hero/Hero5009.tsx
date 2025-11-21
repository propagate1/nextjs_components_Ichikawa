'use client';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Header5009 from '../Header/Header5009';

export default function Hero5009() {


  return (

    <div className="w-full relative flex flex-col bg-gradient-to-b from-blue-50 to-white">

      <Header5009/>

      {/* Content Container */}
      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-0 sm:mx-auto w-full">

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center  p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-2">

            {/* Left Section: Text Content */}
            <div className="flex-1 flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 z-10">
              {/* Blue Service Banner */}
              <div className=" relative w-fit bg-sky-500 text-white px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 rounded-full">
                <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                  発信IVRサービス
                </span>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-transparent border-t-sky-500" style={{ top: '100%' }}></div>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sky-500 leading-tight italic">
                <span className="block">あらゆる<span className=' text-sky-700'>架電</span>業務<span className=' text-xl sm:text-2xl md:text-3xl lg:text-4xl'>を</span></span>
                <p className="flex flex-row items-center text-sky-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl gap-4 mt-4">
                  自動化
                  <span className="not-italic text-sm sm:text-base md:text-lg lg:text-xl text-black leading-relaxed">
                    コア業務に集中できる<br className="block" />
                    体制をソクコムで。
                  </span>
                </p>
              </h1>

              {/* Statistics - Mobile/Tablet Layout */}
              <div className="flex flex-col sm:flex-row gap-4 lg:hidden">
                {/* Video */}
                <div className="flex flex-1 relative min-h-[300px]">
                  {/* Background Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <video
                      src="https://sokucom.cloud/websys/wp-content/themes/sokucom/2025/assets/images/mainvisual_video.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className=" absolute z-0 w-[71%] h-[80%] flex items-center justify-center m-auto inset-0 object-contain object-center"
                    />
                    <Image
                      src="/img/Hero5009_Bg_1.png"
                      alt="Background with laptop and UI"
                      fill
                      className="object-contain object-right mt-2"
                      priority
                    />
                  </div>

                  {/* Annual Calls Statistic - Top Left */}
                  <div className="absolute top-8 lg:top-12 left-4 lg:left-6 flex flex-row items-end justify-center bg-white text-sky-500 font-bold rounded-xl px-4 shadow-lg z-10 text-md ">
                    <p className="">年間通話</p>
                    <p className="text-2xl lg:text-4xl text-orange-500">
                      43<span className=' text-md lg:text-lg'>億</span><span className=' text-md lg:text-lg text-sky-500'>秒</span>
                    </p>
                    <div className="absolute left-1/4 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[1px] border-t-[15px] border-transparent shadow-2xl shadow-gray-400 border-t-white" style={{ top: '100%' }}></div>
                  </div>

                  {/* Company Count Statistic - Top Right */}
                  <div className="absolute top-12 lg:top-20 right-4 lg:right-6 p-2 bg-white rounded-full flex items-center gap-3 z-10">
                    <div className="w-12 h-12 lg:w-30 lg:h-30 p-4 relative">
                      <Image
                        src="/img/Hero5009_Badge_1.png"
                        alt=""
                        fill
                        className="object-cover object-center"
                        priority
                      />
                    </div>
                    <div className="absolute top-0 left-0  z-10 w-full h-full flex flex-col items-center justify-center text-sky-900 px-4 text-center tracking-widest" style={{ paddingTop: '20%', paddingBottom: '8%' }}>
                      <span className=" font-bold text-[4px] lg:text-[12px]">累計社数<br />
                        <span className="text-[12px] sm:text-sm  lg:text-3xl">1,100</span><br />
                        <span className=" text-[8px] lg:text-sm">社
                        </span></span>
                    </div>
                  </div>

                  {/* Chatbot Icon - Bottom Right */}
                  <div className="absolute bottom-15 -right-5 w-20 h-20">
                    <Image
                      src="/img/Hero5009_Icon_1.png"
                      alt="24/7 Chatbot Support"
                      fill
                      className="object-contain object-center"
                      priority
                    />
                  </div>

                </div>
              </div>

              {/* Call to Action Button */}
              <button className="w-full lg:w-3/5 bg-white border-2 border-green-500 text-green-600 px-6 lg:px-8 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl text-sm lg:text-md font-bold hover:bg-green-50 transition-colors flex items-center justify-center gap-2 sm:gap-3">
                <span>ロボットコールを体験!</span>
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Right Section: Background Image with Positioned Elements - Desktop Layout */}
            <div className="hidden lg:flex flex-1 relative min-h-[500px] lg:min-h-[600px]">

              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                {/* Video */}
                <video
                  src="https://sokucom.cloud/websys/wp-content/themes/sokucom/2025/assets/images/mainvisual_video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className=" absolute z-0 w-[71%] h-[80%] flex items-center justify-center m-auto inset-0 object-contain object-center"
                />
                <Image
                  src="/img/Hero5009_Bg_1.png"
                  alt="Background with laptop and UI"
                  fill
                  className="  object-contain object-right mt-5"
                  priority
                />
              </div>

              {/* Annual Calls Statistic - Top Left */}
              <div className="absolute top-8 lg:top-12 left-4 lg:left-6 flex flex-row items-end justify-center bg-white text-sky-500 font-bold rounded-xl lg:rounded-2xl px-4 lg:px-6 py-3 lg:py-4 shadow-lg z-10 text-md lg:text-lg">
                <p className="">年間通話</p>
                <p className="text-2xl lg:text-4xl text-orange-500">
                  43<span className=' text-md lg:text-lg'>億</span><span className=' text-md lg:text-lg text-sky-500'>秒</span>
                </p>
                <div className="absolute left-1/4 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[1px] border-t-[15px] border-transparent shadow-2xl shadow-gray-400 border-t-white" style={{ top: '100%' }}></div>
              </div>

              {/* Company Count Statistic - Top Right */}
              <div className="absolute top-12 lg:top-20 right-4 lg:right-6 p-2 bg-white rounded-full flex items-center gap-3 z-10">
                <div className="w-12 h-12 lg:w-30 lg:h-30 p-4 relative">
                  <Image
                    src="/img/Hero5009_Badge_1.png"
                    alt=""
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
                <div className="absolute top-0 left-0  z-10 w-full h-full flex flex-col items-center justify-center text-sky-900 px-4 text-center tracking-widest" style={{ paddingTop: '20%', paddingBottom: '8%' }}>
                  <span className=" font-bold text-[4px] lg:text-[12px]">累計社数<br />
                    <span className="text-[12px] md:text-xl lg:text-3xl">1,100</span><br />
                    <span className=" text-[8px] lg:text-sm">社
                    </span></span>
                </div>
              </div>

              {/* Chatbot Icon - Bottom Right */}
              <div className="absolute bottom-4 lg:bottom-30 right-0 w-24 h-24 lg:w-32 lg:h-32 z-10">
                <Image
                  src="/img/Hero5009_Icon_1.png"
                  alt="24/7 Chatbot Support"
                  fill
                  className="object-contain object-center"
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

