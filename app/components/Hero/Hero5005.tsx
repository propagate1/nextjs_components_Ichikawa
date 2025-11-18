'use client';
import Image from 'next/image';

export default function Hero5005() {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="relative w-full -mt-px z-30">
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            <div className="absolute left-0 top-0 w-full h-full opacity-60">
              <Image
                src="/img/Hero5000_Bg_Left.png"
                alt="Background Left"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="relative mx-auto" style={{ width: 'min(100vw, 700px)', maxWidth: '700px' }}>
            <div
              className="relative bg-white shadow-2xl p-8 md:p-12 lg:p-16 w-full"
              style={{
                borderRadius: '50%',
                aspectRatio: '1 / 1',
                minHeight: '420px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* メイン見出し - 「最大 1億円まで 調達可能!」 */}
              <div className="flex flex-col items-center justify-center mb-6 md:mb-8">
                <div className="flex items-baseline justify-center gap-1 md:gap-2 mb-2">
                  <span className="text-[#84c049] font-bold leading-none text-5xl md:text-6xl lg:text-7xl xl:text-7xl flex items-baseline">
                    遺品整理
                  </span>
                  <span className="text-black text-3xl md:text-4xl lg:text-5xl font-bold">で</span>
                </div>
                <span className="text-gray-800 text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold">
                  お悩み<span className="text-3xl md:text-4xl lg:text-5xl">の方に</span>
                </span>
              </div>

              {/* 赤いハイライトボックスとサービス名 */}
              <div className="flex flex-row items-center justify-center gap-2 md:gap-4 mb-6 md:mb-8">
                <div className=" bg-amber-600 text-white px-1 py-2 md:px-4  rounded-md">
                  <span className="text-[12px] md:text-lg lg:text-xl font-bold">
                    愛知
                  </span>
                </div>
                <div className=" bg-amber-600 text-white px-1 py-2 md:px-4  rounded-md">
                  <span className="text-[12px] md:text-lg lg:text-xl font-bold">
                    三重
                  </span>
                </div>
                <div className=" bg-amber-600 text-white px-1 py-2 md:px-4  rounded-md">
                  <span className="text-[12px] md:text-lg lg:text-xl font-bold">
                    岐阜
                  </span>
                </div>
                <div className=" bg-amber-600 text-white px-1 py-2 md:px-4  rounded-md">
                  <span className="text-[12px] md:text-lg lg:text-xl font-bold">
                    静岡
                  </span>
                </div>
                <span className="text-gray-800 text-base md:text-lg lg:text-xl font-semibold">
                  の<span className="text-[#84c049] text-lg md:text-2xl lg:text-3xl">遺品整理</span>
                </span>
              </div>

              {/* スローガン */}
              <div className="flex flex-col items-center justify-center mb-8 md:mb-10">
                <span className="text-black text-lg md:text-2xl lg:text-3xl font-bold mb-1 flex items-baseline">
                  <span >ミライル まごころサービス</span>
                  <span className=" text-base md:text-lg lg:text-xl">に</span>
                </span>
                <span className="text-black text-2xl md:text-3xl lg:text-4xl font-bold">
                  お任せください!
                </span>
              </div>
            </div>
            {/* 左中のバッジ */}
            <div
              className="absolute flex items-center justify-center bottom-0 -left-[70%] z-10 w-full h-3/5">
              <Image
                src="/img/Hero5005_Bg_1.png"
                alt="Background Left"
                fill
                className=" object-contain object-center"
                priority
              />
            </div>

            {/* 右中のバッジ */}
            <div
              className="absolute flex items-center justify-center bottom-0 -right-[70%] z-10 w-full h-3/5">
              <Image
                src="/img/Hero5005_Bg_2.png"
                alt="Background Left"
                fill
                className=" object-contain object-center"
                priority
              />
            </div>
            {/* 左のバッジ */}
            <div
              className="absolute left-[10%] -bottom-[30px]"
              style={{
                transform: 'translateX(-50%)',
                zIndex: 30,
              }}
            >

              <div className="relative flex flex-col items-center justify-center"
                style={{
                  width: 'clamp(120px, 24vw, 250px)',
                  height: 'clamp(80px, 18vw, 180px)',
                }}>
                <Image
                  src="/img/Hero5005_Icon_2.png"
                  alt="Background Left"
                  fill
                  className=" object-cover object-center"
                  priority
                />

                {/* テキスト */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-1 lg:px-2" style={{ paddingTop: '8%', paddingBottom: '8%' }}>
                  {/* テキスト */}
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-1 lg:px-4 text-center tracking-widest" style={{ paddingTop: '20%', paddingBottom: '8%' }}>
                    <span className="text-green-700 font-bold text-[12px] md:text-xl lg:text-2xl">専門の<br />遺品整理士
                      <span className=" text-black tracking-tight">が対応</span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* 中央のバッジ */}
            <div
              className="absolute"
              style={{
                bottom: '-30px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 30,
              }}
            >
              <div
                style={{
                  width: 'clamp(120px, 24vw, 250px)',
                  height: 'clamp(80px, 18vw, 180px)',
                }}>
                <Image
                  src="/img/Hero5005_Icon_2.png"
                  alt="Background Left"
                  fill
                  className=" object-cover object-center"
                  priority
                />
                {/* テキスト */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-1 lg:px-4" style={{ paddingTop: '8%', paddingBottom: '8%' }}>
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-1 lg:px-4 text-center" style={{ paddingTop: '20%', paddingBottom: '8%' }}>
                    <span className="text-black font-bold text-[12px] md:text-xl lg:text-2xl tracking-none lg:tracking-widest">お見積もり・ キャンセル
                      <span className=" text-green-700">無料</span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* 右のバッジ */}
            <div
              className="absolute"
              style={{
                bottom: '-30px',
                right: '10%',
                transform: 'translateX(50%)',
                zIndex: 30,
              }}
            >
              <div
                style={{
                  width: 'clamp(120px, 24vw, 250px)',
                  height: 'clamp(80px, 18vw, 180px)',
                }}>
                <Image
                  src="/img/Hero5005_Icon_2.png"
                  alt="Background Left"
                  fill
                  className=" object-cover object-center"
                  priority
                />
                {/* テキスト */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-1 lg:px-4" style={{ paddingTop: '20%', paddingBottom: '8%' }}>
                  <span className="text-black font-bold text-[12px] md:text-xl lg:text-2xl tracking-widest">追加費用は<br /><span className=" text-green-700">一切不要</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 緑のバンド */}
      <div className="relative w-full bg-[#77be39] py-8 md:py-12 overflow-visible z-0 -mt-[1px]">
        {/* 女性の画像 - 中央円の右下、緑のエリア内に配置 */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative">
          <div className="flex items-center justify-center l gap-4">
            {/* 上部セクション - 黄色いバナーと電話番号 */}
            <div className="flex flex-row items-center justify-center gap- md:gap-6 relative">
              <div className="w-8 h-12 lg:w-15 lg:h-30 p-4 relative">
                <Image
                  src="/img/Hero5005_Icon_4.png"
                  alt="Business Woman"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
              {/* 左側: 黄色いバナー（吹き出し風/矢印風） */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 lg:w-30 lg:h-30 p-4 relative">
                  <Image
                    src="/img/Hero5005_Icon_3.png"
                    alt="Business Woman"
                    fill
                    className="object-contain object-bottom"
                    priority
                  />
                </div>
                <div className="absolute top-0 left-0  z-10 w-full h-full flex flex-col items-center justify-center text-white px-4 text-center tracking-widest" style={{ paddingTop: '20%', paddingBottom: '8%' }}>
                  <span className=" font-bold text-[4px] lg:text-[12px]">お客様満足度<br />
                    <span className="text-[12px] md:text-3xl lg:text-5xl">97</span><span className=" text-[8px] lg:text-lg">.3%</span></span>
                </div>
              </div>

              {/* 右側: 電話番号と受付時間 */}
              <div className="flex flex-row items-center justify-center">
                <div className=" text-md md:text-2xl lg:text-3xl font-bold transition-colors md:ml-12"
                >
                  <span className='py-4 text-white'>
                    WORKRECORD<br /><span className="text-[#f7fd20]">
                      年間ご相談実績
                    </span>
                  </span>

                </div>
                {/* 電話番号 */}

                <div className="text-[#f7fd20] text-xl md:text-4xl lg:text-5xl font-bold flex flex-row ml-2 md:ml-12"
                >
                  <p className='transition-colors scale-y-150 py-4'>
                    2,000
                  </p>
                  {/* 受付時間 */}
                  <div className="flex flex-row items-center justify-end text-left">
                    <p className="text-[8px] md:text-lg font-medium">
                      件<br />以上
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-8 h-12 lg:w-15 lg:h-30 relative">
                <Image
                  src="/img/Hero5005_Icon_5.png"
                  alt="Business Woman"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-2 -right-20 lg:-right-3">
        <div className="relative w-48 h-60 md:w-72 lg:w-80">
          <Image
            src="/img/Hero5005_Icon_1.png"
            alt="Business Woman"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </div >

  );
}

