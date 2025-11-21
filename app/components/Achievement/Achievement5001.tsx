'use client';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface CaseStudyItem {
  id: number;
  cardImage: string;
  title: string;
  description: string;
  companyLogo: string;
  companyName: string;
}

export default function Achievement5001() {
  const caseStudies: CaseStudyItem[] = [
    {
      id: 1,
      cardImage: '/img/Achievement5001_Card_1.jpg',
      title: 'ブラザー販売株式会社様インタビュー',
      description:
        '「FAQと連動したコミュニティの構築」や「導入背景・活性化施策・今後の展望」などを紹介しております。ぜひご覧ください。',
      companyLogo: '/img/Achievement5001_Logo_1.png',
      companyName: 'ブラザー販売株式会社',
    },
    {
      id: 2,
      cardImage: '/img/Achievement5001_Card_2.png',
      title: '電子楽器のオーソリティはベストなユーザーサポートを目指す',
      description:
        'わくわくするユーザーの気持ちに応えるサポート体制/ユーザーの役に立つサポート体制構築を目指す/電話サポート業務とコミュニティの活性...',
      companyLogo: '/img/Achievement5001_Logo_2.png',
      companyName: 'ローランド株式会社',
    },
    {
      id: 3,
      cardImage: '/img/Achievement5001_Card_3.png',
      title: 'ユーザー同士で問題解決するからサポート電話対応が減少',
      description:
        'エレコム様 OKWAVE Plus導入事例/新たなサポートチャネルOKWAVE Plusの導入へ/コミュニティの開設で業務負荷の低下を実感 / コミュニ...',
      companyLogo: '/img/Achievement5001_Logo_3.png',
      companyName: 'エレコム株式会社',
    },
  ];

  return (
    <div className="w-full bg-blue-100 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            + 導入事例 +
          </h2>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col p-2"
            >
              {/* Card Visual Image */}
              <div className="relative w-full h-48 md:h-56 lg:h-64 flex-shrink-0">
                <Image
                  src={caseStudy.cardImage}
                  alt={caseStudy.title}
                  fill
                  className="object-contain"
                  priority={caseStudy.id === 1}
                />
              </div>

              {/* Card Content */}
              <div className="p-4 md:p-6 flex flex-col flex-1">
                {/* Title */}
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-blue-800 mb-3 md:mb-4">
                  {caseStudy.title}
                </h3>

                {/* Description with Avatar */}
                <div className="flex gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="flex-shrink-0">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
                      <Image
                        src="/img/Achievement5001_Avatar_1.jpg"
                        alt="Avatar"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed flex-1">
                    {caseStudy.description}
                  </p>
                </div>

                {/* Company Logo and Name */}
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="relative w-20 h-8 md:w-24 md:h-10 flex-shrink-0">
                    <Image
                      src={caseStudy.companyLogo}
                      alt={caseStudy.companyName}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <span className="text-xs md:text-sm text-gray-600">
                    {caseStudy.companyName}
                  </span>
                </div>

                {/* View Details Button */}
                <div className="mt-auto flex justify-center">
                  <button className="px-6 md:px-8 py-2 md:py-3 border-2 border-orange-500 rounded-full text-sm md:text-base font-medium text-orange-500 bg-white hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center gap-2">
                    <span>詳しく見る</span>
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

