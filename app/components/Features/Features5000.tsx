'use client';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function Features5000() {
  const features = [
    {
      id: 1,
      image: '/img/Features5000_Feature_1.jpg',
      title: '手づくりごはん',
      description: '愛犬のためにご家庭で作る「手づくりごはん」。その愛情や手間暇まで含めた再現を目指し調理・製造方法を考えており、手づくりごはんの良さを誰でも簡単にお楽しみいただけます。',
    },
    {
      id: 2,
      image: '/img/Features5000_Feature_2.jpg',
      title: '新鮮な食材',
      description: '私たちが食べるものと全く同じ、新鮮な国産のお肉とお魚・お野菜のみを使い、食材本来の風味と栄養素を保てる低温調理にこだわっています。',
    },
    {
      id: 3,
      image: '/img/Features5000_Feature_3.jpg',
      title: '自然なおいしさ',
      description: '酸化防止剤・発色剤・pH調整剤・保存料・着色料・調味料・香料を一切使わず、食材そのものの美味しさが引き立つように調理しています。',
    },
    {
      id: 4,
      image: '/img/Features5000_Feature_4.jpg',
      title: '獣医師監修の総合栄養食',
      description: '栄養学専門の獣医やペット栄養管理士、大学名誉教授が監修した総合栄養食の手づくりごはん。ワンちゃんに本当に必要な栄養をバランス良く含み、愛犬の健康をサポートします。',
    },
    {
      id: 5,
      image: '/img/Features5000_Feature_5.jpg',
      title: '厳しい衛生基準',
      description: '厳しい衛生基準をクリアした食品工場で作ることで、食材選びから製造、お届けまで全て安全安心なヒューマングレード品質のごはんです。',
    },
    {
      id: 6,
      image: '/img/Features5000_Feature_6.jpg',
      title: '適切な価格',
      description: '手づくりごはんをより多くのワンちゃんに食べてもらうために、ごはん以外のコストカットによって適切な価格でご提供しています。',
    },
  ];

  return (
    <div className="w-full bg-[#fcf8f4] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Features Grid - 2 rows x 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-16">
          {features.map((feature) => (
            <div
              key={feature.id}
            >
              {/* Feature Image */}
              <div className="relative w-full h-48 md:h-56 lg:h-64 rounded-xl overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Feature Content */}
              <div className="tracking-[4px]">
                {/* Title with Arrow */}
                <div className="flex items-center gap-2 my-3 md:my-5">
                  <h3 className="text-lg md:text-xl font-bold text-amber-950">
                    {feature.title}
                  </h3>
                  <button className="w-10 h-10 md:w-12 md:h-12  rounded-full flex items-center justify-center hover:bg-amber-800 transition-colors flex-shrink-0 border-2 border-amber-900 hover:border-amber-800">
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-amber-900 hover:text-white" />
                  </button>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-amber-950 leading-10">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

