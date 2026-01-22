'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Features5010() {
  const [activeTab, setActiveTab] = useState<number>(1);

  const tabs = [
    {
      id: 1,
      title: '解説だけ',
      subtitle: 'Explanation Only',
      bgImage: '/img/Features5010_Bg_1.png',
      checks: [
        'まずは解説だけ送ってほしい',
        '講師とのやり取りは必要ない',
      ],
      description: [
        'このような場合、指導方法は「解説だけ」をお選びください!',
        '講師がチャットで解説をお送りいたします。',
        '解説に関して質問があるときは、やり取りに切り替えていただくことも可能です!',
      ],
    },
    {
      id: 2,
      title: 'やり取り',
      subtitle: 'Interaction',
      bgImage: '/img/Features5010_Bg_2.png',
      checks: [
        '解説のみでは解決できそうにない',
        '自分のつまずきを見つけてもらいたい',
      ],
      description: [
        'このような場合、指導方法は「やり取りしながら」をお選びください!',
        'チャットでやり取りをしながら、つまずきに合わせて解説します。',
      ],
    },
    {
      id: 3,
      title: 'オンライン通話',
      subtitle: 'Online Call',
      bgImage: '/img/Features5010_Bg_3.png',
      checks: [
        'チャットでは理解できそうにない',
        '授業のように音声で教えてほしい',
      ],
      description: [
        'このような場合、指導方法は「オンライン通話」をお選びください!',
        'オンラインホワイトボードと音声を使って解説します。返信はチャットまたは音声から選べるので安心してご利用いただけます!',
      ],
    },
  ];

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <div className="w-full bg-orange-100 py-8 md:py-12 lg:py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Tab Navigation */}
        <div className="flex flex-row gap-2 md:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full px-2 md:px-8 lg:px-12 py-3 md:py-6 rounded-t-lg font-bold text-lg md:text-xl lg:text-2xl transition-all ${
                activeTab === tab.id
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-white text-orange-500 hover:bg-orange-50'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 bg-[#fdf8f0] rounded-b-xl p-1 md:p-8">
          {/* Left Side: Text Content */}
          <div className="flex-1 lg:w-1/2 m-6">
            {/* Tab Title */}
            <div className="mb-4 md:mb-6">
              <div className="inline-block bg-orange-500 text-white px-4 md:px-6 py-1 rounded-full mb-3 md:mb-4">
                <p className="text-sm md:text-base lg:text-lg font-semibold">
                  {currentTab.title}
                </p>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {currentTab.checks.map((check, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="relative w-6 h-6 md:w-7 md:h-7 flex-shrink-0">
                    <Image
                      src="/img/Features5010_Icon_1.png"
                      alt="Checkmark"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-black text-lg md:text-xl lg:text-2xl font-bold">
                    {check}
                  </p>
                </div>
              ))}
            </div>

            {/* Description Text */}
            <div className="space-y-3 md:space-y-4">
              {currentTab.description.map((desc, index) => (
                <p
                  key={index}
                  className="text-gray-800 text-sm md:text-base lg:text-lg leading-relaxed font-semibold"
                >
                  {desc.includes('「') ? (
                    <>
                      {desc.split('「')[0]}
                      <span className=" border-b-4 border-orange-500 font-semibold">
                        「{desc.match(/「([^」]+)」/)?.[1]}」
                      </span>
                      {desc.split('」')[1]}
                    </>
                  ) : (
                    desc
                  )}
                </p>
              ))}
            </div>
          </div>

          {/* Right Side: Background Image */}
          <div className="flex-1 lg:w-1/2">
            <div className="relative w-full h-80 md:h-100 lg:h-120 overflow-hidden">
              <Image
                src={currentTab.bgImage}
                alt={currentTab.title}
                fill
                className="object-contain object-center"
                priority={activeTab === currentTab.id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

