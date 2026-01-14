'use client';
import Image from 'next/image';

export default function Features5008() {
  const strengths = [
    {
      id: 1,
      title: '徹底した情報管理で',
      highlight: '万全の',
      highlight2: 'セキュリティ対策',
      description:
        '入室時はICカードや指紋認証等のセキュリティ必須、USBなどの外部デバイスの無効化はもちろんのこと、社内で受講必須の情報セキュリティテスト等を定期的に開催するなど、セキュリティ対策は万全です。プライバシーマークも取得しています。',
      image: '/img/Features5008_Feature_1.png',
      imagePosition: 'left' as const,
    },
    {
      id: 2,
      title: '人材会社のノウハウで',
      highlight: '直接雇用人材を',
      highlight2: '多数採用',
      description:
        'もともと人材会社である強みを活かし、直接雇用の人材の多く採用することで「質の向上」とマージンカットによる「コスト削減」を実現しています。',
      image: '/img/Features5008_Feature_2.png',
      imagePosition: 'right' as const,
    },
    {
      id: 3,
      title: 'センターは全国各地に',
      highlight: 'BCP対策面でも',
      highlight2: '安心',
      description:
        '全国各地にコールセンタがあるため、1カ所で対応するよりも災害時のBCP対策面でも安心です。また、クラウドCTIを利用しており、情報はどの場所からでも確認が可能です。Pマークを保持しているので、セキュリティ面も安心です。',
      image: '/img/Features5008_Feature_3.png',
      imagePosition: 'left' as const,
    },
  ];

  return (
    <div className="w-full bg-blue-50 py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Subtle dotted pattern background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          {/* "STRENGTHS" Text */}
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-300 mb-2 md:mb-3">
            STRENGTHS
          </p>
          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black">
            私たちの強み
          </h1>
        </div>

        {/* Strengths Sections */}
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {strengths.map((strength) => (
            <div
              key={strength.id}
              className={`flex flex-col ${strength.imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center gap-8 md:gap-12 lg:gap-16`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <div className="relative w-full aspect-video rounded-lg md:rounded-xl overflow-hidden">
                  <Image
                    src={strength.image}
                    alt={`Strength ${strength.id}`}
                    fill
                    className="object-contain"
                    priority={strength.id === 1}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 flex flex-col">
                {/* Title with Highlight Boxes */}
                <div className="mb-4 md:mb-6">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-3 md:mb-4 leading-tight">
                    {strength.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <div className="bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 font-bold text-base md:text-lg lg:text-xl">
                      {strength.highlight}
                    </div>
                    {strength.highlight2 && (
                      <div className="bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 font-bold text-base md:text-lg lg:text-xl">
                        {strength.highlight2}
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed">
                  {strength.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

