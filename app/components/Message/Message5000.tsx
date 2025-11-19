'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export default function Message5000() {
  const [isBiographyVisible, setIsBiographyVisible] = useState(false);

  const toggleBiography = () => {
    setIsBiographyVisible(!isBiographyVisible);
  };

  return (
    <div className="m-12 rounded-4xl bg-[#fcf8f4] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 md:mb-16">
          {/* Title */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-950 mb-2">
              獣医師や専門家からの推薦コメント
            </h2>
            <div className="h-px bg-amber-950 w-full md:w-auto"></div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2 text-amber-950">
            <button className="p-1 hover:opacity-70 transition-opacity">
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <span className="text-base md:text-lg font-medium">01</span>
            <div className="h-px bg-amber-950 w-4"></div>
            <span className="text-base md:text-lg font-medium">03</span>
            <button className="p-1 hover:opacity-70 transition-opacity">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Main Content - Two Columns */}
        <div className="flex flex-col lg:flex-row w-full gap-8 md:gap-12 lg:gap-16">
          {/* Left Column - Expert Profile & Recommendation */}
          <div className="w-[100%] lg:w-[70%] flex flex-row gap-2 md:gap-20 relative">
            {/* Expert Image & Info */}
            <div className="flex flex-col items-center lg:items-start flex-shrink-0">
              {/* Circular Avatar */}
              <div className="relative w-8 h-8 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden mb-4 md:mb-6">
                <Image
                  src="/img/Message5000_Avatar_1.jpg"
                  alt="小林泰男"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Vertical Text - Name, Title, Affiliation */}
              <div className="flex flex-row gap-1 md:gap-4 items-start relative m-auto">
                {/* Name */}
                <div className="[writing-mode:vertical-rl]  [text-orientation:upright]">
                  <p className="text-sm md:text-2xl lg:text-3xl font-bold text-amber-950 tracking-[4px]">
                    小林泰男 名誉教授
                  </p>
                </div>

                {/* Affiliation */}
                <div className="[writing-mode:vertical-rl]  [text-orientation:upright]">
                  <p className="text-xs md:text-sm lg:text-base text-amber-950 tracking-[4px]">
                    北海道大学 動物機能栄養学研究室
                  </p>
                </div>
              </div>
            </div>

            {/* Recommendation Text */}
            <div className=" flex flex-col">

              {/* Large Quotation Marks - positioned to the right of vertical text */}
              <div>
                <span className="text-5xl md:text-8xl lg:text-9xl text-gray-300 font-serif leading-none opacity-50">
                  ``
                </span>
              </div>
              <p className=" px-0 md:px-[12px] text-[12px] md:text-base lg:text-lg lg:font-bold text-amber-950 leading-[24px] md:leading-[32px]">
                准教授の飼う2匹への給与&当ラボ3名で食べてさせていただきました。<br />
                ココグルメは栄養バランスに優れているのはもちろんのこと、人の食品と同じ基準・設備で作られているので、安全安心です。とくに「食いつきの良さ」は特筆ものです。自分も「試食」してみて納得でした。
              </p>
            </div>
          </div>
          <button
            onClick={toggleBiography}
            className="md:hidden flex justify-end"
          >
            {isBiographyVisible ? (
              <div className="w-10 h-10 md:w-12 md:h-12  rounded-full flex items-center justify-center hover:bg-amber-800 transition-colors flex-shrink-0 border-2 border-amber-900 hover:border-amber-800">
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-amber-900 hover:text-white" />
              </div>
            ) : (
              <div className="w-10 h-10 md:w-12 md:h-12  rounded-full flex items-center justify-center hover:bg-amber-800 transition-colors flex-shrink-0 border-2 border-amber-900 hover:border-amber-800">
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-amber-900 hover:text-white" />
              </div>
            )}

          </button>
          {/* Right Column - Biography & Research */}
          <div className={`w-[100%] lg:w-[30%] space-y-6 md:space-y-8 ${!isBiographyVisible ? 'hidden' : 'block'} md:block`}>
            {/* Biography Header */}
            <div>
              <div className="h-px bg-amber-950 mb-3 md:mb-4"></div>
              <h3 className="text-lg md:text-xl font-semibold text-amber-950">
                Biography
              </h3>
            </div>

            {/* Achievements List */}
            <div className="space-y-3 md:space-y-4 text-sm md:text-base">
              <p className=" text-amber-950">
                1991年 北海道大学 農学博士
              </p>
              <p className=" text-amber-950">
                2005年 日本畜産学会 日本畜産学会賞
              </p>
              <p className=" text-amber-950">
                2011年 日本畜産学会 ASJ優秀論文賞
              </p>
            </div>

            {/* Research Description */}
            <div className="space-y-4 md:space-y-5 text-sm md:text-base">
              <p className=" text-amber-950 leading-relaxed">
                北海道大学にて長年家畜の飼料に関わる研究を続けている。飼料の組み合わせや添加物の開発・共生微生物の活性化などを通し、お腹の中に秘められた力を最大限に引き出そうというもので、動物個体から細胞・DNAまで幅広い視野で研究を展開する動物機能栄養学研究室にて教授を務める。
              </p>

              <p className=" text-amber-950 leading-relaxed">
                腸内細菌の健全化は、家畜だけではなく、ペットにおいても重要で、国内外で盛んに研究が行われている分野。
              </p>
            </div>

            {/* Link to Further Information */}
            <div className="pt-2 text-sm md:text-base">
              <a
                href="#"
                className="align-baseline inline-flex items-center gap-2  text-amber-950 hover:text-gray-600 transition-colors group hover:underline"
              >
                <span>
                  小林教授の研究分野である「腸内菌叢」とココグルメの関係について解説いただきました
                </span>
                <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center group-hover:bg-amber-950 transition-colors">
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4 text-amber-950 group-hover:text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

