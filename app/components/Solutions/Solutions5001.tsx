'use client';
import Image from 'next/image';

export default function Solutions5001() {
  const compensations = [
    {
      id: 1,
      title: '損害賠償責任に対する補償',
      amount: '10億円',
      icon: '/img/Solutions5001_Icon_1.png',
      alt: 'Compensation for liability',
    },
    {
      id: 2,
      title: '事故対応にかかる費用の補償',
      amount: '5億円',
      icon: '/img/Solutions5001_Icon_2.png',
      alt: 'Compensation for accident response costs',
    },
    {
      id: 3,
      title: '事業中断に伴う逸失利益の補償 (オプション)',
      amount: '1億円',
      icon: '/img/Solutions5001_Icon_3.png',
      alt: 'Compensation for lost profits',
    },
  ];

  return (
    <div className="w-full relative min-h-screen py-8 md:py-12 lg:py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/img/Solutions5001_Bg_1.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Top Section */}
          <div className=" mb-8 md:mb-12 lg:mb-16">
            {/* Badge */}
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <div className="bg-[#4a90e2] rounded-full w-32 h-32 p-4 text-center flex items-center justify-center">
                <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold">
                  被害額<br /><span className=' text-xs md:text-md lg:text-lg'>を</span>
                </p>
              </div>
            </div>

            {/* Main Title with Laurel Wreaths */}
            <div className="flex items-center justify-center gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6">
              {/* Left Laurel Wreath */}
              <div className="relative w-12 h-20 sm:w-16 sm:h-24 md:w-20 md:h-28 lg:w-24 lg:h-32 flex-shrink-0">
                <Image
                  src="/img/Solutions5001_Icon_4.png"
                  alt="Laurel wreath"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Main Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1a4d7a] text-center">
                サイバー保険で補償
              </h1>

              {/* Right Laurel Wreath */}
              <div className="relative w-12 h-20 sm:w-16 sm:h-24 md:w-20 md:h-28 lg:w-24 lg:h-32 flex-shrink-0">
                <Image
                  src="/img/Solutions5001_Icon_5.png"
                  alt="Laurel wreath"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Descriptive Text */}
            <div className="text-center space-y-2 md:space-y-3 mb-6 md:mb-8">
              <p className="text-gray-700 text-lg md:xl lg:text-2xl leading-relaxed">
                情報事故に起因する<br className=' block md:hidden' /><span className=' text-amber-600'>損害賠償費用</span>や<span className=' text-amber-600'>事故対応費用<sup className="text-md md:text-lg lg:text-xl">*1</sup></span>
                <br className=' hidden md:block' />
                <span className=' text-amber-600'>事業中断に伴う逸失利益</span>などの<span className=' text-amber-600'>経済的な損失を補償</span>します。
              </p>
            </div>
        </div>

        {/* Compensation Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-12 px-4 lg:px-20">
          {compensations.map((compensation) => (
            <div
              key={compensation.id}
              className="bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow pb-0 md:pb-6 lg:pb-10"
            >
              {/* Card Header */}
              <div className="h-1/4 bg-[#4a90e2] px-4 md:px-8 py-3 md:py-4 flex items-center justify-center">
                <h2 className="text-white text-md lg:text-xl xl:text-2xl font-semibold text-center leading-tight">
                  {compensation.title}
                </h2>
              </div>

              {/* Card Body */}
              <div className="flex flex-row md:flex-col items-center justify-center gap-2 p-4 md:p-6 lg:p-8">
                {/* Icon */}
                <div className="flex items-center justify-center mb-4 md:mb-6">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-full overflow-hidden bg-gray-50">
                    <Image
                      src={compensation.icon}
                      alt={compensation.alt}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Amount */}
                <div className="text-center">
                  <p className="text-gray-600 text-md sm:text-lg md:text-xl font-bold mb-2 md:mb-3">
                    最大保証金額例
                  </p>
                  <p className="text-[#4a90e2] text-4xl lg:text-5xl font-bold whitespace-nowrap">
                    {compensation.amount}
                    <sup className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                      <span className="text-gray-700">*3</span>
                    </sup>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center">
          <p className="text-gray-600 text-xs sm:text-sm md:text-base font-semibold leading-relaxed">
            ※3 補償金額は例を記載しています。お客さまが抱えるリスクや対策状況に基づき適切な補償金額をご提案します。
          </p>
        </div>
      </div>
    </div>
  );
}

