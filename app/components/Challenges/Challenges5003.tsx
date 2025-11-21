'use client';
import Image from 'next/image';

export default function Challenges5003() {
  const problems = [
    {
      id: 1,
      icon: '/img/Challenges5003_Icon_1.png',
      title: '肩こり・首こりが',
      description: 'ひどくて辛い',
    },
    {
      id: 2,
      icon: '/img/Challenges5003_Icon_2.png',
      title: '頭痛・腰痛で',
      description: '毎日の生活に支障がある',
    },
    {
      id: 3,
      icon: '/img/Challenges5003_Icon_3.png',
      title: 'いびきや睡眠時無呼吸症候群',
      description: 'を改善したい',
    },
    {
      id: 4,
      icon: '/img/Challenges5003_Icon_4.png',
      title: '朝が辛くて',
      description: '起きられない',
    },
    {
      id: 5,
      icon: '/img/Challenges5003_Icon_5.png',
      title: '夜中に寝苦しくて',
      description: '何度も起きてしまう',
    },
    {
      id: 6,
      icon: '/img/Challenges5003_Icon_6.png',
      title: '自分にあった枕が',
      description: '見つからない',
    },
  ];

  return (
    <div className="w-full bg-[#f5f5f0] py-12 md:py-16 lg:py-20 font-['Yu_Mincho','Hiragino_Mincho_ProN','MS_PMincho',serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          {/* Decorative Curly Line */}
          <div className="mb-4 md:mb-6 flex justify-center">
            <svg
              width="60"
              height="20"
              viewBox="0 0 60 20"
              fill="none"
              className="text-[#8b7355]"
            >
              <path
                d="M5 10 Q15 5, 25 10 T45 10 T55 15"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Banner with Wavy Edges */}
          <div className="relative inline-block mb-4">
            <div
              className="bg-white px-6 md:px-10 lg:px-12 py-4 md:py-5 shadow-md"
              style={{
                clipPath: 'polygon(2% 0%, 98% 0%, 100% 5%, 98% 10%, 100% 15%, 98% 20%, 100% 25%, 98% 30%, 100% 35%, 98% 40%, 100% 45%, 98% 50%, 100% 55%, 98% 60%, 100% 65%, 98% 70%, 100% 75%, 98% 80%, 100% 85%, 98% 90%, 100% 95%, 98% 100%, 2% 100%, 0% 95%, 2% 90%, 0% 85%, 2% 80%, 0% 75%, 2% 70%, 0% 65%, 2% 60%, 0% 55%, 2% 50%, 0% 45%, 2% 40%, 0% 35%, 2% 30%, 0% 25%, 2% 20%, 0% 15%, 2% 10%, 0% 5%)',
              }}
            >
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#595326]">
                こんなお悩みはありませんか?
              </h1>
            </div>
          </div>
        </div>

        {/* Problems Grid - 2 rows x 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
          {problems.map((problem) => (
            <div key={problem.id} className="flex flex-col items-center">
              {/* Circular Image */}
              <div className="relative w-40 h-40 md:w-60 md:h-4600 lg:w-80 lg:h-80 mb-4 md:mb-6">
                <Image
                  src={problem.icon}
                  alt={problem.title}
                  fill
                  className="object-contain rounded-full"
                  priority={problem.id <= 3}
                />
              </div>

              {/* Orange Title */}
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-orange-500 mb-2 md:mb-3 text-center">
                {problem.title}
              </h3>

              {/* Black Description */}
              <p className="text-base md:text-lg lg:text-xl text-[#595326] text-center">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

