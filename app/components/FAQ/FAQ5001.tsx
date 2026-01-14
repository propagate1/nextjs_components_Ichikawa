'use client';
import Image from 'next/image';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ5001() {
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'デモ体験は可能でしょうか?',
      answer:
        '勿論可能です。簡易的なデモを体験して頂けますので、050-3176-2222へお電話してみて下さい。',
    },
    {
      id: 2,
      question: '導入まで最短何日で利用できますか?',
      answer:
        '最短3営業日でご提供が可能です。詳しくはお問い合わせください。',
    },
    {
      id: 3,
      question: '導入後のサポート体制を教えて下さい。',
      answer:
        '導入後、システム利用におけるレクチャーをさせて頂き、問い合わせ窓口も用意させて頂いております。',
    },
    {
      id: 4,
      question: '音声品質または推奨環境について教えて下さい。',
      answer:
        '弊社では音声品質を安定させる為に、推奨環境への切り替えサポートや、QoSの設定等の支援もさせて頂いております。詳しくはお問い合わせ下さい。',
    },
  ];

  return (
    <div className="w-full bg-white py-8 md:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16">
          {/* Decorative Line Left */}
          <div className="relative  w-32 md:w-48 lg:w-64 h-12 md:h-16 lg:h-20">
            <Image
              src="/img/FAQ5001_Icon_3.png"
              alt="Decorative line"
              fill
              className="object-contain"
            />
          </div>

          {/* Q&A Title */}
          <div className="relative w-28 md:w-32 lg:w-40 h-6 md:h-8 lg:h-12">
            <Image
              src="/img/FAQ5001_Letter_1.png"
              alt="Q&A"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Decorative Line Right */}
          <div className="relative  w-32 md:w-48 lg:w-64 h-12 md:h-16 lg:h-20">
            <Image
              src="/img/FAQ5001_Icon_3.png"
              alt="Decorative line"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          {faqItems.map((item, index) => (
            <div key={item.id}>
              {/* Question */}
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                {/* Q Icon */}
                <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex-shrink-0">
                  <Image
                    src="/img/FAQ5001_Icon_1.png"
                    alt="Q"
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Question Text */}
                <p className="text-black text-sm md:text-base lg:text-lg font-semibold leading-relaxed pt-1 md:pt-2">
                  {item.question}
                </p>
              </div>

              {/* Answer */}
              <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                {/* A Icon */}
                <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex-shrink-0">
                  <Image
                    src="/img/FAQ5001_Icon_2.png"
                    alt="A"
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Answer Text */}
                <p className="text-black text-sm md:text-base lg:text-lg leading-relaxed pt-1 md:pt-2">
                  {item.answer}
                </p>
              </div>

              {/* Separator Line (except for last item) */}
              {index < faqItems.length && (
                <div className="border-t border-dashed border-gray-300 mt-4 md:mt-6"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

