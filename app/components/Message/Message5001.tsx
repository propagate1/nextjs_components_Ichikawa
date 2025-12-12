'use client';
import Image from 'next/image';

export default function Message5001() {
  return (
    <div className="w-full bg-[#f5f5f0] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-16">
          {/* Left Side - Person with Pillow Image */}
          <div className="w-full lg:w-1/3 flex-shrink-0">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <Image
                src="/img/Message5001_Bg_1.png"
                alt="Developer holding pillow"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full lg:w-3/5 flex flex-col">
            {/* Top Banner - "開発者からのメッセージ" */}
            <div className="relative mb-6 md:mb-8">
              <div className="bg-orange-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full inline-block relative overflow-visible">
                <span className="text-sm md:text-base lg:text-lg font-bold relative z-10">
                  開発者からのメッセージ
                </span>
                {/* Radiating lines effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-orange-400 rounded-full opacity-60"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-orange-300 rounded-full opacity-40"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-orange-200 rounded-full opacity-30"></div>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-6 md:mb-8 leading-tight">
              私自身も「枕難民」のひとりでした。
            </h1>

            {/* Body Text */}
            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              {/* First Paragraph */}
              <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed">
                交通事故でむち打ちを患い、朝起きた時の首の痛みに悩まされていました。様々な枕を試し、オーダーメイドの枕を作りに行ったこともあります。自分に合う枕を探し続ける「枕難民」の一人でした。<br/><span className=' bg-yellow-300'>自然な立ち姿勢をそのまま横にした姿勢が理想的な睡眠姿勢である。寝具業界のこの間違った考えに納得ができませんでした。</span>試行錯誤を重ね、「自分に合う枕がなければ、自分で作るしかない」と考え、現在の枕が完成しました。<br/>本当に自分に合ったオーダーメイドの枕をお望みの方は、ぜひ私にお任せください。最後まで責任を持って、あなたの大切な枕を作らせていただきます。
              </p>
            </div>

            {/* Signature */}
            <div className=" flex flex-row items-end">
              <p className="text-sm md:text-base lg:text-lg text-black leading-relaxed px-1">
                整体や種代表 オーダーメイド祝/整体技
              </p>
              <p className="text-lg md:text-xl lg:text-2xl font-bold text-black mt-2">
                水口雅喜
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

