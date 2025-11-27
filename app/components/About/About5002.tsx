'use client';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

interface PhilosophySection {
  id: number;
  englishTitle: string;
  japaneseTitle: string;
  circleColor: 'pink' | 'red';
  textColor: 'black' | 'white';
  content: {
    title: string;
    lines: string[];
    description?: string;
    bullets?: string[];
  };
}

export default function About5002() {
  const [openCardId, setOpenCardId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setOpenCardId(openCardId === id ? null : id);
  };


  const sections: PhilosophySection[] = [
    {
      id: 1,
      englishTitle: 'VISION',
      japaneseTitle: 'ビジョン',
      circleColor: 'pink',
      textColor: 'black',
      content: {
        title: 'ビジョン',
        lines: ['嬉しい行き先で', '溢れる社会をつくり上げる。'],
        description: '私たちがお客さまとともに生みだすのは、誰かの「行き先」となる空間です。夢や向上心を刺激する空間を作れば人はそこへ「行きたい」と願い、一歩踏み出せるでしょう。心安らぐ空間があれば、困難の中にある人も「行ってよかった」と、顔を上げてくれるかもしれません。みんなを前進させる行き先で、日本中をいっぱいにしたい。私たちはその目標に向かい、チーム一丸となって力を発揮していきます。'
      },
    },
    {
      id: 2,
      englishTitle: 'MISSION',
      japaneseTitle: 'ミッション',
      circleColor: 'pink',
      textColor: 'black',
      content: {
        title: 'ミッション',
        lines: [
          '暮らし、仕事、学び、遊び',
          '一日と一生のあらゆる行き先に',
          'ウェルビーイングを実装する。',
        ],
      },
    },
    {
      id: 3,
      englishTitle: 'PROMISE',
      japaneseTitle: 'プロミス',
      circleColor: 'pink',
      textColor: 'black',
      content: {
        title: 'プロミス',
        lines: ['5つの提供価値'],
        bullets: [
          'エンドユーザー思考の提案',
          '心を掴んで離さない提案',
          '嘘のない真心からの提案',
          '安心・安全・安定の提供',
          '未来志向で半歩先を提案',
        ],
      },
    },
  ];

  return (
    <div className="w-full bg-white py-8 md:py-12 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="relative">
          {/* Vertical connecting line */}
          <div className={`absolute left-12 md:left-20 lg:left-26 bottom-40 w-0.5 bg-gray-300 
    ${openCardId === 1 ? "top-50" : "top-30"}`}></div>

          {/* Philosophy Sections */}
          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            {sections.map((section) => (
              <div
                key={section.id}
                className="relative flex flex-row items-center gap-6 md:gap-20"
                onClick={() => toggleCard(section.id)}
              >
                {/* Circle */}
                <div className="relative flex-shrink-0 z-10">
                  <div
                    className={`w-24 h-24 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full flex flex-col items-center justify-center ${section.circleColor === 'pink'
                      ? 'bg-pink-200'
                      : 'bg-red-600'
                      }`}
                  >
                    <span
                      className={`text-lg md:text-xl lg:text-2xl font-bold ${section.textColor === 'white' ? 'text-white' : 'text-black'
                        }`}
                    >
                      {section.englishTitle}
                    </span>
                    <span
                      className={`text-[10px] md:text-xs lg:text-sm ${section.textColor === 'white' ? 'text-white' : 'text-black'
                        }`}
                    >
                      {section.japaneseTitle}
                    </span>
                  </div>
                </div>

                {/* Text Box */}
                <div className="flex-1 border-2 border-blue-950 rounded-lg p-4 md:p-6 lg:p-8 bg-white relative">
                  <div className="space-y-3 md:space-y-4">
                    {/* Section Title */}
                    <h3 className="text-md md:text-lg lg:text-xl font-bold text-blue-950 mb-4 lg:mb-10">
                      {section.content.title}
                    </h3>
                    {/* Content Lines */}
                    <div className="space-y-2 md:space-y-3">
                      {section.content.lines.map((line, lineIndex) => (
                        <p
                          key={lineIndex}
                          className="text-lg md:text-2xl lg:text-3xl font-bold text-blue-950"
                        >
                          {line}
                        </p>
                      ))}
                    </div>

                    {openCardId == section.id && (
                      <p className=" text-left text-xs lg:text-base font-bold text-blue-950 flex-1 mt-6">
                        {section.content.description}
                      </p>
                    )}

                    {/* Bullet Points (for Promise section) */}
                    {section.content.bullets && (
                      <ul className="space-y-2 md:space-y-3 mt-4 md:mt-6">
                        {section.content.bullets.map((bullet, bulletIndex) => (
                          <li
                            key={bulletIndex}
                            className="flex items-start gap-2 md:gap-3"
                          >
                            <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-600 flex-shrink-0 mt-2"></span>
                            <span className="text-md md:text-lg lg:text-xl font-bold text-blue-950">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {section.id === 1 ?
                    (<div className="absolute -left-5 top-[40%] bg-white rounded-full">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-blue-900 flex items-center justify-center">
                        {openCardId == section.id ? (
                          <Minus className="w-4 h-4 md:w-5 md:h-5 text-blue-900" />
                        ) : (<Plus className="w-4 h-4 md:w-5 md:h-5 text-blue-900" />
                        )}
                      </div>
                    </div>) : (<span></span>)
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

