'use client';
import Image from 'next/image';

export default function Hero5010() {
  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white min-h-screen">
      {/* Header Section */}
      <div className="relative z-20 bg-white border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between py-3 md:py-4 lg:py-5">
            {/* Logo */}
            <div className="relative w-32 h-8 md:w-40 md:h-10 lg:w-48 lg:h-12">
              <Image
                src="/img/Hero5010_Logo_1.png"
                alt="GMO Click Securities"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            {/* CTA Button */}
            <button className="bg-[#e60012] text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 rounded-full text-xs md:text-sm lg:text-base font-bold hover:bg-[#c00c06] transition-colors whitespace-nowrap">
              口座開設はこちら
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative z-10 py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="w-full flex flex-col lg:flex-row items-start lg:items-end gap-8">
            {/* Left Section: Text Content */}
            <div className="flex-1 flex flex-col items-center justify-center gap-4 m-auto lg:m-0">
              {/* Headline */}
              <div className="text-center lg:text-left">
                <h1 className="text-xl md:text-2xl lg:text-3xl text-blue-900 font-bold mb-2 md:mb-3">
                  <span className="inline-block">――FXはじめるなら――</span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue-900 font-bold text-center">
                  GMOクリック証券
                </h2>
              </div>

              {/* Promotional Box */}
              <div className='flex flex-row items-center justify-center'>
                <div>
                  <div className=" flex flex-col items-center justify-between border-2 border-purple-300 rounded-lg md:rounded-xl p-2 bg-gradient-to-br from-purple-50 to-pink-100 shadow-md">
                    {/* Transaction Fees Label */}
                    <div className="bg-blue-900 text-white rounded-full px-2 py-1 md:px-6 md:py-3 mb-4 md:mb-6 inline-block">
                      <span className="text-sm md:text-base lg:text-lg font-bold">取引手数料</span>
                    </div>

                    {/* Main Promotional Text */}
                    <div className=" text-center">
                      <p className="text-2xl md:text-5xl lg:text-6xl text-blue-900 font-bold mb-2 md:mb-3 leading-tight">
                        完全無料!
                      </p>
                      <p className="text-sm md:text-lg lg:text-xl text-blue-900 font-semibold">
                        FX・株式・投信
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">
                        ※電話注文は除く
                      </p>
                    </div>
                  </div>
                  <div className=' block lg:hidden mt-4'>
                    <div className="flex flex-col items-center">
                      {/* Badge 1 - Oricon */}
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <Image
                          src="/img/Hero5010_Badge_1.png"
                          alt="Oricon Customer Satisfaction Award"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className=' flex flex-row'>
                        {/* Badge 2 - Minkabu */}
                        <div className="relative w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 flex-shrink-0">
                          <Image
                            src="/img/Hero5010_Badge_2.png"
                            alt="Minkabu FX Company Ranking"
                            fill
                            className="object-contain"
                          />
                        </div>
                        {/* Badge 3 - Minkabu */}
                        <div className="relative w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 flex-shrink-0">
                          <Image
                            src="/img/Hero5010_Badge_2.png"
                            alt="Minkabu FX Company Ranking"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=' block lg:hidden'>
                  <div className="relative w-[150px] h-[160px] sm:w-[200px] sm:h-[250px] flex-shrink-0 ">
                    <Image
                      src="/img/Hero5010_Woman_1.png"
                      alt="Smiling woman pointing"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* CTA Text */}
              <div className="hidden lg:block text-center lg:text-left">
                <p className="text-lg md:text-xl lg:text-2xl text-black font-bold  px-4 py-2 rounded-lg inline-block">
                  \最短<span className="text-xl md:text-2xl lg:text-3xl">30</span>分で取引開始/
                </p>
              </div>

              {/* Main CTA Button */}
              <div className="hidden lg:block text-center lg:text-left">
                <button className="bg-[#e60012] text-white px-6 py-3 md:px-8 md:py-4 lg:px-12 lg:py-5 rounded-full border-2 border-white text-base md:text-lg lg:text-xl font-bold hover:bg-[#c00c06] transition-colors w-full md:w-auto shadow-lg hover:shadow-xl">
                  無料口座開設はこちら &gt;
                </button>
              </div>
            </div>

            {/* Right Section: Woman Image and Badges */}
            <div className="hidden flex-1 relative lg:block">
              <div className="flex flex-col lg:flex-row items-start justify-center">
                {/* Woman Image */}
                <div className="relative lg:w-[450px] lg:h-[500px] flex-shrink-0 ">
                  <Image
                    src="/img/Hero5010_Woman_1.png"
                    alt="Smiling woman pointing"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* Award Badges Stack - Vertical on desktop, horizontal on mobile */}
                <div className="flex flex-row lg:flex-col gap-3 md:gap-4 lg:gap-6 items-center lg:items-start">
                  {/* Badge 1 - Oricon */}
                  <div className="relative w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 flex-shrink-0">
                    <Image
                      src="/img/Hero5010_Badge_1.png"
                      alt="Oricon Customer Satisfaction Award"
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Badge 2 - Minkabu */}
                  <div className="relative w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 flex-shrink-0">
                    <Image
                      src="/img/Hero5010_Badge_2.png"
                      alt="Minkabu FX Company Ranking"
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* Badge 3 - Minkabu */}
                  <div className="relative w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 flex-shrink-0">
                    <Image
                      src="/img/Hero5010_Badge_2.png"
                      alt="Minkabu FX Company Ranking"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {/* Diagonal Blue Shape - Behind woman */}
        <div className="absolute top-1/4 right-0 w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-blue-200 opacity-30 transform rotate-45 rounded-full blur-3xl"></div>
        {/* Pink Accent */}
        <div className="absolute bottom-1/4 left-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-pink-200 opacity-20 transform -rotate-12 rounded-full blur-3xl"></div>
        {/* Green Accent */}
        <div className="absolute top-1/2 right-1/4 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-green-200 opacity-20 transform rotate-12 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}

