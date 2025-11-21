'use client';
import Image from 'next/image';

export default function Product5003() {
  return (
    <div className="w-full bg-[#f5f0e8] py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Main Information Box */}
        <div className="relative rounded-lg md:rounded-xl p-6 md:p-8 lg:p-10 shadow-lg">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/img/Product5003_Bg_1.png"
              alt="Notebook paper background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Layer */}
          <div className="relative z-30">

            {/* Warning Label - Top Left */}
            <div className="relative -mt-20 mb-4 md:mb-6 inline-block">
              <div className="relative w-20 h-16 md:w-24 md:h-20 lg:w-28 lg:h-24">
                <Image
                  src="/img/Product5003_Icon_1.png"
                  alt="Warning label background"
                  fill
                  className="object-contain object-left"
                  priority
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs md:text-sm lg:text-base font-bold text-white text-center leading-tight">
                    ご注意<br />ください
                  </span>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="mb-6 md:mb-8 text-center font-bold text-[#5d4037]">
              <h2 className="text-sm md:text-xl lg:text-2xl mb-4">
                「整体や雅」のオーダーメイド枕は
              </h2>
              <p className='text-md md:text-3xl lg:text-4xl '>
                こんな方にはおすすめしません。
              </p>
            </div>

            {/* Content Section with Bullet Points and Explanation Box */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              {/* Left: Bullet Points */}
              <div className="flex-1 space-y-4">
                {/* First Bullet Point */}
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 md:w-7 md:h-7 border-2 border-[#d32f2f] bg-white rounded flex items-center justify-center">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#d32f2f]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm md:text-lg lg:text-xl text-[#5d4037] font-semibold flex-1">
                    やわらかい枕を作ってほしい!
                  </p>
                </div>

                <div className=' border-t-2 border-b-gray-700 mr-6'>

                </div>

                {/* Second Bullet Point */}
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 md:w-7 md:h-7 border-2 border-[#d32f2f] bg-white rounded flex items-center justify-center">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#d32f2f]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm md:text-lg lg:text-xl text-[#5d4037] font-semibold flex-1">
                    好みの高さの枕にしてほしい!
                  </p>
                </div>
              </div>

              {/* Right: Explanation Box */}
              <div className="flex-1 max-w-md">
                <div className="relative w-full md:aspect-[7/3] lg:aspect-[8/4]">
                  <Image
                    src="/img/Product5003_Icon_2.png"
                    alt="Explanation box background"
                    fill
                    className="object-fit object-center"
                    priority
                  />
                  {/* Text Overlay */}
                  <div className=" relative md:absolute inset-0 flex items-center justify-center p-4 md:p-6 lg:p-8">
                    <div className="space-y-2 md:space-y-3 text-sm md:text-base lg:text-lg leading-relaxed text-white text-center">
                      <p className='px-4'>
                        硬さの調整は可能ですが、やわらかすぎる枕はお作りできません。好みを優先して枕を作りたい方はご遠慮ください。
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

