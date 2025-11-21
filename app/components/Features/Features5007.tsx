'use client';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function Features5007() {
  const promises = [
    {
      id: 1,
      icon: '/img/Features5007_Icon_1.PNG',
      title: '不要な高いプランを勧めない',
      description:
        '弊社も心から成果につなげたいと思っております。成果が出る最適な稼働プランをお勧めさせていただきます。',
    },
    {
      id: 2,
      icon: '/img/Features5007_Icon_2.PNG',
      title: '提案や見積もりに不透明な部分がない',
      description:
        '明朗会計でお見積もりをご提出。ご不明な点がございましたらお気軽にお問い合わせください。',
    },
    {
      id: 3,
      icon: '/img/Features5007_Icon_3.PNG',
      title: '契約後、連絡なく放置しない',
      description:
        '契約後も定期的なMTGを含めて、トークスクリプトやリストの改善のご提案をいたします。',
    },
  ];

  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-0 top-0 w-full h-full">
          <Image
            src="/img/Features5007_Bg_1.png"
            alt="Background"
            fill
            className="object-cover object-left"
          />
        </div>
        {/* Abstract gradient with line graph effect on right */}
        <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          {/* "PROMISE" Text */}
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-300 mb-2 md:mb-3">
            PROMISE
          </p>

          {/* Main Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight">
            私たちのお約束
          </h1>
        </div>

        {/* Three Promise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16 lg:mb-20">
          {promises.map((promise) => (
            <div
              key={promise.id}
              className="bg-white rounded-lg md:rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* Icon Image */}
              <div className="relative w-full h-48 md:h-56 lg:h-64 mb-4 md:mb-6 rounded-lg overflow-hidden">
                <Image
                  src={promise.icon}
                  alt={promise.title}
                  fill
                  className="object-cover"
                  priority={promise.id === 1}
                />
              </div>

              {/* Title */}
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-blue-400 text-center px-6 mb-3 md:mb-4 leading-tight">
                {promise.title}
              </h2>

              {/* Description */}
              <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed flex-1">
                {promise.description}
              </p>
            </div>
          ))}
        </div>

        {/* Central Message Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="text-xl md:text-2xl lg:text-4xl font-bold text-blue-500 mb-3 md:mb-6">
            求められているのは
          </p>
          <span className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-blue-500 p-2 text-white leading-tight">
            『作業』ではなく『<span className=' text-amber-300'>成果</span>』だと考えております
          </span>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center">
          <button
            className="px-8 md:px-12 lg:px-16 py-4 md:py-5 lg:py-6 rounded-2xl text-white text-lg md:text-xl lg:text-2xl font-bold flex items-center gap-3 md:gap-4 hover:opacity-90 transition-opacity shadow-lg"
            style={{
              background: 'linear-gradient(to right, #ff9f24, #ff6b6b)',
            }}
          >
            <span>お問い合わせはこちら</span>
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}

