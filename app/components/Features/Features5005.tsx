'use client';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function Features5005() {
  const features = [
    {
      id: 1,
      point: '01',
      title: '社内ポータルに必要な機能を充実かつ簡単に',
      description: [
        'LITEVIEWのノーコードツールを使えば、自社開発したかのような高品質な社内ポータルアプリやWebサイトを手軽に構築できます。',
        '現在、約13万人の会員様に安定してご利用いただいています。',
      ],
      note: '※LITEVIEWの全プロダクトの利用者数を基に算出したデータです。',
      image: '/img/Features5005_Feature_1.png',
      imagePosition: 'left' as const,
    },
    {
      id: 2,
      point: '02',
      title: '初期費用なし、業界最安の固定費用',
      description: [
        '一般的な社内ポータルの導入には、初期費用や固定費が高く、導入に踏み切れない事業者様も少なくありません。',
        'LITEVIEWなら、低予算で手軽に導入を始められます。',
      ],
      buttonText: '料金プランを見る',
      image: '/img/Features5005_Feature_2.png',
      imagePosition: 'right' as const,
    },
    {
      id: 3,
      point: '03',
      title: '貴社の社内ポータルのを今すぐ開設',
      description: [
        'LITEVIEWで構築された社内ポータル用のWebサイト、スマホアプリは、待ち時間なしで会員登録と同時にご利用いただけます。',
      ],
      image: '/img/Features5005_Feature_3.png',
      imagePosition: 'left' as const,
    },
  ];

  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          {/* Large Faded "FEATURE" Text */}
          <div className="relative mb-4 md:mb-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-200 leading-none">
              FEATURE
            </h1>
            {/* "特徴" Subtitle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                特徴
              </p>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight">
            他社の社内ポータルサービスとの違い
          </h2>
        </div>

        {/* Features List */}
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`flex flex-col ${
                feature.imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-8 md:gap-12 lg:gap-16`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <div className="relative w-full aspect-video rounded-lg md:rounded-xl overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={`Feature ${feature.point}`}
                    fill
                    className="object-cover"
                    priority={feature.id === 1}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 flex flex-col">
                {/* Point Label */}
                <p className="text-sm md:text-base lg:text-lg font-medium text-gray-400 mb-2 md:mb-3">
                  point {feature.point}
                </p>

                {/* Title */}
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-4 md:mb-6 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                  {feature.description.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base md:text-md lg:text-lg text-black leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Note (for point 01) */}
                {feature.note && (
                  <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
                    {feature.note}
                  </p>
                )}

                {/* Button (for point 02) */}
                {feature.buttonText && (
                  <button className="self-start bg-gray-700 hover:bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center gap-2 md:gap-3 transition-colors text-sm md:text-base lg:text-lg font-medium">
                    <span>{feature.buttonText}</span>
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

