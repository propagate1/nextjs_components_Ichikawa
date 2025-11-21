'use client';
import Image from 'next/image';

export default function Solutions5000() {
  const problems = [
    {
      id: 1,
      category: '枕が高すぎると…',
      items: [
        {
          id: 1,
          icon: '/img/Solutions5000_Icon_1.png',
          label: '仰向け寝',
        },
        {
          id: 2,
          icon: '/img/Solutions5000_Icon_2.png',
          label: '横向き寝',
        },
      ],
    },
    {
      id: 2,
      category: '枕が低すぎると…',
      items: [
        {
          id: 3,
          icon: '/img/Solutions5000_Icon_3.png',
          label: '仰向け寝',
        },
        {
          id: 4,
          icon: '/img/Solutions5000_Icon_4.png',
          label: '横向き寝',
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20 font-['Yu_Mincho','Hiragino_Mincho_ProN','MS_PMincho',serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Top Section - Text Content */}
        <div className="mb-12 md:mb-16 lg:mb-20 text-center ">
          {/* Main Title */}
          <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#3d230b] mb-4 md:mb-6 leading-tight">
            枕があっていないと辛い症状が…
          </h1>

          {/* Prominent Heading */}
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#3d230b] mb-6 md:mb-8 leading-tight">
            あなたのお悩みは
            <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">「枕」</span>
            が<span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">原因</span>かもしれません。
          </h2>

          <div className=' border-t-8 border-[#686135] border-dotted mb-4'>

          </div>

          {/* Key Causes */}
          <div className="mb-6 md:mb-8 text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#d1350e]">
            <p className=" mb-2 md:mb-3">
              「姿勢が悪い」「同じ姿勢を続ける」
            </p>
            <p >
              身体の不調はこの2つが大きな原因です。
            </p>
          </div>

          {/* Explanatory Paragraphs */}
          <div className="space-y-4 md:space-y-5 mb-6 md:mb-8">
            <p className="text-base md:text-lg lg:text-xl text-[#3d230b] leading-relaxed">
              日中の姿勢だけでなく、睡眠時の姿勢も大切です。睡眠姿勢は寝具によって決まります。その中で最も重要なのは枕です。
            </p>
            <p className="text-base md:text-lg lg:text-xl text-[#3d230b] leading-relaxed">
              どんな理想的な姿勢でも長時間同じ姿勢を続けてはいけません。同じ姿勢を維持すると、筋肉が硬くなって血流が悪くなります。
            </p>
            <p className=" text-base md:text-lg lg:text-xl text-[#3d230b] leading-relaxed font-medium">
              <span className=' bg-amber-200'>適度な回数の寝返りをうつことで血液やリンパ液などの流れを良くして疲労を回復します。</span>
            </p>
          </div>

        </div>

        {/* Bottom Section - Four Circular Diagrams */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {problems.map((problem) => (
            <div key={problem.id} className="flex flex-col">
              {/* Category Title */}
              <h3 className=" bg-[#ac9e4c] text-xl md:text-2xl lg:text-3xl font-bold text-[#3d230b] text-center mb-6 md:mb-8 mx-8 p-2 rounded-2xl">
                {problem.category}
              </h3>

              {/* Diagrams Grid */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                {problem.items.map((item) => (
                  <div key={item.id} className="flex flex-col items-center">
                    {/* Circular Diagram */}
                    <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-3 md:mb-4">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        fill
                        className="object-contain"
                        priority={item.id <= 2}
                      />
                    </div>

                    {/* Label */}
                    <p className="text-sm md:text-base lg:text-lg font-medium text-[#3d230b] text-center">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

