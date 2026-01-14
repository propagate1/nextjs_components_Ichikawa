'use client';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  links?: { text: string; href: string }[];
}

export default function FAQ5000() {
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: '縦向きで設置できますか?',
      answer: '縦向きでの設置はできません。',
    },
    {
      id: 2,
      question: '壁掛施工は可能でしょうか?',
      answer:
        '設置予定となる壁面の強度確認や施工基準がある為、まずはお問い合わせください。',
    },
    {
      id: 3,
      question: '現物を体感または機能説明を受けられる場所はありますか?',
      answer:
        '全国のショールーム・ライブオフィスにてご確認いただけます。展示先は以下となりますので問い合わせフォームより「見学予約」をお願いします。',
      links: [
        { text: '東京本社・市ヶ谷ライブショールーム', href: '#' },
        { text: '東京・新宿ショールーム', href: '#' },
        { text: '東京・秋葉原ショールーム', href: '#' },
        { text: '大阪・天満橋ショールーム', href: '#' },
        { text: '愛知・名古屋ショールーム', href: '#' },
        { text: '福岡・博多ショールーム', href: '#' },
        { text: '宮城・仙台ショールーム', href: '#' },
        { text: '広島支店・広島ライブショールーム', href: '#' },
        { text: '北海道・札幌ショールーム', href: '#' },
      ],
    },
    {
      id: 4,
      question: 'ソフトウェアのアップデートはありますか?',
      answer:
        'MAXHUB標準ソフトウェアのアップデートがございます。操作は手動となり、お客様に簡単な操作をしていただく必要があります。',
    },
  ];

  return (
    <div className="relative w-full bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Subtle Geometric Patterns in Corners */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-transparent transform rotate-45 origin-top-right"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 opacity-10">
        <div className="w-full h-full bg-gradient-to-tl from-gray-200 to-transparent transform -rotate-45 origin-bottom-right"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#d4af37] mb-3 md:mb-4">
            FAQ
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-900 font-medium">
            よくあるご質問
          </p>
        </div>
        <div className="border-t border-gray-200 my-6 md:my-8"></div>
        {/* FAQ Items */}
        <div className="space-y-0">
          {faqItems.map((item, index) => (
            <div key={item.id}>
              {/* Separator Line */}
              {index > 0 && (
                <div className="border-t border-gray-200 my-6 md:my-8"></div>
              )}

              {/* Question */}
              <div className="flex gap-4 md:gap-6 mb-4 md:mb-6">
                <div className="flex-shrink-0">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#d4af37] leading-none">
                    Q
                  </span>
                </div>
                <div className="flex-1 pt-2 md:pt-3">
                  <p className="text-base md:text-lg lg:text-xl text-gray-900 font-medium">
                    {item.question}
                  </p>
                </div>
              </div>

              {/* Answer */}
              <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 pl-6 md:pl-10">
                <div className="flex-shrink-0">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-none">
                    A
                  </span>
                </div>
                <div className="flex-1 pt-2 md:pt-3">
                  <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4">
                    {item.answer}
                  </p>
                  {item.links && (
                    <ul className="list-none space-y-1 md:space-y-2">
                      {item.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="text-sm md:text-base lg:text-lg text-gray-700 underline hover:text-[#d4af37] transition-colors"
                          >
                            {link.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 my-6 md:my-8"></div>
      </div>
    </div>
  );
}

