'use client';

// import Image from 'next/image';
import { Hand } from 'lucide-react';

export default function Hero5000() {
  return (
    <div className="w-full top-0 bg-white relative overflow-hidden min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
      {/* Background Images - Optional, can be added later */}
      <div className="absolute inset-0 z-0">
        {/* Left Background - Caregiver/Nurse */}
        <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-pink-50 to-blue-50"></div>
        </div>
        {/* Right Background - Business People */}
        <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-green-50"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Center Biggest Circle */}
        <div className="relative mx-auto w-full max-w-[400px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[500px] aspect-square">
          {/* Main White Circle */}
          <div className="relative w-full h-full rounded-full bg-white shadow-2xl border-2 border-green-100">
            {/* Subtle Background Pattern using Tailwind */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-50/50 to-transparent"></div>

            {/* Content Container */}
            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16">
              {/* Top Curved Text Container */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[60%] sm:w-[60%] md:w-[60%]">
                {/* Curved Text using SVG Path */}
                <svg
                  viewBox="0 0 400 80"
                  className="w-full h-20"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <path
                      id="curve-path"
                      d="M 70,100 Q 180,20 350,100"
                      fill="none"
                    />
                  </defs>
                  <text
                    className="text-green-600 fill-green-600 font-semibold text-xl"
                  >
                    <textPath href="#curve-path" startOffset="5%">
                      | 医療、介護者開発様必見! |
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Hand Cursor Icon - Positioned below curved text */}
              <div className="absolute top-20 sm:top-24 md:top-28 lg:top-32 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Hand className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-green-600 rotate-[-20deg]" />
                </div>
              </div>

              {/* Main Value Proposition */}
              <div className="items-center justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
                {/* 最大 - Maximum */}
                <div className='flex'>

                  <span className="text-sm sm:text-base md:text-lg lg:text-xl text-green-600 font-semibold mb-1 sm:mb-2">
                    最大
                  </span>

                  {/* 1億円まで - Up to 100 million yen */}
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-orange-500 mb-2 sm:mb-3 md:mb-4">
                    1億円
                  </span>

                  <span className="text-sm sm:text-base md:text-lg lg:text-xl text-green-600 font-semibold mb-1 sm:mb-2">
                    まで
                  </span>

                </div>
                {/* 調達可能! - Procurement possible! */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700">
                  調達可能!
                </h1>
              </div>

              {/* Smaller Orange Circles - Positioned around the main circle */}
              {/* Top Left Badge */}
              <div className="absolute top-8 sm:top-8 md:top-12 lg:top-12 left-0 sm:-left-8 md:-left-12 lg:-left-16 xl:-left-20">
                <div className="w-20 h-20  bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-center px-2 sm:px-3">
                    <p className="text-sm font-semibold leading-tight">
                      初期<br />審査費用<br />0円
                    </p>
                  </div>
                </div>
              </div>

              {/* Mid Left Badge */}
              <div className="absolute top-2/5 -translate-y-1/2 left-0 sm:-left-8 md:-left-24 lg:-left-28 xl:-left-32">
                <div className="w-20 h-20 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-center px-2 sm:px-3">
                    <p className="text-sm font-semibold leading-tight">
                      最短<br />翌営業日<br />調達可能
                    </p>
                  </div>
                </div>
              </div>

              {/* Top Right Badge */}
              <div className="absolute top-7 sm:top-7 md:top-12 lg:top-12 right-0 sm:-right-8 md:-right-12 lg:-right-16 xl:-right-20">
                <div className="w-20 h-20 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-center px-2 sm:px-3">
                    <p className="text-sm font-semibold leading-tight">
                      日本全国<br />対応
                    </p>
                  </div>
                </div>
              </div>

              {/* Mid Right Badge */}
              <div className="absolute top-2/5 -translate-y-1/2 right-0 sm:-right-8 md:-right-24 lg:-right-28 xl:-right-32">
                <div className="w-20 h-20 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-center px-2 sm:px-3">
                    <p className="text-sm font-semibold leading-tight">
                      新規<br />事業者も<br />OK
                    </p>
                  </div>
                </div>
              </div>

              <div className=" absolute flex -bottom-5 gap-3">
                <div className=" top-12 sm:top-16 md:top-20 lg:top-24 left-0 sm:-left-8 md:-left-12 lg:-left-16 xl:-left-20">
                  <div className="w-24 h-24  bg-yellow-300 text-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-center px-2 sm:px-3">
                      <p className="text-sm font-semibold leading-tight">
                        買いけり
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" top-12 sm:top-16 md:top-20 lg:top-24 left-0 sm:-left-8 md:-left-12 lg:-left-16 xl:-left-20">
                  <div className="w-24 h-24  bg-yellow-300 text-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-center px-2 sm:px-3">
                      <p className="text-3xl font-semibold leading-tight">
                        80
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" top-12 sm:top-16 md:top-20 lg:top-24 left-0 sm:-left-8 md:-left-12 lg:-left-16 xl:-left-20">
                  <div className="w-24 h-24  bg-yellow-300 text-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-center px-2 sm:px-3">
                      <p className="text-3xl font-semibold leading-tight">
                        90
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

