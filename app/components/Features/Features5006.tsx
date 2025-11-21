'use client';
import Image from 'next/image';

export default function Features5006() {
  const features = [
    {
      id: 1,
      image: '/img/Features5006_Feature_1.png',
      title: 'エンゲージメントを高める仕組みを、ワンストップで',
      description: [
        '社内SNSやLMS(社内教育)、定期的なアンケート・フィードバック機能によって社員エンゲージメントの向上を支援します。',
        'また、社員・組織情報を一元管理することで、人事や総務の工数も大幅に削減可能です。',
      ],
    },
    {
      id: 2,
      image: '/img/Features5006_Feature_2.png',
      title: '情報を集約し、業務効率を加速',
      description: [
        '業務マニュアルや申請フローなどを一元化。チャット・掲示板・アーカイブ機能により、情報共有のスピードと精度が向上します。',
        'その結果、会議やメールの回数も減少し、業務のスリム化を実現します。',
      ],
    },
    {
      id: 3,
      image: '/img/Features5006_Feature_3.png',
      title: '"つながり"が自然と生まれる企業文化へ',
      description: [
        '社内ニュースや表彰制度、社員紹介、福利厚生ポイント、サンクスカードなど、"つながり"を感じられるコンテンツを多数搭載。',
        '社員同士の関係性や会社への理解が深まり、自然と帰属意識が育まれます。',
      ],
    },
  ];

  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Top Section - Header and Main Title */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="relative mb-4 md:mb-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-200 leading-none">
              ABOUT
            </h1>
            {/* "特徴" Subtitle */}
            <div className="absolute text-left font-bold inset-0 flex items-center justify-center">
              <p className="text-lg md:text-xl lg:text-2xl text-black">
                <span className='text-md md:text-lg lg:text-xl font-normal'>ライトビューチーム</span><br />LITEVIEW Teamとは
              </p>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 md:mb-8 leading-tight">
            社内ポータルなら、<br />情報共有もエンゲージメントもこれひとつで
          </h1>

          {/* Main Description */}
          <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
            <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed">
              社内SNS機能を活用し、重要なお知らせやビジョンを全社員へタイムリーに一斉配信。
            </p>
            <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed">
              既読ログの管理やアクセス制限、認証機能によりセキュリティ対策も万全です。
            </p>
          </div>
        </div>

        {/* Features Section - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col">
              {/* Feature Image */}
              <div className="relative w-full aspect-video mb-6 md:mb-8 rounded-lg md:rounded-xl overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain"
                  priority={feature.id === 1}
                />
              </div>

              {/* Feature Content */}
              <div className="flex-1 flex flex-col">
                {/* Title */}
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4 md:mb-6 leading-tight p-4">
                  {feature.title}
                </h2>

                {/* Description */}
                <div className="space-y-3 md:space-y-4 flex-1">
                  {feature.description.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base md:text-lg text-black leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

