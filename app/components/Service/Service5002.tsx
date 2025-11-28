'use client';

interface ServiceCategory {
  id: string;
  label: string;
}

interface ProcessStep {
  id: string;
  category: string;
  title: string;
  description: string;
}

export default function Service5002() {
  const categories: ServiceCategory[] = [
    { id: 'complex', label: '複合商業施設' },
    { id: 'retail', label: '物販' },
    { id: 'food', label: '飲食/食物販' },
    { id: 'service', label: 'サービス' },
    { id: 'public', label: '医療/教育/福祉/公共' },
    { id: 'office', label: 'オフィス/ワークスペース' },
  ];

  const processSteps: ProcessStep[] = [
    {
      id: 'planning',
      category: '企画・開発',
      title: 'みつける',
      description:
        'にぎわいを生み出すための調査やお店の構成計画、空間づくりに向けてのチーム形成までお任せいただけます。',
    },
    {
      id: 'design',
      category: 'デザイン・設計',
      title: 'えがく',
      description:
        '人々に愛される空間をご提案。「らしさ」の演出、機能美の追求、デザインマニュアル作成などを担当します。',
    },
    {
      id: 'construction',
      category: '施工・監理',
      title: 'つくる',
      description:
        '品質・安全を守りながら実空間を完成させます。工事・費用・監理など複雑な業務の全てに丁寧に対応します。',
    },
  ];

  return (
    <div className="w-full bg-white py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Top Section */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          {/* Subtitle */}
          <p className="text-sm md:text-base text-blue-900 mb-4 md:mb-6">
            事業内容
          </p>

          {/* Main Heading and Description */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12">
            {/* Left: Main Heading */}
            <div className="flex-1 lg:w-[50%]">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900 leading-10 lg:leading-20">
                エンドユーザー発想で「行きたくなる」空間を日本全国に。
              </h1>
            </div>

            {/* Right: Description */}
            <div className="flex-1 lg:w-[50%]">
              <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                バウハウス丸栄は、エンドユーザー目線を大切に、「行きたくなる」空間づくりでにぎわいを生み出し、お客様のビジネス成功につなげます。全国で70年以上にわたり数多くの空間を手がけてきた経験を活かし、空間の魅力を最大限に引き出すための細部までこだわった提案を行います。ワンストップ&ワンチームでお客様をサポートいたします。
              </p>
              {/* Service Categories Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-12">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="bg-gray-200 rounded-full px-4 py-1 text-center"
                  >
                    <span className="text-xs font-bold text-gray-800">
                      {category.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Process Steps */}
        <div className="bg-gray-100 py-8 md:py-12 lg:py-16 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 px-4 sm:px-6 md:px-8 lg:px-12 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {processSteps.map((step) => (
              <div key={step.id} className="flex flex-col">
                {/* Arrow Banner (Left side) */}
                <div className="relative flex-shrink-0">
                  <div
                    className="bg-blue-900 text-white py-4 md:py-6 flex items-center justify-center"
                    style={{
                      clipPath:
                        'polygon(0% 0%, calc(100% - 40px) 0%, 100% 50%, calc(100% - 40px) 100%, 0% 100%)',
                    }}
                  >
                    <span className=" text-center text-lg md:text-xl lg:text-2xl font-bold">
                      {step.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 py-6 md:py-8 space-y-4 md:space-y-6">
                  {/* Title */}
                  <h2 className=" text-center text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
                    {step.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

