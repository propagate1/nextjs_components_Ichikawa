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
    <div className="w-full relative min-h-screen py-8 md:py-12 lg:py-16 overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Top Section */}
        <div className="mb-8 md:mb-12 lg:mb-16 ">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-yellow-400 text-center mb-4 md:mb-6 leading-12">
            情報事故
            <span className=" text-white">が<br className=' block md:hidden' />発生すると</span>
            <span className="text-white">…</span>
          </h1>

          {/* Descriptive Text */}
          <div className="text-center space-y-2 md:space-y-3 mb-6 md:mb-8">
            <p className="text-white text-base md:text-xl lg:text-2xl xl:text-3xl leading-relaxed">
              取引先からの損害賠償請求、<br className=' block md:hidden' />情報事故の原因や被害の調査費用
            </p>
            <p className="text-white text-base md:text-xl lg:text-2xl xl:text-3xl leading-relaxed">
              システム等の復旧費用、<br className=' block md:hidden' />訴訟対応のための費用など
            </p>
            <div className="mt-4 md:mt-6 text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-relaxed">
              <span className="text-black bg-yellow-400  px-1 mr-1">
                事業活動の継続に大きな影響
              </span>
              <span className="text-white  mt-4 md:mt-6 text-lg md:text-xl lg:text-2xl xl:text-3xl">
                を<br className=' block md:hidden' />及ぼすことがあります。
              </span>
            </div>
          </div>

          {/* Chevron Down Indicators */}
          <div className=" relative w-full h-12 lg:h-20">
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
        <div className=" flex flex-col lg:flex-row w-full gap-6 mb-8 md:mb-12">
          {costExamples.map((example) => (
            <div
              key={example.id}
              className="flex flex-row lg:flex-col items-center justify-center w-full bg-gray-800 overflow-hidden "
            >
              {/* Image Section - Left */}
              <div className=" bg-gray-700 relative w-1/2 lg:w-full h-40 sm:h-56 md:h-64 lg:h-72 flex-shrink-0">
                <Image
                  src={example.icon}
                  alt={example.alt}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Text Section - Right */}
              <div className="w-1/2 lg:w-full h-full lg:h-1/2 p-2 md:p-4 bg-gray-gray-800 flex flex-col items-center justify-center">
                <h2 className="text-white text-lg md:text-3xl lg:text-4xl font-semibold my-4 md:my-8 text-center">
                  {example.title}
                </h2>
                <div className="text-center md:text-left my-3 lg:my-6">
                  <p className="text-yellow-400  font-bold">
                    <span className='text-2xl sm:text-4xl md:text-5xl lg:text-5xl'>{example.amount}</span><span className=' text-md sm:text-lg md:text-3xl lg:text-3xl'>万円</span>
                    <sup className="text-md sm:text-lg md:text-2xl lg:text-2xl text-white ml-1">
                      {example.footnote}
                    </sup>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnotes Section */}
        <div className="space-y-3 md:space-y-4">
          <div className=" flex flex-row gap-4 text-white text-sm sm:text-lg md:text-xl leading-relaxed">
            <p className="font-semibold">※1</p>
            <p>
              情報事故の原因や被害の調査費用、<br className=' block lg:hidden' />被害を受けたシステム等の復旧費用、<br className=' block lg:hidden' />訴訟を行った際の費用など。
            </p>
          </div>
          <div className="flex flex-row gap-4 text-white text-sm sm:text-lg md:text-xl leading-relaxed">
            <p className="font-semibold">※2</p>
            <p>実際の情報事故に基づく例を記載しています。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

