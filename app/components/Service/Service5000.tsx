'use client';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function Service5000() {
  return (
    <div className="w-full h-[1000px] sm:h-[900px] md:h-[1100px] lg:h-[800px] bg-[#fcf8f4] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Title Section */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-12 md:mb-16 lg:mb-20">
          京進グループの事業一覧
        </h2>

        {/* Main Content Area - Two Overlapping Blocks */}
        <div className="relative w-full">
          {/* Block 1: Background Image (Left Side) */}
          <div className="relative w-full md:w-full lg:w-[900px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl overflow-hidden shadow-lg">
            <Image
              src="/img/Service5000_Bg_1.jpg"
              alt="Children in classroom"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Block 2: Content Card (Right Side - Overlapping) */}
          <div className=" absolute top-[105%] md:top-[105%] lg:top-10 right-0 md:ml-auto md:w-full lg:w-[600px]">

            <div className="flex flex-col bg-white rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl p-4 ms:p-4 md:p-6 lg:p-8" >
              {/* Icon */}
              <div className=" absolute -top-8 left-[45%] lg:left-10 mb-4 md:mb-6">
                <div className=" bg-white w-full md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-4 border-blue-500 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Main Heading */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl  font-bold text-gray-800 my-4 md:my-6">
                子どもたちの学びを支える
              </h3>

              {/* Badges */}
              <div className="flex flex-row gap-1  sm:gap-2 md:gap-3 mb-6 md:mb-8">
                <span className="px-2 py-1 md:px-4 md:py-1.5 lg:px-5 lg:py-2 rounded-full bg-[#f0f8ff] border-2 border-blue-500 text-center text-blue-600 text-xs md:text-sm lg:text-base font-semibold">
                  個別指導
                </span>
                <span className="px-2 py-1 md:px-4 md:py-1.5 lg:px-5 lg:py-2 rounded-full bg-[#f0f8ff] border-2 border-blue-500 text-center text-blue-600 text-xs md:text-sm lg:text-base font-semibold">
                  子ども
                </span>
                <span className="px-2 py-1 md:px-4 md:py-1.5 lg:px-5 lg:py-2 rounded-full bg-[#f0f8ff] border-2 border-blue-500 text-center text-blue-600 text-xs md:text-sm lg:text-base font-semibold">
                  褒めて伸ばす
                </span>
                <span className="px-2 py-1 md:px-4 md:py-1.5 lg:px-5 lg:py-2 rounded-full bg-[#f0f8ff] border-2 border-blue-500 text-center text-blue-600 text-xs md:text-sm lg:text-base font-semibold">
                  人間力
                </span>
              </div>

              {/* Paragraph Text */}
              <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
                自ら学ぶ力を育み、「見えない学力」を育てる。脳科学に基づいた指導で、生徒の第一志望校合格と将来の夢をサポートします。
              </p>

              {/* CTA Link */}
              <a
                href="#"
                className=" flex justify-end text-right  items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm md:text-base lg:text-lg transition-colors mb-8 md:mb-10 lg:mb-12"
              >
                <span>学習塾サービス一覧を見る</span>
                {/* Navigation Button */}
              <div className="flex items-center justify-end">
                <button className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center transition-colors border-blue-500 border-solid border-1">
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                </button>
              </div>
              </a>
            </div>

            {/* Four Logo Cards */}
            <div className=" flex flex-row w-full gap-4 md:gap-6 my-2 md:my-4 lg:my-6">
              {/* Card 1: 京進の中学・高校受験 */}
              <div className=" relative w-full h-10 sm:h-20 bg-white rounded-lg shadow-md items-center justify-center transition-shadow">
                <Image
                  src="/img/Service5000_Icon_1.png"
                  alt="Children in classroom"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>

              {/* Card 2: 京進の大学受験 */}
              <div className=" relative w-full h-10 sm:h-20 bg-white rounded-lg shadow-md items-center justify-center transition-shadow">
                <Image
                  src="/img/Service5000_Icon_2.png"
                  alt="Children in classroom"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>

              {/* Card 3: 京進の個別指導 */}
              <div className=" relative w-full h-10 sm:h-20 bg-white rounded-lg shadow-md items-center justify-center transition-shadow">
                <Image
                  src="/img/Service5000_Icon_3.png"
                  alt="Children in classroom"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>

              {/* Card 4: 京進の小学校受験 */}
              <div className=" relative w-full h-10 sm:h-20 bg-white rounded-lg shadow-md items-center justify-center transition-shadow">
                <Image
                  src="/img/Service5000_Icon_4.png"
                  alt="Children in classroom"
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

