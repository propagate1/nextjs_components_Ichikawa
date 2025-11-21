'use client';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function Features5001() {
  const features = [
    'ミーティングボードへのファイル挿入や他の端末とのワイヤレス接続が可能。',
    'ワンタッチで画面投影ができ、ミーティングボードからもPCからも投影したデータを操作できます。',
  ];

  const problems = [
    '発表者の交代のために会議の進行を止めたくない。',
    'PCをモニターやプロジェクターにケーブルでつなぐのに手間取ってしまう。',
    '資料のメンバーへの共有などに時間とコストがかかる。また、複数の資料や画像類を同時に表示できない。',
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* Top Section - Visual (55%) */}
      <div className="relative w-full h-[50vh] min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/img/Features5001_Bg_1.png"
            alt="Presentation meeting room"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Black Transparent Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Overlay on Screen Area - Icon and Text */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="flex flex-row items-center gap-4 md:gap-6">
            {/* Icon */}
            <div className="relative w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32">
              <Image
                src="/img/Features5001_Icon_1.png"
                alt="Presentation icon"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Text */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-lg">
              プレゼンテーション
            </h2>
          </div>
        </div>
      </div>

      {/* Bottom Section - Text Content (45%) */}
      <div className="relative w-full bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Large Faded Text */}

          <div className="absolute top-0 lg:-top-30 left-0 inset-0 w-full lg:w-[95%] rounded-tr-3xl bg-gray-200 z-10">
            <div className="absolute top-8 left-0 opacity-10 pointer-events-none">
              <span className="text-5xl md:text-9xl lg:text-[8rem] font-bold text-gray-500">
                Presentation
              </span>
            </div>
          </div>
          <div className="relative z-10">
            {/* Main Heading */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#595326] mb-4 md:mb-6 leading-relaxed">
              会議の準備・発表する方、プレゼンを聞く方の利便性を追求した機能が満載
            </h3>

            {/* Feature Descriptions */}
            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-12">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center gap-3 md:gap-4 text-base md:text-lg lg:text-xl text-gray-700"
                >
                  <span className="text-gray-500 mt-1"></span>
                  <span className=' font-bold text-center'>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Problem/Solution Section */}
            <div className="relative bg-[#595326] border-2 border-white rounded-lg md:rounded-xl p-6 md:p-8 lg:p-10 pt-12 md:pt-16 lg:pt-20">
              {/* Heading with Black Background - Positioned in Upper Left */}
              <h4 className="absolute -top-6 -left-4 md:-top-6 md:-left-6 lg:-top-8 lg:-left-8 text-lg md:text-2xl lg:text-3xl font-bold text-white bg-black px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 z-20" style={{clipPath: 'polygon(0 0, 100% 0, 96% 100%, 0% 100%)'}}>
                プレゼンテーションでよくあるお悩みも解決!
              </h4>

              {/* Problems List with Checkmarks */}
              <ul className="space-y-4 md:space-y-5">
                {problems.map((problem, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 md:gap-4 text-base md:text-lg lg:text-xl text-white"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                    </div>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

