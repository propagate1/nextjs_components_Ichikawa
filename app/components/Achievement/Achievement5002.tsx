'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Achievement5002() {
  const [expandedSection, setExpandedSection] = useState<number | null>(1);

  const sections = [
    {
      id: 1,
      title: '自習時間に活用',
      icon: '/img/Achievement5002_Icon_1.png',
      timelineIcon: '/img/Achievement5002_Timeline_1.png',
      effect: '「分からない」をそのままにせず、',
      effect1: '「分かる量」が増えたことで成績がアップ!',
      testimonial: {
        text: 'いつでも簡単に質問できる安心感があります! 自分は先生に質問するのが苦手なので、チャットで聞けるのが嬉しいです!',
        image: '/img/Achievement5002_Avatar_1.png',
      },
    },
    {
      id: 2,
      title: '映像授業で活用',
      icon: '/img/Achievement5002_Icon_2.png',
      timelineIcon: '/img/Achievement5002_Timeline_2.png',
      effect: '効率的な学習が実現したことにより、',
      effect1: '学習速度が1.5倍に!',
      testimonial: {
        text: '分からないところは質問して効率的に勉強できるようになったので、学習進度がすごく早くなりました。予習や復習にも活用できるので、本当に便利なサービスだと感じています。',
        image: '/img/Achievement5002_Avatar_2.png',
      },
    },
    {
      id: 3,
      title: 'デジタルドリルで活用',
      icon: '/img/Achievement5002_Icon_3.png',
      timelineIcon: '/img/Achievement5002_Timeline_3.png',
      effect: 'いつでもどこでも質問ができるため、',
      effect1: '自学自習の質が向上!',
      testimonial: {
        text: 'ずっと悩んでいた問題が15分で解決できました!テスト前に先生が忙しそうなときもあったので、今は自由に質問できて安心です!',
        image: '/img/Achievement5002_Avatar_3.png',
      },
    },
  ];

  const toggleSection = (id: number) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="w-full relative py-8 md:py-12 lg:py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/img/Achievement5002_Bg_1.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          {/* Three Elements Side by Side */}
          <div className="flex flex-row items-end justify-end mt-40 md:mt-0">
            <div className=" flex flex-col justify-end w-full md:w-1/3  md:h-32 lg:h-52 gap-4">
              {/* CASE STUDY & EFFECT Title */}
              <div className="relative w-full h-16 md:h-20 lg:h-24">
                <Image
                  src="/img/Achievement5002_Letter_1.png"
                  alt="CASE STUDY & EFFECT"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              {/* Japanese Subtitle */}
              <div>
                <h2 className="text-left text-xl md:text-2xl lg:text-3xl font-semibold text-black">
                  活用事例と効果
                </h2>
              </div>
            </div>
            {/* Icon 1 */}
            <div className="relative w-1/2 justify-end md:w-1/5 h-32 md:h-40 lg:h-48">
              <Image
                src="/img/Achievement5002_Icon_1.png"
                alt="Icon 1"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            {/* Icon 2 */}
            <div className="hidden md:block relative w-full md:w-8/15 h-32 md:h-60 lg:h-100">
              <Image
                src="/img/Achievement5002_Icon_2.png"
                alt="Icon 2"
                fill
                className="object-contain object-center"
                priority
              />
            </div>

            <div className="block md:hidden absolute w-full h-40 -top-40 -right-20">
              <Image
                src="/img/Achievement5002_Icon_2.png"
                alt="Icon 2"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </div>

        </div>

        {/* Accordion Sections */}
        {/* Mobile Layout: Stacked */}
        <div className="md:hidden space-y-4 md:space-y-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-center p-4 md:p-6 bg-amber-400 hover:bg-maber-600 transition-colors relative"
              >
                <div className="flex gap-3">
                  <h3 className="text-white text-lg font-bold">
                    {section.title}
                  </h3>
                </div>
                {expandedSection === section.id ? (
                  <ChevronUp className=" absolute right-5 w-5 h-5 text-white " />
                ) : (
                  <ChevronDown className=" absolute right-5 w-5 h-5  text-white" />
                )}
              </button>

              {/* Accordion Content - Below on Mobile */}
              {expandedSection === section.id && (
                <div className="p-4  bg-amber-100 rounded-b-xl">
                  {/* Timeline Section */}
                  <div className="">
                    <div className="relative w-full h-20 mb-10">
                      {/* Timeline Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={section.timelineIcon}
                          alt="Timeline"
                          fill
                          className="object-contain object-top"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Introduction Effect Box */}
                  <div className=" relative mb-4">
                    {/* Grade Badge */}
                    <div className="absolute -top-9 left-0 bg-orange-400 text-white px-4 py-2 rounded-t-xl">
                      <p className="text-sm font-semibold">
                        導入効果
                      </p>
                    </div>
                    <div className="bg-orange-50 border-4 border-orange-400 rounded-b-lg rounded-tr-lg p-4">
                      <p className="text-black text-sm font-semibold leading-relaxed">
                        {section.effect}{section.effect}{section.effect1 && (
                          <span className="text-orange-400 font-bold border-b-4 border-amber-400 px-1 text-base">
                            {section.effect1}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Student's Voice Section */}
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      {/* Student Profile Picture */}
                      <div className=' flex flex-col items-center justify-center gap-1'>
                        <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                          <Image
                            src={section.testimonial.image}
                            alt="Student"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-gray-700 text-xs  font-semibold">
                          生徒の声
                        </p>
                      </div>
                      {/* Testimonial Text */}
                      <div className="flex-1  bg-white rounded-2xl p-3 shadow-sm">
                        <p className="text-black text-xs leading-relaxed">
                          {section.testimonial.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Layout: Buttons on Left, Content on Right */}
        <div className="hidden md:flex md:gap-20">
          {/* Left Side: Accordion Buttons */}
          <div className="md:w-1/4 lg:w-1/3 flex-shrink-0 space-y-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => toggleSection(section.id)}
                className={`w-full gap-4 p-4 md:p-3 lg:p-6 rounded-lg transition-colors ${expandedSection === section.id
                  ? 'bg-amber-500 text-white'
                  : 'bg-amber-100 text-orange-800 hover:bg-amber-300'
                  }`}
              >
                <h3 className=" text-lg md:text-sm lg:text-2xl font-bold ">
                  {section.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Right Side: Accordion Content */}
          <div className="flex-1">
            {expandedSection && (
              <div className=" bg-amber-100 rounded-xl shadow-md p-6">
                {(() => {
                  const section = sections.find((s) => s.id === expandedSection);
                  if (!section) return null;
                  return (
                    <div>
                      {/* Timeline Section */}
                      <div className="">
                        <div className="relative w-full h-40 lg:h-48">
                          {/* Timeline Image */}
                          <div className="relative w-full h-full">
                            <Image
                              src={section.timelineIcon}
                              alt="Timeline"
                              fill
                              className="object-contain object-top"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Introduction Effect Box */}
                      <div className=" relative">
                        {/* Grade Badge */}
                        <div className="absolute -top-10 left-0 bg-orange-400 text-white px-4 py-2 rounded-t-xl">
                          <p className="text-lg md:text-md lg:text-xl font-semibold">
                            導入効果
                          </p>
                        </div>
                        <div className="bg-orange-50 border-6 border-orange-400 rounded-b-lg rounded-tr-lg p-4 md:p-6">
                          <span className="text-black text-base md:text-md lg:text-xl font-semibold leading-relaxed not-last:">
                            {section.effect}{section.effect1 && (
                              <span className="text-orange-400 font-bold border-b-4 border-amber-400 px-1 text-base lg:text-lg ">
                                {section.effect1}
                              </span>
                            )}
                          </span>

                        </div>
                      </div>

                      {/* Student's Voice Section */}
                      <div className="p-4">
                        <div className="flex items-center justify-between gap-3 md:gap-12">
                          {/* Student Profile Picture */}
                          <div className=' flex flex-col items-center justify-center gap-1'>
                            <div className="relative w-16 h-16 md:w-16 md:h-16 lg:w-24 lg:h-24 flex-shrink-0 rounded-full overflow-hidden">
                              <Image
                                src={section.testimonial.image}
                                alt="Student"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <p className="text-gray-700 text-xs md:text-sm font-semibold">
                              生徒の声
                            </p>
                          </div>
                          {/* Testimonial Text */}
                          <div className="flex-1  bg-white rounded-2xl p-3 md:p-4 shadow-sm">
                            <p className="text-black text-xs md:text-sm lg:text-md leading-relaxed">
                              {section.testimonial.text}
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </div>

        {/* icon 5 */}
        <div className="absolute bottom-[95%] left-0 md:-bottom-30 md:-left-10 lg:-left-15 xl:-left-30 w-40 h-40 md:w-80 md:h-80">
          <Image
            src="/img/Achievement5002_Icon_5.png"
            alt="Background"
            fill
            className="object-contain object-center animate-bounce [animation-duration:10s] [animation-timing-function:ease-in-out]"
            priority
          />
        </div>

      </div>
    </div>
  );
}

