'use client';
import Image from 'next/image';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';


interface FeatureCard {
  id: number;
  number: string;
  text: string;
  description: string;
}

export default function Features5009() {
const [openCardId, setOpenCardId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
  setOpenCardId(openCardId === id ? null : id);
};


  const features: FeatureCard[] = [
    {
      id: 1,
      number: '01',
      text: 'エンドユーザー目線のデザイン',
      description: '私たちが得意とするのは、エンドユーザー思いの空間づくり。「なぜか惹きつけられる」「つい行きたくなる」空間を考えていきます。',
    },
    {
      id: 2,
      number: '02',
      text: 'ビジネスに全方位の提案力',
      description: 'どのような業種にもオールマイティに対応。年間約5,000件もの膨大なノウハウを活かし、柔軟な発想力で答えを導き出します。',
    },
    {
      id: 3,
      number: '03',
      text: 'チェーン展開の実績が豊富',
      description: '数多くの有名チェーン店を手掛けてきた経験を活かし、ブランド展開の際、現場担当者に伝わりやすいデザインマニュアルを作成いたします。',
    },
  ];

  return (
    <div className="w-full bg-white py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Top Section: Illustration and Main Text */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
          {/* Left: Illustration */}
          <div className="flex-1 lg:w-[45%] xl:w-[40%]">
            <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none">
              <Image
                src="/img/Features5009_Bg_1.png"
                alt="Design and planning illustration"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex-1 lg:w-[55%] space-y-4 md:space-y-6">
            {/* Category Tag */}
            <div className=" inline-block lg:flex lg:items-center ;g:justify-center ">
              <span className="bg-blue-900 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium">
                デザイン・設計
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-left lg:text-left text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-900 leading-tight">
              えがく
            </h1>

            {/* Subtitle */}
            <h2 className=" text-left lg:text-left text-sm md:text-base font-medium text-blue-900">
              お客さまの夢を描きおこす
            </h2>

            {/* Body Text */}
            <div className="space-y-3 md:space-y-4 text-sm md:text-lg text-gray-700 leading-relaxed">
              <p>
                人々の目を引き、誰にとっても快適な空間を生みだすには、いくつかの仕掛けが必要です。私たちは長年培った知識や技術を活かし、「こんな空間にしたい」「イメージを変えたい」「デザインのルールを決めたい」などのご要望も受け止めながら、理想の空間を描きおこします。
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Strengths */}
        <div className="space-y-8 md:space-y-12">
          {/* Section Title */}
          <div className="text-center">
            <h2 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">
              デザイン・設計の強み
            </h2>
            <div className=" w-52 h-1 bg-red-600 mx-auto"></div>
          </div>

          {/* Feature Cards */}
          <button className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mx-auto">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white border-2 border-blue-900 rounded-lg p-6 md:p-8 relative flex flex-col items-center min-h-[160px] md:min-h-[200px]"
                onClick={() => toggleCard(feature.id)}
              >
                {/* Number */}
                <div className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-red-600 mb-4 md:mb-6">
                  {feature.number}<br />
                  <div className=" w-14 border-t-2 border-blue-900 mx-auto"></div>
                </div>

                {/* Text */}
                <p className=" text-center text-base md:text-lg lg:text-xl font-bold text-blue-900 flex-1 mb-6">
                  {feature.text}
                </p>
                {openCardId === feature.id  && (
                  <p className=" text-center text-base text-blue-900 flex-1">
                    {feature.description}
                  </p>
                )}

                {/* Plus Icon */}
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-blue-900 flex items-center justify-center">
                    {openCardId == feature.id ? (
                      <Minus className="w-4 h-4 md:w-5 md:h-5 text-blue-900" />
                    ) : (<Plus className="w-4 h-4 md:w-5 md:h-5 text-blue-900" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </button>
        </div>
      </div>
    </div>
  );
}

