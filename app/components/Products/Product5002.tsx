'use client';
import Image from 'next/image';

export default function Product5002() {
  return (
    <div className="w-full bg-[#fcf8f4] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          {/* Icon - School Building */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mb-4 md:mb-6">
            <Image
              src="/img/Product5002_Icon_1.png"
              alt="スクリレ"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-800 font-bold">
            とは?
          </p>
        </div>

        {/* Main Content Section */}
        <div className="relative flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-0">
          {/* Left Column - Photo */}
          <div className="relative w-full lg:w-[55%] h-64 md:h-80 lg:h-96 rounded-xl md:rounded-3xl overflow-hidden z-20">
            <Image
              src="/img/Product5002_Bg_1.png"
              alt="Woman using smartphone"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Column - Information Card */}
          <div className="relative w-full lg:w-[50%] lg:-ml-12 lg:mt-16 bg-white rounded-xl md:rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col justify-center z-10">
            {/* Communication Flow Diagram */}
            <div className="relative w-full h-32 md:h-40 lg:h-48 mb-6 md:mb-8">
              <Image
                src="/img/Product5002_Icon_2.png"
                alt="Communication flow from school to guardian"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Descriptive Text */}
            <div className="space-y-3 md:space-y-4 text-center p-4">
              <p className="text-sm md:text-base lg:text-lg text-gray-800 font-bold leading-relaxed">
                学校と保護者の連絡をもっと便利にする、
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-800 font-bold leading-relaxed">
                デジタル連絡ツールです。
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-800 leading-relaxed mt-4 md:mt-6">
                お便りを、保護者のスマートフォンに
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-800 leading-relaxed">
                確実に届けることができます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

