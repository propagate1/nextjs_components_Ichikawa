'use client';
import Image from 'next/image';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function Flow5000() {
  const steps = [
    {
      id: 1,
      number: '01',
      title: '教科と指導方法を選ぶ',
      bgImage: '/img/Flow5000_Bg_1.jpg',
      alt: 'Step 1: Choose subject and teaching method',
    },
    {
      id: 2,
      number: '02',
      title: '質問&マッチング',
      bgImage: '/img/Flow5000_Bg_2.jpg',
      alt: 'Step 2: Question & Matching',
    },
    {
      id: 3,
      number: '03',
      title: '指導開始',
      bgImage: '/img/Flow5000_Bg_3.jpg',
      alt: 'Step 3: Start instruction',
    },
  ];

  return (
    <div className="w-full  py-8 md:py-12 lg:py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className=' w-full bg-gradient-to-b from-orange-400 via-orange-300 to-yellow-300 rounded-2xl p-6'>
          {/* Header */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
              <span className=' text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>3</span>つのステップで
              <br className="block md:hidden" />
              すぐに使える!
            </h1>
          </div>

          {/* Steps Section */}
          <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-3 w-full gap-4">
            {steps.map((step, index) => (
              <div key={step.id}>
                {/* Desktop Layout: Horizontal with Arrow */}
                <div className="relative">
                  {/* Step Card */}
                  <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden z-0">
                    {/* Step Image */}
                    <div className="relative w-full h-40 lg:h-52 xl:h-70">
                      <Image
                        src={step.bgImage}
                        alt={step.alt}
                        fill
                        className="object-cover object-center"
                        priority={index === 0}
                      />
                    </div>
                    {/* Step Number and Title */}
                    <div className="bg-amber-200 px-6 py-4">
                      <div className="flex flex-col items-center">
                        <span className="text-orange-500 italic text-xl lg:text-2xl font-bold">
                          STEP <span className=' text-2xl lg:text-3xl'>{step.number}</span>
                        </span>
                        <h2 className="text-black text-md lg:text-xl font-bold">
                          {step.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Separator (except for last step) */}
                  {index < steps.length - 1 && (
                    <div className=" absolute top-[95%] right-[43%] md:-right-7 md:top-[40%] text-white bg-amber-500 rounded-full p-1 z-20">
                      <ChevronRight className=" hidden md:block lg:w-10 lg:h-10" />
                      <ChevronDown className=" block md:hidden w-8 h-8" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

