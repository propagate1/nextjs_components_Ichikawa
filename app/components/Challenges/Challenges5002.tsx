'use client';
import { desc } from 'framer-motion/client';
import Image from 'next/image';

export default function Challenges5002() {
  const symptoms = [
    {
      id: 1,
      number: '1',
      title: '肩こり・頭痛',
      description:
        'やわらかい枕、高さがあっていない枕、睡眠中に形が変わる枕は頭が安定せず、首を一晩中いじめてしまいます。',
      description1:
      '睡眠中に首を休めるためには、理想的な首の角度にして頭をしっかり支える必要があります。',
      image: '/img/Challenges5002_Bg_1.PNG',
      imagePosition: 'left' as const,
    },
    {
      id: 2,
      number: '2',
      title: '腰痛',
      description:
        '睡眠中の姿勢が悪かったり、寝返りがうまくうてないと腰痛の原因になります。',
      description1:
      '適正な枕を作り、正しい睡眠姿勢にすることで寝返りがうちやすくなります。',
      image: '/img/Challenges5002_Bg_2.PNG',
      imagePosition: 'right' as const,
    },
    {
      id: 3,
      number: '3',
      title: '不眠症',
      description:
        '枕の高さが適正でないと脊椎が緊張し、副交感神経が優位になりません。そのため寝つきが悪くなり、夜中に目が覚めやすくなります。',
      image: '/img/Challenges5002_Bg_3.PNG',
      description1:
      '適正な枕を使うことでリラックスでき、スッキリ目覚めることができます。',
      imagePosition: 'left' as const,
    },
    {
      id: 4,
      number: '4',
      title: 'いびき・無呼吸',
      description:
        '睡眠中に気道(空気の通り道)が狭くなるといびきをかきます。枕が高すぎても低すぎてもいびきや睡眠時無呼吸症候群の原因になります。',
      description1:
      '気道を狭めないためには適正な高さの枕が必要です。',
      image: '/img/Challenges5002_Bg_4.PNG',
      imagePosition: 'right' as const,
    },
  ];

  return (
    <div className="w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]  bg-[size:10px_10px] py-12 md:py-16 lg:py-20 font-['Yu_Mincho','Hiragino_Mincho_ProN','MS_PMincho',serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        {/* Symptoms List */}
        <div className="space-y-6">
          {symptoms.map((symptom) => (
            <div
              key={symptom.id}
              className={`flex flex-col ${symptom.imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center gap-6 md:gap-8 lg:gap-12`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <div className="relative w-full aspect-[2/1] rounded-lg md:rounded-xl overflow-hidden">
                  <Image
                    src={symptom.image}
                    alt={`症状 ${symptom.number} ${symptom.title}`}
                    fill
                    className="object-contain"
                    priority={symptom.id <= 2}
                  />
                </div>
              </div>

              {/* Text Content Section */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                {/* Heading */}
                <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#484944] mb-4 md:mb-6 leading-tight">
                  <span className=' border-2'>症</span><span className=' border-2'>状</span><span className=' text-center border-2 border-[#484944] text-red-600'> {symptom.number}</span> <span className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>{symptom.title}</span>
                </h2>
                <div className=' border-t-2 border-dotted border-amber-800 mb-2'>
                </div>
                {/* Description */}
                <p className="text-base md:text-lg lg:text-xl text-[#484944] leading-relaxed">
                  <span>{symptom.description}</span>
                  <span className=' bg-[#fbeca9]'>{symptom.description1}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

