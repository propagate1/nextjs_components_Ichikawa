'use client';
import Image from 'next/image';

export default function Features5003() {
  const features = [
    {
      number: '01',
      title: '電源を入れるだけ、すぐに会議をスタート可能',
      description:
        'カメラやマイクなど他の機器の準備や設定、煩雑な接続ケーブルは不要で会議準備の時間を大幅に短縮。大型タッチパネルモニターに高品質なカメラ、マイク、スピーカー、Windows OSを搭載。会議に必要な機能をすべてが揃っています。',
      image: '/img/Features5003_Bg_1.jpg',
    },
    {
      number: '02',
      title: '対面時のような場の雰囲気で、遠隔地との意思疎通をスムーズに',
      description:
        '高性能のマイクとカメラで、遠隔地でも対面のようなミーティングの雰囲気が作れ円滑なコミュニケーションができます。チーム全員の一体感とチームワークの促進につながります。',
      image: '/img/Features5003_Bg_2.jpg',
    },
    {
      number: '03',
      title: '遠隔地との共同作業で、会議の生産性を向上',
      description:
        '遠隔地のMAXHUBと通信するとWEB上での資料共有は勿論のこと、資料自体に双方からの書き込みが可能です。遠隔地との活発なコミュニケーションを誘発し、会議の質を高めてくれます。',
      image: '/img/Features5003_Bg_3.jpg',
    },
  ];

  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          {/* Main Title - FEATURE */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#686135] mb-4 md:mb-6">
            FEATURE
          </h1>
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-black font-medium">
            だから選ばれる! MAXHUBの特徴
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {features.map((feature, index) => {
            const isEven = index % 2 === 1; // Second feature (index 1) has image on left
            const imageOnLeft = isEven;

            return (
              <div
                key={index}
              className={` bg-gray-100 relative flex  ${imageOnLeft ? "flex-col" : "flex-col-reverse" } lg:flex-row items-center lg:items-start gap-6 md:gap-8 lg:gap-12`}
              >
                {/* Image Section - Left for second feature, Right for first and third */}
                {imageOnLeft && (
                  <div className="w-full lg:w-[45%] relative -mt-8 md:-mt-12 lg:-mt-16 order-1">
                    {/* Image Container */}
                    <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-lg md:rounded-xl overflow-hidden z-0">
                      <Image
                        src={feature.image}
                        alt={`Feature ${feature.number}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />

                    </div>
                  </div>
                )}

                {/* Content Section - Number and Text */}
                <div className="w-full lg:w-[55%] flex flex-col order-2 m-4 lg:m-16">
                  {/* FEATURE Label and Number on same line */}
                  <div className="flex items-baseline gap-3 md:gap-4 mb-4 md:mb-6 -mt-4 md:-mt-6 lg:-mt-8">
                    <p className="relative -mt-15 lg:-mt-35 w-20 lg:w-30 h-15 lg:h-30 font-bold text-white bg-black z-20" style={{ clipPath: 'polygon(20% 0, 30% 0, 10% 100%, 0% 100%)' }}>
                    </p>
                    <span className="text-sm md:text-base lg:text-lg font-bold text-[#686135]">
                      FEATURE
                    </span>
                    <span className=" relative z-20 text-8xl md:text-9xl lg:text-[12rem] font-bold text-white leading-none -mt-15 lg:-mt-35 [-webkit-text-stroke-width:1.5px] [-webkit-text-stroke-color:#686135]">
                      {feature.number}
                    </span>
                  </div>

                  {/* Content Box */}
                  <div className="mt-4 md:mt-6">
                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4 md:mb-6 leading-tight">
                      {feature.title}
                    </h2>

                    {/* Description */}
                    <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed w-[90%] lg:w-full">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Image Section - Right for first and third features */}
                {!imageOnLeft && (
                  <div className="w-full lg:w-[55%] relative -mt-8 md:-mt-12 lg:-mt-16 order-3">
                    {/* Image Container */}
                    <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-lg md:rounded-xl overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={`Feature ${feature.number}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

