'use client';
import Image from 'next/image';

export default function Challenges5004() {
  const costExamples = [
    {
      id: 1,
      title: '損害賠償請求額の例',
      amount: '6,000',
      icon: '/img/Challenges5004_Icon_1.png',
      alt: 'Gavel representing damages claim',
      footnote: '*2',
    },
    {
      id: 2,
      title: '事故対応費用の例',
      amount: '3,000',
      icon: '/img/Challenges5004_Icon_2.png',
      alt: 'Bowing people representing accident response costs',
      footnote: '*2',
    },
    {
      id: 3,
      title: '事業中断に伴う逸失利益の例',
      amount: '7,000',
      icon: '/img/Challenges5004_Icon_3.png',
      alt: 'CLOSED sign representing lost profits',
      footnote: '*2',
    },
  ];

  return (
    <div className="w-full relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/img/Challenges5004_Bg_1.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mt-8">
        {/* Top Section */}
        <div className="mb-2">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#c7b289] text-center mb-4 md:mb-6 leading-12">
            <div className="relative inline-flex flex-col items-center">
              {/* Dots */}
              <div className="absolute -top-3 flex gap-6 md:gap-10">
                <span className="w-2 h-2 rounded-full bg-[#c7b289]" />
                <span className="w-2 h-2 rounded-full bg-[#c7b289]" />
                <span className="w-2 h-2 rounded-full bg-[#c7b289]" />
                <span className="w-2 h-2 rounded-full bg-[#c7b289]" />
              </div>

              {/* Text */}
              <span className="ext-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold">情報事故</span>
            </div>
            <span className=" text-white">が<br className=' block md:hidden' />発生すると</span>
            <span className="text-white">…</span>
          </h1>

          {/* Descriptive Text */}
          <div className="text-center space-y-2 md:space-y-3 mb-2">
            <p className="text-white text-base md:text-xl xl:text-2xl">
              取引先からの損害賠償請求、<br className=' block md:hidden' />情報事故の原因や被害の調査費用
            </p>
            <p className="text-white text-base md:text-xl xl:text-2xl">
              システム等の復旧費用、<br className=' block md:hidden' />訴訟対応のための費用など
            </p>
            <div className="mt-4 md:mt-6 text-lg md:text-2xl xl:text-3xl font-bold">
              <span className="text-gray-900 bg-[#c7b289]  px-1 mr-1">
                事業活動の継続に大きな影響
              </span>
              <span className="text-white  mt-4 md:mt-6 text-lg md:text-xl xl:text-2xl">
                を<br className=' block md:hidden font-medium' />及ぼすことがあります。
              </span>
            </div>
          </div>

          {/* Chevron Down Indicators */}
          <div className=" relative w-full h-12 xl:h-16">
            <Image
              src="/img/Challenges5004_Icon_4.png"
              alt="arrow"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>

        {/* Cost Examples Section */}
        <div className=" flex flex-col lg:flex-row max-w-[768px] gap-6 m-auto">
          {costExamples.map((example) => (
            <div
              key={example.id}
              className="flex flex-row lg:flex-col items-center justify-center w-full bg-gray-800 overflow-hidden "
            >
              {/* Image Section - Left */}
              <div className=" bg-gray-700 relative w-1/2 h-32 md:h-40 lg:w-full lg:h-36 xl:h-40 flex-shrink-0">
                <Image
                  src={example.icon}
                  alt={example.alt}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Text Section - Right */}
              <div className="w-1/2 lg:w-full h-full lg:h-1/2 p-2 xl:p-4 bg-gray-gray-800 flex flex-col items-center justify-center">
                <h2 className="text-white text-lg md:text-xl font-semibold  text-center">
                  {example.title}
                </h2>
                <div className="text-center md:text-left mt-6">
                  <p className="text-[#c7b289]  font-bold">
                    <span className='text-2xl md:text-4xl'>{example.amount}</span><span className=' text-md sm:text-lg md:text-2xl'>万円</span>
                    <sup className="text-md sm:text-lg md:text-xl text-white ml-1">
                      {example.footnote}
                    </sup>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnotes Section */}
        <div className="space-y-3 md:space-y-4  text-white text-sm lg:text-md xl:text-lg max-w-[768px] m-auto my-4">
          <div className=" flex flex-row gap-4">
            <p className="font-semibold">※1</p>
            <p>
              情報事故の原因や被害の調査費用、<br className=' block md:hidden' />被害を受けたシステム等の復旧費用、<br className=' block md:hidden' />訴訟を行った際の費用など。
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <p className="font-semibold">※2</p>
            <p>実際の情報事故に基づく例を記載しています。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

